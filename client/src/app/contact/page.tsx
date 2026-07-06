'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi');
      }

      setIsSubmitted(true);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  // FIXED: Properly typed cardVariants with Variants
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

  const contactInfo = [
    {
      icon: '📍',
      title: 'Adresse',
      details: [
        'Lycée Mohammed VI d\'Excellence Lot 660, Hay Moulay Rachid Ben Guerir, 43150',
        'Benguerir, Maroc'
      ],
      color: 'from-orange-400 to-orange-600',
      borderColor: 'border-orange-400'
    },
    {
      icon: '📞',
      title: 'Téléphone',
      details: [
        '+212 524 321 100',
      ],
      color: 'from-orange-500 to-orange-700',
      borderColor: 'border-orange-500'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: [
        'info@lm6e.ma',
      ],
      color: 'from-orange-600 to-orange-800',
      borderColor: 'border-orange-600'
    },
    {
      icon: '🕐',
      title: 'Horaires d\'ouverture',
      details: [
        'Lundi - Vendredi : 8h00 - 17h00',
        'Samedi : 8h00 - 12h00'
      ],
      color: 'from-orange-700 to-orange-900',
      borderColor: 'border-orange-700'
    }
  ];

  const sujetOptions = [
    'Information générale',
    'Admission et inscription',
    'Programmes scolaires',
    'Vie scolaire',
    'Partenariat',
    'Autre'
  ];

  return (
    <motion.main
      className="min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lydex-1.jpg"
            alt="LM6E Campus"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
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
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
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
              <span className="text-sm font-semibold text-white/90 tracking-wide">Contactez-nous</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <span className="text-white drop-shadow-lg">Nous Contacter</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl text-white/80 max-w-2xl mx-auto"
            >
              Une question ? Un projet ? N'hésitez pas à nous contacter
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTENT SECTION ─── */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* Creative Orange Background */}
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
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-orange-50/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg border border-orange-200/30 mb-4">
                <span className="text-2xl">📬</span>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                  Comment pouvons-nous vous aider ?
                </span>
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                Remplissez le formulaire ci-dessous ou contactez-nous directement
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    className={`relative bg-white rounded-2xl shadow-lg hover:shadow-orange-200/50 transition-all duration-500 p-6 border-t-4 ${info.borderColor} overflow-hidden h-full text-center`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent opacity-50" />
                    <div className="relative z-10">
                      <motion.div
                        className="text-4xl mb-3"
                        whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {info.icon}
                      </motion.div>
                      <h3 className={`text-lg font-bold text-gray-800 mb-2 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Form and Map Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl shadow-orange-100/30 border border-orange-100/50 overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Envoyez-nous un email
                  </h3>

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-center"
                    >
                      <span className="text-2xl">✅</span>
                      <p className="font-semibold mt-1">Votre message a été envoyé avec succès !</p>
                      <p className="text-sm text-green-600">Un email de confirmation vous a été envoyé.</p>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-center"
                    >
                      <span className="text-2xl">❌</span>
                      <p className="font-semibold mt-1">{error}</p>
                      <p className="text-sm text-red-600">Veuillez réessayer ou nous contacter directement.</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Votre nom et prénom"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Votre email"
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Téléphone
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
                            disabled={isSubmitting}
                            className="flex-1 px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Sujet <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 appearance-none disabled:opacity-50"
                      >
                        <option value="">Choisir un sujet</option>
                        {sujetOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message..."
                        required
                        rows={5}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 resize-y disabled:opacity-50"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
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
                          Envoyer l'email
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Map and Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Map */}
                <div className="bg-white rounded-3xl shadow-2xl shadow-orange-100/30 border border-orange-100/50 overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      📍 Notre localisation
                    </h3>
                    <div className="relative w-full h-64 bg-gray-200 rounded-2xl overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.0!2d-8.0!3d32.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAwJzAwLjAiTiA4wrAwMCcwMC4wIlc!5e0!3m2!1sfr!2sma!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                        title="LM6E Location"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-100/30 p-6 rounded-3xl border border-orange-200/30 shadow-lg shadow-orange-100/20">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    💬 Réponse rapide
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Nous nous engageons à répondre à toutes vos demandes dans un délai de 24 à 48 heures ouvrables.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="tel:+2125XXXXXXXX"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl border border-orange-200 hover:border-orange-400 transition-all duration-300 text-sm font-medium text-gray-700 hover:text-orange-600"
                    >
                      <span>📞</span>
                      Nous appeler
                    </Link>
                    <Link
                      href="mailto:contact@lm6e.ma"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl border border-orange-200 hover:border-orange-400 transition-all duration-300 text-sm font-medium text-gray-700 hover:text-orange-600"
                    >
                      <span>✉️</span>
                      Nous écrire
                    </Link>
                  </div>
                </div>
              </motion.div>
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