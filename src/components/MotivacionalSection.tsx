"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Modal from "./modalContactsCourses/modal";
import SubscriptionForm from "@/components/modalContactsCourses/SubscriptionForm";

export default function MotivacionalSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"form" | "loading" | "success">(
    "form"
  );

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    // simulação de envio async
    setTimeout(() => {
      setFormStatus("success");
    }, 2000);
  };

  return (
    <>
      <section className="relative bg-gradient-to-r from-[#6A0E29] via-[#8B1A3B] to-[#6A0E29] text-white py-20 px-6 md:px-12 overflow-hidden rounded-2xl shadow-lg max-w-7xl mx-auto my-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texto Motivacional */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="uppercase text-sm tracking-widest text-yellow-400 font-bold">
              Transforme seu Futuro
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Conquiste Seu Curso <br />e Alcance{" "}
              <span className="text-yellow-400">Grandes Resultados</span>
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Estude com especialistas, conquiste sua certificação reconhecida e
              abra portas para novas oportunidades. Tenha a carreira que sempre
              sonhou e aumente seus ganhos com uma formação premium.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="#cursos">
                <Button className="bg-yellow-400 text-[#6A0E29] font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform">
                  Quero Conquistar Agora
                </Button>
              </a>
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(true)}
                className="border-white text-black hover:bg-white hover:text-[#6A0E29] px-6 py-3 rounded-xl"
              >
                Fale com um Consultor
              </Button>
            </div>
          </motion.div>

          {/* Imagem Motivacional */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg"
              alt="Aluno conquistando seu futuro"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Modal de Inscrição */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SubscriptionForm
          formStatus={formStatus}
          selectedContent="Curso Premium"
          onSubmit={handleFormSubmit}
          onCancel={() => setIsModalOpen(false)}
          onSuccessRedirect={() =>
            (window.location.href = "https://wa.me/seunumerowhatsapp")
          }
        />
      </Modal>
    </>
  );
}
