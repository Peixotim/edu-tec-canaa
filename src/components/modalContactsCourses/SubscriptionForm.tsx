"use client";

import { useState } from "react";
import {
  Send,
  ChevronDown,
  CheckCircle,
  Loader2,
  MessageSquare,
} from "lucide-react";
import { submitSubscription } from "../lib/api";
import { number } from "framer-motion";
// --- Componente de Loading ---
const LoadingState = () => (
  <div className="flex flex-col items-center justify-center h-80 text-center">
    <Loader2 className="h-12 w-12 text-[#8B1A3B] animate-spin" />
    <p className="mt-4 text-lg font-medium text-slate-600">
      Enviando seus dados...
    </p>
    <p className="text-sm text-slate-500">Aguarde um momento.</p>
  </div>
);

// --- Componente de Sucesso com Botão WhatsApp ---
const SuccessState = ({
  onClose,
  onRedirect,
}: {
  onClose: () => void;
  onRedirect: () => void;
}) => (
  <div className="flex flex-col items-center justify-center h-80 text-center">
    <CheckCircle className="h-16 w-16 text-green-500" />
    <h2 className="mt-4 text-3xl font-bold text-[#6A0E29]">Dados Recebidos!</h2>
    <p className="mt-2 text-slate-600 max-w-sm">
      Seu interesse foi registrado com sucesso. Clique no botão abaixo para
      iniciar a conversa com um de nossos consultores.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
      <button
        onClick={onClose}
        className="w-full sm:w-auto px-6 py-3 text-slate-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
      >
        Fechar
      </button>
      <button
        onClick={onRedirect}
        className="w-full flex-1 px-6 py-3 flex items-center justify-center gap-2 bg-green-600 text-white font-bold rounded-lg shadow-lg shadow-green-500/20 hover:bg-green-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 ease-in-out"
      >
        <MessageSquare size={18} />
        <span>Conversar no WhatsApp</span>
      </button>
    </div>
  </div>
);

// --- Áreas de interesse ---
const areasDeInteresse = [
  "Saúde",
  "Administração e Gestão",
  "Tecnologia e Informática",
  "Engenharia e Manutenção",
  "Construção e Infraestrutura",
  "Meio Ambiente e Agropecuária",
  "Serviços",
];

// --- Componente Principal ---
export default function SubscriptionForm({
  selectedContent,
}: {
  selectedContent: string;
}) {
  const [status, setStatus] = useState<"form" | "loading" | "success">("form");
  const [whatsapp, setWhatsapp] = useState("");
  const [fullName, setFullName] = useState("");
  const [interestArea, setInterestArea] = useState(selectedContent || "");

  const inputStyle =
    "w-full px-4 py-3 bg-slate-100 border-2 border-transparent rounded-lg placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#8B1A3B] focus:ring-4 focus:ring-[#8B1A3B]/20 transition-all duration-300";

  // Formata o WhatsApp
  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "").substring(0, 11);
    let formattedValue = rawValue;
    if (rawValue.length > 2)
      formattedValue = `(${rawValue.substring(0, 2)}) ${rawValue.substring(2)}`;
    if (rawValue.length > 7)
      formattedValue = `(${rawValue.substring(0, 2)}) ${rawValue.substring(
        2,
        7
      )}-${rawValue.substring(7)}`;
    setWhatsapp(formattedValue);
  };

  // --- Função de envio do formulário ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await submitSubscription({
        fullerName: fullName,
        phone: whatsapp,
        areaOfInterest: interestArea,
        enterpriseId: 1,
      });
      setStatus("success");
    } catch (error) {
      alert("Ocorreu um erro ao enviar. Tente novamente.");
      setStatus("form");
      throw new Error("Verifique os dados");
    }
  };

  const handleCancel = () => {
    setFullName("");
    setWhatsapp("");
    setInterestArea(selectedContent || "");
    setStatus("form");
  };

  const handleRedirectWhatsApp = () => {
    // Link de exemplo para WhatsApp (ajuste o número)
    window.open(`https://wa.me/5531999999999`, "_blank");
  };

  // --- Renderiza estados ---
  if (status === "loading") return <LoadingState />;
  if (status === "success")
    return (
      <SuccessState
        onClose={handleCancel}
        onRedirect={handleRedirectWhatsApp}
      />
    );

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[#6A0E29]">
        Fale com um Consultor
      </h2>
      <p className="text-slate-500 mt-2 mb-6">
        Preencha seus dados para iniciar o atendimento.
      </p>
      <div className="mb-8">
        <span className="inline-block bg-amber-100 text-[#6A0E29] text-sm font-semibold px-4 py-1.5 rounded-full">
          Área de Interesse: {selectedContent}
        </span>
      </div>
      <form onSubmit={handleSubmit} className="text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              Nome Completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputStyle}
              placeholder="Seu nome completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              className={inputStyle}
              placeholder="(31) 99999-9999"
              value={whatsapp}
              onChange={handleWhatsappChange}
            />
          </div>
          <div>
            <label
              htmlFor="interestArea"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              Área de Interesse <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="interestArea"
                name="interestArea"
                required
                value={interestArea}
                onChange={(e) => setInterestArea(e.target.value)}
                className="w-full appearance-none px-4 py-3 bg-slate-100 border-2 border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-[#8B1A3B] focus:ring-4 focus:ring-[#8B1A3B]/20 transition-all duration-300"
              >
                <option value="" disabled>
                  Selecione uma área
                </option>
                {areasDeInteresse.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 pt-8">
          <button
            type="button"
            onClick={handleCancel}
            className="w-full sm:w-auto px-6 py-3 text-slate-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="w-full flex-1 px-6 py-3 flex items-center justify-center gap-2 bg-[#8B1A3B] text-white font-bold rounded-lg shadow-lg shadow-[#8B1A3B]/20 hover:bg-[#6A0E29] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#6A0E29]/30 transition-all duration-300 ease-in-out"
          >
            <Send size={18} />
            <span>Enviar Contato</span>
          </button>
        </div>
      </form>
    </div>
  );
}
