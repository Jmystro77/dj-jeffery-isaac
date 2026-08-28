import { films } from "@/lib/site";

export function FilmCard({
  film,
  index,
}: {
  film: (typeof films)[number];
  index: number;
}) {
  return (
    <figure className="film" data-tone={index % 4} data-film={film.slug}>
      <div className="film-frame" aria-hidden="true" />
      <span className="play-mark" aria-hidden="true" />
      <figcaption>
        {film.couple}
        <p className="film-meta">Couple film · frame placeholder</p>
      </figcaption>
    </figure>
  );
}
