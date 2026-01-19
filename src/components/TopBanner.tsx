import { useLanguage } from "@/context/LanguageContext";
import { Truck, ShieldCheck, Package } from "lucide-react";
import { useEffect, useState } from "react";

const TopBanner = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    {
      icon: Truck,
      text: t('banner.worldwideShipping'),
    },
    {
      icon: ShieldCheck,
      text: t('banner.authenticProducts'),
    },
    {
      icon: Package,
      text: t('banner.freeShipping'),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  const CurrentIcon = messages[currentIndex].icon;

  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-sm font-medium animate-fade-in">
          <CurrentIcon className="h-4 w-4" />
          <span>{messages[currentIndex].text}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;

