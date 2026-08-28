"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {faqs.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div className="faq-item" key={item.q}>
            <h2>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                {item.q}
                <span aria-hidden="true">{isOpen ? "–" : "+"}</span>
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="answer"
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
