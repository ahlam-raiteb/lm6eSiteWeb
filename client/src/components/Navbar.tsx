'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

interface NavbarProps {
  isScrolled?: boolean;
}

const navItems = [
  { label: 'LYCÉE', href: '/lycee' },
  { label: 'SECONDAIRE QUALIFIANT', href: '/SQ' },
  { label: 'CPGE', href: '/CPGE' },
  { label: 'BTS', href: '/BTS' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar({ isScrolled = false }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const logoVariants: Variants = {
    hover: {
      scale: 1.08,
      transition: { 
        type: "spring", 
        stiffness: 400,
        duration: 0.3,
      },
    },
  };

  // FIXED: Typed as Variants with proper easing
  const ringVariants: Variants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.4, 0.1, 0.4],
      rotate: [0, 360],
      transition: { 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      },
    },
  };

  // FIXED: Typed as Variants with proper easing
  const ringOuterVariants: Variants = {
    animate: {
      scale: [1, 1.08, 1],
      opacity: [0.15, 0.05, 0.15],
      rotate: [-360, 0],
      transition: { 
        duration: 5, 
        repeat: Infinity, 
        ease: "easeInOut", 
        delay: 0.5 
      },
    },
  };

  // FIXED: Typed as Variants with proper easing
  const sparkleVariants = (delay: number): Variants => ({
    animate: {
      scale: [1, 1.8, 1],
      opacity: [0.3, 1, 0.3],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        delay, 
        ease: "easeInOut" 
      },
    },
  });

  const menuItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, height: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      height: 'auto',
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-xl border-b border-orange-500/10'
          : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Creative Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Orange Gradient Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/20 to-transparent"
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Orange Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-500/5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-28 lg:h-32">
          {/* ─── LARGE LOGO ONLY ─── */}
          <Link href="/" className="flex items-center group shrink-0">
            <motion.div
              className="relative"
              variants={logoVariants}
              whileHover="hover"
            >
              {/* Pulsing Glow Behind Logo - Enhanced */}
              <motion.div
                className="absolute -inset-10 rounded-full bg-gradient-to-r from-orange-500/25 to-orange-600/15 blur-3xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Logo Image - Much Larger */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44">
                <Image
                  src="/images/lm6e-logo.png"
                  alt="LM6E Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 144px, 176px"
                />
              </div>

              {/* Animated Rings - Adjusted for larger logo */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-orange-400/30"
                variants={ringVariants}
                animate="animate"
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-orange-400/15"
                variants={ringOuterVariants}
                animate="animate"
              />
              <motion.div
                className="absolute -inset-12 rounded-full border border-orange-300/5"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.03, 0.1],
                  rotate: [90, -90],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              {/* Sparkles - Adjusted positions */}
              <motion.div
                className="absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full shadow-lg shadow-orange-500/50"
                variants={sparkleVariants(0)}
                animate="animate"
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full shadow-lg shadow-orange-400/50"
                variants={sparkleVariants(0.7)}
                animate="animate"
              />
              <motion.div
                className="absolute top-1/2 -right-5 w-2.5 h-2.5 bg-orange-400/60 rounded-full shadow-lg shadow-orange-500/30"
                variants={sparkleVariants(1.2)}
                animate="animate"
              />
              <motion.div
                className="absolute top-1/3 -left-5 w-3 h-3 bg-orange-300/50 rounded-full shadow-lg shadow-orange-400/20"
                variants={sparkleVariants(1.8)}
                animate="animate"
              />
            </motion.div>
          </Link>

          {/* ─── DESKTOP NAVIGATION ─── */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                custom={index}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2.5 text-sm font-bold text-white/90 hover:text-white transition-all duration-300 group tracking-wide"
                >
                  <span className="relative z-10 drop-shadow-lg">{item.label}</span>
                  
                  {/* Hover Background Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Animated Underline */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '80%' }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* ─── MOBILE MENU BUTTON ─── */}
          <motion.button
            className="lg:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-6 h-5">
              <motion.span
                className="absolute left-0 top-0 w-full h-0.5 bg-white rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute left-0 top-1/2 w-full h-0.5 bg-white rounded-full -translate-y-1/2"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scaleX: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute left-0 bottom-0 w-full h-0.5 bg-white rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* ─── MOBILE MENU ─── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="py-6 border-t border-white/10 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-6 py-3.5 text-base font-bold text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 relative group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="relative z-10 drop-shadow-md">{item.label}</span>
                      <motion.span
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.02 }}
                      />
                      <motion.span
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-orange-400 group-hover:h-8 transition-all duration-300"
                        whileHover={{ height: '32px' }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}