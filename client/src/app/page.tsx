// app/page.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useAnimation, useInView, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [counters, setCounters] = useState({ students: 0, success: 0, teachers: 0 });
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProgram, setActiveProgram] = useState(-1);
  const [hoveredFeature, setHoveredFeature] = useState(-1);
  const [activeNews, setActiveNews] = useState(-1);
  
  // Background images slideshow from public folder
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Images stored in your public/images/ folder
  const backgroundImages = [
    '/images/lydex-1.jpg',
    '/images/lydex-2.jpg',
    '/images/lydex-3.png',
    '/images/lydex-4.webp',
    '/images/lydex-5.jpg',
    '/images/lydex-6.jpg',
    '/images/lydex-7.webp',
  ];

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter animation
  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      
      const animateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setCounters({
          students: Math.floor(1500 * easeOut),
          success: Math.floor(100 * easeOut),
          teachers: Math.floor(100 * easeOut)
        });
        
        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        }
      };
      
      animateCounter();
    }
  }, [isInView]);

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        delay: index * 0.15, 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    }),
  };

  // ── Programs Data ──────────────────────────────────────────────────
  const programs = [
    {
      id: 1,
      icon: '🎓',
      title: 'Cycle Secondaire Qualifiant (SQ)',
      description: 'Les objectifs, les priorités et les ambitions que LM6E s\'est fixé pour le cycle du Secondaire Qualifiant s\'articulent principalement autour de 3 axes stratégiques.',
      features: [
        'Excellence académique et développement des compétences',
        'Accompagnement personnalisé et suivi individuel',
        'Préparation aux études supérieures et à la vie active'
      ],
      color: 'text-orange-600',
      borderColor: 'border-orange-200',
      iconBg: 'bg-orange-50',
      numberColor: 'text-orange-100',
      hoverBg: 'hover:border-orange-400',
      gradient: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50/30',
      link: '/SQ'
    },
    {
      id: 2,
      icon: '📐',
      title: 'Classes Préparatoires aux Grandes Ecoles (CPGE)',
      description: 'Le Campus scolaire du Lycée Mohammed VI d\'Excellence offre des formations scientifiques et technologiques de qualité et répond aux ambitions de ses élèves qu\'il accompagne sur la voie de la réussite et de l\'excellence.',
      features: [
        'Formations scientifiques et technologiques de qualité',
        'Accompagnement vers les Grandes Écoles',
        'Excellence et réussite académique'
      ],
      color: 'text-orange-500',
      borderColor: 'border-orange-300',
      iconBg: 'bg-orange-50',
      numberColor: 'text-orange-200',
      hoverBg: 'hover:border-orange-500',
      gradient: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50/30',
      link: '/CPGE'
    },
    {
      id: 3,
      icon: '💼',
      title: 'Brevet de Technicien Supérieur (BTS)',
      description: 'Une formation professionnalisante de haut niveau qui permet aux étudiants d\'acquérir des compétences techniques et managériales recherchées sur le marché du travail.',
      features: [
        'Formation professionnalisante et technique',
        'Compétences managériales et pratiques',
        'Insertion professionnelle réussie'
      ],
      color: 'text-orange-700',
      borderColor: 'border-orange-400',
      iconBg: 'bg-orange-50',
      numberColor: 'text-orange-300',
      hoverBg: 'hover:border-orange-600',
      gradient: 'from-orange-600 to-orange-800',
      bgColor: 'bg-orange-50/30',
      link: '/BTS'
    }
  ];

  // ── News / Actualités Data (5 items with images) ──────────────────
  const newsItems = [
    {
      id: 1,
      date: '15 Mars 2026',
      title: 'Journée Portes Ouvertes LM6E 2026',
      description: 'Le Lycée Mohammed VI d\'Excellence organise sa journée portes ouvertes annuelle. Venez découvrir nos formations et rencontrer nos équipes.',
      category: 'Événement',
      icon: '📅',
      image: '/images/news-3.jpeg'
    },
    {
      id: 2,
      date: '28 Février 2026',
      title: 'Résultats Exceptionnels aux Concours CPGE',
      description: 'Nos élèves des Classes Préparatoires ont obtenu des résultats remarquables aux concours des Grandes Écoles cette année.',
      category: 'Résultats',
      icon: '🏆',
      image: '/images/news-2.jpeg'
    },
    {
      id: 3,
      date: '10 Février 2026',
      title: 'Nouveau Laboratoire d\'Innovation',
      description: 'Inauguration d\'un nouveau laboratoire d\'innovation dédié aux sciences et technologies au sein du campus LM6E.',
      category: 'Infrastructure',
      icon: '🔬',
      image: '/images/news-2.jpeg'
    },
    {
      id: 4,
      date: '20 Janvier 2026',
      title: 'Convention avec l\'École Polytechnique',
      description: 'Signature d\'une convention de partenariat avec l\'École Polytechnique pour offrir des opportunités d\'études supérieures à nos élèves.',
      category: 'Partenariat',
      icon: '🤝',
      image: '/images/news-3.jpeg'
    },
    {
      id: 5,
      date: '5 Janvier 2026',
      title: 'Compétition de Robotique 2026',
      description: 'Nos élèves ont brillé lors de la compétition régionale de robotique en remportant 3 prix majeurs.',
      category: 'Compétition',
      icon: '🤖',
      image: '/images/news-2.jpeg'
    }
  ];

  // ── Values / Vision Data ────────────────────────────────────────
  const valuesData = [
    {
      title: "VISIONNAIRE",
      text: "Le Lycée Mohammed VI d'Excellence de Benguerir voit grand. Il nourrit l'ambition d'être un établissement d'exception, qui atteint des objectifs d'avenir audacieux, et précisément étudiés. Cette ambition puise sa force dans la volonté de ses élèves, et de l'équipe pédagogique. Le but, c'est la réussite scolaire, personnelle et professionnelle de chacun, et du projet dans son ensemble."
    },
    {
      title: "RESPONSABLE",
      text: "Le Lycée Mohammed VI d'Excellence de Benguerir est déterminé, confiant en l'avenir et en la jeunesse marocaine. La confiance en l'avenir et en la jeunesse marocaine est fondatrice de sa conviction sincère et profonde. Sa place dans le monde, sa mission, sa raison d'être induisent son fonctionnement. C'est un établissement guidé par un sens aigu de la responsabilité, que ce soit au niveau social, environnemental ou scientifique."
    },
    {
      title: "EXIGEANT",
      text: "Le Lycée Mohammed VI d'Excellence de Benguerir croit fermement en la capacité de chacun à s'élever, par un travail volontaire et régulier. Il offre à chaque élève la possibilité d'intégrer un établissement qui lui garantit une éducation optimale et un cadre de vie idéal. Nous sommes attachés à ce que chacun de nous puisse donner le meilleur de lui-même."
    },
    {
      title: "FIER",
      text: "Intégrer le Lycée d'Excellence de Benguerir est un honneur et une fierté, pour toutes les parties prenantes (élèves comme équipe pédagogique). Chaque participant au projet l'est de manière active, en étant ambassadeur d'une culture, d'un pays, d'un continent et de racines fondatrices."
    }
  ];

  // ── State for auto-rotating highlight ──────────────────────────────
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  
  // Auto-rotate highlight every minute with 1 second transition
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % valuesData.length);
    }, 6000); 
    
    return () => clearInterval(interval);
  }, [valuesData.length]);

  // ── Creative Orange Background Animations ──────────────────────────
  const CreativeOrangeBackground = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-orange-200/40 to-orange-300/20 blur-3xl"
        style={{ width: 600, height: 600, left: '-200px', top: '-200px' }}
        animate={{ x: [0, 150, 0], y: [0, 100, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full bg-gradient-to-l from-orange-300/30 to-orange-400/20 blur-3xl"
        style={{ width: 500, height: 500, right: '-150px', bottom: '-150px' }}
        animate={{ x: [0, -120, 0], y: [0, -80, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full bg-orange-100/30 blur-3xl"
        style={{ width: 400, height: 400, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border-2 border-orange-300/20"
          style={{
            width: Math.random() * 60 + 20,
            height: Math.random() * 60 + 20,
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            borderRadius: Math.random() > 0.5 ? '50%' : '4px',
            borderWidth: '2px',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'easeInOut',
          }}
        />
      ))}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-orange-400/30"
          style={{
            width: Math.random() * 6 + 3,
            height: Math.random() * 6 + 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 40, -40, 0],
            scale: [1, 2, 1],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full border-2 border-orange-300/20"
          style={{
            width: 200 + i * 120,
            height: 200 + i * 120,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            borderWidth: `${2 + i}px`,
          }}
          animate={{
            rotate: i % 2 === 0 ? [0, 360] : [-360, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
      {[ '⭐', '✨', '🌟', '🎯', '🏆', '💫','📐'].map((icon, i) => (
        <motion.div
          key={`emoji-${i}`}
          className="absolute text-3xl opacity-20"
          style={{
            left: `${5 + i * 11}%`,
            top: `${5 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, -30, 0],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 20, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            delay: i * 1.2,
            ease: 'easeInOut',
          }}
        >
          {icon}
        </motion.div>
      ))}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full blur-2xl"
          style={{
            width: Math.random() * 120 + 60,
            height: Math.random() * 120 + 60,
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            background: `radial-gradient(circle, rgba(251, 146, 60, 0.15), transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1],
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{
            duration: 7 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'easeInOut',
          }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-2xl text-orange-400/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-80, 80],
            x: [-50, 50],
            opacity: [0, 0.5, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );

  // ── Values Orange Decorations ──────────────────────────────────────
  const ValuesOrangeDecorations = () => (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-orange-100/40 to-orange-200/20 blur-3xl"
        animate={{ 
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-200/30 to-orange-300/15 blur-3xl"
        animate={{ 
          x: [0, -50, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-50/40 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 0.8, 1],
          opacity: [0.3, 0.6, 0.2, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full border"
          style={{
            width: 300 + i * 150,
            height: 300 + i * 150,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            borderColor: `rgba(251, 146, 60, ${0.05 + i * 0.03})`,
            borderWidth: `${1 + i * 0.5}px`,
          }}
          animate={{
            rotate: i % 2 === 0 ? [0, 360] : [-360, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 30 + i * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border-2"
          style={{
            width: Math.random() * 30 + 15,
            height: Math.random() * 30 + 15,
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            borderRadius: Math.random() > 0.5 ? '50%' : '4px',
            borderColor: `rgba(251, 146, 60, ${0.1 + Math.random() * 0.15})`,
            borderWidth: `${1 + Math.random() * 1}px`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.15, 0.35, 0.1, 0.15],
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            background: `rgba(251, 146, 60, ${0.15 + Math.random() * 0.25})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 40, -30, 0],
            scale: [0, 1.5, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            background: `rgba(251, 146, 60, ${0.05 + Math.random() * 0.1})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.05, 0.2, 0.05],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
      {['✨', '🌟', '🎯', '🏆', '💫', '⭐'].map((emoji, i) => (
        <motion.div
          key={`emoji-${i}`}
          className="absolute text-2xl"
          style={{
            left: `${5 + i * 14}%`,
            top: `${5 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, -15, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.div>
      ))}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full blur-2xl"
          style={{
            width: Math.random() * 120 + 60,
            height: Math.random() * 120 + 60,
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            background: `radial-gradient(circle, rgba(251, 146, 60, ${0.05 + Math.random() * 0.08}), transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.5, 0.8, 1],
            opacity: [0.2, 0.4, 0.15, 0.2],
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  // ── Render ──────────────────────────────────────────────────────────
  return (
    <motion.main
      className="min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden min-h-[95vh] flex items-center pt-20">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 z-10">
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
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-orange-900/30 to-black/30 z-10" />
          
          <motion.div 
            className="absolute top-1/4 left-1/4 z-10 w-72 h-72 rounded-full bg-orange-500/15 blur-3xl pointer-events-none"
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

          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute z-10 rounded-full pointer-events-none"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                background: `rgba(251, 146, 60, ${Math.random() * 0.3 + 0.1})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -200, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'easeInOut',
              }}
            />
          ))}

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-[600px] h-[600px] rounded-full border border-orange-400/10" />
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-[450px] h-[450px] rounded-full border border-orange-500/5" />
          </motion.div>

          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`glow-${i}`}
              className="absolute z-10 rounded-full pointer-events-none"
              style={{
                border: '1px solid rgba(251, 146, 60, 0.08)',
                width: `${150 + i * 80}px`,
                height: `${150 + i * 80}px`,
                left: `${20 + i * 20}%`,
                top: `${30 + i * 15}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

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

        <motion.div
          className="absolute top-40 right-8 z-20 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-orange-500/20 hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-white/70 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            LM6E — Benguerir
          </p>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-orange-400/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span
                  className="relative flex h-3.5 w-3.5"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-500" />
                </motion.span>
                <span className="text-sm font-semibold text-white/90 tracking-wide">Bienvenue à LM6E</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Lycée Mohammed
                </motion.span>
                <br />
                <span className="text-white drop-shadow-lg">VI D&apos;Excellence</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-orange-100/90 max-w-lg leading-relaxed backdrop-blur-sm bg-black/30 p-5 rounded-xl border border-orange-500/10 shadow-lg shadow-black/20"
              >
                Le Lycée Mohammed VI d&apos;Excellence (LM6E) est un établissement
                scientifique et technologique avec un campus résidentiel intégré.
                Il comporte le Secondaire Qualifiant, BTS et les Classes Préparatoires
                aux Grandes Ecoles.
              </motion.p>

              <motion.div 
                variants={itemVariants} 
                className="flex flex-wrap items-center gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/lycee"
                    className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
                  >
                    En savoir plus
                    <motion.svg
                      className="w-5 h-5"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="px-8 py-3.5 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20 border border-white/20"
                  >
                    Contactez-nous
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                ref={ref}
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 pt-8"
              >
                {[
                  { value: `${counters.students}+`, label: 'Élèves' },
                  { value: `${counters.success}%`, label: 'Réussite' },
                  { value: `${counters.teachers}+`, label: 'Enseignants' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="text-center bg-black/30 backdrop-blur-md rounded-xl p-4 border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.08, borderColor: 'rgba(251, 146, 60, 0.5)' }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-orange-200/80 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div className="hidden lg:block" variants={itemVariants}>
              <motion.div
                className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10 backdrop-blur-sm bg-white/5 border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className="text-center text-white p-8"
                    animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.03, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <motion.svg
                      className="w-32 h-32 mx-auto mb-4 drop-shadow-lg"
                      animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </motion.svg>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                      LM6E School
                    </h3>
                    <p className="text-orange-200/60">L&apos;excellence au cœur du savoir</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROGRAMS SECTION ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <CreativeOrangeBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex justify-center items-center gap-3 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="w-3 h-3 rounded-full bg-orange-400" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
              <motion.div className="w-3 h-3 rounded-full bg-orange-500" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
              <motion.div className="w-3 h-3 rounded-full bg-orange-600" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
            </motion.div>
            <motion.div className="inline-block mb-4" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto" />
            </motion.div>
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <motion.span className="inline-block text-orange-600" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>Découvrez</motion.span>
              <motion.span className="inline-block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}> notre établissement</motion.span>
              <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>et programmes</motion.span>
            </motion.h2>
            <motion.p className="text-gray-500 max-w-2xl mx-auto text-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>Des formations d'excellence pour accompagner chaque élève vers la réussite</motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="group"
                onMouseEnter={() => setActiveProgram(index)}
                onMouseLeave={() => setActiveProgram(-1)}
              >
                <motion.div 
                  className={`relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-orange-200/50 transition-all duration-500 p-8 border ${program.borderColor} ${program.hoverBg} overflow-hidden cursor-pointer`}
                  animate={{ y: activeProgram === index ? -8 : 0, scale: activeProgram === index ? 1.02 : 1, boxShadow: activeProgram === index ? '0 20px 60px rgba(251, 146, 60, 0.2)' : '0 10px 30px rgba(0,0,0,0.05)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${program.gradient}`} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }} />
                  <motion.div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} animate={{ opacity: activeProgram === index ? 0.15 : 0 }} />
                  <motion.div className={`absolute top-4 right-4 text-7xl font-bold ${program.numberColor} select-none opacity-20`} animate={{ scale: activeProgram === index ? 1.2 : 1, opacity: activeProgram === index ? 0.3 : 0.2 }} transition={{ type: "spring", stiffness: 400 }}>{String(program.id).padStart(2, '0')}</motion.div>
                  <motion.div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center text-3xl mb-5 shadow-sm border border-orange-200/30`} whileHover={{ scale: 1.15, rotate: [0, -5, 5, -3, 3, 0], transition: { duration: 0.6 } }} animate={{ rotateY: activeProgram === index ? 10 : 0, boxShadow: activeProgram === index ? '0 8px 25px rgba(251, 146, 60, 0.3)' : 'none' }}>{program.icon}</motion.div>
                  <motion.h3 className={`text-xl font-bold text-gray-800 mb-3 leading-tight ${program.color}`} animate={{ x: activeProgram === index ? 5 : 0 }}>{program.title}<motion.span className={`block h-0.5 w-0 bg-gradient-to-r ${program.gradient} group-hover:w-full transition-all duration-500 mt-1`} animate={{ width: activeProgram === index ? '100%' : '0%' }} /></motion.h3>
                  <motion.p className="text-gray-600 text-sm leading-relaxed mb-5" animate={{ opacity: activeProgram === index ? 1 : 0.9 }}>{program.description}</motion.p>
                  <div className="space-y-2.5">
                    {program.features.map((feature, idx) => (
                      <motion.div key={idx} className="flex items-start gap-3 text-sm text-gray-700" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + idx * 0.1 + index * 0.05 }} onMouseEnter={() => setHoveredFeature(idx)} onMouseLeave={() => setHoveredFeature(-1)}>
                        <motion.div className="w-1.5 h-1.5 rounded-full mt-1.5 bg-gradient-to-r from-orange-400 to-orange-600" animate={{ scale: hoveredFeature === idx ? 2 : 1, rotate: hoveredFeature === idx ? 180 : 0, backgroundColor: hoveredFeature === idx ? '#F97316' : '#FB923C' }} transition={{ type: "spring", stiffness: 400 }} />
                        <motion.span animate={{ x: hoveredFeature === idx ? 5 : 0, color: hoveredFeature === idx ? '#F97316' : '#374151' }}>{feature}</motion.span>
                      </motion.div>
                    ))}
                  </div>
                  {/* Updated En savoir plus with Link */}
                  <motion.div 
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-700 transition-colors duration-300"
                    whileHover={{ x: 8 }}
                    animate={{ x: activeProgram === index ? 5 : 0 }}
                  >
                    <Link href={program.link} className="flex items-center gap-2">
                      <span>En savoir plus</span>
                      <motion.svg 
                        className="w-4 h-4" 
                        animate={{ x: activeProgram === index ? 5 : 0 }} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </Link>
                  </motion.div>
                  <motion.div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-orange-400/10 to-orange-600/10 rounded-full" animate={{ scale: activeProgram === index ? 1.5 : 1, opacity: activeProgram === index ? 0.6 : 0.2 }} transition={{ type: "spring", stiffness: 400 }} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-16 flex justify-center items-center gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <motion.div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400" animate={{ scaleX: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} />
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-orange-400' : 'bg-orange-500'}`} animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} />
              ))}
            </div>
            <motion.div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400" animate={{ scaleX: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} />
          </motion.div>
        </div>
      </section>

      {/* ─── ACTUALITÉS SECTION ─── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          animate={{
            background: [
              'radial-gradient(circle at 10% 20%, rgba(251, 146, 60, 0.25), transparent 50%)',
              'radial-gradient(circle at 90% 80%, rgba(249, 115, 22, 0.25), transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.20), transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.25), transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.25), transparent 50%)',
              'radial-gradient(circle at 10% 20%, rgba(251, 146, 60, 0.25), transparent 50%)',
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-orange-300/30 to-orange-400/20 blur-3xl"
          style={{ width: 500, height: 500, left: '-150px', top: '-100px' }}
          animate={{ 
            x: [0, 100, -50, 0], 
            y: [0, 50, -80, 0], 
            scale: [1, 1.3, 0.9, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full bg-gradient-to-l from-orange-400/25 to-orange-500/15 blur-3xl"
          style={{ width: 450, height: 450, right: '-100px', bottom: '-100px' }}
          animate={{ 
            x: [0, -80, 50, 0], 
            y: [0, -60, 40, 0], 
            scale: [1, 1.2, 1.1, 1] 
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex justify-center items-center gap-3 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="w-3 h-3 rounded-full bg-orange-400" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
              <motion.div className="w-3 h-3 rounded-full bg-orange-500" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
              <motion.div className="w-3 h-3 rounded-full bg-orange-600" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
            </motion.div>

            <motion.div 
              className="inline-block mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto" />
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.span
                className="inline-block text-orange-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Actualités
              </motion.span>
              <motion.span
                className="inline-block text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {' '}et
              </motion.span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Événements
              </motion.span>
            </motion.h2>

            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Restez informés des dernières actualités du Lycée Mohammed VI d&apos;Excellence
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="lg:col-span-1 self-center"
              onMouseEnter={() => setActiveNews(0)}
              onMouseLeave={() => setActiveNews(-1)}
            >
              <motion.div 
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-orange-200/50 transition-all duration-500 overflow-hidden cursor-pointer h-fit border border-orange-200/30"
                animate={{
                  y: activeNews === 0 ? -8 : 0,
                  scale: activeNews === 0 ? 1.02 : 1,
                  boxShadow: activeNews === 0 ? '0 20px 60px rgba(251, 146, 60, 0.2)' : '0 10px 30px rgba(0,0,0,0.05)',
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div 
                    className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-orange-500/30"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    À la une
                  </motion.div>
                </div>
                
                <div className="p-8 flex flex-col justify-between">
                  <motion.div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600" />
                  <motion.div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-3xl shadow-sm border border-orange-200/50 flex-shrink-0">
                        {newsItems[0].icon}
                      </motion.div>
                      <div>
                        <motion.div className="text-xs text-orange-600/70 font-medium flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {newsItems[0].date}
                        </motion.div>
                        <motion.h3 className="text-xl font-bold text-gray-800 leading-tight">
                          {newsItems[0].title}
                        </motion.h3>
                      </div>
                    </div>
                    <motion.p className="text-gray-600 text-sm leading-relaxed">
                      {newsItems[0].description}
                    </motion.p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-orange-100/50 pt-4 mt-4">
                    <motion.div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-600 text-xs font-semibold rounded-full border border-orange-400/20">
                      {newsItems[0].category}
                    </motion.div>
                    <motion.div 
                      className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-700 transition-colors duration-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span>Lire la suite</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {newsItems.slice(1, 5).map((news, index) => (
                <motion.div
                  key={news.id}
                  custom={index + 1}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className="col-span-1"
                  onMouseEnter={() => setActiveNews(index + 1)}
                  onMouseLeave={() => setActiveNews(-1)}
                >
                  <motion.div 
                    className="relative bg-white rounded-2xl shadow-lg hover:shadow-orange-200/50 transition-all duration-500 overflow-hidden cursor-pointer h-[320px] border border-orange-200/30 flex flex-col"
                    animate={{
                      y: activeNews === index + 1 ? -8 : 0,
                      scale: activeNews === index + 1 ? 1.02 : 1,
                      boxShadow: activeNews === index + 1 ? '0 20px 60px rgba(251, 146, 60, 0.15)' : '0 10px 30px rgba(0,0,0,0.05)',
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative h-[70%] overflow-hidden flex-shrink-0">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    
                    <div className="p-4 h-[30%] flex flex-col justify-between flex-shrink-0">
                      <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600" />
                      <motion.div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
                      
                      <div>
                        <motion.div className="text-[10px] text-orange-600/70 font-medium flex items-center gap-1.5 mb-1">
                          <svg className="w-2.5 h-2.5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {news.date}
                        </motion.div>
                        <motion.h3 className="text-sm font-bold text-gray-800 leading-tight line-clamp-1 mb-1">
                          {news.title}
                        </motion.h3>
                        <motion.p className="text-gray-600 text-[10px] leading-relaxed line-clamp-2">
                          {news.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>


          <motion.div
            className="mt-16 flex justify-center items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
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
                  className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-orange-400' : 'bg-orange-500'}`}
                  animate={{
                    scale: [1, 1.5, 1],
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
      </section>

      {/* ─── VALUES SECTION ─── */}
      <section className="relative py-32 bg-white overflow-hidden">
        <ValuesOrangeDecorations />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-block mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto" />
            </motion.div>
            
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                Nos Valeurs
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Des principes fondamentaux qui guident notre engagement envers l'excellence
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {valuesData.map((item, index) => {
              const colors = [
                { from: 'from-orange-400', to: 'to-orange-600', border: 'border-orange-400', bg: 'bg-orange-50', icon: '🎯', highlightColor: '#FB923C' },
                { from: 'from-orange-500', to: 'to-orange-700', border: 'border-orange-500', bg: 'bg-orange-50/80', icon: '🌍', highlightColor: '#F97316' },
                { from: 'from-orange-600', to: 'to-orange-800', border: 'border-orange-600', bg: 'bg-orange-50/60', icon: '📈', highlightColor: '#EA580C' },
                { from: 'from-orange-400', to: 'to-orange-700', border: 'border-orange-400', bg: 'bg-orange-50/90', icon: '🌟', highlightColor: '#F97316' }
              ];
              const color = colors[index % colors.length];
              const isHighlighted = index === highlightedIndex;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    className={`relative h-full p-8 rounded-2xl bg-white shadow-md transition-all duration-300 border-t-4 ${color.border} overflow-hidden`}
                    animate={{
                      scale: isHighlighted ? 1.02 : 1,
                      boxShadow: isHighlighted ? '0 15px 40px rgba(251, 146, 60, 0.25)' : '0 10px 30px rgba(0,0,0,0.05)',
                      borderColor: isHighlighted ? '#FB923C' : undefined,
                      height: isHighlighted ? '102%' : '100%',
                      marginTop: isHighlighted ? '-1%' : '0%',
                      marginBottom: isHighlighted ? '-1%' : '0%',
                    }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4, boxShadow: '0 15px 40px rgba(251, 146, 60, 0.15)', scale: 1.01 }}
                  >
                    <motion.div
                      className={`absolute inset-0 transition-opacity duration-1000`}
                      animate={{
                        opacity: isHighlighted ? 0.6 : 0,
                        background: isHighlighted ? `radial-gradient(circle at center, ${color.highlightColor}15, transparent 70%)` : 'transparent',
                      }}
                      transition={{ duration: 1 }}
                    />
                    
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${color.from} ${color.to} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      animate={{ opacity: isHighlighted ? 0.08 : 0 }}
                      transition={{ duration: 1 }}
                    />
                    
                    {isHighlighted && (
                      <motion.div
                        className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-orange-400/30 via-orange-500/30 to-orange-600/30 blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                    
                    <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full ${color.bg} opacity-50`} />
                    
                    <motion.div
                      className={`relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl ${color.bg} mb-5 shadow-sm border border-orange-200/30`}
                      animate={{
                        scale: isHighlighted ? 1.08 : 1,
                        rotate: isHighlighted ? [0, -3, 3, 0] : 0,
                        backgroundColor: isHighlighted ? '#FFF7ED' : undefined,
                        borderColor: isHighlighted ? '#FB923C' : undefined,
                      }}
                      transition={{ duration: 1, rotate: { duration: 0.6 } }}
                      whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0], transition: { duration: 0.4 } }}
                    >
                      <span className="text-3xl">{color.icon}</span>
                    </motion.div>
                    
                    <motion.div
                      className={`absolute top-4 right-4 text-5xl font-bold select-none`}
                      animate={{
                        color: isHighlighted ? color.highlightColor : `${color.border}`,
                        opacity: isHighlighted ? 0.25 : 0.1,
                        scale: isHighlighted ? 1.1 : 1,
                      }}
                      transition={{ duration: 1 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>
                    
                    <motion.h3
                      className={`text-xl font-bold text-gray-800 mb-4 relative z-10 transition-colors duration-500`}
                      animate={{ color: isHighlighted ? color.highlightColor : '#1F2937' }}
                      transition={{ duration: 1 }}
                    >
                      {item.title}
                      <motion.span
                        className="block h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-2"
                        initial={{ width: '0%' }}
                        animate={{ width: isHighlighted ? '100%' : '0%' }}
                        transition={{ duration: 0.8 }}
                      />
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 text-sm leading-relaxed relative z-10"
                      animate={{ color: isHighlighted ? '#374151' : '#4B5563' }}
                      transition={{ duration: 1 }}
                    >
                      {item.text}
                    </motion.p>
                    
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color.from} ${color.to}`}
                      animate={{ width: isHighlighted ? '100%' : '0%' }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    {isHighlighted && (
                      <motion.div
                        className="absolute top-4 left-4 z-20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <span className="text-[10px] font-semibold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200/50 shadow-sm">
                          ✦ Actif
                        </span>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>


          <motion.div
            className="flex justify-center items-center gap-4 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
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
      </section>
    </motion.main>
  );
}