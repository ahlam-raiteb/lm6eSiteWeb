'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  // ── State for active infrastructure tab ──────────────────────────────
  const [activeInfraTab, setActiveInfraTab] = useState<'educative' | 'sportive' | 'residentiel'>('educative');

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  // ── Video ref for autoplay ──────────────────────────────────────
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  // ── Infrastructure Data ──────────────────────────────────────────
  const educationalInfra = [
    { icon: '🔬', name: 'Laboratoires de physique-chimie', description: 'Équipements modernes pour les expériences scientifiques.' },
    { icon: '⚙️', name: 'Laboratoires des sciences de l\'ingénieur', description: 'Espaces dédiés aux projets d\'ingénierie et de technologie.' },
    { icon: '🧬', name: 'Laboratoires de sciences de la vie et de la terre', description: 'Installations pour l\'étude de la biologie et des sciences naturelles.' },
    { icon: '💻', name: 'Laboratoires d\'informatique', description: 'Salles équipées d\'ordinateurs et de technologies numériques.' },
    { icon: '🌍', name: 'Laboratoires de langues', description: 'Environnements immersifs pour l\'apprentissage des langues.' },
    { icon: '🎵', name: 'Salles de musique', description: 'Espaces acoustiques pour la pratique et l\'apprentissage musical.' },
    { icon: '🎨', name: 'Salles d\'arts plastiques', description: 'Ateliers pour l\'expression artistique et créative.' },
    { icon: '🎬', name: 'Salles de projection', description: 'Espaces audiovisuels pour les présentations et projections.' },
    { icon: '📚', name: 'Centre de Documentation et d\'Information (CDI)', description: 'Ressources documentaires et espace de recherche.' },
  ];

  const sportsInfra = [
    { icon: '⚽', name: 'Terrain de football', description: 'Terrain réglementaire pour la pratique du football.' },
    { icon: '🤾', name: 'Terrain de hand-ball', description: 'Espaces dédiés au handball.' },
    { icon: '🎾', name: 'Terrain de tennis', description: 'Terrain pour la pratique du tennis.' },
    { icon: '🏀', name: 'Terrain de basket-ball', description: 'Courts pour la pratique du basketball.' },
    { icon: '🏟️', name: 'Salle omnisports', description: 'Espace polyvalent pour diverses activités sportives.' },
    { icon: '🏊', name: 'Piscine semi-olympique couverte', description: 'Installation aquatique pour la natation et les sports d\'eau.' },
  ];

  const residentialInfra = [
    { icon: '🌳', name: 'Campus verdoyant', description: 'Un cadre exceptionnel, entouré de verdure, offrant un environnement agréable et épanouissant.' },
    { icon: '🛏️', name: 'Capacité de 1800 lits', description: 'Le campus du Lycée d\'Excellence de Benguérir peut accueillir jusqu\'à 1800 élèves internes.' },
    { icon: '🏠', name: 'Résidences séparées', description: 'Deux résidences distinctes accueillant les filles d\'un côté et les garçons de l\'autre.' },
    { icon: '👨‍🏫', name: 'Encadrement pédagogique', description: 'Surveillance et encadrement assurés par une équipe pédagogique qualifiée.' },
    { icon: '🛋️', name: 'Chambres confortables', description: 'Espaces de vie confortables constituant à la fois un lieu de repos et de travail.' },
    { icon: '📖', name: 'Style de vie académique', description: 'Au-delà d\'un simple hébergement, le campus promeut un style de vie permettant aux élèves la réalisation de leurs projets académiques.' },
  ];

  // ── Infrastructure Tabs Data ──────────────────────────────────────
  const infraTabs = [
    { id: 'educative' as const, icon: '📚', label: 'Infrastructures Éducatives', count: educationalInfra.length },
    { id: 'sportive' as const, icon: '🏅', label: 'Équipements Sportifs', count: sportsInfra.length },
    { id: 'residentiel' as const, icon: '🏠', label: 'Campus Résidentiel', count: residentialInfra.length },
  ];

  // ── Missions Data ──────────────────────────────────────────────────
  const missionsData = [
    {
      icon: '👨‍🏫',
      title: 'Corps professoral compétent',
      description: 'Professeurs recrutés à travers un système sélectif et formés aux nouvelles méthodes pédagogiques.'
    },
    {
      icon: '🤝',
      title: 'Équipe éducative expérimentée',
      description: 'Personnel à l\'écoute des élèves et des parents pour un accompagnement personnalisé.'
    },
    {
      icon: '📊',
      title: 'Stratégie de gouvernance',
      description: 'Une approche pensée pour le bien-être et l\'épanouissement de l\'élève.'
    },
    {
      icon: '🏥',
      title: 'Équipe médico-sociale',
      description: 'Suivi médical et soutien psychologique assurés pour tous les élèves.'
    }
  ];

  // ── Creative Orange Background ──────────────────────────────────────
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
      
      {/* Floating shapes */}
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
      
      {/* Floating particles */}
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
      
      {/* Rotating rings */}
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
      
      {/* Floating emojis */}
      {['⭐', '✨', '🌟', '🎯', '🏆', '💫', '📐', '🎓'].map((icon, i) => (
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
      
      {/* Glowing dots */}
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
      
      {/* Sparkles */}
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

  // ── Tab Content Components ──────────────────────────────────────────

  // Educational Infrastructure Content
  const EducationalContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {educationalInfra.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="group"
        >
          <div className="bg-white rounded-xl p-4 border border-orange-100/50 shadow-sm hover:shadow-orange-200/30 hover:border-orange-200 transition-all duration-300 h-full">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm group-hover:text-orange-600 transition-colors duration-300">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-xs mt-1">{item.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  // Sports Infrastructure Content
  const SportsContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {sportsInfra.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="group"
        >
          <div className="bg-white rounded-xl p-4 border border-orange-100/50 shadow-sm hover:shadow-orange-200/30 hover:border-orange-200 transition-all duration-300 h-full">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm group-hover:text-orange-600 transition-colors duration-300">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-xs mt-1">{item.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  // Residential Infrastructure Content
  const ResidentialContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Campus Description */}
      <div className="backdrop-blur-sm bg-orange-50/30 p-6 rounded-2xl border border-orange-200/30 shadow-lg shadow-orange-100/10">
        <p className="text-gray-700 text-base leading-relaxed">
          Dans un cadre exceptionnel, entouré de verdure, le campus résidentiel du Lycée d'excellence offre un cadre de vie et d'apprentissage agréable et épanouissant. Au-delà d'un simple hébergement, le campus promeut un style de vie permettant aux élèves la réalisation de leurs projets académiques. Tous les élèves intégrant le Lydex sont d'office internes. Le campus est composé de deux résidences séparées accueillant les filles d'un côté, et les garçons de l'autre, sous la surveillance et l'encadrement d'une équipe pédagogique.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mt-3">
          Les élèves sont logés en chambres confortables constituant un lieu de repos et de travail.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {residentialInfra.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="group"
          >
            <div className="bg-white rounded-xl p-4 border border-orange-100/50 shadow-sm hover:shadow-orange-200/30 hover:border-orange-200 transition-all duration-300 h-full">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm group-hover:text-orange-600 transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-xs mt-1">{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.main
      className="min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ─── HERO SECTION WITH BACKGROUND VIDEO ─── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-20">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            // poster="/videos/enter.MP4"
          >
            {/* <source src="/videos/enter.mp4" type="video/mp4" /> */}
            {/* Fallback to images if video doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800" />
          </video>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/40 z-10" />
          
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

          {/* Animated particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute z-10 rounded-full pointer-events-none"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                background: `rgba(251, 146, 60, ${Math.random() * 0.2 + 0.05})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, 30, -20, 0],
                opacity: [0, 0.5, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Content - Full Width */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto"
          >
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-center md:text-left"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500">
                Lycée Mohammed VI
              </span>
              <br />
              <span className="text-white drop-shadow-lg">d’Excellence LM6E</span>
            </motion.h1>

        

            {/* Full Text - Single Block */}
            <motion.div
              variants={itemVariants}
              className="backdrop-blur-sm bg-black/40 p-6 sm:p-8 rounded-2xl border border-orange-500/15 shadow-2xl shadow-black/30 mb-8"
            >
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                <span className="text-orange-400 font-semibold">Le Lycée Mohammed VI d'Excellence (LM6E)</span> est un établissement scientifique et technologique avec un campus résidentiel intégré. Il comporte le Secondaire Qualifiant et des Classes Préparatoires aux Grandes Ecoles. Fruit d'un partenariat public/privé et porté par la <span className="text-orange-400 font-semibold">Fondation OCP</span> pour la promotion d'un enseignement d'excellence en partenariat avec le Ministère de l'Éducation Nationale de la Formation Professionnelle de l'Enseignement Supérieur et de la Recherche Scientifique, trois dimensions fondatrices sous-tendent le fonctionnement du Lycée : <span className="text-orange-300">Un établissement d'excellence ouvert tout d'abord aux élèves méritants</span>; <span className="text-orange-300">Doté d'une dimension sociale favorisant l'accès à l'excellence aux élèves brillants issus de milieux vulnérables</span>; <span className="text-orange-300">Porteur d'une dimension nationale dans la mesure où il couvre l'ensemble des régions du Royaume</span>. Situé dans un cadre exceptionnel, sur l'axe <span className="text-orange-400 font-semibold">Casablanca-Marrakech</span> sur une superficie de <span className="text-orange-400 font-semibold">18 hectares</span> au cœur de la ville verte Mohammed VI de Benguerir et proche de l'<span className="text-orange-400 font-semibold">Université Mohammed VI Polytechnique</span>, l'établissement bénéficie d'un environnement naturel de qualité constituant une véritable bulle d'oxygène pour le Lycée. Son architecture moderne et innovante est conçue pour répondre à un projet pédagogique et éducatif de qualité. Ses équipements et infrastructures répondent aux besoins d'un enseignement moderne, exigeant et ouvert sur le monde.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── INFRASTRUCTURE SECTION ─── */}
      <section className="relative py-20 overflow-hidden bg-white">
        <CreativeOrangeBackground />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 bg-orange-50/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg border border-orange-200/30 mb-4">
                <span className="text-2xl">🏗️</span>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">Infrastructures</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                  Nos Installations
                </span>
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                Découvrez les infrastructures modernes et complètes du Lycée d'Excellence de Benguérir
              </p>
            </motion.div>

            {/* ─── 3 INFRASTRUCTURE TAB BUTTONS ─── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10"
            >
              {infraTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveInfraTab(tab.id)}
                  className={`group relative px-4 py-3 rounded-2xl text-center transition-all duration-300 ${
                    activeInfraTab === tab.id
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 scale-105'
                      : 'bg-white/80 text-gray-700 hover:text-orange-600 hover:bg-orange-50/80 border border-gray-200 hover:border-orange-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <span className="text-2xl">{tab.icon}</span>
                    <span className={`font-semibold text-sm ${
                      activeInfraTab === tab.id ? 'text-white' : 'text-gray-700 group-hover:text-orange-600'
                    }`}>
                      {tab.label}
                    </span>
                    <span className={`text-xs ${
                      activeInfraTab === tab.id ? 'text-orange-100' : 'text-gray-400'
                    }`}>
                      {tab.count} éléments
                    </span>
                  </div>
                  {activeInfraTab === tab.id && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur-xl"
                      layoutId="infraTabBackground"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* ─── TAB CONTENT ─── */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeInfraTab === 'educative' && <EducationalContent />}
                {activeInfraTab === 'sportive' && <SportsContent />}
                {activeInfraTab === 'residentiel' && <ResidentialContent />}
              </AnimatePresence>
            </div>

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

      {/* ─── MISSIONS SECTION ─── */}
      <section className="relative py-20 overflow-hidden bg-white">
        <CreativeOrangeBackground />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 bg-orange-50/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg border border-orange-200/30 mb-4">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">Missions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                  Éduquer, Former, Responsabiliser
                </span>
              </h2>
              <p className="text-gray-500 mt-3 max-w-3xl mx-auto">
                Le Campus scolaire du Lycée d'Excellence de Benguerir a pour mission d'éduquer, former, responsabiliser ses élèves et leur donner des outils et méthodes pour acquérir une culture générale solide qui les prépare à poursuivre des études ambitieuses dans des filières sélectives scientifiques et technologiques. Par ailleurs, l'établissement met tout en œuvre pour offrir un cadre de vie et de travail qui contribue à l'épanouissement personnel nécessaire à la réussite d'études difficiles et exigeantes.
              </p>
            </motion.div>

            {/* Missions Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {missionsData.map((mission, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 border border-orange-100/50 shadow-md hover:shadow-orange-200/40 hover:border-orange-200 transition-all duration-300 h-full text-center">
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="text-4xl mb-4 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {mission.icon}
                      </motion.div>
                      <h4 className="font-bold text-gray-800 text-base group-hover:text-orange-600 transition-colors duration-300">
                        {mission.title}
                      </h4>
                      <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

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