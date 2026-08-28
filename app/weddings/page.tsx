import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Weddings",
  description:
    "Ceremony through last song with DJ Jeffery Isaac — playlist portal, backup gear, and a musician who mixes the reception in Warren and Youngstown.",
};

const beats = [
  {
    when: "Ceremony",
    title: "Music that belongs in the room",
    text: "Outdoor or in the hall, you get a mic and music with you. A piano processional is available on the right day — ask when you check the date. It is not promised on every booking.",
  },
  {
    when: "Cocktail",
    title: "Keep talking. Keep sipping.",
    text: "I can mix a softer hour, or we talk about a jazz trio for cocktail hour when the day can hold it. Either way, the energy should feel like you, not a hotel lobby playlist.",
  },
  {
    when: "Dinner",
    title: "Announcements without the scramble",
    text: "Bridal party, dances, the toast that got added at 4 p.m. Valarie Mountfort wrote that I collected the party list ahead of time and had a suggestion when a song was missing.",
  },
  {
    when: "Reception",
    title: "I mix. I do not press play.",
    text: "Ten-plus years of reading a floor. You can hand me a song-by-song list in the client portal, or let me blend from what you love. Requests get a person, not a shrug.",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Weddings first</p>
          <h1>The whole day, handled like it is yours.</h1>
          <p className="lede">
            Professional, fun-spirited, stress-free weddings. I work beside you
            on the order of events, the dances, and the things nobody thinks
            about until the day is already moving.
          </p>
          <div className="btn-row" style={{ marginTop: "1.6rem" }}>
            <Link className="btn" href="/inquire/">
              Check my date
            </Link>
            <Link className="btn btn-ghost" href="/add-ons/">
              Photo booth &amp; film
            </Link>
          </div>
        </div>
      </header>

      <section className="section section-dark">
        <div className="wrap">
          <p className="kicker">How the day runs</p>
          <h2 className="section-title">From the aisle to last call.</h2>
          <div className="timeline" style={{ marginTop: "2rem" }}>
            {beats.map((beat) => (
              <article key={beat.when}>
                <p className="when">{beat.when}</p>
                <div>
                  <h3>{beat.title}</h3>
                  <p>{beat.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2">
          <article className="card">
            <h3>Planning stays simple</h3>
            <p>
              Once you book, the online client portal is where you build the
              playlist, mark must-plays, and keep the timeline in one place.
              Wedding planning already has enough group texts. My side should
              not add another one.
            </p>
          </article>
          <article className="card">
            <h3>Gear that belongs at a wedding</h3>
            <p>
              Bose L1 Model 2 with B2 subs — even coverage, small footprint.
              Sennheiser wireless handhelds and lavs. Doubles of everything, and
              in some cases triples. Setup is about an hour. Teardown is about
              an hour.
            </p>
          </article>
          <article className="card">
            <h3>A 20% deposit holds the date</h3>
            <p>
              The rest is due by the wedding day. I stay flexible on how we get
              there. I do not nickel-and-dime the night, and I do not pack up
              early.
            </p>
          </article>
          <article className="price-note">
            <p className="kicker">Pricing</p>
            <h3>On the call. Not on a package grid.</h3>
            <p>
              Rooms, guest counts, hours, booth, and film are not interchangeable.
              Check my date and we will talk numbers with your actual day in
              front of us.
            </p>
            <div className="btn-row" style={{ marginTop: "1rem" }}>
              <Link className="btn" href="/inquire/">
                Check my date
              </Link>
            </div>
          </article>
        </div>
      </section>

      <CtaBand title="If the date is still open, let’s hold it." />
    </>
  );
}
