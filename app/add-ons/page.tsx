import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Quote } from "@/components/Quote";
import { quotes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Add-ons",
  description:
    "Photo booth and videography with DJ Jeffery Isaac — prints, guestbooks, and couple films for Warren and Youngstown weddings.",
};

const chelsea = quotes.find((quote) => quote.name === "Chelsea Heilman");
const valarie = quotes.find((quote) => quote.name === "Valarie Mountfort");

export default function AddOnsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">DJ + booth + film</p>
          <h1>The extras that make the night feel finished.</h1>
          <p className="lede">
            Weddings are first. The booth and the films sit next to the DJ work
            so your people have something in their hands and you have something
            to keep.
          </p>
        </div>
      </header>

      <section className="section section-dark">
        <div className="wrap grid-2">
          <article className="prose">
            <p className="kicker">Photo booth</p>
            <h2 className="section-title">Prints with your names on them.</h2>
            <p>
              Three pictures, two copies, a guestbook that someone actually
              reminds the room to use. That is the booth Chelsea Heilman
              described — and she named Kyaira on it.
            </p>
            <p>
              The booth should feel like part of the party, not a kiosk in the
              hallway. We talk layout, backdrop, and how it fits the timeline
              when you check the date.
            </p>
          </article>
          {chelsea ? <Quote quote={chelsea} /> : null}
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2">
          <article className="prose">
            <p className="kicker">Videography</p>
            <h2 className="section-title">Couple films from nights I have played.</h2>
            <p>
              Four films already exist: Rocky &amp; Jess, Craig &amp; Chelsea,
              Marco &amp; Charlotte, and Byan &amp; Rena. The Stories page holds
              the players.
            </p>
            <p>
              <Link href="/stories/">See the films and the written proof</Link>
            </p>
          </article>
          <article className="card">
            <h3>Lights that change the room</h3>
            <p>
              Valarie Mountfort wrote that the lights added something special to
              the reception. Uplighting and dance lighting are part of how the
              night looks, not an afterthought pulled from a trunk.
            </p>
          </article>
        </div>
      </section>

      {valarie ? (
        <section className="section section-dark">
          <div className="wrap">
            <Quote quote={valarie} />
          </div>
        </section>
      ) : null}

      <CtaBand title="Tell me what you want beside the DJ." />
    </>
  );
}
