import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FilmCard } from "@/components/FilmCard";
import { HeroMedia } from "@/components/HeroMedia";
import { Quote } from "@/components/Quote";
import { films, quotesByLength, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <HeroMedia />
        <div className="hero-inner">
          <p className="eyebrow">DJ · Photo booth · Videography</p>
          <h1>I play the ceremony. I mix the reception.</h1>
          <p className="lede">
            {site.tagline} for Warren, Youngstown, and the four counties around
            them. You are the priority. The floor stays full.
          </p>
          <div className="btn-row">
            <Link className="btn" href="/inquire/">
              Check my date
            </Link>
            <Link className="btn btn-ghost" href="/stories/">
              See the work
            </Link>
          </div>
        </div>
      </section>

      <div className="wrap">
        <p className="proof-rail">
          <span>Maria Panning</span>
          <span>Deb Hall</span>
          <span>Dustin Cumberlin</span>
          <span>Brandy Cumberlin</span>
          <span>Samantha Peacock</span>
          <span>Valarie Mountfort</span>
          <span>Chelsea Heilman</span>
          <span>Tessa Parker, Champion Beach House</span>
        </p>
      </div>
      <hr className="rule" />

      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <p className="kicker">Warren &amp; Youngstown</p>
            <h2 className="section-title">A musician who can also run the night.</h2>
            <p>
              I am Jeff. If you want someone who can sit at the piano while you
              walk the aisle, then actually mix the reception instead of pressing
              play, you are in the right place.
            </p>
            <p>
              I have been DJing for more than ten years. Before that I was already
              in the work — award-winning pianist, Youngstown State University
              Piano Performance with a jazz emphasis, hired as a recording
              engineer at 18. Weddings are first. The couple is the brief.
            </p>
            <p>
              You can build the playlist in the online client portal. I show up
              with Bose L1 Model 2 and B2 subs, Sennheiser wireless, and doubles
              — sometimes triples — of the gear. A 20% deposit holds the date.
            </p>
          </div>
          <div className="figure-block figure-reception" role="img" aria-label="Warm reception lighting" />
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <p className="kicker">The offer</p>
          <h2 className="section-title">DJ, photo booth, and film.</h2>
          <div className="grid-3" style={{ marginTop: "2rem" }}>
            <article className="card">
              <h3>Wedding DJ</h3>
              <p>
                Ceremony through last song. I mix in the room. Special dances,
                announcements, and the moments nobody wrote down all get a
                person on them.
              </p>
            </article>
            <article className="card">
              <h3>Photo booth</h3>
              <p>
                Prints with your names, a guestbook that actually fills up.
                Chelsea Heilman wrote about Kyaira running the booth — present,
                kind, and on it all night.
              </p>
            </article>
            <article className="card">
              <h3>Videography</h3>
              <p>
                Couple films from nights I have already played. Rocky &amp; Jess,
                Craig &amp; Chelsea, Marco &amp; Charlotte, Byan &amp; Rena live
                on the Stories page.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">In their words</p>
          <h2 className="section-title">Proof, not a sales letter.</h2>
          <div className="quote-masonry" style={{ marginTop: "2rem" }}>
            {quotesByLength.slice(0, 4).map((quote) => (
              <Quote key={quote.name} quote={quote} />
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/stories/">
              Read Maria, Deb, Dustin, Brandy, Samantha, Valarie, Chelsea, and Tessa
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <p className="kicker">See the work</p>
          <h2 className="section-title">Four couple films.</h2>
          <p className="lede">
            Names are real. Tap play on a couple film.
          </p>
          <div className="grid-4" style={{ marginTop: "2rem" }}>
            {films.map((film, index) => (
              <FilmCard key={film.slug} film={film} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <p className="kicker">Northeastern Ohio</p>
            <h2 className="section-title">The Valley is home.</h2>
            <p>
              I play Warren, Youngstown, and the counties that hold them:
              Trumbull, Mahoning, Portage, and Columbiana. If your venue is in
              that pocket, the load-in is already in my head.
            </p>
            <p>
              <Link href="/areas/">See the service area</Link>
              {" · "}
              <Link href="/live-music/">Piano and jazz</Link>
              {" · "}
              <Link href="/weddings/">How a wedding day runs</Link>
            </p>
          </div>
          <aside className="price-note">
            <p className="kicker">Pricing</p>
            <h2 className="section-title" style={{ fontSize: "2rem" }}>
              Numbers live on the call.
            </h2>
            <p>
              I do not publish packages here. Guest count, hours, booth, and
              film change the picture. Check my date and we will talk through
              it. Or call {site.phoneDisplay}.
            </p>
            <div className="btn-row" style={{ marginTop: "1.2rem" }}>
              <Link className="btn" href="/inquire/">
                Check my date
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
