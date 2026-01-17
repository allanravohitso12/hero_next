'use client';

import { FaArrowRight, FaCalendarAlt, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald-400/10 blur-[120px] rounded-full -z-10" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-300 text-xs md:text-sm font-semibold uppercase shadow-[0_0_25px_rgba(16,185,129,0.35)]"
        >
          <FaStar className="text-emerald-400" />
          CRÉER UN SITE WEB VRAIMENT UNIQUE
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-gray-200"
        >
          Votre{" "}
          <span className="text-emerald-400">site</span>{" "}
          doit{" "}
          <span className="text-emerald-400">
            donner envie
          </span>{" "}
          de{" "}
          <span className="text-emerald-400">
            rester
          </span>
          ,<br className="hidden md:block" />
          pas de{" "}
          <span className="text-emerald-400">
            revenir
          </span>{" "}
          en{" "}
          <span className="text-emerald-400">
            arrière
          </span>.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-2xl text-base md:text-lg text-gray-400 mb-12"
        >
          Design moderne, SEO solide, Suivi complet : on construit un site qui retient vos
          visiteurs et vous apporte des résultats.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex flex-col sm:flex-row gap-4 items-center"
        >

          <button className="px-8 py-4 bg-emerald-400 text-black font-semibold rounded-full flex items-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105 transition">
            <FaCalendarAlt />
            Prendre RDV
          </button>

          <button className="px-8 py-4 border border-emerald-400/50 text-emerald-300 rounded-full flex items-center gap-2 hover:bg-emerald-400/10 transition">
            Découvrir nos projets
            <FaArrowRight />
          </button>

          <span className="absolute -bottom-8 left-2 text-sm text-gray-400 rotate-[-8deg]">
            Un p’tit click ?
          </span>
        </motion.div>
      </div>
    </section>
  );
}