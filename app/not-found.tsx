import Link from "next/link";

export default function NotFound() {
  return (
    <header className="page-hero">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>That page is not on the floor.</h1>
        <p className="lede">Head home, or check a date if that is why you came.</p>
        <div className="btn-row" style={{ marginTop: "1.5rem" }}>
          <Link className="btn" href="/inquire/">
            Check my date
          </Link>
          <Link className="btn btn-ghost" href="/">
            Home
          </Link>
        </div>
      </div>
    </header>
  );
}
