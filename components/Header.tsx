"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/">
          {site.wordmark}
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          <ul className="nav-desktop">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <a className="header-call" href={site.phoneHref}>
            Call {site.phoneDisplay}
          </a>
          <Link className="btn" href="/inquire/">
            Check my date
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span className="visually-hidden">Menu</span>
          </button>
        </div>
      </div>
      <nav
        id={menuId}
        className={`nav-mobile${open ? " is-open" : ""}`}
        aria-label="Mobile"
      >
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/inquire/">Check my date</Link>
          </li>
          <li>
            <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
