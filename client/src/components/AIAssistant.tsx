// components/AIAssistant.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis l\'assistant virtuel du Lycée Mohammed VI d\'Excellence. Comment puis-je vous aider ?',
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Sample responses based on keywords
  const getAIResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('hello')) {
      return 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?';
    }
    
    if (msg.includes('programme') || msg.includes('formation') || msg.includes('étudier')) {
      return 'Le Lycée Mohammed VI d\'Excellence propose trois programmes principaux :\n\n• Cycle Secondaire Qualifiant (SQ)\n• Classes Préparatoires aux Grandes Écoles (CPGE)\n• Brevet de Technicien Supérieur (BTS)\n\nPour plus d\'informations, je vous invite à consulter la section "Programmes" de notre site.';
    }
    
    if (msg.includes('cpge') || msg.includes('préparatoire')) {
      return 'Les Classes Préparatoires aux Grandes Écoles (CPGE) sont des formations scientifiques et technologiques de haut niveau qui préparent nos élèves aux concours des Grandes Écoles. Notre programme est reconnu pour son excellence et son accompagnement personnalisé.';
    }
    
    if (msg.includes('bts') || msg.includes('technicien')) {
      return 'Le Brevet de Technicien Supérieur (BTS) est une formation professionnalisante de deux ans qui allie théorie et pratique. Nos étudiants acquièrent des compétences techniques et managériales recherchées sur le marché du travail.';
    }
    
    if (msg.includes('sq') || msg.includes('secondaire') || msg.includes('qualifiant')) {
      return 'Le Cycle Secondaire Qualifiant (SQ) est un programme d\'excellence qui prépare les élèves aux études supérieures. Nous offrons un accompagnement personnalisé et développons des compétences essentielles pour l\'avenir.';
    }
    
    if (msg.includes('inscription') || msg.includes('admission') || msg.includes('candidature')) {
      return 'Les inscriptions au Lycée Mohammed VI d\'Excellence sont ouvertes. Je vous invite à contacter notre service d\'admission au +212 5 23 45 67 89 ou à visiter la page "Contact" de notre site pour plus d\'informations.';
    }
    
    if (msg.includes('contact') || msg.includes('téléphone') || msg.includes('email') || msg.includes('adresse')) {
      return 'Vous pouvez nous contacter :\n\n📞 Téléphone : +212 5 23 45 67 89\n📧 Email : contact@lm6e.ma\n📍 Adresse : Benguerir, Maroc\n\nN\'hésitez pas à nous rendre visite !';
    }
    
    if (msg.includes('infrastructure') || msg.includes('campus') || msg.includes('laboratoire')) {
      return 'Notre campus dispose d\'infrastructures modernes incluant des laboratoires de sciences, des salles de classe équipées, un centre de documentation, un internat, et des espaces sportifs. Nous investissons continuellement pour offrir un cadre d\'apprentissage optimal.';
    }
    
    if (msg.includes('résultat') || msg.includes('concours') || msg.includes('réussite')) {
      return 'Nos élèves obtiennent d\'excellents résultats aux examens et concours. Nous sommes fiers de notre taux de réussite aux CPGE et de l\'insertion professionnelle de nos diplômés BTS. L\'excellence est au cœur de notre pédagogie.';
    }
    
    if (msg.includes('merci') || msg.includes('thanks')) {
      return 'Avec plaisir ! N\'hésitez pas si vous avez d\'autres questions. Bonne journée ! 😊';
    }
    
    // Default response
    return 'Je comprends votre question. Pour plus d\'informations, je vous invite à consulter les différentes sections de notre site ou à contacter notre service d\'accueil. Voulez-vous que je vous oriente vers un sujet spécifique ? (Programmes, Inscription, Contact, etc.)';
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI thinking
    setTimeout(() => {
      const responseText = getAIResponse(input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const quickQuestions = [
    'Quels sont les programmes proposés ?',
    'Comment s\'inscrire ?',
    'Quels sont les résultats ?',
    'Contactez-nous',
  ];

  return (
    <>
      {/* Chat Button - Floating */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 text-white shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isOpen ? '0 0 0 4px rgba(251, 146, 60, 0.4)' : '0 8px 32px rgba(251, 146, 60, 0.4)',
        }}
      >
        {isOpen ? (
          <motion.svg
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </motion.svg>
        ) : (
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </motion.svg>
        )}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed bottom-28 right-6 z-50 w-[90vw] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl shadow-orange-500/20 border border-orange-200/50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-orange-500 to-orange-700 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Assistant LM6E</h3>
                  <p className="text-xs text-orange-100 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                    En ligne
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20'
                        : 'bg-white text-gray-800 shadow-md border border-orange-100/50'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <span className={`text-[10px] mt-1 block ${
                      message.sender === 'user' ? 'text-orange-100/70' : 'text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl p-3 shadow-md border border-orange-100/50">
                    <div className="flex gap-1">
                      <motion.span
                        className="w-2 h-2 bg-orange-400 rounded-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-orange-500 rounded-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-orange-600 rounded-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length < 3 && (
              <div className="p-2 border-t border-orange-100/50 bg-gray-50/50">
                <p className="text-xs text-gray-500 mb-2 text-center">Questions fréquentes :</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setInput(question);
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                      className="text-[10px] px-3 py-1.5 bg-white border border-orange-200/50 rounded-full text-orange-700 hover:bg-orange-50 hover:border-orange-400 transition-all duration-200 shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-orange-100/50 bg-white">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 px-4 py-2 border border-orange-200/50 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 text-sm transition-all duration-200"
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}