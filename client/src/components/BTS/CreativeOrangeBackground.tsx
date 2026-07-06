'use client';

import { motion } from 'framer-motion';

export const BTSCreativeOrangeBackground = () => (
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
    
    {/* Floating shapes */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`shape-${i}`}
        className="absolute border-2 border-orange-300/20"
        style={{
          width: Math.random() * 60 + 20,
          height: Math.random() * 60 + 20,
          left: `${Math.random() * 90 + 5}%`,
          top: `${Math.random() * 90 + 5}%`,
          borderRadius: Math.random() > 0.5 ? '50%' : '4px',
          borderWidth: '2px',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 15 + i * 3,
          repeat: Infinity,
          delay: i * 1.5,
          ease: 'easeInOut',
        }}
      />
    ))}
    
    {/* Floating particles */}
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute rounded-full bg-orange-400/30"
        style={{
          width: Math.random() * 6 + 3,
          height: Math.random() * 6 + 3,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -60, 0],
          x: [0, 40, -40, 0],
          scale: [1, 2, 1],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 4,
          ease: 'easeInOut',
        }}
      />
    ))}
    
    {/* Rotating rings */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`ring-${i}`}
        className="absolute rounded-full border-2 border-orange-300/20"
        style={{
          width: 200 + i * 120,
          height: 200 + i * 120,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          borderWidth: `${2 + i}px`,
        }}
        animate={{
          rotate: i % 2 === 0 ? [0, 360] : [-360, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20 + i * 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    ))}
    
    {/* Floating emojis */}
    {['⭐', '✨', '🌟', '🎯', '🏆', '💫', '📐', '🎓'].map((icon, i) => (
      <motion.div
        key={`emoji-${i}`}
        className="absolute text-3xl opacity-20"
        style={{
          left: `${5 + i * 11}%`,
          top: `${5 + (i % 3) * 30}%`,
        }}
        animate={{
          y: [0, -50, 0],
          x: [0, 30, -30, 0],
          opacity: [0.1, 0.4, 0.1],
          rotate: [0, 20, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8 + i * 1.5,
          repeat: Infinity,
          delay: i * 1.2,
          ease: 'easeInOut',
        }}
      >
        {icon}
      </motion.div>
    ))}
    
    {/* Glowing dots */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`glow-${i}`}
        className="absolute rounded-full blur-2xl"
        style={{
          width: Math.random() * 120 + 60,
          height: Math.random() * 120 + 60,
          left: `${Math.random() * 80 + 10}%`,
          top: `${Math.random() * 80 + 10}%`,
          background: `radial-gradient(circle, rgba(251, 146, 60, 0.15), transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.4, 0.1],
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 7 + i * 2,
          repeat: Infinity,
          delay: i * 1.5,
          ease: 'easeInOut',
        }}
      />
    ))}
    
    {/* Sparkles */}
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={`sparkle-${i}`}
        className="absolute text-2xl text-orange-400/40"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [-80, 80],
          x: [-50, 50],
          opacity: [0, 0.5, 0],
          scale: [0, 1.5, 0],
          rotate: [0, 180],
        }}
        transition={{
          duration: 5 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 4,
          ease: 'easeInOut',
        }}
      >
        ✦
      </motion.div>
    ))}
  </div>
);

export default BTSCreativeOrangeBackground;