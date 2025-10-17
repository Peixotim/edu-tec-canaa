import React from "react";
import Link from "next/link";
import { ArrowLeft, Dot } from "lucide-react";
import ConsultorModalTrigger from "./ConsultorModalTrigger";
import Image from "next/image";

export const metadata = {
  title: "Aprovados pelo SISTEC-MEC | Educatec Canaã",
  description:
    "Instituição com registro e conformidade no SISTEC/MEC. Certificação oficial reconhecida, transparência e qualidade na diplomação.",
  openGraph: {
    title: "Aprovados pelo SISTEC-MEC | Educatec Canaã",
    description:
      "Instituição com registro e conformidade no SISTEC/MEC. Certificação oficial, transparência e qualidade.",
    type: "website",
  },
};

export default function PageSistecMec() {
  return (
    <main className="min-h-screen bg-[#5B0F1B] text-white">
      {/* Voltar */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 pt-6 text-white/80 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" /> <b>Voltar</b>
      </Link>

      {/* HERO */}
      <section className="relative isolate overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10 [background:radial-gradient(60%_60%_at_50%_40%,#ffffff_0%,transparent_60%)]" />
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            {/* Coluna esquerda */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide uppercase">
                <Dot className="h-3 w-3 fill-current" />
                Educação Técnica de Excelência
              </span>

              <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight">
                Somos{" "}
                <span className="text-[#FFC107]">
                  Aprovados pelo SISTEC-MEC
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-white/80">
                Confiança que se comprova: nossa instituição possui{" "}
                <strong className="text-white">registro e conformidade</strong>{" "}
                no <strong>SISTEC/MEC</strong>, garantindo certificação oficial,
                transparência e qualidade em cada diplomação.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="https://sistec.mec.gov.br/consultapublicaunidadeensino"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#FFC107] px-5 py-3 font-semibold text-[#5B0F1B] shadow-md shadow-black/10 transition hover:scale-[1.02] hover:shadow-lg"
                >
                  Verificar no SISTEC
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                {/* Abre seu modal existente */}
                <ConsultorModalTrigger
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/0 px-5 py-3 font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10"
                  selectedContent="SISTEC-MEC – Verificação e Matrícula"
                  whatsappNumber="559492740525"
                >
                  Fale com um Consultor
                </ConsultorModalTrigger>
              </div>

              {/* BENEFÍCIOS */}
              <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Certificação Oficial Reconhecida",
                  "Conformidade e Auditoria MEC",
                  "Transparência e Segurança de Dados",
                  "Credibilidade e Validação Nacional",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white/5 ring-1 ring-white/10 p-3"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 text-[#FFC107]" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              {/* COMO CONSULTAR NO MEC */}
            </div>

            {/* Coluna direita: Cartão + Comprovante visual SISTEC */}
            <div className="relative">
              {/* CARTÃO: SELO + MÉTRICAS */}
              <div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-4">
                  <SealSistec className="h-16 w-16 shrink-0" />
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/70">
                      Selo de Conformidade
                    </p>
                    <p className="text-xl font-bold">Aprovação SISTEC-MEC</p>
                  </div>
                </div>
                <dl className="mt-6 grid grid-cols-3 gap-4">
                  <Stat label="Alunos Certificados" value="500+" />
                  <Stat label="Taxa de Aprovação" value="98%" />
                  <Stat
                    label="Avaliação Média"
                    value={
                      <span className="inline-flex items-center">
                        5<span className="ml-1">★</span>
                      </span>
                    }
                  />
                </dl>
                <p className="mt-6 text-xs text-white/60">
                  Todos os certificados emitidos seguem os requisitos legais e
                  podem ser validados oficialmente.
                </p>
              </div>

              {/* ==== Comprovante visual do SISTEC (captura) ==== */}
              <figure className="mt-4 overflow-hidden rounded-2xl  bg-white ring-1 ring-black/10">
                <Image
                  src="/images/Sistec.webp"
                  alt="Portal SISTEC/MEC — Consulta Pública (Unidade de Ensino)"
                  width={960}
                  height={600}
                  priority
                  sizes="(min-width: 560px) 430px, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="flex items-center justify-between gap-3 px-4 py-2 text-[12px] text-slate-700">
                  <span>
                    Portal SISTEC/MEC — Consulta Pública (Unidade de Ensino)
                  </span>
                  <Link
                    href="https://sistec.mec.gov.br/consultapublicaunidadeensino"
                    target="_blank"
                    className="font-semibold text-[#5B0F1B] hover:underline"
                  >
                    Verificar agora
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Perguntas <span className="text-[#FFC107]">Frequentes</span>
          </h2>
          <div className="mt-6 divide-y divide-white/10 rounded-2xl bg-white/5 ring-1 ring-white/10">
            {FAQ.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="ml-4 rounded-full border border-white/15 bg-white/0 p-1 text-xs text-white/60 group-open:rotate-180 transition">
                    <ArrowDown className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3 text-white/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-12 rounded-2xl bg-[#4B0C17] p-6 ring-1 ring-white/10">
        <h2 className="text-xl sm:text-2xl font-extrabold text-center">
          Como{" "}
          <span className="text-[#FFC107]">Consultar nossa Instituição</span> no
          MEC
        </h2>
        <p className="mt-4 text-white/80 text-center leading-relaxed max-w-2xl mx-auto">
          A transparência é parte da nossa essência. Para validar que você está
          escolhendo uma instituição séria e reconhecida, siga o passo a passo
          abaixo:
        </p>

        <ol className="mt-6 space-y-4 max-w-2xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFC107] font-bold text-[#5B0F1B]">
              1
            </span>
            <span>
              Acesse o portal oficial do{" "}
              <Link
                href="https://sistec.mec.gov.br/consultapublicaunidadeensino#"
                target="_blank"
                className="font-semibold text-[#FFC107] hover:underline"
              >
                SISTEC/MEC
              </Link>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFC107] font-bold text-[#5B0F1B]">
              2
            </span>
            <span>
              Clique em{" "}
              <strong>Consulta Pública de Instituição de Ensino</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFC107] font-bold text-[#5B0F1B]">
              3
            </span>
            <span>
              Selecione o estado <strong>Pará</strong> e depois a cidade{" "}
              <strong>Canaã dos Carajás</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFC107] font-bold text-[#5B0F1B]">
              4
            </span>
            <span>
              Escolha a instituição <strong>Sistema de Ensino Integrado</strong>
            </span>
          </li>
        </ol>

        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="text-white/80 text-center max-w-2xl">
            Pronto! Em poucos cliques você confirma nossa aprovação no MEC e tem
            a certeza de que está fazendo parte de uma instituição segura,
            legítima e sem ciladas.
          </p>
          <Link
            href="https://sistec.mec.gov.br/consultapublicaunidadeensino"
            target="_blank"
            className="inline-flex items-center justify-center rounded-2xl bg-[#FFC107] px-5 py-3 font-semibold text-[#5B0F1B] shadow-md shadow-black/10 transition hover:scale-[1.02] hover:shadow-lg"
          >
            Verificar agora no MEC
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
      {/* CTA FINAL */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-[#4B0C17] p-6 ring-1 ring-white/10 sm:flex-row">
            <p className="text-lg font-semibold">
              Pronto para validar sua formação com{" "}
              <span className="text-[#FFC107]">Certificação Oficial</span>?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://sistec.mec.gov.br/consultapublicaunidadeensino"
                target="_blank"
                className="inline-flex items-center justify-center rounded-2xl bg-[#FFC107] px-5 py-3 font-semibold text-[#5B0F1B] shadow-md transition hover:scale-[1.02]"
              >
                Verificar no SISTEC
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              {/* Abre seu modal no CTA também */}
              <ConsultorModalTrigger
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white/90 hover:bg-white/10"
                selectedContent="SISTEC-MEC – Verificação e Matrícula"
                whatsappNumber="559492740525"
              >
                Fale com um Consultor
              </ConsultorModalTrigger>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ======= helpers ======= */
const FAQ = [
  {
    q: "O que é o SISTEC-MEC?",
    a: "É o Sistema Nacional de Informações da Educação Profissional e Tecnológica do MEC, onde instituições e cursos técnicos são registrados e acompanhados.",
  },
  {
    q: "Como validar um certificado?",
    a: "A verificação é feita pelo portal do SISTEC/MEC informando dados do aluno e/ou do documento emitido.",
  },
  {
    q: "A aprovação garante reconhecimento?",
    a: "Sim. A conformidade no SISTEC/MEC assegura validade nacional para certificados emitidos dentro das normas.",
  },
  {
    q: "Os dados dos alunos são seguros?",
    a: "Seguimos práticas de transparência e segurança conforme exigências legais e auditorias periódicas.",
  },
];

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-[#4B0C17] p-4 text-center ring-1 ring-white/10">
      <div className="text-2xl font-extrabold text-[#FFC107]">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-wide text-white/70">
        {label}
      </div>
    </div>
  );
}

function SealSistec(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#FFC107" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="56" fill="url(#g)" />
      <circle
        cx="60"
        cy="60"
        r="49"
        fill="#5B0F1B"
        stroke="#FAD961"
        strokeWidth="3"
      />
      <path
        d="M38 64l14 12 30-34"
        fill="none"
        stroke="#FFC107"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 12l3 3 5-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 5v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 12l7 7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
