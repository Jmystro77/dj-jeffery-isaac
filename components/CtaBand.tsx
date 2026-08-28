import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Check the date. We will talk through the day.",
  text = "Pricing lives on the call — rooms, hours, and add-ons are not the same wedding. If you already know you want a musician who can also run the reception, start here.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <p className="kicker">Warren · Youngstown · the Valley</p>
        <h2 className="section-title">{title}</h2>
        <p className="lede">{text}</p>
        <div className="btn-row" style={{ marginTop: "1.6rem" }}>
          <Link className="btn" href="/inquire/">
            Check my date
          </Link>
          <a className="btn btn-ghost" href={site.phoneHref}>
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
