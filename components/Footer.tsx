import Link from "next/link";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-brand">{site.wordmark}</p>
          <p>{site.tagline}</p>
          <p>{site.areaLine}</p>
          <p>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            {" · "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div>
          <ul className="footer-links">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <p>
            <Link className="btn" href="/inquire/">
              Check my date
            </Link>
          </p>
          <p>© Copyright {site.year} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
