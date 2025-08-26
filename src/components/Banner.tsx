"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Award, BookUser, GraduationCap, Star, Users } from "lucide-react";
import type { FC } from "react";
import Link from "next/link";
import Modal from "./modalContactsCourses/modal";
import SubscriptionForm from "./modalContactsCourses/SubscriptionForm";
import { submitSubscription } from "./lib/api";

const StatCard: FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-white/10 rounded-lg p-6 text-center flex flex-col justify-center items-center backdrop-blur-sm">
    <p className="text-4xl lg:text-5xl font-bold">{value}</p>
    <p className="text-sm text-white/90 mt-2">{label}</p>
  </div>
);

const FeatureItem: FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <div className="flex items-center gap-3">
    {icon}
    <p className="font-medium">{text}</p>
  </div>
);

export const HeroSection = () => {
  // --- LÓGICA DO MODAL ATUALIZADA ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"form" | "loading" | "success">(
    "form"
  );
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const WHATSAPP_NUMBER = "5531999999999"; // 👈 SUBSTITUA PELO SEU NÚMERO

  const openModal = () => {
    setFormStatus("form");
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    try {
      const formData = new FormData(event.currentTarget);
      const data = {
        fullerName: formData.get("name") as string,
        phone: (formData.get("whatsapp") as string).replace(/\D/g, ""),
        areaOfInterest: formData.get("interestArea") as string,
        course: "Contato Geral (Hero Section)",
      };

      await submitSubscription(data);

      const message = `Olá! Meu nome é ${data.fullerName} e tenho interesse na área de ${data.areaOfInterest}. Gostaria de mais informações.`;
      setWhatsappMessage(message);

      setFormStatus("success");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Houve um problema. Tente novamente.");
      setFormStatus("form");
    }
  };

  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    closeModal();
  };

  return (
    <>
      <section
        id="inicio"
        className="w-full bg-gradient-to-br from-[#4a0015] via-[#600020] to-[#2b0a15] text-white py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white/10 text-xs font-semibold py-1 px-3 rounded-full self-start backdrop-blur-sm">
              <GraduationCap className="w-4 h-4 text-yellow-400" />
              Educação Técnica de Excelência
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Transformando Vidas Através da{" "}
              <span className="text-yellow-400">Educação</span>
            </h1>
            <p className="text-lg text-white/90">
              Construindo profissionais do futuro com cursos técnicos por
              competência. Certificação reconhecida e metodologia inovadora.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-4">
              <FeatureItem
                icon={<Award className="w-5 h-5 text-yellow-400" />}
                text="Certificação Oficial"
              />
              <FeatureItem
                icon={<Users className="w-5 h-5 text-yellow-400" />}
                text="Turmas Reduzidas"
              />
              <FeatureItem
                icon={<BookUser className="w-5 h-5 text-yellow-400" />}
                text="Professores Especialistas"
              />
              <FeatureItem
                icon={<Star className="w-5 h-5 text-yellow-400" />}
                text="Metodologia Única"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                size="lg"
                className="bg-yellow-400 text-[#3e1823] font-bold hover:bg-yellow-500"
                asChild
              >
                <Link href="#cursos">Conheça Nossos Cursos</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#3e1823]"
                onClick={openModal}
              >
                Fale com um consultor
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-amber-500">
            <StatCard value="500+" label="Alunos Certificados" />
            <StatCard value="15+" label="Cursos Disponíveis" />
            <StatCard value="98%" label="Taxa de Aprovação" />
            <StatCard value="5★" label="Avaliação Média" />
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm
          status={formStatus}
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
          onSuccessRedirect={handleWhatsAppRedirect} // Passa a nova função
          selectedContent="Area Desejada"
        />
      </Modal>
    </>
  );
};
