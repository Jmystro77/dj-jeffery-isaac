/** Must match `basePath` / `assetPrefix` in next.config.ts (GitHub Pages). */
export const pagesBasePath = "/dj-jeffery-isaac";

export function assetUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${pagesBasePath}${normalized}`;
}

export const site = {
  name: "DJ Jeffery Isaac",
  wordmark: "DJ JEFFERY ISAAC",
  tagline: "Professional, fun-spirited, stress-free weddings",
  phoneDisplay: "330-240-0915",
  phoneHref: "tel:+13302400915",
  email: "djjefferyisaac@gmail.com",
  year: 2026,
  areaLine:
    "Northeastern Ohio — Warren, Youngstown, and Trumbull, Mahoning, Portage, and Columbiana counties.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/weddings/", label: "Weddings" },
  { href: "/add-ons/", label: "Add-ons" },
  { href: "/stories/", label: "Stories" },
  { href: "/inquire/", label: "Inquire" },
] as const;

export const footerNav = [
  { href: "/live-music/", label: "Live music" },
  { href: "/areas/", label: "Areas" },
  { href: "/faq/", label: "FAQ" },
  { href: "/inquire/", label: "Inquire" },
] as const;

export type WrittenReview = {
  name: string;
  text: string;
  photo: string;
  photoAlt: string;
  attribution?: string;
  lowRes?: boolean;
  still?: {
    src: string;
    alt: string;
    role: "background" | "near";
  };
};

export const quotes: WrittenReview[] = [
  {
    name: "Maria Panning",
    text: "Jeff is an amazing DJ! He played all of our favorite songs and kept the party going all night long! Very personable and I recommend him to every bride-to-be! If you're looking for a fun-spirited, professional and stress-free wedding day, Jeff is your guy!",
    photo: "/reviews/maria-panning.png",
    photoAlt:
      "Maria Panning and her groom at their wedding, the groom kissing her hand",
    still: {
      src: "/reviews/maria-panning-couple.png",
      alt: "Maria Panning and her groom at the staircase during their wedding",
      role: "background",
    },
  },
  {
    name: "Deb Hall",
    text: "Everything was better than I could've imagined. Absolutely perfect! I'd recommend DJ Jeffery Isaac to anyone in need of excellent service.",
    photo: "/reviews/deb-hall.jpg",
    photoAlt: "Deb Hall in a formal wedding portrait",
  },
  {
    name: "Dustin Cumberlin",
    text: "DJ Jeff is the best DJ ever! I had the greatest time when he was dropping them beats at my wedding... he had every song and awesome lights. I would strongly recommend him for any event.",
    photo: "/reviews/dustin-cumberlin.jpg",
    photoAlt: "Dustin Cumberlin and his bride at their wedding",
  },
  {
    name: "Brandy Cumberlin",
    text: "He did our wedding. He was absolutely amazing!!! I had such a great day!!",
    photo: "/reviews/brandy-cumberlin.jpg",
    photoAlt: "Brandy Cumberlin",
  },
  {
    name: "Samantha Peacock",
    text: "The lights, the music, the videos, it was all awesome.",
    photo: "/reviews/samantha-peacock.png",
    photoAlt: "Samantha Peacock in a bridal headshot",
  },
  {
    name: "Valarie Mountfort",
    text: "Jeff made sure to contact me ahead of time to get the list of the bridal party. He gave suggestions on songs when I didn't have one. His lights added something special to our reception. Our ceremony was outside and he was able to get a mic out there with our music. Jeff was funny, upbeat, played songs on request and I could not have asked for a better experience!! Best DJ around the Warren/Youngstown area.",
    photo: "/reviews/valarie-mountfort.png",
    photoAlt: "Valarie Mountfort at her wedding reception",
    still: {
      src: "/reviews/valarie-mountfort-cake.png",
      alt: "Ken and Valarie Mountfort cutting their wedding cake",
      role: "near",
    },
  },
  {
    name: "Chelsea Heilman",
    text: "Jeff and Kyaira did an awesome job at our wedding. Jeff was the DJ. He was very professional and had everything in order. He didn't mind answering questions even if it was the same question 100 times. He kept in contact with me all night to make sure there weren't any changes and that we didn't need anything. Kyaira was in charge of the photobooth and she was the absolute sweetest. The pictures had our names on them along with 3 pictures and 2 copies were printed. It was an absolute hit. We did a photo guestbook which was great. I would highly recommend them for DJ and photo services!",
    photo: "/reviews/chelsea-heilman.png",
    photoAlt: "Chelsea Heilman at her wedding",
    lowRes: true,
  },
  {
    name: "Tessa Parker",
    attribution: "Former owner, Champion Beach House",
    text: "Being a bar owner and working with many DJs through the years, I can honestly say Jeff is one of the best in our area. Professional, friendly, reliable, and very much a crowd pleaser. He provides the music you ask for, and the atmosphere to match. Highly recommended!",
    photo: "/reviews/tessa-parker.jpg",
    photoAlt: "Tessa Parker, former owner of Champion Beach House",
  },
];

export const films = [
  {
    slug: "rocky-jess",
    couple: "Rocky & Jess",
    src: "/videos/112_Rocky_Jessica_Wedding_Testimonial.mp4",
    type: "video/mp4",
  },
  {
    slug: "craig-chelsea",
    couple: "Craig & Chelsea",
    src: "/videos/61_DJ_Testimonial_Craig_Chelsea.mov",
    type: "video/mp4",
  },
  {
    slug: "marco-charlotte",
    couple: "Marco & Charlotte",
    src: "/videos/39_DJ_Testimonial_Marco_and_Charlotte.mp4",
    type: "video/mp4",
  },
  {
    slug: "byan-rena",
    couple: "Byan & Rena",
    src: "/videos/38_DJ_Testimonial_Bryan_and_Rena.mp4",
    type: "video/mp4",
  },
] as const;

export const faqs = [
  {
    q: "Do you have backup equipment?",
    a: "Yes. I carry doubles of everything, and in some cases triples. When it might be the most important day of someone's life, there is no room for a single point of failure.",
  },
  {
    q: "What kind of speakers do you use?",
    a: "Bose L1 Model 2 with B2 subs. They are linear-array speakers with about 180 degrees of coverage, so the room gets even sound instead of hot spots next to the speakers and quiet corners everywhere else. The footprint stays small, which matters in banquet rooms that are already tight.",
  },
  {
    q: "Do you have wireless mics?",
    a: "Yes. I use a Sennheiser wireless system — lavaliers and handhelds. Outdoor ceremonies get a mic and music out there with you.",
  },
  {
    q: "How long does setup and teardown take?",
    a: "About an hour to set up and about an hour to tear down. Sometimes a little less or a little more, depending on how far the load-in is from the truck.",
  },
  {
    q: "Can we pick our own songs and build the playlist?",
    a: "Yes. It is your wedding. Once you book, you get an online client portal where you can build the playlist, mark must-plays, and lock the moments that matter. If you want me to read the room and mix, I will do that too. I mix and blend — I do not press play and walk away.",
  },
  {
    q: "How do payments work?",
    a: "A 20% deposit holds the date. The balance is due by the wedding day. I stay flexible on how we get there. Pricing itself lives on the call, because guest count, hours, and add-ons change the picture.",
  },
  {
    q: "How much experience do you have?",
    a: "I have been DJing steadily for more than ten years. Before that I was already in music — award-winning pianist, Youngstown State University Piano Performance with a jazz emphasis, and I was hired as a recording engineer at 18. I can read a room from the kids' table to the grandparents.",
  },
  {
    q: "Can you play piano for the ceremony or bring a jazz trio?",
    a: "That is available for the right day — a piano processional, or a jazz trio for cocktail hour — but it is not a guarantee on every booking. Tell me what you are hoping for when you check the date and we will see what the day can hold.",
  },
  {
    q: "What areas do you cover?",
    a: "Northeastern Ohio: Warren, Youngstown, and Trumbull, Mahoning, Portage, and Columbiana counties. If your venue is in that pocket, you are in my backyard.",
  },
  {
    q: "What does the first conversation look like?",
    a: "Check my date. We talk through the room, the timeline, and what you actually want the night to feel like. You will hear options and availability on that call — not a mystery package pulled from a sales page.",
  },
] as const;

export const services = [
  { id: "dj", label: "DJ / MC" },
  { id: "booth", label: "Photo booth" },
  { id: "video", label: "Videography" },
] as const;
