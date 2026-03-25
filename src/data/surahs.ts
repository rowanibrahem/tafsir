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
    link: "https://drive.google.com/file/d/1ANwfQmzqFKdMPWHu3hbKL-vrQN5UudA4/view?usp=sharing",
  },
 
];