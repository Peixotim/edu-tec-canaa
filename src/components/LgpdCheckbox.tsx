"use client";

import { X } from "lucide-react";
import { useState } from "react";
interface LgpdCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function LgpdCheckbox({ checked, onChange }: LgpdCheckboxProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-6">
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer hidden"
        />
        {/* Caixa customizada */}
        <span className="w-5 h-5 mt-1 flex items-center justify-center rounded border border-zinc-400 peer-checked:bg-red-700 peer-checked:border-red-700 peer-checked:text-white transition">
          {checked && "✔"}
        </span>
        <span className="text-sm text-zinc-700">
          Eu li e aceito as{" "}
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="text-red-700 font-medium hover:underline"
          >
            Políticas de Privacidades
          </button>
          .
        </span>
      </label>

      {/* Modal LGPD */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">
            {/* Botão fechar */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-800"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold text-zinc-800 mb-4">
              Lei Geral de Proteção de Dados (LGPD)
            </h2>
            <div className="text-sm text-zinc-600 max-h-80 overflow-y-auto space-y-4">
              <p>
                A LGPD (Lei nº 13.709/2018) dispõe sobre o tratamento de dados
                pessoais, inclusive nos meios digitais, por pessoa natural ou
                jurídica de direito público ou privado, com o objetivo de
                proteger os direitos fundamentais de liberdade e de privacidade
                e o livre desenvolvimento da personalidade da pessoa natural.
              </p>
              <p>
                Ao aceitar, você autoriza o uso dos seus dados fornecidos neste
                formulário para fins de inscrição, comunicação e contato por
                nossa equipe.
              </p>
              <p>
                Para mais detalhes, você pode acessar a lei completa no{" "}
                <a
                  href="https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 font-medium hover:underline"
                >
                  site oficial do Governo
                </a>
                .
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
