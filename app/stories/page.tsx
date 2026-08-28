import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FilmCard } from "@/components/FilmCard";
import { Quote } from "@/components/Quote";
import { films, quotes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Real names from DJ Jeffery Isaac weddings — Maria Panning, Deb Hall, Valarie Mountfort, Chelsea Heilman, Tessa Parker, and four couple films.",
};

export default function StoriesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Proof</p>
          <h1>What they said after the last song.</h1>
          <p className="lede">
            These names already exist. I am not inventing a chorus behind them.
            Four couple films sit below.
          </p>
        </div>
      </header>

      <section className="section section-dark">
        <div className="wrap">
          <p className="kicker">Couple films</p>
          <h2 className="section-title">Rocky, Craig, Marco, Byan.</h2>
          <div className="grid-2" style={{ marginTop: "2rem" }}>
            {films.map((film, index) => (
              <FilmCard key={film.slug} film={film} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Written</p>
          <h2 className="section-title">Five people. Their words.</h2>
          <div className="grid-2" style={{ marginTop: "2rem" }}>
            {quotes.map((quote) => (
              <Quote key={quote.name} quote={quote} />
            ))}
          </div>
          <p style={{ marginTop: "2rem" }}>
            <Link className="btn" href="/inquire/">
              Check my date
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
