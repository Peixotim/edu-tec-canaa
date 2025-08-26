"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Avaliação Documental",
    description: (
      <ul className="list-disc pl-6 space-y-1 text-base text-gray-100">
        <li>Carteira de trabalho</li>
        <li>Contrato Social (caso seja sócio ou dono de empresa na área)</li>
        <li>Documentação do MEI</li>
        <li>Registro de Autonomia</li>
        <li>Declaração de Experiência Profissional</li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Etapa Técnica",
    description:
      "Avaliação prática do conhecimento adquirido com base na experiência profissional.",
  },
  {
    id: 3,
    title: "Validação",
    description:
      "Conferência oficial das informações e homologação da experiência.",
  },
];

export default function CertificationSteps() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Card className="bg-gradient-to-br from-[#4a0015] via-[#600020] to-[#2b0a15] text-white shadow-2xl rounded-2xl p-8 border border-yellow-600/30">
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold text-center text-yellow-400 tracking-wide uppercase">
          Certificação por Competência
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Botões de Etapas */}
        <div className="flex justify-between gap-4 mb-8">
          {steps.map((step) => (
            <Button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex-1 py-4 rounded-xl text-lg font-semibold transition-all border-2 ${
                activeStep === step.id
                  ? "bg-yellow-500 text-black border-yellow-400 shadow-xl scale-105"
                  : "bg-white/5 text-white border-transparent hover:border-yellow-500/50 hover:bg-white/10"
              }`}
            >
              {step.id}
            </Button>
          ))}
        </div>

        {/* Conteúdo animado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="p-8 rounded-xl bg-gradient-to-br from-[#2b0a15]/90 to-[#4a0015]/80 border border-yellow-500/30 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-yellow-400">
              <CheckCircle className="w-7 h-7 text-yellow-400" />
              {steps[activeStep - 1].title}
            </h3>
            <div className="text-gray-100 leading-relaxed text-lg">
              {steps[activeStep - 1].description}
            </div>
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
