import { assetUrl, type WrittenReview } from "@/lib/site";

export function Quote({ quote }: { quote: WrittenReview }) {
  const background = quote.still?.role === "background" ? quote.still : null;
  const nearStill = quote.still?.role === "near" ? quote.still : null;

  return (
    <figure
      className="quote"
      data-lowres={quote.lowRes ? "true" : undefined}
    >
      {background ? (
        <div
          className="quote-still-bg"
          role="img"
          aria-label={background.alt}
          style={{ backgroundImage: `url("${assetUrl(background.src)}")` }}
        />
      ) : null}
      <div className="quote-inner">
        <figcaption className="quote-person">
          <span className="quote-avatar">
            <img
              className="quote-photo"
              src={assetUrl(quote.photo)}
              alt={quote.photoAlt}
              width={96}
              height={96}
            />
          </span>
          <span className="quote-who">
            {quote.name}
            {quote.attribution ? <cite>{quote.attribution}</cite> : null}
          </span>
        </figcaption>
        <blockquote>
          <p>{quote.text}</p>
        </blockquote>
        {nearStill ? (
          <img
            className="quote-still-near"
            src={assetUrl(nearStill.src)}
            alt={nearStill.alt}
            width={420}
            height={245}
          />
        ) : null}
      </div>
    </figure>
  );
}
