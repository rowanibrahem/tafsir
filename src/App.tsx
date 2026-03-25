import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type SurahCardProps = {
  title: string;
  image: string;
  link: string;
};

const surahs: SurahCardProps[] = [
  {
    title: "سورة الملك",
    image: "src/assets/elmolk.jpeg",
    link: "https://docs.google.com/document/d/1Jso830aPRBd35lZE8o_JIzxSg83r0Yqfqpg_l4fSwWo/edit",
  },
];

const Header = () => (
  <header className="w-full py-6 px-4 bg-gradient-to-r from-green-600 to-emerald-500 shadow-md">
    <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
      📖  تدبر سور القرآن الكريم 
    </h1>
    <p className="text-center text-white/80 mt-2 text-sm md:text-base">
عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: "... وَمَا اجْتَمَعَ قَوْمٌ فِي بَيْتٍ مِنْ بُيُوتِ اللَّهِ يَتْلُونَ كِتَابَ اللَّهِ وَيَتَدَارَسُونَهُ بَيْنَهُمْ إِلَّا نَزَلَتْ عَلَيْهِمْ السَّكِينَةُ، وَغَشِيَتْهُمْ الرَّحْمَةُ، وَحَفَّتْهُمْ الْمَلَائِكَةُ، وَذَكَرَهُمْ اللَّهُ فِيمَنْ عِنْدَهُ" (رواه مسلم).    </p>
  </header>
);

const SurahCard: React.FC<SurahCardProps> = ({ title, image, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <CardContent className="p-4 text-center">
          <h2 className="text-lg font-semibold mb-3">{title}</h2>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-green-600 hover:bg-green-700">
              افتح السورة
            </Button>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      <Header />

      <main className="p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {surahs.map((surah) => (
            <SurahCard key={surah.title} {...surah} />
          ))}
        </div>
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} - موقع القرآن الكريم
      </footer>
    </div>
  );
};

export default App;
