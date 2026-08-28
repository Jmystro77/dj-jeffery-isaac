import type { Metadata } from "next";
import { InquireForm } from "@/components/InquireForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Inquire",
  description:
    "Check your wedding date with DJ Jeffery Isaac. Warren, Youngstown, and Northeastern Ohio. Call 330-240-0915.",
};

export default function InquirePage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Book the conversation</p>
          <h1>Check my date.</h1>
          <p className="lede">
            Tell me the day, the room, and what you want beside the DJ. We will
            talk options, availability, and pricing on a call — not on a
            package page.
          </p>
        </div>
      </header>
      <section className="section section-dark">
        <div className="wrap split">
          <InquireForm />
          <aside className="price-note">
            <p className="kicker">Prefer a voice</p>
            <h2 className="section-title" style={{ fontSize: "2.1rem" }}>
              Call {site.phoneDisplay}
            </h2>
            <p>
              Or write <a href={`mailto:${site.email}`}>{site.email}</a>. I
              work Warren, Youngstown, and Trumbull, Mahoning, Portage, and
              Columbiana counties.
            </p>
            <p>
              A 20% deposit holds the date once we agree. The online client
              portal is how you build the playlist after that.
            </p>
            <p>
              <a className="btn" href={site.phoneHref}>
                Call {site.phoneDisplay}
              </a>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
