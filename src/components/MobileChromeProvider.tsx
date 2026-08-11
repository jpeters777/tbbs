"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type MobileChromeContextValue = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  cookieVisible: boolean;
  setCookieVisible: (visible: boolean) => void;
  /** Bottom sticky chrome should hide while menu or cookie owns the screen. */
  suppressStickyBar: boolean;
};

const MobileChromeContext = createContext<MobileChromeContextValue | null>(null);

export function MobileChromeProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpenState] = useState(false);
  const [cookieVisible, setCookieVisibleState] = useState(false);

  const setMenuOpen = useCallback((open: boolean) => {
    setMenuOpenState(open);
  }, []);

  const setCookieVisible = useCallback((visible: boolean) => {
    setCookieVisibleState(visible);
  }, []);

  const value = useMemo(
    () => ({
      menuOpen,
      setMenuOpen,
      cookieVisible,
      setCookieVisible,
      suppressStickyBar: menuOpen || cookieVisible,
    }),
    [menuOpen, setMenuOpen, cookieVisible, setCookieVisible]
  );

  return <MobileChromeContext.Provider value={value}>{children}</MobileChromeContext.Provider>;
}

export function useMobileChrome() {
  const ctx = useContext(MobileChromeContext);
  if (!ctx) {
    return {
      menuOpen: false,
      setMenuOpen: () => undefined,
      cookieVisible: false,
      setCookieVisible: () => undefined,
      suppressStickyBar: false,
    } satisfies MobileChromeContextValue;
  }
  return ctx;
}
