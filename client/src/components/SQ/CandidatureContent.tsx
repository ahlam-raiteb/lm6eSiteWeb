'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const CandidatureContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="w-[90%] mx-auto"
  >
    {/* Header */}
    <div className="text-center mb-10">
      <div className="inline-flex items-center gap-3 bg-orange-50/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg border border-orange-200/30 mb-4">
        <span className="text-2xl">📋</span>
        <span className="text-sm font-semibold text-gray-700 tracking-wide">Candidature</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
          Annonce de Candidature
        </span>
      </h2>
      <p className="text-gray-400 text-sm mt-2">Année scolaire 2026-2027</p>
    </div>

    {/* Content - Clean Text */}
    <div className="bg-white rounded-3xl shadow-xl shadow-orange-100/20 px-8 sm:px-12 py-10 sm:py-12 w-full">
      
      {/* Title - Object */}
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
        Objet : Ouverture des candidatures au Tronc Commun du Secondaire Qualifiant
      </h3>

      {/* Separator */}
      <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8" />

      {/* Content */}
      <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
        
        <p>
          L'<span className="text-orange-600 font-semibold">Association pour la Promotion de l'Enseignement d'Excellence (APEE)</span> a l'honneur d'annoncer l'ouverture des candidatures au Tronc Commun du Secondaire Qualifiant pour l'année scolaire <span className="font-semibold text-gray-800">2026-2027</span>.
        </p>

        <p>
          Cette campagne s'adresse aux élèves de la <span className="font-bold text-gray-800">3<sup>e</sup> année collégiale</span>, souhaitant rejoindre le Tronc commun scientifique et technologique (option française) de l'un des établissements d'excellence relevant de l'APEE.
        </p>

        <div className="pt-4">
          <p className="font-semibold text-gray-800 text-lg">
            🏫 Lycée Mohammed VI d'Excellence de Benguerir
          </p>
          <p className="mt-1">
            Cet établissement d'enseignement secondaire propose un parcours scientifique et technologique de haut niveau destiné aux élèves à fort potentiel académique.
          </p>
        </div>

        <div className="pt-2">
          <p className="font-semibold text-gray-800 text-lg">
            🌐 Candidatures en ligne
          </p>
          <p className="mt-1">
            Les candidatures sont ouvertes en ligne via la plateforme{' '}
            <a 
              href="https://apee.ma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 font-semibold hover:text-orange-800 transition-colors duration-300 underline decoration-2 decoration-orange-200 hover:decoration-orange-400 underline-offset-2"
            >
              https://apee.ma
            </a>
          </p>
        </div>

        <div className="pt-2">
          <p className="font-semibold text-gray-800 text-lg">
            📅 Période de candidature
          </p>
          <p className="mt-1">
            Du <span className="font-semibold text-gray-800">08 au 30 juin 2026</span> à 00h00
          </p>
        </div>

        <div className="pt-2">
          <p className="font-semibold text-gray-800 text-lg">
            ℹ️ Informations complémentaires
          </p>
          <p className="mt-1">
            Pour plus d'informations sur les conditions d'admission et les programmes, veuillez consulter les rubriques dédiées sur la plateforme.
          </p>
        </div>

        {/* APEE Signature */}
        <div className="pt-6 mt-6 border-t border-gray-100 text-center">
          <p className="text-lg font-bold text-orange-600 tracking-wider">APEE</p>
          <p className="text-sm text-gray-400">Association pour la Promotion de l'Enseignement d'Excellence</p>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-6">
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="https://apee.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 text-base"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              Postuler maintenant
              <motion.svg
                className="w-4 h-4"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  </motion.div>
);

export default CandidatureContent;