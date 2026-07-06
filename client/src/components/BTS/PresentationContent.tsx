'use client';

import { motion, Variants } from 'framer-motion';

export const BTSPresentationContent = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  const values = [
    {
      id: 1,
      icon: '⚡',
      title: 'BTS Maintenance Électromécanique & Hydromécanique (MEH)',
      description: 'Devenez un expert de la maintenance industrielle. Le BTS Maintenance Électromécanique & Hydromécanique forme des techniciens supérieurs capables d\'assurer la maintenance, le diagnostic et l\'optimisation des systèmes électromécaniques utilisés dans les installations industrielles, notamment celles liées aux secteurs de l\'eau et de l\'énergie.',
      color: 'from-orange-400 to-orange-600',
      borderColor: 'border-orange-400',
      bgColor: 'bg-orange-50',
      debouches: [
        'Technicien Supérieur de maintenance industrielle',
        'Technicien Supérieur électromécanicien',
        'Responsable maintenance',
        'Technicien Supérieur d\'exploitation des installations industrielles',
        'Poursuite d\'études en licence professionnelle ou cycles ingénieurs'
      ]
    },
    {
      id: 2,
      icon: '☀️',
      title: 'BTS Énergies Renouvelables & Efficacité Énergétique (EREE)',
      description: 'Participez à la transition énergétique du Maroc. Le BTS Énergies Renouvelables & Efficacité Énergétique prépare les futurs Technicien Supérieurs à concevoir, installer, exploiter et optimiser les systèmes de production d\'énergie renouvelable.',
      color: 'from-orange-500 to-orange-700',
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50/80',
      debouches: [
        'Technicien Supérieur en énergie solaire et éolienne',
        'Technicien Supérieur en efficacité énergétique',
        'Chargé d\'exploitation des installations énergétiques',
        'Technicien Supérieur en audit énergétique',
        'Poursuite d\'études supérieures dans les métiers de l\'énergie et génie électrique'
      ]
    },
    {
      id: 3,
      icon: '💧',
      title: 'BTS Procédés de Traitement des Eaux (PTE)',
      description: 'Construisez votre carrière dans les métiers de l\'eau. Le BTS Procédés de Traitement des Eaux forme des spécialistes capables de participer à la gestion, l\'exploitation et l\'optimisation des systèmes de traitement des eaux potables et usées.',
      color: 'from-orange-600 to-orange-800',
      borderColor: 'border-orange-600',
      bgColor: 'bg-orange-50/60',
      debouches: [
        'Technicien Supérieur d\'exploitation des stations de traitement des eaux',
        'Technicien Supérieur environnement',
        'Technicien Supérieur contrôle qualité',
        'Technicien Supérieur en assainissement et gestion de l\'eau',
        'Poursuite d\'études supérieures en environnement, eau et développement durable'
      ]
    },
  ];

  const pointsForts = [
    'Formation de haute qualité',
    'Infrastructure didactique et pédagogique',
    'Plateformes techniques modernes',
    'Accompagnement technique et pédagogique',
    'Stages et immersion en entreprise',
    'Métiers d\'avenir dans les secteurs énergétiques, des métiers de la maintenance industrielle et des procédés industriels des eaux'
  ];

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
          <span className="text-2xl">📖</span>
          <span className="text-sm font-semibold text-gray-700 tracking-wide">Présentation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
            Centre de Formation aux Métiers du Développement Vert
          </span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Formations BTS alliant excellence académique, pratique professionnelle et immersion technologique
        </p>
      </div>

      {/* Introduction Text - Inscription Banner */}
      <div className="backdrop-blur-sm bg-gradient-to-r from-orange-500 to-orange-600 p-6 sm:p-8 rounded-2xl border border-orange-200/30 shadow-lg shadow-orange-500/30">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl animate-pulse">📢</span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">INSCRIPTIONS OUVERTES SUR MASSAR</h3>
        </div>
        <p className="text-orange-100 text-base sm:text-lg font-semibold mb-3">Dernier délai : 15 juillet</p>
        <p className="text-white/90 text-base sm:text-lg leading-relaxed">
          Rejoignez le Centre de Formation aux Métiers du Développement Vert (CFMDV) et préparez votre avenir dans des secteurs porteurs au cœur de la transition énergétique et environnementale du Maroc. Nos formations BTS allient excellence académique, pratique professionnelle et immersion dans un environnement technologique de pointe. Les candidatures sont ouvertes via la plateforme Massar jusqu'au 15 juillet.
        </p>
      </div>

      {/* Values Cards - BTS Branches */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <motion.div
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-orange-200/50 transition-all duration-500 p-6 border-t-4 ${item.borderColor} overflow-hidden h-full`}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-50`} />
              <div className="relative z-10">
                <motion.div
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className={`text-lg font-bold text-gray-800 mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Débouchés */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-orange-500">🎯</span>
                    Débouchés
                  </h4>
                  <ul className="space-y-1">
                    {item.debouches.map((debouche, idx) => (
                      <li key={idx} className="text-gray-600 text-xs leading-relaxed flex items-start gap-2 bg-orange-50/50 p-1.5 rounded-lg">
                        <span className="text-orange-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>{debouche}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <motion.div
                className={`absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br ${item.color} opacity-10 rounded-full`}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Points Forts Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
            Points forts de la formation
          </span>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pointsForts.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-orange-100/30 p-4 rounded-2xl border border-orange-200/30 shadow-lg shadow-orange-100/20 hover:shadow-orange-200/40 transition-all duration-300 flex items-center gap-3"
            >
              <span className="text-2xl">✅</span>
              <p className="text-gray-700 text-sm font-medium">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Content */}
      <div className="space-y-6">
        <div className="backdrop-blur-sm bg-white/70 p-6 sm:p-8 rounded-2xl border border-orange-200/20 shadow-lg shadow-orange-100/10 hover:shadow-orange-200/30 transition-all duration-300">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Les étudiants en BTS bénéficient d'un encadrement pédagogique de qualité, avec des professeurs expérimentés et des équipements modernes. La formation inclut des <span className="text-orange-600 font-semibold">projets professionnels</span> et des <span className="text-orange-600 font-semibold">stages en entreprise</span> pour une immersion complète dans le monde du travail.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-gradient-to-r from-white/80 to-orange-50/80 p-6 sm:p-8 rounded-2xl border border-orange-200/30 shadow-lg shadow-orange-100/20 hover:shadow-orange-200/40 transition-all duration-300">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            À l'issue de la formation, les diplômés peuvent poursuivre leurs études en <span className="text-orange-600 font-semibold">licence professionnelle</span> ou s'insérer directement dans la vie active avec un diplôme reconnu par les entreprises et les institutions nationales et internationales.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BTSPresentationContent;