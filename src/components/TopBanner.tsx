import { useLanguage } from "@/context/LanguageContext";
import { Truck, ShieldCheck, Package, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const TopBanner = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const messages = [
    {
      icon: Truck,
      text: t('banner.worldwideShipping'),
      gradient: 'from-blue-600 to-cyan-500',
      iconColor: 'text-cyan-300',
    },
    {
      icon: ShieldCheck,
      text: t('banner.authenticProducts'),
      gradient: 'from-green-600 to-emerald-500',
      iconColor: 'text-emerald-300',
    },
    {
      icon: Package,
      text: t('banner.freeShipping'),
      gradient: 'from-purple-600 to-pink-500',
      iconColor: 'text-pink-300',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsAnimating(false);
      }, 300);
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  const CurrentIcon = messages[currentIndex].icon;
  const currentMessage = messages[currentIndex];

  if (!isVisible) return null;

  return (
    <div className={`relative bg-gradient-to-r ${currentMessage.gradient} text-white py-3 overflow-hidden transition-all duration-500`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer"></div>
      </div>

      {/* Floating sparkles */}
      <Sparkles className="absolute left-10 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 animate-ping-slow hidden md:block" />
      <Sparkles className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 animate-ping-slower hidden md:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex items-center justify-center gap-3 text-sm font-semibold transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
          {/* Animated icon with glow */}
          <div className="relative">
            <div className={`absolute inset-0 ${currentMessage.iconColor} blur-md opacity-50 animate-pulse-slow`}></div>
            <CurrentIcon className={`h-5 w-5 ${currentMessage.iconColor} relative z-10 animate-bounce-slow`} />
          </div>
          
          {/* Message text */}
          <span className="tracking-wide">{currentMessage.text}</span>

          {/* Decorative dots */}
          <div className="hidden md:flex items-center gap-1.5 ml-4">
            {messages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-6'
                    : 'bg-white/40 w-1.5 hover:bg-white/70'
                }`}
                aria-label={`Go to message ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors duration-200 group"
        aria-label="Close banner"
      >
        <X className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
      </button>
    </div>
  );
};

export default TopBanner;

