import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Areas",
  description:
    "Wedding DJ for Warren, Youngstown, and Trumbull, Mahoning, Portage, and Columbiana counties in Northeastern Ohio.",
};

const counties = [
  {
    name: "Trumbull",
    text: "Warren is home base. If you are getting married in the county, I already know the drive.",
  },
  {
    name: "Mahoning",
    text: "Youngstown and the rooms around it. Valley weddings are the work I protect on the calendar.",
  },
  {
    name: "Portage",
    text: "East of the Valley, still in the pocket I serve. Tell me the venue when you check the date.",
  },
  {
    name: "Columbiana",
    text: "South of the core, still Northeastern Ohio. If the venue is here, you are not asking me to invent a new market.",
  },
];

export default function AreasPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="kicker">Northeastern Ohio</p>
          <h1>Warren, Youngstown, and the four counties.</h1>
          <p className="lede">
            I play Northeastern Ohio: Trumbull, Mahoning, Portage, and
            Columbiana. Warren and Youngstown are the names on the van door.
            That is the map. I do not stretch it for a wider-looking list.
          </p>
        </div>
      </header>

      <section className="section section-dark">
        <div className="wrap grid-2">
          {counties.map((county) => (
            <article className="card" key={county.name}>
              <h2>{county.name} County</h2>
              <p>{county.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <p className="kicker">Venues</p>
          <h2 className="section-title">Tell me the room. I will tell you if the date is open.</h2>
          <p>
            Banquet halls, barns, backyards, and rooms with a patio ceremony —
            Valarie Mountfort’s outdoor vows still got a mic and music outside.
            I will not pretend I have a preferred-vendor plaque on every mantel
            in the Valley. I will show up prepared for the one you booked.
          </p>
          <p>
            Tessa Parker, former owner of Champion Beach House, hired enough DJs
            to know the difference. She called the work professional, friendly,
            reliable, and a crowd-pleaser.
          </p>
          <p>
            <Link href="/inquire/">Check my date</Link>
            {" · "}
            <Link href="/stories/">Read Tessa and the couples</Link>
          </p>
        </div>
      </section>

      <CtaBand title="If the venue is in the Valley, start with the date." />
    </>
  );
}
