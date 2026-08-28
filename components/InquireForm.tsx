"use client";

import { FormEvent, useState } from "react";
import { services, site } from "@/lib/site";

type Status = { kind: "info" | "error"; text: string } | null;

export function InquireForm() {
  const [status, setStatus] = useState<Status>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const chosen = services
      .filter((service) => data.get(service.id) === "on")
      .map((service) => service.label);

    if (chosen.length === 0) {
      setStatus({
        kind: "error",
        text: "Choose at least one service so I know what you are hoping to book.",
      });
      return;
    }

    const lines = [
      `Wedding inquiry for ${data.get("firstName")} ${data.get("lastName")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Wedding date: ${data.get("weddingDate")}`,
      `Venue: ${data.get("venue")}`,
      `City: ${data.get("city")}`,
      `Guest count: ${data.get("guestCount")}`,
      `Services: ${chosen.join(", ")}`,
    ];

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Check my date — ${data.get("weddingDate")} — ${data.get("city")}`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = mailto;
    setStatus({
      kind: "info",
      text: `This form is not connected to a booking inbox yet. If your email app did not open, write ${site.email} or call ${site.phoneDisplay}. Nothing was submitted to a server.`,
    });
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <span dangerouslySetInnerHTML={{ __html: "<!-- GHL_FORM_EMBED -->" }} />
      <div className="fields">
        <div className="fields fields-2">
          <div className="field">
            <label htmlFor="firstName">First name</label>
            <input id="firstName" name="firstName" autoComplete="given-name" required />
          </div>
          <div className="field">
            <label htmlFor="lastName">Last name</label>
            <input id="lastName" name="lastName" autoComplete="family-name" required />
          </div>
        </div>
        <div className="fields fields-2">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" required />
          </div>
        </div>
        <div className="fields fields-2">
          <div className="field">
            <label htmlFor="weddingDate">Wedding date</label>
            <input id="weddingDate" name="weddingDate" type="date" required />
          </div>
          <div className="field">
            <label htmlFor="guestCount">Guest count</label>
            <input
              id="guestCount"
              name="guestCount"
              type="number"
              min={1}
              inputMode="numeric"
              required
            />
          </div>
        </div>
        <div className="fields fields-2">
          <div className="field">
            <label htmlFor="venue">Venue</label>
            <input id="venue" name="venue" required />
          </div>
          <div className="field">
            <label htmlFor="city">City</label>
            <input id="city" name="city" required />
          </div>
        </div>
        <fieldset className="field">
          <legend className="kicker">Services</legend>
          <div className="checks">
            {services.map((service) => (
              <label key={service.id} htmlFor={service.id}>
                <input id={service.id} name={service.id} type="checkbox" />
                {service.label}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <button className="btn" type="submit">
            Check my date
          </button>
        </div>
      </div>
      {status ? (
        <p className="form-status" data-kind={status.kind} role="status">
          {status.text}
        </p>
      ) : (
        <p className="form-note">
          Submitting opens your email app with the details filled in. It does
          not pretend the inquiry was received. Prefer a voice? Call{" "}
          <a href={site.phoneHref}>{site.phoneDisplay}</a>.
        </p>
      )}
    </form>
  );
}
