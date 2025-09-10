"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#8B1A3B] via-[#6A0E29] to-black text-white px-6">
      {/* Número 404 animado */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[120px] sm:text-[160px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-500 to-red-500"
      >
        404
      </motion.h1>

      {/* Texto de erro */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-2xl sm:text-3xl font-bold text-center"
      >
        Oops! Página não encontrada.
      </motion.h2>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="text-gray-300 mt-3 text-center max-w-lg"
      >
        Parece que você se perdeu no caminho. Mas não se preocupe, vamos te
        ajudar a voltar para a navegação segura 🚀
      </motion.p>

      {/* Botões de ação */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition transform hover:-translate-y-1"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Home
        </Link>
        <Link
          href="/cursos"
          className="flex items-center gap-2 bg-white text-[#6A0E29] hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold shadow-lg transition transform hover:-translate-y-1"
        >
          <Search className="w-5 h-5" />
          Explorar Cursos
        </Link>
      </motion.div>

      {/* Animação de fundo */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
        }}
      />
    </main>
  );
}
