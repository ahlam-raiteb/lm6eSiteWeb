'use client';

import { motion, Variants } from 'framer-motion';

export const CPGEPresentationContent = () => {
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
      icon: '⭐',
      title: 'Excellence',
      description: 'Offrir à tous les élèves méritants du Maroc l\'accès aux meilleures écoles et universités nationales et internationales.',
      color: 'from-orange-400 to-orange-600',
      borderColor: 'border-orange-400',
      bgColor: 'bg-orange-50'
    },
    {
      id: 2,
      icon: '🌍',
      title: 'Diversité',
      description: 'Valoriser la diversité géographique et sociale en reconnaissant que le potentiel d\'excellence est partout.',
      color: 'from-orange-500 to-orange-700',
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50/80'
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Confiance & Collaboration',
      description: 'Créer un environnement basé sur la confiance en soi, en ses camarades, en ses professeurs et la collaboration mutuelle.',
      color: 'from-orange-600 to-orange-800',
      borderColor: 'border-orange-600',
      bgColor: 'bg-orange-50/60'
    },
    {
      id: 4,
      icon: '⚖️',
      title: 'Équilibre & Épanouissement',
      description: 'Maintenir un équilibre entre travail encadré et autonome, avec des activités d\'épanouissement pour une performance optimale.',
      color: 'from-orange-700 to-orange-900',
      borderColor: 'border-orange-700',
      bgColor: 'bg-orange-50/40'
    },
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
            Présentation des Classes Préparatoires Grandes Écoles
          </span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Excellence, diversité, confiance, collaboration, équilibre, lâcher prise ...
        </p>
      </div>

      {/* Introduction Text */}
      <div className="backdrop-blur-sm bg-orange-50/50 p-6 sm:p-8 rounded-2xl border border-orange-200/30 shadow-lg shadow-orange-100/20">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Les Classes Préparatoires aux Grandes Écoles (CPGE) du Lycée Mohammed VI d'Excellence visent à offrir à tous les élèves méritants du Maroc l'accès aux meilleures écoles et universités nationales et internationales, sans que le facteur financier soit un obstacle à cette ambition grâce à un système de bourse.
        </p>
      </div>

      {/* Values Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Detailed Content */}
      <div className="space-y-6">
        <div className="backdrop-blur-sm bg-white/70 p-6 sm:p-8 rounded-2xl border border-orange-200/20 shadow-lg shadow-orange-100/10 hover:shadow-orange-200/30 transition-all duration-300">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Valorisant la diversité géographique et sociale, elles reconnaissent à travers la sélection de ses élèves que le potentiel d'excellence est partout et qu'il pourra pleinement s'exprimer dans l'environnement pédagogique et éducatif du Lycée Mohammed VI d'excellence.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-white/70 p-6 sm:p-8 rounded-2xl border border-orange-200/20 shadow-lg shadow-orange-100/10 hover:shadow-orange-200/30 transition-all duration-300">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Un élément essentiel est à la base de la réussite, cet élément est la <span className="text-orange-600 font-semibold">confiance</span> : confiance en soi, en ses camarades, en ses professeurs et en l'institution. Sans elle, pas de performance.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-white/70 p-6 sm:p-8 rounded-2xl border border-orange-200/20 shadow-lg shadow-orange-100/10 hover:shadow-orange-200/30 transition-all duration-300">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Un autre élément de la réussite réside dans la <span className="text-orange-600 font-semibold">collaboration</span> entre les éléments d'une promotion. Les élèves comprennent très rapidement que collaborer est plus bénéfique qu'une compétition exacerbée entre eux, créant un environnement d'apprentissage mutuel.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-gradient-to-r from-white/80 to-orange-50/80 p-6 sm:p-8 rounded-2xl border border-orange-200/30 shadow-lg shadow-orange-100/20 hover:shadow-orange-200/40 transition-all duration-300">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Enfin, trouver un <span className="text-orange-600 font-semibold">équilibre</span> entre travail encadré et autonome, savoir lâcher prise à travers les nombreuses activités d'épanouissement organisées au sein du lycée et garder du temps pour ses passions permettent de maintenir un équilibre sain pour une performance optimale.
          </p>
        </div>
      </div>

      {/* Schools Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
            Débouchés des CPGE
          </span>
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* France */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 p-6 rounded-2xl border border-blue-200/30 shadow-lg shadow-blue-100/20">
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🇫🇷</span>
              Écoles d'ingénieurs en France
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/70 p-4 rounded-xl border border-blue-200/20">
                <span className="text-gray-600 font-medium">Polytechnique</span>
                <span className="text-2xl font-bold text-orange-600">94</span>
              </div>
              <div className="flex items-center justify-between bg-white/70 p-4 rounded-xl border border-blue-200/20">
                <span className="text-gray-600 font-medium">CentraleSupélec</span>
                <span className="text-2xl font-bold text-orange-600">18</span>
              </div>
              <div className="flex items-center justify-between bg-white/70 p-4 rounded-xl border border-blue-200/20">
                <span className="text-gray-600 font-medium">Mines Paris</span>
                <span className="text-2xl font-bold text-orange-600">12</span>
              </div>
              <div className="flex items-center justify-between bg-white/70 p-4 rounded-xl border border-blue-200/20">
                <span className="text-gray-600 font-medium">Ponts ParisTech</span>
                <span className="text-2xl font-bold text-orange-600">8</span>
              </div>
              <div className="flex items-center justify-between bg-white/70 p-4 rounded-xl border border-blue-200/20">
                <span className="text-gray-600 font-medium">Autres écoles</span>
                <span className="text-2xl font-bold text-orange-600">38</span>
              </div>
            </div>
          </div>

          {/* Morocco */}
          <div className="bg-gradient-to-br from-green-50 to-green-100/30 p-6 rounded-2xl border border-green-200/30 shadow-lg shadow-green-100/20">
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🇲🇦</span>
              Écoles d'ingénieurs au Maroc
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/70 p-4 rounded-xl border border-green-200/20">
                <span className="text-gray-600 font-medium">EMI, EHTP, ECC, EMINES</span>
                <span className="text-2xl font-bold text-orange-600">165</span>
              </div>
              <div className="flex items-center justify-between bg-white/70 p-4 rounded-xl border border-green-200/20">
                <span className="text-gray-600 font-medium">Autres écoles du CNC</span>
                <span className="text-2xl font-bold text-orange-600">163</span>
              </div>
              <div className="flex items-center justify-between bg-white/70 p-4 rounded-xl border border-green-200/20">
                <span className="text-gray-600 font-medium">Écoles internationales</span>
                <span className="text-2xl font-bold text-orange-600">15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CPGEPresentationContent;