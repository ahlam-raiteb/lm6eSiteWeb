'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export const CPGEArticlesContent = () => {
  const articlesData = [
    {
      id: 1,
      title: 'Journée Portes Ouvertes CPGE 2026',
      date: '15 Mars 2026',
      excerpt: 'Le LM6E organise sa journée portes ouvertes pour les Classes Préparatoires. Venez découvrir nos installations et rencontrer nos équipes pédagogiques.',
      image: '/images/news-3.jpeg',
      category: 'Événement',
      author: 'LM6E Communication'
    },
    {
      id: 2,
      title: 'Résultats Exceptionnels aux Concours',
      date: '28 Février 2026',
      excerpt: 'Les élèves des CPGE obtiennent des résultats remarquables aux concours des grandes écoles avec un taux de réussite exceptionnel.',
      image: '/images/news-2.jpeg',
      category: 'Résultats',
      author: 'Direction Pédagogique'
    },
    {
      id: 3,
      title: 'Nouveaux Partenariats Académiques',
      date: '10 Février 2026',
      excerpt: 'Le LM6E signe de nouveaux partenariats avec des grandes écoles françaises et marocaines pour ses classes préparatoires.',
      image: '/images/news-2.jpeg',
      category: 'Partenariat',
      author: 'Service Relations Internationales'
    },
    {
      id: 4,
      title: 'Conférence sur les Métiers d\'Ingénieur',
      date: '5 Janvier 2026',
      excerpt: 'Une conférence inspirante sur les métiers d\'ingénieur et les débouchés des CPGE animée par des professionnels.',
      image: '/images/news-3.jpeg',
      category: 'Conférence',
      author: 'Comité Scientifique'
    },
    {
      id: 5,
      title: 'Atelier de Préparation aux Concours',
      date: '20 Décembre 2025',
      excerpt: 'Les élèves participent à des ateliers intensifs de préparation aux concours des grandes écoles.',
      image: '/images/news-2.jpeg',
      category: 'Atelier',
      author: 'Service Pédagogique'
    },
    {
      id: 6,
      title: 'Cérémonie de Remise des Diplômes',
      date: '15 Décembre 2025',
      excerpt: 'Cérémonie de remise des diplômes pour la promotion 2025 des Classes Préparatoires.',
      image: '/images/news-3.jpeg',
      category: 'Cérémonie',
      author: 'Direction des CPGE'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-[95%] mx-auto"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 bg-orange-50/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg border border-orange-200/30 mb-4">
          <span className="text-2xl">📰</span>
          <span className="text-sm font-semibold text-gray-700 tracking-wide">Articles & Actualités</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
            Actualités des CPGE
          </span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Restez informés des dernières actualités et événements des Classes Préparatoires au LM6E
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articlesData.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-200/50 transition-all duration-500 border border-orange-100/30 h-full flex flex-col">
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-orange-500/30">
                  {article.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-full">
                  {article.date}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-orange-500 font-medium">{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-orange-300" />
                  <span className="text-xs text-gray-400">Par {article.author}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    5 min de lecture
                  </span>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-orange-500 font-medium text-sm hover:text-orange-700 transition-colors duration-300 group/link"
                  >
                    Lire la suite
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
          >
            Voir toutes les actualités
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CPGEArticlesContent;