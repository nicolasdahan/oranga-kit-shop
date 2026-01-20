import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Shield, Trophy, Sparkles } from "lucide-react";
import { getClubsByLeague } from "@/data/clubs";
import { useLanguage } from "@/context/LanguageContext";

const ShirtsMegaMenu = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLeague, setActiveLeague] = useState<string | null>("premier-league");
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const leagues = [
    {
      slug: "premier-league",
      name: "Premier League",
      country: "England",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      color: "#3D195B",
      icon: Shield
    },
    {
      slug: "la-liga",
      name: "La Liga",
      country: "Spain",
      flag: "🇪🇸",
      color: "#FF6B00",
      icon: Trophy
    },
    {
      slug: "serie-a",
      name: "Serie A",
      country: "Italy",
      flag: "🇮🇹",
      color: "#024494",
      icon: Shield
    },
    {
      slug: "bundesliga",
      name: "Bundesliga",
      country: "Germany",
      flag: "🇩🇪",
      color: "#D20515",
      icon: Trophy
    },
    {
      slug: "ligue-1",
      name: "Ligue 1",
      country: "France",
      flag: "🇫🇷",
      color: "#00B5E2",
      icon: Shield
    },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveLeague("premier-league");
    }, 300);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      {/* Trigger Button */}
      <button
        className="relative px-4 py-2 text-sm font-semibold text-white hover:text-white transition-all duration-300 group flex items-center gap-1"
      >
        <span className="relative z-10">{t('nav.shirts')}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`}></div>
      </button>

      {/* Mega Menu Dropdown */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 top-[5rem] w-[95vw] max-w-6xl transition-all duration-300 origin-top ${
          isOpen 
            ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 scale-95 pointer-events-none -translate-y-4'
        }`}
        style={{
          maxWidth: 'min(1280px, calc(100vw - 2rem))'
        }}
      >
        {/* Backdrop with blur */}
        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{t('megaMenu.shopByClub')}</h3>
                  <p className="text-white/80 text-sm">{t('megaMenu.selectLeague')}</p>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="hidden md:flex items-center gap-2">
                <Link 
                  to="/catalog" 
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  {t('megaMenu.allShirts')}
                </Link>
                <Link 
                  to="/catalog?category=national-teams" 
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {t('megaMenu.nationalTeams')}
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-12 min-h-[380px] max-h-[70vh]">
            {/* Left Sidebar - Leagues */}
            <div className="col-span-3 bg-gradient-to-br from-gray-50 to-gray-100 border-r border-gray-200 p-4">
              <div className="space-y-1">
                {leagues.map((league) => {
                  const Icon = league.icon;
                  return (
                    <button
                      key={league.slug}
                      onMouseEnter={() => setActiveLeague(league.slug)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                        activeLeague === league.slug
                          ? 'bg-white shadow-lg scale-105'
                          : 'hover:bg-white/50'
                      }`}
                    >
                      {/* Active indicator bar */}
                      <div 
                        className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                          activeLeague === league.slug ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ backgroundColor: league.color }}
                      />
                      
                      <div className="flex items-center gap-3 relative">
                        {/* League Icon with color */}
                        <div 
                          className={`p-2 rounded-lg transition-all duration-300 ${
                            activeLeague === league.slug ? 'scale-110' : 'scale-100'
                          }`}
                          style={{ 
                            backgroundColor: activeLeague === league.slug ? `${league.color}15` : 'transparent'
                          }}
                        >
                          <Icon 
                            className="w-4 h-4 transition-colors"
                            style={{ color: activeLeague === league.slug ? league.color : '#6B7280' }}
                          />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{league.flag}</span>
                            <span className={`font-bold text-sm transition-colors ${
                              activeLeague === league.slug ? 'text-gray-900' : 'text-gray-600'
                            }`}>
                              {league.name}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">{league.country}</span>
                        </div>

                        {/* Arrow indicator */}
                        <ChevronDown 
                          className={`w-4 h-4 -rotate-90 transition-all ${
                            activeLeague === league.slug ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                          }`}
                          style={{ color: league.color }}
                        />
                      </div>
                    </button>
                  );
                })}

                {/* Browse All Leagues Link */}
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <Link
                    to="/clubs"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 hover:scale-105 group shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 group-hover:animate-bounce" />
                      <span className="font-semibold text-sm">{t('megaMenu.browseAllLeagues')}</span>
                    </div>
                    <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content - Clubs */}
            <div className="col-span-9 p-6 overflow-y-auto max-h-[450px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {activeLeague && (
                <div className="animate-fade-in">
                  {/* League Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="h-1 w-12 rounded-full"
                      style={{ 
                        backgroundColor: leagues.find(l => l.slug === activeLeague)?.color 
                      }}
                    />
                    <h4 className="text-2xl font-black text-gray-900">
                      {leagues.find(l => l.slug === activeLeague)?.name} {t('megaMenu.clubs')}
                    </h4>
                  </div>

                  {/* Clubs Grid */}
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
                    {getClubsByLeague(activeLeague).map((club) => (
                      <Link
                        key={club.id}
                        to={`/clubs/${club.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="group relative p-4 rounded-xl border-2 border-gray-200 hover:border-primary bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Featured badge */}
                        {club.featured && (
                          <div className="absolute top-2 right-2">
                            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse-slow" />
                          </div>
                        )}

                        <div className="flex items-center gap-3">
                          {/* Club Logo */}
                          {club.logo ? (
                            <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                              <img 
                                src={club.logo} 
                                alt={club.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div 
                              className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                              style={{ 
                                background: `linear-gradient(135deg, ${club.colors[0]}, ${club.colors[1] || club.colors[0]})` 
                              }}
                            >
                              <Shield className="w-6 h-6 text-white" />
                            </div>
                          )}

                          {/* Club Name */}
                          <div className="flex-1 min-w-0">
                            <h5 className="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors truncate">
                              {club.name}
                            </h5>
                            {club.stadium && (
                              <p className="text-xs text-gray-500 truncate">{club.stadium}</p>
                            )}
                          </div>

                          {/* Arrow indicator */}
                          <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* View All Link for this league */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      to={`/catalog?category=${activeLeague}`}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 hover:scale-105 shadow-lg group"
                    >
                      <span className="font-semibold">
                        {t('megaMenu.viewAll')} {leagues.find(l => l.slug === activeLeague)?.name} {t('megaMenu.shirts')}
                      </span>
                      <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{t('megaMenu.cantFind')}</span> {t('megaMenu.exploreAll')}
              </p>
              <Link 
                to="/catalog"
                onClick={() => setIsOpen(false)}
                className="text-primary hover:text-primary/80 font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                {t('megaMenu.browseAllShirts')}
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShirtsMegaMenu;

