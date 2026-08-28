import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Backup gear, Bose L1, Sennheiser, playlists, deposits, and service area for DJ Jeffery Isaac weddings in Warren and Youngstown.",
};

export default function FaqPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Before you book</p>
          <h1>The questions couples actually ask.</h1>
          <p className="lede">
            Gear, playlists, deposits, piano, and the map. Pricing stays on the
            call — check my date when you are ready for numbers.
          </p>
        </div>
      </header>
      <section className="section section-dark">
        <div className="wrap" style={{ maxWidth: "48rem" }}>
          <FaqList />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
