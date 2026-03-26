import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, LayoutGrid, Users, Image as ImageIcon, Flame, Rocket, Key, BookMarked, Check, Star, Headset, Mail, Settings, Shield, Bell, LogOut } from 'lucide-react';
import { translations, Language } from './translations';

const NULogo = ({ className = "h-[0.72em] w-auto" }) => (
  <img src="/logo.svg" alt="Logo" className={className} />
);

const TelegramIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.123-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const FLAGS: Record<string, string> = {
  EN: "https://flagcdn.com/w20/gb.png",
  UA: "https://flagcdn.com/w20/ua.png",
  RU: "https://flagcdn.com/w20/ru.png"
};

function Home({ t, isLoggedIn }: { t: any, isLoggedIn: boolean }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handlePurchase = () => {
    if (!isLoggedIn) {
      navigate('/dashboard');
    } else {
      window.open('https://cryptocloud.plus', '_blank');
    }
  };

  return (
    <main className="relative max-w-[1440px] mx-auto px-4 md:px-8">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-[#E50914]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <h1 className="flex items-center justify-center select-none w-fit mx-auto mb-8 text-5xl sm:text-7xl md:text-9xl">
          <NULogo className="h-[1.2em] w-auto max-w-full" />
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          {t.heroDescription}
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.features}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {t.featuresList?.map((feature: any, index: number) => {
            const Icon = [LayoutGrid, Users, ImageIcon, Flame, Rocket, Key, BookMarked, Headset][index];
            return (
              <div 
                key={index} 
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] bg-[#111] border border-[#222] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#333] transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1a1a1a] text-red-500">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.pricing}
        </h2>
        <div className="flex justify-center px-4">
          <div className="w-full max-w-sm bg-[#111] border border-[#222] hover:border-[#E50914]/50 rounded-3xl p-8 flex flex-col gap-6 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E50914]/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-[#E50914]/20 transition-colors duration-500" />
            
            <h3 className="text-3xl font-bold text-white tracking-tight">{t.pricingMax}</h3>
            
            <div className="flex flex-col gap-3 mt-2">
              <div className="text-gray-300 font-medium text-lg">
                {t.pricingPurchase}
              </div>
              <div className="text-gray-300 font-medium text-lg">
                {t.pricingRenewal}
              </div>
            </div>

            <div className="h-[1px] w-full bg-[#222] my-2" />

            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#E50914]/20 flex items-center justify-center text-[#E50914]">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-gray-300 leading-relaxed">{t.pricingFullAccess}</span>
              </li>
            </ul>

            <button 
              onClick={handlePurchase}
              className="mt-4 w-full py-3.5 bg-[#1a1a1a] hover:bg-[#E50914] border border-[#333] hover:border-[#E50914] text-white font-semibold rounded-xl transition-all duration-300"
            >
              {t.pricingBuy}
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.reviews}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.reviewsList?.map((review: any, index: number) => (
            <div 
              key={index} 
              className="bg-[#111] border border-[#222] rounded-2xl p-6 md:p-8 flex flex-col gap-6 hover:border-[#333] transition-colors relative"
            >
              <div className="flex text-[#E50914] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed flex-grow text-sm md:text-base">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-[#222]">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-gray-400 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium">{review.name}</div>
                  <div className="text-gray-500 text-xs md:text-sm mt-0.5">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="https://t.me/neuro_uploader_reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#161616] border border-[#333] hover:border-[#E50914] text-white px-6 py-3.5 rounded-xl font-medium transition-all duration-300 group hover:shadow-lg hover:shadow-[#E50914]/20"
          >
            <TelegramIcon size={20} className="text-gray-400 group-hover:text-[#E50914] transition-colors duration-300" />
            <span>{t.moreReviews}</span>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 max-w-[800px] mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.faq}
        </h2>
        <div className="flex flex-col gap-4">
          {t.faqList?.map((faq: any, index: number) => (
            <div 
              key={index}
              className={`bg-[#111] border rounded-2xl overflow-hidden transition-colors duration-300 ${openFaqIndex === index ? 'border-[#E50914]/50' : 'border-[#222] hover:border-[#333]'}`}
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-base md:text-lg font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`text-[#E50914] transition-transform duration-300 flex-shrink-0 ${openFaqIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 max-w-[1440px] mx-auto border-t border-[#222]">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-500">
          {t.ourPartners}
        </h2>
        <div className="flex justify-center items-center opacity-50 hover:opacity-100 transition-opacity duration-300">
          <img src="/Union.svg" alt="Dolphin{anty}" className="h-12 md:h-16 w-auto" />
        </div>
      </section>
    </main>
  );
}

function PrivacyPolicy({ t }: { t: any }) {
  return (
    <main className="relative max-w-[800px] mx-auto px-4 md:px-8 py-32 min-h-[70vh]">
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        {t.privacyPolicy}
      </h1>
      <div className="max-w-none text-gray-300 leading-relaxed space-y-6">
        {t.privacyPolicyContent?.map((section: any, index: number) => (
          <div key={index}>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{section.title}</h2>
            <p className="text-gray-400 whitespace-pre-wrap">{section.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

function TermsOfUse({ t }: { t: any }) {
  return (
    <main className="relative max-w-[800px] mx-auto px-4 md:px-8 py-32 min-h-[70vh]">
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        {t.termsOfUse}
      </h1>
      <div className="max-w-none text-gray-300 leading-relaxed space-y-6">
        {t.termsOfUseContent?.map((section: any, index: number) => (
          <div key={index}>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">{section.title}</h2>
            <p className="text-gray-400 whitespace-pre-wrap">{section.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

function Dashboard({ t, user, onLogout }: { t: any, user: any, onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState('account');
  const [hasSubscription, setHasSubscription] = useState(false);
  const [isBotConnected, setIsBotConnected] = useState(false);
  const [lastDeviceChange, setLastDeviceChange] = useState<number | null>(null);
  const navigate = useNavigate();

  const sidebarItems = [
    { id: 'account', label: t.accountSettings, icon: Settings },
    { id: 'security', label: t.securitySettings, icon: Shield },
    { id: 'notifications', label: t.notifications, icon: Bell },
  ];

  const handleDeviceChange = () => {
    setLastDeviceChange(Date.now());
  };

  const getDaysUntilNextChange = () => {
    if (!lastDeviceChange) return 0;
    const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
    const timePassed = Date.now() - lastDeviceChange;
    const timeLeft = thirtyDaysInMs - timePassed;
    return Math.ceil(timeLeft / (24 * 60 * 60 * 1000));
  };

  const daysLeft = getDaysUntilNextChange();
  const canChangeDevice = !lastDeviceChange || daysLeft <= 0;

  const renderContent = () => {
    if (activeTab === 'account') {
      return (
        <div className="flex flex-col gap-8 w-full max-w-2xl">
          {/* Subscription Section */}
          <div className="bg-[#161616] border border-[#222] rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Star size={20} className="text-[#E50914]" />
              {t.currentSubscription}
            </h3>
            
            {hasSubscription ? (
              <div className="flex items-center justify-between bg-[#0d0d0d] border border-[#E50914]/20 rounded-xl p-4">
                <div>
                  <p className="text-white font-bold">Premium Plan</p>
                  <p className="text-gray-500 text-xs">Expires: 27.04.2026</p>
                </div>
                <span className="bg-[#E50914]/10 text-[#E50914] text-[10px] uppercase font-bold px-2 py-1 rounded-md border border-[#E50914]/20">Active</span>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="bg-[#0d0d0d] border border-[#222] rounded-xl p-4 text-center">
                  <p className="text-gray-500 text-sm italic">{t.noSubscription}</p>
                </div>
                <button 
                  onClick={() => navigate('/#pricing')}
                  className="w-full bg-[#E50914] hover:bg-[#b90710] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-[#E50914]/20 flex items-center justify-center gap-2"
                >
                  <Rocket size={18} />
                  {t.buySubscription}
                </button>
              </div>
            )}
          </div>

          {/* Telegram Bot Section */}
          <div className="bg-[#161616] border border-[#222] rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <TelegramIcon size={20} className="text-[#E50914]" />
              {t.connectBot}
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0d0d0d] border border-[#222] rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${isBotConnected ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-gray-600'}`} />
                <p className="text-sm font-medium text-gray-300">
                  {isBotConnected ? t.botConnected : t.botNotConnected}
                </p>
              </div>
              
              <button 
                onClick={() => setIsBotConnected(!isBotConnected)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 border ${
                  isBotConnected 
                    ? "bg-transparent border-[#222] text-gray-500 hover:text-red-500 hover:border-red-500/20" 
                    : "bg-white text-black hover:bg-gray-200 border-white"
                }`}
              >
                {isBotConnected ? t.logout : t.connectNow}
              </button>
            </div>
            <p className="text-[10px] text-gray-600 mt-4 leading-relaxed">
              * Подключение бота позволяет получать уведомления о статусе загрузок и управлять аккаунтом через Telegram интерфейс.
            </p>
          </div>
        </div>
      );
    }

    if (activeTab === 'security') {
      return (
        <div className="flex flex-col gap-8 w-full max-w-2xl">
          {/* Login Information */}
          <div className="bg-[#161616] border border-[#222] rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Shield size={20} className="text-[#E50914]" />
              {t.loginInfo}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0d0d0d] border border-[#222] rounded-xl p-4">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{t.device}</p>
                <p className="text-sm text-white font-medium">Windows PC (Chrome)</p>
              </div>
              <div className="bg-[#0d0d0d] border border-[#222] rounded-xl p-4">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{t.ipAddress}</p>
                <p className="text-sm text-white font-mono">192.168.1.42</p>
              </div>
              <div className="bg-[#0d0d0d] border border-[#222] rounded-xl p-4">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{t.lastLogin}</p>
                <p className="text-sm text-white font-medium">26.03.2026 12:45</p>
              </div>
            </div>
          </div>

          {/* Change Device Section */}
          <div className="bg-[#161616] border border-[#222] rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <LayoutGrid size={20} className="text-[#E50914]" />
              {t.changeDevice}
            </h3>
            <p className="text-xs text-gray-500 mb-6">{t.changeDeviceLimit}</p>
            
            {!canChangeDevice ? (
              <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 flex-shrink-0">
                  <Bell size={20} />
                </div>
                <div>
                  <p className="text-sm text-yellow-500 font-medium">{t.nextChangeAvailable} {daysLeft} {t.days}</p>
                </div>
              </div>
            ) : (
              <button 
                onClick={handleDeviceChange}
                className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Key size={18} />
                {t.changeDevice}
              </button>
            )}
            
            {lastDeviceChange && daysLeft > 29 && (
              <p className="text-green-500 text-xs mt-4 text-center font-medium">✓ {t.deviceChanged}</p>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'notifications') {
      return (
        <div className="h-full min-h-[400px] border-2 border-dashed border-[#222] rounded-3xl flex flex-col items-center justify-center text-gray-600 bg-[#0d0d0d]/50 p-8">
          <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-[#222] flex items-center justify-center text-gray-500 mb-6">
            <Bell size={32} />
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-gray-400 mb-2">
              {sidebarItems.find(i => i.id === activeTab)?.label}
            </p>
            <p className="text-sm italic text-gray-600">{t.notificationsFuture}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="h-full min-h-[400px] border-2 border-dashed border-[#222] rounded-3xl flex items-center justify-center text-gray-600 bg-[#0d0d0d]/50 p-8">
        <div className="text-center">
          <p className="text-lg font-medium text-gray-400 mb-2">
            {sidebarItems.find(i => i.id === activeTab)?.label}
          </p>
          <p className="text-sm italic">{t.dashboardComingSoon}</p>
        </div>
      </div>
    );
  };

  return (
    <main className="relative max-w-[1440px] mx-auto px-4 md:px-8 py-20 min-h-[70vh]">
      <div className="w-full bg-[#111] border border-[#222] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E50914]/5 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Header with User Info */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#E50914]">
              <TelegramIcon size={32} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white tracking-tight">{user.username}</h2>
              <p className="text-gray-500 text-sm font-mono">ID: {user.telegramId}</p>
            </div>
          </div>
          
          <h1 className="text-xl font-semibold text-gray-400 uppercase tracking-widest opacity-50">
            {t.dashboard}
          </h1>
        </div>

        {/* Main Dashboard Area with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex flex-col gap-2">
            <div className="flex flex-col gap-2 flex-grow">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 text-sm font-medium border ${
                    activeTab === item.id 
                      ? "bg-[#E50914]/10 border-[#E50914]/30 text-white shadow-lg shadow-[#E50914]/5" 
                      : "bg-transparent border-transparent text-gray-400 hover:bg-[#1a1a1a] hover:text-gray-200"
                  }`}
                >
                  <item.icon size={18} className={activeTab === item.id ? "text-[#E50914]" : "opacity-70"} />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 text-sm font-medium border border-transparent text-gray-500 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20 mt-8 lg:mt-20"
            >
              <LogOut size={18} />
              {t.logout}
            </button>
          </aside>

          {/* Content Area */}
          <div className="flex-grow">
            {renderContent()}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('RU');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const user = {
    username: "@username",
    telegramId: "123456789"
  };

  const t = translations[lang];

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-600/30 overflow-x-hidden flex flex-col">
      {/* Top Bar */}
      <header className="bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#222] sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-8 py-2 flex items-center justify-between gap-2">
          
          {/* Logo */}
          <Link to="/" className="flex items-center select-none cursor-pointer shrink-0 w-fit text-3xl sm:text-4xl md:text-5xl -my-2">
            <NULogo className="h-[1.5em] w-auto" />
          </Link>

          {/* Navigation & Actions */}
          <div className="flex items-center gap-4 md:gap-10">
            
            {/* Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <Link to="/#features" className="hover:text-white transition-colors">{t.features}</Link>
              <Link to="/#pricing" className="hover:text-white transition-colors">{t.pricing}</Link>
              <Link to="/#reviews" className="hover:text-white transition-colors">{t.reviews}</Link>
              <Link to="/#faq" className="hover:text-white transition-colors">{t.faq}</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              
              {/* Language Switcher */}
              <div className="relative">
                <button 
                  className="flex items-center gap-1.5 md:gap-2.5 text-xs md:text-sm font-medium text-gray-300 hover:text-white bg-[#161616] hover:bg-[#222] border border-[#333] px-2 md:px-3 py-2 rounded-xl transition-all duration-200"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
                >
                  <img src={FLAGS[lang]} alt={lang} className="w-4 md:w-5 rounded-[2px] shadow-sm" referrerPolicy="no-referrer" />
                  <span>{lang}</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-2 w-28 bg-[#161616] border border-[#333] rounded-xl shadow-2xl overflow-hidden flex flex-col py-1 z-50">
                    {Object.keys(FLAGS).map((l) => (
                      <button
                        key={l}
                        className={`px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-[#222] transition-colors ${lang === l ? 'text-[#E50914] font-bold' : 'text-gray-400'}`}
                        onClick={() => {
                          setLang(l as Language);
                          setIsLangOpen(false);
                        }}
                      >
                        <img src={FLAGS[l]} alt={l} className="w-5 rounded-[2px] shadow-sm" referrerPolicy="no-referrer" />
                        <span>{l}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Telegram Auth Button or Username */}
              {isLoggedIn ? (
                <Link 
                  to="/dashboard"
                  className="flex items-center gap-2 md:gap-3 bg-[#161616] border border-[#333] hover:border-[#E50914] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-sm font-bold transition-all duration-300 group shadow-lg hover:shadow-[#E50914]/10"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#E50914] group-hover:scale-110 transition-transform duration-300">
                    <TelegramIcon size={14} />
                  </div>
                  <span className="text-[#E50914]">{user.username}</span>
                </Link>
              ) : (
                <Link 
                  to="/dashboard"
                  onClick={handleLogin}
                  className="relative flex items-center gap-1.5 md:gap-2.5 bg-[#161616] border border-[#333] hover:border-[#E50914] text-white px-3 md:px-6 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-[#E50914]/20 whitespace-nowrap"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E50914]/0 via-[#E50914]/10 to-[#E50914]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  <TelegramIcon size={16} className="text-gray-400 group-hover:text-[#E50914] transition-colors duration-300 relative z-10 md:w-[18px] md:h-[18px]" />
                  <span className="relative z-10 hidden sm:inline">{t.loginTelegram}</span>
                  <span className="relative z-10 sm:hidden">Telegram</span>
                </Link>
              )}
              
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home t={t} isLoggedIn={isLoggedIn} />} />
          <Route path="/privacy" element={<PrivacyPolicy t={t} />} />
          <Route path="/terms" element={<TermsOfUse t={t} />} />
          <Route path="/dashboard" element={
            isLoggedIn ? (
              <Dashboard t={t} user={user} onLogout={handleLogout} />
            ) : (
              <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-3xl bg-[#1a1a1a] border border-[#222] flex items-center justify-center text-[#E50914] mb-8">
                  <TelegramIcon size={40} />
                </div>
                <h2 className="text-3xl font-bold mb-4">{t.loginTelegram}</h2>
                <p className="text-gray-400 max-w-md mb-8">{t.heroDescription}</p>
                <button 
                  onClick={handleLogin}
                  className="flex items-center gap-3 bg-[#E50914] hover:bg-[#b90710] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-[#E50914]/20"
                >
                  <TelegramIcon size={20} />
                  {t.loginTelegram}
                </button>
              </div>
            )
          } />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#222] py-16 bg-[#0a0a0a]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            {/* Left: Logo & Description */}
            <div className="flex flex-col gap-6 max-w-md">
              <NULogo className="h-8 md:h-10 w-auto text-[#E50914]" />
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.footerDescription}
              </p>
            </div>

            {/* Right: Links & Contacts */}
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 text-sm">
              <div className="flex flex-col gap-5">
                <span className="text-white font-semibold tracking-wider uppercase text-xs opacity-40">{t.legal}</span>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  {t.privacyPolicy}
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  {t.termsOfUse}
                </Link>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-white font-semibold tracking-wider uppercase text-xs opacity-40">{t.contacts}</span>
                <a href="mailto:support@neurouploader.com" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <Mail size={16} className="opacity-70" />
                  support@neurouploader.com
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <TelegramIcon size={16} className="opacity-70" />
                  {t.telegram}
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom: Copyright */}
          <div className="pt-8 border-t border-[#222] text-center">
            <p className="text-gray-500 text-sm">
              {t.copyright}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Telegram Button */}
      <a 
        href="https://t.me/neurouploader" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 bg-[#229ED9] hover:bg-[#229ED9]/90 text-white rounded-full shadow-2xl shadow-[#229ED9]/30 transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Telegram"
      >
        <div className="absolute inset-0 rounded-full bg-[#229ED9] animate-ping opacity-20 group-hover:opacity-40" />
        <TelegramIcon size={28} className="relative z-10" />
      </a>
    </div>
  );
}
