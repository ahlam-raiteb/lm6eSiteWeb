'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export const CPGECandidatureContent = () => {
  const [activeVoie, setActiveVoie] = useState<'voie1' | 'voie2' | 'mission'>('voie1');

  const voie1Steps = [
    {
      title: 'Candidature',
      icon: '📝',
      items: [
        'Portail ministériel : www.cpge.ac.ma ou https://massarservice.men.gov.ma/moutamadris',
        'Réponse OUI à la question : « Souhaitez-vous que le Lycée Mohammed VI d\'Excellence apparaisse sur la liste de vos choix ? »',
        'Portail CPGE',
        'Simulateur de points',
        'Dossier de bourse'
      ]
    },
    {
      title: 'Sélection',
      icon: '🎯',
      items: [
        'Classement selon un total de points sur 200',
        'Liste principale affichée sur le portail ministériel fin juin ou début juillet 2026'
      ]
    },
    {
      title: 'Inscription',
      icon: '📋',
      items: [
        'Dépôt des documents ci-dessous au LM6E jusqu\'au 24 juillet (du lundi au vendredi de 9h à 17h) :',
        '• Original attestation bac + 2 copies',
        '• 2 photos d\'identité récentes',
        '• Photocopie CNI',
        '• Photocopie relevé de notes du bac'
      ]
    }
  ];

  const voie2Steps = [
    {
      title: 'Candidature',
      icon: '📝',
      items: [
        'Portail ministériel : www.cpge.ac.ma ou https://massarservice.men.gov.ma/moutamadris',
        'Réponse OUI à la question : « Si vous n\'êtes pas classé dans la liste principale de la voie 1, acceptez-vous d\'être convoqué à un entretien de sélection ? »',
        'Nouveauté 2026 : Ouverture aux élèves scientifiques des filières sport-études (BAC SM, SP ou SVT) pour la classe PCSI',
        'Dossier de bourse'
      ]
    },
    {
      title: 'Sélection',
      icon: '🎯',
      items: [
        'Tests d\'admission :',
        '• MPSI (BAC SM) : le 12, 13 et 14 juillet 2026',
        '• PCSI (BAC SM / SP / SVT) : le 15 juillet 2026',
        '• TSI/MPSI (BAC SP) : le 17 et 18 juillet 2026',
        'Hébergement et restauration pris en charge pendant les tests',
        '(Un courriel sera envoyé aux candidats admissibles, précisant les modalités de la sélection finale.)'
      ]
    },
    {
      title: 'Inscription',
      icon: '📋',
      items: [
        'Dépôt des documents ci-dessous au LM6E jusqu\'au 31 juillet 2026 (du lundi au vendredi de 9h à 17h) :',
        '• Original attestation bac + 2 copies',
        '• 2 photos d\'identité récentes',
        '• Photocopie CNI',
        '• Photocopie relevé de notes du bac'
      ]
    }
  ];

  const voieMissionSteps = [
    {
      title: 'Candidature',
      icon: '📝',
      items: [
        'Deadline : 04/07/2026 (Veuillez consulter votre espace pour plus d\'informations)',
        'Candidature directe sur la plateforme : cpge.lm6e.ma (du 10 juin au 04 juillet)',
        'Plateforme LM6E'
      ]
    },
    {
      title: 'Sélection',
      icon: '🎯',
      items: [
        'Présélection : le 09 juillet 2026',
        'Tests d\'admission : le 15 et 16 juillet 2026',
        'Liste des admissibles publiée sur le site',
        'Dossier de bourse'
      ]
    },
    {
      title: 'Inscription',
      icon: '📋',
      items: [
        'Dépôt des documents ci-dessous au LM6E jusqu\'au 24 juillet (du lundi au vendredi de 9h à 17h) :',
        '• Original attestation bac + 2 copies',
        '• 2 photos d\'identité récentes',
        '• Photocopie CNI',
        '• Photocopie relevé de notes du bac'
      ]
    }
  ];

  const voieData = {
    voie1: {
      title: 'Voie 1',
      subtitle: 'Baccalauréat Marocain',
      description: 'Candidat marocain ayant un baccalauréat marocain uniquement',
      icon: '🚀',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      steps: voie1Steps,
      ctaText: 'Postuler via le portail ministériel',
      ctaLink: 'https://apee.ma',
      tabColor: 'from-orange-400 to-orange-600'
    },
    voie2: {
      title: 'Voie 2',
      subtitle: 'Baccalauréat Marocain',
      description: 'Candidat marocain ayant un baccalauréat marocain uniquement',
      icon: '🎯',
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50/80',
      steps: voie2Steps,
      ctaText: 'Postuler via le portail ministériel',
      ctaLink: 'https://apee.ma',
      tabColor: 'from-orange-500 to-orange-700'
    },
    mission: {
      title: 'Voie Mission',
      subtitle: 'Baccalauréat Étranger',
      description: 'Candidat marocain ayant un baccalauréat étranger uniquement',
      icon: '🌍',
      color: 'from-orange-600 to-orange-800',
      bgColor: 'bg-orange-50/60',
      steps: voieMissionSteps,
      ctaText: 'Postuler sur cpge.lm6e.ma',
      ctaLink: 'https://cpge.lm6e.ma',
      tabColor: 'from-orange-600 to-orange-800'
    }
  };

  const tabs = [
    { id: 'voie1', label: 'Voie 1', icon: '🚀', color: 'from-orange-400 to-orange-600' },
    { id: 'voie2', label: 'Voie 2', icon: '🎯', color: 'from-orange-500 to-orange-700' },
    { id: 'mission', label: 'Voie Mission', icon: '🌍', color: 'from-orange-600 to-orange-800' }
  ];

  const currentVoie = voieData[activeVoie];

  // Auto-rotation every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const voieIds: ('voie1' | 'voie2' | 'mission')[] = ['voie1', 'voie2', 'mission'];
      const currentIndex = voieIds.indexOf(activeVoie);
      const nextIndex = (currentIndex + 1) % voieIds.length;
      setActiveVoie(voieIds[nextIndex]);
    }, 20000); 

    return () => clearInterval(interval);
  }, [activeVoie]);

  // Progress indicator for auto-rotation
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = 20000; // 30 seconds

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / interval) * 100;
      if (newProgress >= 100) {
        setProgress(0);
      } else {
        setProgress(newProgress);
      }
    };

    const progressInterval = setInterval(updateProgress, 100);
    return () => clearInterval(progressInterval);
  }, [activeVoie]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 w-[95%] mx-auto"
    >
      {/* Section Title */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 bg-orange-50/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg border border-orange-200/30 mb-4">
          <span className="text-2xl animate-pulse">📋</span>
          <span className="text-sm font-semibold text-gray-700 tracking-wide">Candidature</span>
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
            Processus de Candidature CPGE
          </span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <span>Choisissez votre voie d'accès</span>
          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-medium">
            Auto-rotation 30s
          </span>
        </p>
      </div>

      {/* Tab Buttons with Progress Bar */}
      <div className="relative">
        <div className="flex justify-center gap-3 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => {
                setActiveVoie(tab.id as typeof activeVoie);
                setProgress(0);
              }}
              className={`group relative px-6 py-3 rounded-2xl text-center transition-all duration-300 ${
                activeVoie === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg shadow-orange-500/30 scale-105`
                  : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-800 border border-gray-200 hover:border-orange-300/50 shadow-sm hover:shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative z-10 flex items-center gap-2">
                <motion.span 
                  className="text-xl"
                  animate={activeVoie === tab.id ? { 
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.2, 1]
                  } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {tab.icon}
                </motion.span>
                <span className={`font-semibold text-sm ${
                  activeVoie === tab.id ? 'text-white' : 'text-gray-700'
                }`}>
                  {tab.label}
                </span>
              </div>
              {activeVoie === tab.id && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur-xl"
                  layoutId="tabBackground"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Progress Bar for Auto-rotation */}
        <div className="flex justify-center mt-4">
          <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Timer indicator */}
        <div className="flex justify-center mt-1">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Changement automatique dans {Math.ceil((30000 - (progress / 100) * 30000) / 1000)}s
          </span>
        </div>
      </div>

      {/* Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeVoie}
          initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, y: -50, scale: 0.9, rotateX: -10 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1],
            type: 'spring',
            stiffness: 100,
            damping: 20
          }}
          className="bg-white rounded-3xl shadow-2xl shadow-orange-100/30 border border-orange-100/50 overflow-hidden"
        >
          {/* Header with gradient and animation */}
          <motion.div 
            className={`bg-gradient-to-r ${currentVoie.color} px-6 sm:px-8 py-5 relative overflow-hidden`}
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: '100% 50%' }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative z-10 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl"
                  animate={{ 
                    rotate: [0, -5, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {currentVoie.icon}
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-2xl font-bold text-white"
                    key={activeVoie}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentVoie.title}
                  </motion.h3>
                  <p className="text-orange-100 text-sm">{currentVoie.subtitle}</p>
                </div>
              </div>
              <motion.span 
                className="bg-white/20 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full font-semibold border border-white/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {currentVoie.description}
              </motion.span>
            </div>
          </motion.div>

          {/* Steps with staggered animations */}
          <div className="p-6 sm:p-8 space-y-6">
            {currentVoie.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20
                }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${currentVoie.color} flex items-center justify-center text-white text-lg shadow-lg shadow-orange-500/30 flex-shrink-0`}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {step.icon}
                    </motion.div>
                    {index < currentVoie.steps.length - 1 && (
                      <motion.div 
                        className="w-0.5 h-8 bg-gradient-to-b from-orange-400 to-transparent mt-1"
                        initial={{ height: 0 }}
                        animate={{ height: 32 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      />
                    )}
                  </div>
                  <div className="flex-1 pt-0.5">
                    <motion.h4 
                      className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.1 }}
                    >
                      {step.title}
                      <span className="flex-1 h-px bg-gradient-to-r from-orange-200 to-transparent ml-2" />
                    </motion.h4>
                    <ul className="space-y-2">
                      {step.items.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex} 
                          className="text-gray-600 text-sm leading-relaxed flex items-start gap-2 bg-orange-50/50 p-2.5 rounded-xl hover:bg-orange-50 transition-colors duration-200"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15 + itemIndex * 0.05 + 0.2 }}
                        >
                          <motion.span 
                            className="text-orange-400 mt-1 flex-shrink-0"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            ✦
                          </motion.span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button with animation */}
          <motion.div 
            className="px-6 sm:px-8 pb-6 sm:pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full"
            >
              <Link
                href={currentVoie.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 w-full py-3.5 bg-gradient-to-r ${currentVoie.color} text-white font-semibold rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 text-sm relative overflow-hidden group`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span>🔗</span>
                {currentVoie.ctaText}
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>


    </motion.div>
  );
};

export default CPGECandidatureContent;