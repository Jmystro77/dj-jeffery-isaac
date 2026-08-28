import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Live music",
  description:
    "Award-winning pianist and YSU Piano Performance / Jazz — piano processional or jazz trio for cocktail hour, available on the right wedding day.",
};

export default function LiveMusicPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Piano · Jazz · the room</p>
          <h1>Live music when the day calls for it.</h1>
          <p className="lede">
            I am an award-winning pianist. I studied Piano Performance with a
            jazz emphasis at Youngstown State University. I was hired as a
            recording engineer at 18. The DJ work sits on top of that, not
            instead of it.
          </p>
        </div>
      </header>

      <section className="section section-dark">
        <div className="wrap split">
          <div className="figure-block" role="img" aria-label="Piano in warm light" />
          <div className="prose">
            <p className="kicker">Available — not a guarantee</p>
            <h2 className="section-title">Aisle piano. Cocktail jazz.</h2>
            <p>
              A piano processional, or a jazz trio for cocktail hour, can be
              part of the day when the date, the room, and the musicians line
              up. I will not print that as a promise on every wedding.
            </p>
            <p>
              If that is the picture in your head, say so when you check the
              date. We will be honest about what that Saturday can hold.
            </p>
            <div className="btn-row" style={{ marginTop: "1.4rem" }}>
              <Link className="btn" href="/inquire/">
                Check my date
              </Link>
              <Link className="btn btn-ghost" href="/weddings/">
                Wedding day
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-3">
          <article className="card">
            <h3>YSU Piano Performance</h3>
            <p>
              Jazz emphasis. That training is why a ceremony does not sound like
              a Bluetooth speaker under a folding chair.
            </p>
          </article>
          <article className="card">
            <h3>Award-winning pianist</h3>
            <p>
              The keys came first. DJing for more than ten years came after I
              already knew how a room listens.
            </p>
          </article>
          <article className="card">
            <h3>Recording engineer at 18</h3>
            <p>
              I hear mixes, not tracks. That is the difference between a
              reception that breathes and a playlist that just gets louder.
            </p>
          </article>
        </div>
      </section>

      <CtaBand title="Want piano on the aisle? Ask on the call." />
    </>
  );
}
