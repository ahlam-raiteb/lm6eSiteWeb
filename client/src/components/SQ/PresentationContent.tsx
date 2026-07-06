'use client';

import { motion, Variants } from 'framer-motion';

export const PresentationContent = () => {
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

  const strategicAxes = [
    {
      id: 1,
      icon: '📚',
      title: 'Offre pédagogique enrichie',
      description: 'Affirmer et consolider l\'orientation scientifique et technologique du lycée en favorisant l\'ouverture culturelle, scientifique et linguistique des élèves.',
      color: 'from-orange-400 to-orange-600',
      borderColor: 'border-orange-400',
      bgColor: 'bg-orange-50'
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Accompagnement personnalisé',
      description: 'Accompagner chaque élève vers sa voie d\'excellence par un suivi de proximité autonomisant.',
      color: 'from-orange-500 to-orange-700',
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50/80'
    },
    {
      id: 3,
      icon: '💻',
      title: 'Usages du numérique',
      description: 'Promouvoir le développement des usages du numérique au service des apprentissages des élèves et de la communication.',
      color: 'from-orange-600 to-orange-800',
      borderColor: 'border-orange-600',
      bgColor: 'bg-orange-50/60'
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
            Découvrez le Secondaire Qualifiant
          </span>
        </h2>
      </div>

      {/* Introduction Text */}
      <div className="backdrop-blur-sm bg-orange-50/50 p-6 sm:p-8 rounded-2xl border border-orange-200/30 shadow-lg shadow-orange-100/20">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Les objectifs, les priorités et les ambitions que le LM6E s'est fixé pour le cycle du Secondaire Qualifiant s'articulent principalement autour de <span className="text-orange-600 font-semibold">3 axes stratégiques</span>:
        </p>
      </div>

      {/* Strategic Axes Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {strategicAxes.map((axis, index) => (
          <motion.div
            key={axis.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <motion.div
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-orange-200/50 transition-all duration-500 p-6 border-t-4 ${axis.borderColor} overflow-hidden h-full`}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${axis.bgColor} opacity-50`} />
              <div className="relative z-10">
                <motion.div
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {axis.icon}
                </motion.div>
                <h3 className={`text-lg font-bold text-gray-800 mb-2 bg-gradient-to-r ${axis.color} bg-clip-text text-transparent`}>
                  {axis.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {axis.description}
                </p>
              </div>
              <motion.div
                className={`absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br ${axis.color} opacity-10 rounded-full`}
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
            Ainsi le référentiel pédagogique a été conçu dans le respect du cursus de formation national qu'il a enrichi et développé afin de mieux répondre aux enjeux de l'excellence vers laquelle le Lycée tend. Cet enrichissement s'appuie sur un programme articulé et cohérent, matérialisé par une pédagogie progressive et novatrice, mieux adaptée à l'approche par compétences et centrée sur le travail de l'élève dont elle prépare l'intégration. Ce programme est également renforcé par un dispositif d'accompagnement dont l'objectif est de veiller à sécuriser le parcours de l'élève tout au long de sa scolarité.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-white/70 p-6 sm:p-8 rounded-2xl border border-orange-200/20 shadow-lg shadow-orange-100/10 hover:shadow-orange-200/30 transition-all duration-300">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Le curriculum du LM6E est composé de programmes disciplinaires officiels et d'un programme complémentaire visant d'une part l'approfondissement des apprentissages disciplinaires et d'autre part, des modules d'enrichissement (<span className="text-orange-600 font-medium">musique, théâtre, arts plastiques,…</span>) ciblant le développement et l'épanouissement personnel de l'élève.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-gradient-to-r from-white/80 to-orange-50/80 p-6 sm:p-8 rounded-2xl border border-orange-200/30 shadow-lg shadow-orange-100/20 hover:shadow-orange-200/40 transition-all duration-300">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Le LM6E accorde une grande importance au <span className="text-orange-600 font-semibold">projet d'établissement</span> qui est élaboré en concertation avec l'ensemble de son personnel. Il traduit les objectifs et les priorités qu'il s'est fixé et défini les moyens humains et matériels nécessaires à la mise en œuvre de ce projet à court et à moyen terme.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PresentationContent;