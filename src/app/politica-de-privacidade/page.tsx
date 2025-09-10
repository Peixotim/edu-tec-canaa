"use client";
import {
  ShieldCheck,
  ArrowLeft,
  Lock,
  User,
  Share2,
  Shield,
  RefreshCw,
  FileCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function PoliticaPrivacidade() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-zinc-200">
        {/* Cabeçalho */}
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-[#8B1A3B] to-[#6A0E29] shadow-md">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-zinc-800">
            Política de Privacidade
          </h1>
        </div>

        <p className="text-lg text-zinc-600 leading-relaxed mb-10">
          Sua privacidade é muito importante para nós. Esta Política de
          Privacidade descreve como coletamos, usamos e protegemos suas
          informações em conformidade com a{" "}
          <span className="font-semibold text-[#8B1A3B]">
            Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)
          </span>
          .
        </p>

        {/* Seções */}
        <div className="space-y-8 text-zinc-700 leading-relaxed">
          <section className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <User className="w-6 h-6 text-[#8B1A3B]" />
              <h2 className="text-xl font-bold text-zinc-800">
                1. Dados que coletamos
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-zinc-600">
              <li>Nome completo</li>
              <li>Telefone / WhatsApp</li>
              <li>E-mail (quando informado)</li>
              <li>Área de interesse ou curso escolhido</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <FileCheck className="w-6 h-6 text-[#8B1A3B]" />
              <h2 className="text-xl font-bold text-zinc-800">
                2. Como utilizamos seus dados
              </h2>
            </div>
            <p className="text-zinc-600">
              Os dados coletados serão utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-zinc-600">
              <li>Entrar em contato sobre sua inscrição.</li>
              <li>Enviar informações relevantes sobre cursos e eventos.</li>
              <li>Atender solicitações de suporte.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Share2 className="w-6 h-6 text-[#8B1A3B]" />
              <h2 className="text-xl font-bold text-zinc-800">
                3. Compartilhamento de dados
              </h2>
            </div>
            <p className="text-zinc-600">
              Não compartilhamos seus dados pessoais com terceiros, exceto
              quando exigido por lei ou para prestação dos serviços contratados.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-6 h-6 text-[#8B1A3B]" />
              <h2 className="text-xl font-bold text-zinc-800">4. Segurança</h2>
            </div>
            <p className="text-zinc-600">
              Adotamos medidas técnicas e organizacionais para proteger seus
              dados contra acessos não autorizados, perda ou divulgação
              indevida.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-[#8B1A3B]" />
              <h2 className="text-xl font-bold text-zinc-800">
                5. Seus direitos
              </h2>
            </div>
            <p className="text-zinc-600">
              Você tem direito a acessar, corrigir, excluir ou solicitar a
              portabilidade dos seus dados. Para exercer esses direitos, entre
              em contato conosco pelo e-mail{" "}
              <a
                href="mailto:colegiotecnicoeducacanaa@gmail.com"
                className="text-[#8B1A3B] font-semibold hover:underline"
              >
                colegiotecnicoeducacanaa@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <RefreshCw className="w-6 h-6 text-[#8B1A3B]" />
              <h2 className="text-xl font-bold text-zinc-800">
                6. Alterações nesta política
              </h2>
            </div>
            <p className="text-zinc-600">
              Podemos atualizar esta Política de Privacidade periodicamente.
              Recomendamos que você a consulte regularmente para estar sempre
              informado.
            </p>
          </section>
        </div>

        {/* Rodapé */}
        <div className="mt-12 flex items-center justify-between border-t pt-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-zinc-100 to-zinc-200 text-zinc-700 font-medium hover:from-zinc-200 hover:to-zinc-300 transition shadow-sm"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
          <span className="text-sm text-zinc-500 italic">
            Última atualização: Setembro/2025
          </span>
        </div>
      </div>
    </div>
  );
}
