'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
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
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const currentYear = new Date().getFullYear();

  // Contact information
  const contactInfo = {
    address: 'Lycée Mohammed VI d\'Excellence Lot 660, Hay Moulay Rachid Ben Guerir, 43150, Maroc',
    phone: '+212 524 321 100',
    email: 'info@lm6e.ma',
  };

  // Social media icons with proper SVG paths
  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: 'https://www.facebook.com/profile.php?id=61591351631758'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      href: 'https://www.instagram.com/lm6e_officiel/'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: 'https://www.linkedin.com/school/lm6e/'
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: 'https://www.youtube.com/@LM6E_officiel'
    }
  ];

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative bg-gray-900 text-white overflow-hidden border-t border-orange-500/20"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-orange-400/5 blur-3xl pointer-events-none"
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Footer Content - 3 Equal Columns */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1: Logo + Description (1/3) */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block">
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Logo Image - Larger size */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
                  <Image
                    src="/images/lm6e-logo.png"
                    alt="Lycée Mohammed VI d'Excellence Logo"
                    width={224}
                    height={224}
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </Link>
            
            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-400/30 flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  <span className="text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Contactez-nous (1/3) */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 relative">
              Contactez-nous
              <span className="block h-0.5 w-8 bg-orange-500 mt-1.5 rounded-full" />
            </h3>
            
            <div className="space-y-3">
              {/* Address */}
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 border border-orange-500/20">
                  <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">{contactInfo.address}</p>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 border border-orange-500/20">
                  <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
                  {contactInfo.phone}
                </a>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 border border-orange-500/20">
                  <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </motion.div>

              {/* Action Button */}
              <motion.div 
                className="mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-lg shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Envoyer un message
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Column 3: Map (1/3) */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 relative">
              Notre Localisation
              <span className="block h-0.5 w-8 bg-orange-500 mt-1.5 rounded-full" />
            </h3>
            
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/15 border border-orange-500/20 group"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative w-full h-[280px] bg-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27682.93098223864!2d-8.143684!3d31.917252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaf3b13f19e0b2d%3A0x466be2ad7b3ecaa0!2sBenguerir%2C%20Morocco!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="LM6E Location Map"
                />
                
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                
                {/* Location pin */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-orange-500/30 backdrop-blur-sm flex items-center justify-center border-2 border-orange-400/50">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/50">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Info badge */}
                <motion.div 
                  className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md rounded-lg p-2.5 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      <span className="text-white text-xs font-medium">Lycée Mohammed VI d&apos;Excellence</span>
                    </div>
                    <div className="flex gap-1.5">
                      <motion.a
                        href="https://www.google.com/maps/dir//Benguerir,+Morocco/@31.917252,-8.143684,13z/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 text-[10px] px-2.5 py-1 rounded-lg border border-orange-500/30 transition-all duration-300 flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Itinéraire
                      </motion.a>
                      <motion.a
                        href="https://www.google.com/maps/place/Benguerir,+Morocco/@31.917252,-8.143684,13z/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 text-white text-[10px] px-2.5 py-1 rounded-lg border border-white/10 transition-all duration-300 flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Agrandir
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Campus badge */}
                <motion.div 
                  className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-lg px-2.5 py-1 border border-orange-500/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-orange-300 text-[10px] font-medium">📍 Campus principal</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={itemVariants}
        className="border-t border-white/5 mt-8"
      >
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs md:text-sm">
            &copy; {currentYear} Lycée Mohammed VI d&apos;Excellence.
          </p>
          <div className="flex items-center gap-6 text-xs md:text-sm">
            <Link href="/mentions-legales" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
              Confidentialité
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;