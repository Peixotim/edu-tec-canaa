"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "1. Avaliação Documental",
    description:
      "Envie seus documentos de experiência profissional, como carteira de trabalho, contratos ou declarações.",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
        <li>Carteira de trabalho</li>
        <li>Contrato Social (sócio/dono)</li>
        <li>Documentação do MEI</li>
        <li>Declaração de Experiência</li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "2. Etapa Técnica",
    description:
      "Realize uma avaliação teórica para validar seu conhecimento prático adquirido com a experiência.",
  },
  {
    id: 3,
    title: "3. Validação e Certificação",
    description:
      "Após a aprovação, suas informações são homologadas e você recebe seu diploma reconhecido.",
  },
];

function CertificationSteps() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="w-full max-w-6xl mx-auto mt-16">
      <div className="bg-[#6A0E29] text-white shadow-xl rounded-2xl overflow-hidden border border-amber-500/20">
        <div className="p-6 md:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-amber-400 tracking-tight flex items-center justify-center gap-3">
            <Zap className="w-7 h-7" />
            <span>Certificação Rápida por Competência</span>
          </h3>
          <p className="text-center text-white/80 mt-2 text-base sm:text-lg">
            Conquiste seu diploma em 3 etapas simples.
          </p>
        </div>

        <div className="flex flex-col md:flex-row bg-[#8B1A3B]/30">
          <div className="flex md:flex-col justify-around md:justify-start p-4 md:p-6 border-b-2 md:border-b-0 md:border-r-2 border-amber-500/20">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 text-sm sm:text-base font-semibold ${
                  activeStep === step.id
                    ? "bg-amber-400 text-[#6A0E29] scale-105 shadow-lg"
                    : "bg-transparent text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>

          <div className="flex-1 p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[180px] sm:min-h-[160px]"
              >
                <h4 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-3 text-amber-400">
                  <CheckCircle className="w-6 h-6" />
                  <span>{steps[activeStep - 1].title.substring(3)}</span>
                </h4>
                <div className="text-white/90 leading-relaxed text-base sm:text-lg space-y-3">
                  <p>{steps[activeStep - 1].description}</p>
                  {activeStep === 1 && steps[0].content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------------
// PARTE 2: O NOVO COMPONENTE QUE UNE TUDO
// -------------------------------------------------------------------

export default function CertificationSection() {
  return (
    // Fundo claro para toda a seção, como na imagem do banner
    <section className="bg-[#FDFCFB] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Banner recriado a partir da imagem --- */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#6A0E29]/30 px-4 py-1.5 text-sm font-semibold text-[#6A0E29]">
            Certificação por Competência
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase">
            <span className="text-amber-500">Certificação</span>
            <span className="text-black/80 font-medium"> por </span>
            <span className="text-[#6A0E29]">Competência</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-[#6A0E29]/90 leading-relaxed">
            Reconhecemos sua experiência profissional e transformamos em
            certificação oficial. Um caminho mais rápido para obter sua
            qualificação técnica.
          </p>
        </div>

        {/* --- Componente de Etapas integrado abaixo --- */}
        <CertificationSteps />
      </div>
    </section>
  );
}
