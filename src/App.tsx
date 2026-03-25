import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Layers } from "lucide-react";
import { surahs } from "./data/surahs"; // استيراد البيانات من الملف الجديد

type SurahCardProps = {
  title: string;
  titleAr?: string;
  versesCount?: number;
  place?: 'meccan' | 'medinan';
  image: string;
  link: string;
};

const Header = () => (
  <header className="w-full py-6 px-4 bg-gradient-to-r from-green-600 to-emerald-500 shadow-md">
    <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
      📖  تدبر سور القرآن الكريم 
    </h1>
    <p className="text-center text-white/80 mt-2 text-sm md:text-base">
      عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: "... وَمَا اجْتَمَعَ قَوْمٌ فِي بَيْتٍ مِنْ بُيُوتِ اللَّهِ يَتْلُونَ كِتَابَ اللَّهِ وَيَتَدَارَسُونَهُ بَيْنَهُمْ إِلَّا نَزَلَتْ عَلَيْهِمْ السَّكِينَةُ، وَغَشِيَتْهُمْ الرَّحْمَةُ، وَحَفَّتْهُمْ الْمَلَائِكَةُ، وَذَكَرَهُمْ اللَّهُ فِيمَنْ عِنْدَهُ" (رواه مسلم).
    </p>
  </header>
);

const SurahCard: React.FC<SurahCardProps> = ({ 
  title, 
  titleAr, 
  versesCount, 
  place, 
  image, 
  link 
}) => {
  const placeIcon = place === 'meccan' ? '🇸🇦' : '🇲🇩';
  const placeText = place === 'meccan' ? 'مكية' : 'مدنية';

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-40 object-cover" />
          {place && (
            <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
              {placeIcon} {placeText}
            </div>
          )}
          {versesCount && (
            <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
              <Layers size={12} />
              {versesCount} آية
            </div>
          )}
        </div>
        
        <CardContent className="p-4 text-center">
          <h2 className="text-xl font-bold mb-1">{title}</h2>
          {titleAr && (
            <p className="text-sm text-gray-500 mb-3">{titleAr}</p>
          )}
          
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-green-600 hover:bg-green-700 gap-2">
              <BookOpen size={18} />
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
            <SurahCard
              key={surah.id}
              title={surah.title}
              titleAr={surah.titleAr}
              versesCount={surah.versesCount}
              place={surah.place}
              image={surah.image}
              link={surah.link}
            />
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