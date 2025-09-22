"use client";
import React, { useState } from "react";
import { Loader2, CheckCircle, Send, ArrowRight } from "lucide-react";
import LgpdCheckbox from "../LgpdCheckbox";

interface SubscriptionFormProps {
  formStatus: "form" | "loading" | "success";
  selectedContent: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  onSuccessRedirect: () => void;
}

export default function SubscriptionForm({
  formStatus,
  selectedContent,
  onSubmit,
  onCancel,
  onSuccessRedirect,
}: SubscriptionFormProps) {
  const [whatsapp, setWhatsapp] = useState("");
  const [lgpdAccepted, setLgpdAccepted] = useState(false);
  const [error, setError] = useState("");

  // Máscara de WhatsApp
  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
    setWhatsapp(value);
  };

  // Garantir que só envia se LGPD for aceito
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!lgpdAccepted) {
      setError(
        "Você precisa aceitar a Política de Privacidade para continuar."
      );
      return;
    }
    setError("");
    onSubmit(e);
  };

  // ====== Estados especiais (loading / success) ======
  if (formStatus === "loading") {
    return (
      <div className="flex flex-col items-center justify-center p-8 min-h-[450px]">
        <Loader2 className="w-12 h-12 text-[#8B1A3B] animate-spin" />
        <h3 className="mt-6 text-xl font-semibold text-slate-700">
          Aguarde um momento...
        </h3>
        <p className="text-slate-500 mt-1">
          Estamos processando sua inscrição.
        </p>
      </div>
    );
  }

  if (formStatus === "success") {
    return (
      <div className="text-center p-8 flex flex-col items-center justify-center min-h-[450px]">
        <div className="relative">
          <CheckCircle className="w-20 h-20 text-green-500" />
          <div className="absolute -top-2 -right-2 bg-white rounded-full p-1">
            <span className="text-2xl">🎉</span>
          </div>
        </div>
        <h3 className="text-3xl font-extrabold text-slate-800 mt-6">
          Inscrição enviada!
        </h3>
        <p className="text-slate-600 mt-2 max-w-sm">
          Seu primeiro passo foi dado! Agora, vamos finalizar sua matrícula pelo
          WhatsApp.
        </p>
        <button
          onClick={onSuccessRedirect}
          className="group mt-8 w-full max-w-xs flex items-center justify-center gap-3 bg-gradient-to-br from-green-600 to-green-500 text-white px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 hover:-translate-y-1"
        >
          <Send size={20} />
          <span>Finalizar no WhatsApp</span>
        </button>
      </div>
    );
  }

  // ====== Formulário principal ======
  return (
    <div className="p-8 bg-slate-50/50">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-extrabold text-[#6A0E29]">
          Inscreva-se em <br />
          <span className="bg-gradient-to-r from-amber-500 to-[#8B1A3B] bg-clip-text text-transparent">
            {selectedContent}
          </span>
        </h3>
        <p className="text-slate-500 mt-2">
          Preencha seus dados para começar a transformação.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nome */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black mb-1"
          >
            Nome Completo
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Seu nome aqui"
            className="mt-1 block w-full text-black px-4 py-3 rounded-xl border-slate-300 bg-white shadow-sm transition-colors duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label
            htmlFor="whatsapp"
            className="block text-sm font-medium text-black mb-1"
          >
            WhatsApp
          </label>
          <input
            type="tel"
            name="whatsapp"
            id="whatsapp"
            required
            value={whatsapp}
            onChange={handleWhatsappChange}
            placeholder="(XX) XXXXX-XXXX"
            maxLength={15}
            className="mt-1 block w-full px-4 py-3 text-black rounded-xl border-slate-300 bg-white shadow-sm transition-colors duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50"
          />
        </div>

        {/* Área de interesse */}
        <div>
          <label
            htmlFor="interestArea"
            className="block text-sm font-medium text-black mb-1"
          >
            Área de Interesse
          </label>
          <input
            type="text"
            name="interestArea"
            id="interestArea"
            required
            placeholder="Ex: Saúde, Tecnologia, Gestão"
            className="mt-1 block w-full px-4 py-3 text-black rounded-xl border-slate-300 bg-white shadow-sm transition-colors duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50"
          />
        </div>

        {/* LGPD */}
        <LgpdCheckbox
          checked={lgpdAccepted}
          onChange={(checked: boolean) => setLgpdAccepted(checked)}
        />

        {/* Erro se não aceitar */}
        {error && <p className="text-sm text-red-600">{error}</p>}

        {/* Botões */}
        <div className="pt-6 space-y-4">
          <button
            type="submit"
            disabled={!lgpdAccepted}
            className={`group w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-lg font-bold text-white transition-all duration-300 ${
              lgpdAccepted
                ? "bg-gradient-to-br from-[#8B1A3B] to-[#6A0E29] shadow-lg shadow-[#8B1A3B]/30 hover:shadow-xl hover:shadow-[#8B1A3B]/50 hover:-translate-y-1"
                : "bg-zinc-400 cursor-not-allowed"
            }`}
          >
            <span>Quero me Inscrever</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="w-full justify-center rounded-xl bg-transparent px-4 py-3 text-base font-medium text-slate-600 transition-colors hover:bg-slate-200/70"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
