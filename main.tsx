/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Smartphone, 
  ShieldAlert, 
  Zap, 
  Globe, 
  Code, 
  Info,
  Layers
} from 'lucide-react';

// Note: In a real app, you would use the actual uploaded URLs here.
// For this presentation, we use descriptive placeholders and UI elements.

const SLIDES = [
  {
    id: 'intro',
    title: 'Sosyal Medya ve "Suhba" Projesi',
    subtitle: 'Giriş',
    content: 'Hayatımızın önemli bir parçası haline gelen sosyal medya ve bu konuda geliştirdiğimiz alternatif çözüm projesi.',
    bg: 'bg-gradient-to-br from-emerald-900/20 to-black',
    icon: <Globe className="w-12 h-12 text-emerald-500" />
  },
  {
    id: 'problems',
    title: 'Mevcut Sorunlar',
    subtitle: 'Zararlar ve Riskler',
    grid: [
      { title: 'Zaman İsrafı', desc: 'Algoritmalar bizi saatlerce farkında olmadan uygulamada tutmak için tasarlanmıştır.' },
      { title: 'Uygunsuz İçerikler', desc: 'Ahlaki değerlerimize uymayan görüntüler ve anlamsız akımlar yaygındır.' },
      { title: 'Zararlı Fikirler', desc: 'Yanlış düşünceler sosyal medya üzerinden çok hızlı yayılarak zihinleri karıştırabiliyor.' }
    ],
    icon: <ShieldAlert className="w-12 h-12 text-red-500" />
  },
  {
    id: 'solution',
    title: 'Çözüm: "Suhba"',
    subtitle: 'İyi Dostluk',
    content: '"Suhba" Arapça bir kelimedir ve "İyi Dostluk" anlamına gelir. Amacımız faydalı içeriklerle vakit geçirilebilecek bir ortam oluşturmaktır.',
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    icon: <Zap className="w-12 h-12 text-yellow-500" />
  },
  {
    id: 'features',
    title: 'Uygulama Özellikleri',
    subtitle: 'Neler Sunuyoruz?',
    grid: [
      { title: 'Zaman Yönetimi', desc: 'Kullanıcıların geçirdiği zamanı kontrol edebilmeleri için akıllı sınırlar.' },
      { title: 'Yapay Zeka Filtresi', desc: 'Haram veya zararlı içerikleri tespit edip engelleyen gelişmiş sistem.' },
      { title: 'Değerler Odaklı Algoritma', desc: 'Toplumsal ve insani değerleri, Filistin davası gibi konuları öne çıkarır.' }
    ],
    icon: <Layers className="w-12 h-12 text-blue-500" />
  },
  {
    id: 'development',
    title: 'Geliştirme Süreci',
    subtitle: 'Yazılım Mimarisi',
    content: 'Projenin arkasındaki yoğun emek ve güçlü yazılım yapısı. Modern teknolojilerle optimize edilmiş temiz kod prensipleri.',
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200", // Representative code editor image
    icon: <Code className="w-12 h-12 text-purple-500" />
  },
  {
    id: 'technical',
    title: 'Teknik Paylaşımlar',
    subtitle: 'Bağlantılar',
    points: [
      'Durum: Geliştirme aşamasında (Sadece Localhost)',
      'Dil Desteği: Yakında Türkçe desteği eklenecek',
      'GitHub: github.com/kelbkol18-maker/sahba-project'
    ],
    code: true,
    icon: <Smartphone className="w-12 h-12 text-emerald-500" />
  },
  {
    id: 'closing',
    title: 'Kapanış',
    subtitle: 'Hadis-i Şerif',
    content: '"İki nimet vardır ki insanların çoğu onların kıymetini bilmez: Sağlık ve boş vakit."',
    description: 'Hedefimiz teknolojinin esiri olmak değil, onu bilinçli şekilde kullanmaktır. Dinlediğiniz için teşekkür ederim.',
    bg: 'bg-gradient-to-br from-emerald-900/40 to-black',
    icon: <Info className="w-12 h-12 text-emerald-400" />
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < SLIDES.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slide = SLIDES[currentSlide];

  return (
    <div className="relative h-screen w-screen bg-[#050505] font-sans overflow-hidden select-none">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.05, 0.1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-red-500/10 blur-[120px] rounded-full" 
        />
      </div>

      {/* Navigation Header */}
      <header className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-black text-xl">ص</div>
          <span className="text-xl font-bold tracking-tighter uppercase italic font-serif">Suhba Project</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono opacity-50 uppercase tracking-widest">
          <span>Konuşma Sınavı Sunumu</span>
          <div className="w-px h-4 bg-white/20" />
          <span>Slide {currentSlide + 1} / {SLIDES.length}</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative h-full w-full flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: direction > 0 ? -1000 : 1000, opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="w-full max-w-6xl px-6"
          >
            <div className={`glass rounded-[2rem] p-8 md:p-16 relative overflow-hidden ${slide.bg || ''}`}>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    {slide.icon}
                    <h2 className="text-emerald-400 font-mono text-sm uppercase tracking-[0.3em] font-bold">
                      {slide.subtitle}
                    </h2>
                  </motion.div>

                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl font-serif font-bold leading-tight tracking-tighter"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-white/60 leading-relaxed max-w-lg"
                  >
                    {slide.content || slide.description}
                  </motion.p>

                  {slide.points && (
                    <motion.ul 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-4"
                    >
                      {slide.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white/80">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          {point}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>

                <div className="relative">
                  {slide.image && (
                    <motion.div 
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  )}

                  {slide.grid && (
                    <div className="grid grid-cols-2 gap-4">
                      {slide.grid.map((item, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <h3 className="font-bold mb-2 text-emerald-400">{item.title}</h3>
                          <p className="text-sm text-white/50">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {slide.code && (
                    <motion.div 
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="bg-[#1e1e1e] rounded-xl p-6 font-mono text-sm border border-white/10 shadow-2xl overflow-hidden"
                    >
                      <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="text-emerald-400">const</div> <div className="text-blue-400 inline">Suhba</div> = () ={">"} {"{"}
                      <div className="pl-4">
                        <div className="text-emerald-400">return</div> (
                        <div className="pl-4">
                          {"<"}<div className="text-red-400 inline">SafeDigitalWorld</div>
                          <div className="pl-4">
                            <div className="text-yellow-400">ethicalFilter</div>={"{"}<div className="text-blue-400 inline">true</div>{"}"}
                            <br />
                            <div className="text-yellow-400">privacyFirst</div>={"{"}<div className="text-blue-400 inline">true</div>{"}"}
                          </div>
                          /&gt;
                        </div>
                        );
                      </div>
                      {"}"};
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Controls */}
      <footer className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === SLIDES.length - 1}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="flex gap-2">
          {SLIDES.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 transition-all duration-300 rounded-full ${idx === currentSlide ? 'w-8 bg-emerald-500' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>

        <div className="hidden md:flex flex-col items-end">
          <p className="text-xs font-mono opacity-30 uppercase tracking-tighter">
            İlerlemek için boşluk tuşuna veya oklara basın
          </p>
          <p className="text-sm font-bold text-emerald-500 mt-1">
            Leys tarafından programlandı
          </p>
        </div>
      </footer>
    </div>
  );
}
