export interface Surah {
  id: number;
  title: string;
  titleAr?: string;
  versesCount: number;
  place: 'meccan' | 'medinan';
  image: string;
  link: string;
}

export const surahs: Surah[] = [
  {
    id: 1,
    title: "الملك",
    titleAr: "Al-Mulk",
    versesCount: 30,
    place: "meccan",
    image: "/images/elmolk.jpeg",
    link: "https://docs.google.com/document/d/1Jso830aPRBd35lZE8o_JIzxSg83r0Yqfqpg_l4fSwWo/edit",
  },
 
];