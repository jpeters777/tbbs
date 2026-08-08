import type { Metadata } from "next";
import { PageView } from "@/components/PageView";
import { getHomePage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tampa Bay Body Sculpting | Cosmetic Surgery, Lipo 360 & Tummy Tuck",
  description:
    "Considering cosmetic surgery in Tampa? Explore Lipo 360, tummy tuck, breast surgery, body contouring, and male body sculpting. Schedule your free consultation.",
};

export default function HomePage() {
  const page = getHomePage();
  return <PageView page={page} />;
}
