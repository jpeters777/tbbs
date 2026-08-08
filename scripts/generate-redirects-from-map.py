#!/usr/bin/env python3
"""Regenerate src/redirects/legacy-redirects.json from TBBS_Redirect_Map.xlsx."""

from __future__ import annotations

import json
import sys
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_XLSX = Path.home() / "Desktop" / "TBBS_Redirect_Map.xlsx"
OUT_PATH = ROOT / "src" / "redirects" / "legacy-redirects.json"

DEST_ALIASES = {
    "/arm-lipo-360°-/-arm-lift": "/arm-lipo-360-arm-lift",
    "/arm-lipo-360°-/arm-lift": "/arm-lipo-360-arm-lift",
    "/female-b&a-gallery": "/female-ba-gallery",
}


def normalize_dest(path: str) -> str:
    return DEST_ALIASES.get(unquote(path), unquote(path))


def read_sheet_rows(z: zipfile.ZipFile, sheet_path: str) -> list[list[str]]:
    sns = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
    shared: list[str] = []
    if "xl/sharedStrings.xml" in z.namelist():
        for si in ET.fromstring(z.read("xl/sharedStrings.xml")).findall("m:si", sns):
            shared.append("".join((t.text or "") for t in si.findall(".//m:t", sns)))

    def col_num(col: str) -> int:
        num = 0
        for ch in col:
            num = num * 26 + ord(ch) - 64
        return num

    def num_col(num: int) -> str:
        col = ""
        while num:
            num, rem = divmod(num - 1, 26)
            col = chr(65 + rem) + col
        return col

    sheet = ET.fromstring(z.read(sheet_path))
    rows: list[list[str]] = []
    for row in sheet.findall("m:sheetData/m:row", sns):
        row_map: dict[str, str] = {}
        for cell in row.findall("m:c", sns):
            ref = cell.get("r", "")
            col = "".join(ch for ch in ref if ch.isalpha())
            value = cell.find("m:v", sns)
            if value is None:
                val = ""
            elif cell.get("t") == "s":
                val = shared[int(value.text)]
            else:
                val = value.text or ""
            row_map[col] = val
        if not row_map:
            continue
        max_i = max(col_num(c) for c in row_map)
        rows.append([row_map.get(num_col(i), "") for i in range(1, max_i + 1)])
    return rows


def load_redirects(xlsx_path: Path) -> list[dict[str, object]]:
    with zipfile.ZipFile(xlsx_path) as z:
        sns = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
        wb = ET.fromstring(z.read("xl/workbook.xml"))
        rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
        rns = {"m": "http://schemas.openxmlformats.org/package/2006/relationships"}
        rid_to_target = {
            rel.get("Id"): rel.get("Target").lstrip("/")
            for rel in rels.findall("m:Relationship", rns)
        }
        sheets = {
            sheet.get("name"): rid_to_target[sheet.get("{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id")]
            for sheet in wb.findall("m:sheets/m:sheet", sns)
        }
        rows = read_sheet_rows(z, sheets["All Redirects"])

    header_idx = next(i for i, row in enumerate(rows) if row and row[0] == "#" and len(row) > 1 and row[1] == "Old URL")
    redirects: list[dict[str, object]] = []
    for row in rows[header_idx + 1 :]:
        if len(row) < 3 or not row[1].startswith("http"):
            continue
        source = urlparse(row[1]).path or "/"
        destination = normalize_dest(urlparse(row[2]).path or "/")
        if source == destination:
            continue
        redirects.append({"source": source, "destination": destination, "permanent": True})

    redirects.sort(key=lambda item: str(item["source"]))
    return redirects


def main() -> None:
    xlsx_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_XLSX
    if not xlsx_path.exists():
        raise SystemExit(f"Missing workbook: {xlsx_path}")

    redirects = load_redirects(xlsx_path)
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(redirects, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(redirects)} redirects to {OUT_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
