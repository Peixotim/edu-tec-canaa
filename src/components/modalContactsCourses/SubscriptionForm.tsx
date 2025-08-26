// components/modalsContactCourses/SubscriptionForm.tsx
"use client";

import { useState } from "react";
import { Send, ChevronDown, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";

// Componente de Loading enviando
const LoadingState = () => (
  <div className="flex flex-col items-center justify-center h-80 text-center">
    <Loader2 className="h-12 w-12 text-green-500 animate-spin" />{" "}
    {/*Animacao de spin carregando */}
    <p className="mt-4 text-lg font-medium text-slate-600">
      Enviando sua inscrição...
    </p>
    <p className="text-sm text-slate-500">Aguarde um momento.</p>
  </div>
);

//--- Componente para o estado de Sucesso ---
// Também é um componente interno.
const SuccessState = ({ onClose }: { onClose: () => void }) => (
  <div className="flex flex-col items-center justify-center h-80 text-center">
    <CheckCircle className="h-16 w-16 text-green-500" />
    <h2 className="mt-4 text-3xl font-bold text-slate-800">
      Inscrição Enviada!
    </h2>
    <p className="mt-2 text-slate-600">
      Obrigado por se inscrever! Em breve, nossa equipe entrará em contato com
      você pelo WhatsApp.
    </p>
    <button
      onClick={onClose}
      className="mt-8 w-full sm:w-auto px-8 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
    >
      Voltar para a página
    </button>
  </div>
);

//--- Componente Principal do Formulário ---
const areasDeInteresse = [
  "Saúde",
  "Administração e Gestão",
  "Tecnologia e Informática",
  "Engenharia e Manutenção",
  "Construção e Infraestrutura",
  "Meio Ambiente e Agropecuária",
  "Serviços",
];

type SubscriptionFormProps = {
  status: "form" | "loading" | "success";
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  selectedContent: string;
};

export default function SubscriptionForm({
  status,
  onSubmit,
  onCancel,
  selectedContent,
}: SubscriptionFormProps) {
  const inputStyle =
    "w-full px-4 py-3 bg-slate-100 border-2 border-transparent rounded-lg placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300";
  const [whatsapp, setWhatsapp] = useState("");

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const limitedValue = rawValue.substring(0, 11);
    let formattedValue = limitedValue;
    if (limitedValue.length > 2)
      formattedValue = `(${limitedValue.substring(
        0,
        2
      )}) ${limitedValue.substring(2)}`;
    if (limitedValue.length > 7)
      formattedValue = `(${limitedValue.substring(
        0,
        2
      )}) ${limitedValue.substring(2, 7)}-${limitedValue.substring(7)}`;
    setWhatsapp(formattedValue);
  };

  // Renderiza o componente de Loading se o status for 'loading'
  if (status === "loading") {
    return <LoadingState />;
  }

  // Renderiza o componente de Sucesso se o status for 'success'
  if (status === "success") {
    return <SuccessState onClose={onCancel} />;
  }

  // Por padrão, renderiza o formulário
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-800 hover:text-green-600 transition-colors duration-300">
        Entre em contato
      </h2>
      <p className="text-slate-500 mt-2 mb-6 hover:text-green-600 transition-colors duration-300">
        Preencha seus dados para continuar
      </p>
      <div className="mb-8">
        <span className="inline-block bg-violet-100 text-violet-800 text-sm font-semibold px-4 py-1.5 rounded-full">
          Matrícula para: <strong>{selectedContent}</strong>
        </span>
      </div>
      <form onSubmit={onSubmit} className="text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
          {/*Em cada campo desse colocar o nome que for para definir no banco de dados*/}
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
            />
          </div>
          <div>
            {/*Em cada campo desse colocar o nome que for para definir no banco de dados*/}
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
              placeholder="(00) 00000-0000"
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
              {/*Em cada campo desse colocar o nome que for para definir no banco de dados*/}
              <select
                id="interestArea"
                name="interestArea" //NomeBancoDeDados
                required
                defaultValue=""
                className="w-full appearance-none px-4 py-3 bg-slate-100 border-2 border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300"
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
            onClick={onCancel}
            className="w-full sm:w-auto px-6 py-3 text-slate-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="w-full flex-1 px-6 py-3 flex items-center justify-center gap-2 bg-green-600 text-white font-bold rounded-lg shadow-lg shadow-green-500/20 hover:bg-green-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 ease-in-out"
          >
            <Send size={18} />
            <span>Enviar</span>
          </button>
        </div>
      </form>
    </div>
  );
}
