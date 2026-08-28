import { assetUrl, films } from "@/lib/site";

export function FilmCard({
  film,
  index,
}: {
  film: (typeof films)[number];
  index: number;
}) {
  return (
    <figure className="film" data-tone={index % 4} data-film={film.slug}>
      <video
        className="film-player"
        controls
        playsInline
        preload="metadata"
        aria-label={`${film.couple} wedding testimonial`}
      >
        <source src={assetUrl(film.src)} type={film.type} />
      </video>
      <figcaption>
        {film.couple}
        <p className="film-meta">Couple film</p>
      </figcaption>
    </figure>
  );
}
