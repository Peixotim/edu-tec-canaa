"use client";

import { useState, useCallback } from "react";
import Modal from "@/components/modalContactsCourses/modal";
import SubscriptionForm from "@/components/modalContactsCourses/SubscriptionForm";
import { submitSubscription } from "@/components/lib/api";

type Props = {
  className?: string;
  children?: React.ReactNode;
  selectedContent?: string;
  whatsappNumber?: string; // ex: 5531999022636
};

export default function ConsultorModalTrigger({
  className = "",
  children = "Fale com um Consultor",
  selectedContent = "SISTEC-MEC – Verificação e Matrícula",
  whatsappNumber = "5531999022636",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"form" | "loading" | "success">(
    "form"
  );
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const openModal = () => {
    setFormStatus("form");
    setIsOpen(true);
  };

  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    try {
      const formData = new FormData(event.currentTarget);
      const data = {
        name: formData.get("name") as string,
        phone: (formData.get("whatsapp") as string).replace(/\D/g, ""),
        areaOfInterest: formData.get("interestArea") as string,
        course: selectedContent,
        enterpriseId: Number(process.env.NEXT_PUBLIC_ENTERPRISE_ID),
      };

      await submitSubscription(data);

      const message = `Olá! Meu nome é ${data.name} e tenho interesse na área de ${data.areaOfInterest}. Gostaria de mais informações.`;
      setWhatsappMessage(message);
      setFormStatus("success");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Houve um problema. Tente novamente.");
      setFormStatus("form");
    }
  };

  const handleWhatsAppRedirect = () => {
    const encoded = encodeURIComponent(
      whatsappMessage || "Olá! Quero mais informações."
    );
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank");
    closeModal();
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={className}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {children}
      </button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <SubscriptionForm
          formStatus={formStatus}
          selectedContent={selectedContent}
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
          onSuccessRedirect={handleWhatsAppRedirect}
        />
      </Modal>
    </>
  );
}
