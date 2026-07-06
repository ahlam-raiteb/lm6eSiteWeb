'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const BTSCandidatureContent = () => {
  const [formData, setFormData] = useState({
    codeMassar: '',
    nom: '',
    prenom: '',
    cnie: '',
    serieBac: '',
    dateNaissance: '',
    lieuNaissance: '',
    telephone: '',
    email: '',
    adresse: '',
    ville: '',
    commune: '',
    province: '',
    region: '',
    programme: [] as string[],
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, programme: [...prev.programme, value] };
      } else {
        return { ...prev, programme: prev.programme.filter(p => p !== value) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          codeMassar: '',
          nom: '',
          prenom: '',
          cnie: '',
          serieBac: '',
          dateNaissance: '',
          lieuNaissance: '',
          telephone: '',
          email: '',
          adresse: '',
          ville: '',
          commune: '',
          province: '',
          region: '',
          programme: [],
          motivation: ''
        });
      }, 3000);
    }, 2000);
  };

  const serieBacOptions = [
    'Sciences Mathématiques A',
    'Sciences Mathématiques B',
    'Sciences Physiques',
    'Sciences de la Vie et de la Terre',
    'Sciences Agronomiques',
    'Sciences Économiques',
    'Technique'
  ];

  const regionOptions = [
    'Tanger-Tétouan-Al Hoceïma',
    'Oriental',
    'Fès-Meknès',
    'Rabat-Salé-Kénitra',
    'Béni Mellal-Khénifra',
    'Casablanca-Settat',
    'Marrakech-Safi',
    'Drâa-Tafilalet',
    'Souss-Massa',
    'Guelmim-Oued Noun',
    'Laâyoune-Sakia El Hamra',
    'Dakhla-Oued Ed-Dahab'
  ];

  const provinceOptions = [
    'Agadir',
    'Al Hoceïma',
    'Azilal',
    'Beni Mellal',
    'Berkane',
    'Casablanca',
    'Chefchaouen',
    'El Jadida',
    'Errachidia',
    'Essaouira',
    'Fès',
    'Guelmim',
    'Ifrane',
    'Kénitra',
    'Khouribga',
    'Laâyoune',
    'Marrakech',
    'Meknès',
    'Nador',
    'Ouarzazate',
    'Oujda',
    'Rabat',
    'Safi',
    'Salé',
    'Tanger',
    'Tétouan',
    'Tiznit'
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
          <span className="text-2xl">📋</span>
          <span className="text-sm font-semibold text-gray-700 tracking-wide">Candidature</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
            Candidature aux programmes BTS
          </span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Lycée Mohammed VI d'Excellence (LM6E)
        </p>
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-3xl shadow-2xl shadow-orange-100/30 border border-orange-100/50 overflow-hidden"
      >
        <div className="p-6 sm:p-8">
          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-center"
            >
              <span className="text-2xl">✅</span>
              <p className="font-semibold mt-1">Votre candidature a été envoyée avec succès !</p>
              <p className="text-sm text-green-600">Vous recevrez un email de confirmation dans les plus brefs délais.</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Required field indicator */}
            <p className="text-sm text-gray-400 text-right">* Champs obligatoires</p>

            {/* Code Massar */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Code Massar <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="codeMassar"
                value={formData.codeMassar}
                onChange={handleChange}
                placeholder="Votre code Massar"
                required
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Nom & Prénom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Prénom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  required
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* CNIE */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Numéro de CNIE <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="cnie"
                value={formData.cnie}
                onChange={handleChange}
                placeholder="Votre CNIE"
                required
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Série Bac */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Série Bac <span className="text-red-500">*</span>
              </label>
              <select
                name="serieBac"
                value={formData.serieBac}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 appearance-none"
              >
                <option value="">Choisir une spécialité</option>
                {serieBacOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Date & Lieu de naissance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Date de naissance <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Lieu de naissance <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lieuNaissance"
                  value={formData.lieuNaissance}
                  onChange={handleChange}
                  placeholder="Votre lieu de naissance"
                  required
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Téléphone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Numéro de téléphone <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 bg-gray-100 border border-r-0 border-gray-200 rounded-l-xl text-gray-500 text-sm">
                    +212
                  </span>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="Votre numéro"
                    required
                    className="flex-1 px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre e-mail"
                  required
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Adresse */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Adresse <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                placeholder="Votre adresse"
                required
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Ville & Commune */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Ville <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  placeholder="Votre ville"
                  required
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Commune <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="commune"
                  value={formData.commune}
                  onChange={handleChange}
                  placeholder="Votre commune"
                  required
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Province & Région */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Province <span className="text-red-500">*</span>
                </label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="">Votre province</option>
                  {provinceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Région <span className="text-red-500">*</span>
                </label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="">Votre région</option>
                  {regionOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Programme BTS souhaité */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Programme BTS souhaité <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3 bg-gray-50/50 p-4 rounded-xl border border-gray-200">
                <label className="flex items-start gap-3 cursor-pointer group hover:bg-orange-50/50 p-2 rounded-lg transition-colors duration-200">
                  <input
                    type="checkbox"
                    name="programme"
                    value="Énergies Renouvelables et Efficacité Énergétique"
                    checked={formData.programme.includes('Énergies Renouvelables et Efficacité Énergétique')}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                  />
                  <span className="text-gray-700 text-sm">Énergies Renouvelables et Efficacité Énergétique</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group hover:bg-orange-50/50 p-2 rounded-lg transition-colors duration-200">
                  <input
                    type="checkbox"
                    name="programme"
                    value="Procédés de Traitement des Eaux"
                    checked={formData.programme.includes('Procédés de Traitement des Eaux')}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                  />
                  <span className="text-gray-700 text-sm">Procédés de Traitement des Eaux</span>
                </label>
              </div>
            </div>

            {/* Motivation */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Motivation pour intégrer les programmes BTS du LM6E <span className="text-red-500">*</span>
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Votre motivation"
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 resize-y"
              />
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 text-lg flex items-center justify-center gap-3 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <span>📤</span>
                    Envoyer
                  </>
                )}
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>

    
    </motion.div>
  );
};

export default BTSCandidatureContent;