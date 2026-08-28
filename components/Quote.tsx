import { quotes } from "@/lib/site";

type QuoteItem = (typeof quotes)[number];

export function Quote({ quote }: { quote: QuoteItem }) {
  return (
    <figure className="quote">
      <blockquote>
        <p>{quote.text}</p>
      </blockquote>
      <figcaption>
        {quote.name}
        {"attribution" in quote && quote.attribution ? (
          <cite>{quote.attribution}</cite>
        ) : null}
      </figcaption>
    </figure>
  );
}
