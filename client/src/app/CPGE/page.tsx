'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import CPGEPresentationContent from '@/components/CPGE/PresentationContent';
import CPGEArticlesContent from '@/components/CPGE/ArticlesContent';
import CPGECreativeOrangeBackground from '@/components/CPGE/CreativeOrangeBackground';
import CPGECandidatureContent from '@/components/CPGE/CandidatureContent';

export default function CPGE() {
  // ── State for active tab ──────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState<'presentation' | 'articles' | 'candidature'>('presentation');

  // ── Animation Variants ──────────────────────────────────────────────
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  // ── Background Images Slideshow ──────────────────────────────────
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/images/lydex-1.jpg',
    '/images/lydex-2.jpg',
    '/images/lydex-3.png',
    '/images/lydex-4.webp',
    '/images/lydex-5.jpg',
    '/images/lydex-6.jpg',
    '/images/lydex-7.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // ── Tab Buttons Data ──────────────────────────────────────────────
  const tabs = [
    {
      id: 'presentation' as const,
      label: 'Présentation',
      icon: '📚',
      description: 'Découvrir la formation'
    },
    {
      id: 'articles' as const,
      label: 'Articles',
      icon: '📰',
      description: 'Actualités et ressources'
    },
    {
      id: 'candidature' as const,
      label: 'Candidature',
      icon: '📝',
      description: 'Postuler en ligne'
    },
  ];

  return (
    <motion.main
      className="min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-20">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1 : 1.08,
              }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            >
              <Image
                src={image}
                alt={`LM6E Campus - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                quality={100}
                sizes="100vw"
              />
            </motion.div>
          ))}
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          
          {/* Orange glow overlays */}
          <motion.div 
            className="absolute top-1/4 left-1/4 z-10 w-96 h-96 rounded-full bg-orange-500/15 blur-3xl pointer-events-none"
            animate={{ 
              x: [0, 80, -80, 0],
              y: [0, -60, 60, 0],
              scale: [1, 1.3, 0.8, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 z-10 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl pointer-events-none"
            animate={{ 
              x: [0, -100, 100, 0],
              y: [0, 80, -80, 0],
              scale: [1, 0.8, 1.4, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Image counter */}
          <motion.div
            className="absolute bottom-8 right-8 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-orange-300/80 text-sm font-medium tracking-wider">
              <span className="text-orange-400">{String(currentImageIndex + 1).padStart(2, '0')}</span>
              <span className="text-white/30 mx-2">/</span>
              <span className="text-white/50">{String(backgroundImages.length).padStart(2, '0')}</span>
            </span>
          </motion.div>

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
            {backgroundImages.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentImageIndex 
                    ? 'bg-gradient-to-r from-orange-400 to-orange-600 w-10 shadow-lg shadow-orange-500/50' 
                    : 'bg-white/20 w-2 hover:bg-orange-400/40'
                }`}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-orange-400/20 mb-6"
            >
              <motion.span
                className="relative flex h-3.5 w-3.5"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-500" />
              </motion.span>
              <span className="text-sm font-semibold text-white/90 tracking-wide">CPGE</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <span className="text-white drop-shadow-lg">Classes Préparatoires Grandes Écoles</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl text-white/80 max-w-2xl mx-auto"
            >
              Excellence, diversité, confiance, collaboration, équilibre, lâcher prise ...
            </motion.p>

            {/* ─── 3 TAB BUTTONS ─── */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
            >
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-6 py-4 rounded-2xl text-center transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 scale-105'
                      : 'bg-white/10 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/20 border border-white/10 hover:border-orange-400/30'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <span className="text-2xl">{tab.icon}</span>
                    <span className={`font-semibold text-sm ${
                      activeTab === tab.id ? 'text-white' : 'text-white/90'
                    }`}>
                      {tab.label}
                    </span>
                    <span className={`text-xs ${
                      activeTab === tab.id ? 'text-orange-100' : 'text-white/50'
                    }`}>
                      {tab.description}
                    </span>
                  </div>
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur-xl"
                      layoutId="tabBackground"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
  
      </section>

      {/* ─── CONTENT SECTION ─── */}
      <section className="relative py-20 overflow-hidden bg-white">
        <CPGECreativeOrangeBackground />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'presentation' && <CPGEPresentationContent />}
              {activeTab === 'articles' && <CPGEArticlesContent />}
              {activeTab === 'candidature' && <CPGECandidatureContent />}
            </AnimatePresence>

            {/* Decorative separator */}
            <motion.div
              className="mt-16 flex justify-center items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-orange-400"
                    animate={{
                      scale: [1, 1.5, 1],
                      backgroundColor: ['#FB923C', '#F97316', '#FB923C']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
              <motion.div
                className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}