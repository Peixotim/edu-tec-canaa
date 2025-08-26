"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import Modal from "./modalContactsCourses/modal";
import SubscriptionForm from "./modalContactsCourses/SubscriptionForm";
import { submitSubscription } from "./lib/api";
const menuItems = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre Nós", href: "#sobrenos" },
  { name: "Cursos", href: "#cursos" },
  { name: "Contato", href: "#contato" },
];

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  // --- 2. Lógica do Modal (copiada e adaptada de CourseInformations) ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"form" | "loading" | "success">(
    "form"
  );

  const openModal = () => {
    setFormStatus("form"); // Reseta o formulário sempre que abrir
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    try {
      const formData = new FormData(event.currentTarget);

      // Monta o objeto de dados com os nomes corretos para a API
      const data = {
        fullerName: formData.get("name") as string,
        phone: (formData.get("whatsapp") as string).replace(/\D/g, ""),
        areaOfInterest: formData.get("interestArea") as string,
        course: "Contato Geral (Header)",
      };

      console.log("Enviando dados do Header:", data);

      await submitSubscription(data);

      setFormStatus("success");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Houve um problema. Tente novamente.");
      setFormStatus("form");
    }
  };

  const { scrollY } = useScroll();
  React.useEffect(() => {
    let lastScroll = 0;
    return scrollY.on("change", (latest) => {
      if (latest > lastScroll && latest > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll = latest;
    });
  }, [scrollY]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 z-50 w-full"
      >
        <nav
          data-state={menuState && "active"}
          className={cn(
            "backdrop-blur-2xl bg-white/80 dark:bg-black/60 border-b border-zinc-200 dark:border-zinc-800 shadow-sm"
          )}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-3"
              >
                <div className="relative w-40 h-20">
                  <Image
                    src="/images/semFoto.png"
                    alt="EduTec Canaa Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Menu Desktop */}
              <ul className="hidden lg:flex gap-10 font-medium text-[16px]">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="relative text-zinc-700 dark:text-zinc-200 hover:text-red-600 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* --- 3. Botão WhatsApp Desktop (Modificado) --- */}
              <div className="hidden lg:flex">
                <Button
                  onClick={openModal} // Ação alterada de link para abrir o modal
                  className="rounded-full bg-green-600 hover:bg-green-700 px-6 shadow-lg text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </div>

              {/* Botão Menu Mobile */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="lg:hidden relative z-50"
              >
                {menuState ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {menuState && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 shadow-md px-6 py-6"
            >
              <ul className="space-y-6 text-lg font-medium">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="block text-zinc-700 dark:text-zinc-200 hover:text-red-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                {/* --- 4. Botão WhatsApp Mobile (Modificado) --- */}
                <Button
                  onClick={() => {
                    openModal();
                    setMenuState(false); // Fecha o menu ao abrir o modal
                  }}
                  className="w-full rounded-full bg-red-600 hover:bg-red-700 shadow-lg text-white"
                >
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* --- 5. Renderização do Modal --- */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm
          status={formStatus}
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
          // Passamos um contexto diferente para saber que este contato veio do header
          selectedContent="Area Desejada"
        />
      </Modal>
    </>
  );
};
