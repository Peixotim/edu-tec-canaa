import Link from "next/link";
import { Award } from "lucide-react";
import { slugify } from "@/utils/slugify";

export interface CourseCardProps {
  title: string;
  subTitle: string;

  img?: {
    src: string;
    alt: string;
  };
  rating: number;
  badge?: string;
  description?: string;
}

// --- Componente Funcional Robusto ---
// NENHUMA ALTERAÇÃO NA ASSINATURA DA FUNÇÃO.
export default function CourseCard({
  title,
  subTitle,
  description,
  badge,
}: CourseCardProps) {
  return (
    // ESTILO VISUAL ALTERADO: Aplicado o estilo e animação do card de referência
    <div className="group w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 flex flex-col font-sans h-full">
      {/* ELEMENTO REMOVIDO VISUALMENTE: 
        A imagem de topo não existe no layout de referência, então foi removida do JSX.
        A prop 'img' ainda é aceita pelo componente, mas não é renderizada.
      */}

      {/* Seção Superior: Categoria e Ícone (Layout do card de referência) */}
      <div className="flex items-center justify-between mb-4">
        <span
          // ESTILO VISUAL ALTERADO: Usando um estilo de tag padrão
          className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
        >
          {subTitle} {/* Prop 'subTitle' usada como categoria */}
        </span>
        <Award className="text-yellow-500" size={24} />{" "}
        {/* Ícone estático do card de referência */}
      </div>

      {/* Conteúdo Principal */}
      <div className="flex flex-col flex-grow">
        <h2
          // ESTILO VISUAL ALTERADO: Aplicado o estilo do título do card de referência
          className="text-2xl font-bold text-[#6A0E29] mb-2 transition-colors group-hover:text-[#8B1A3B]"
        >
          {title}
        </h2>
        {/* ELEMENTO REMOVIDO VISUALMENTE: 
          A avaliação por estrelas não existe no layout de referência.
          A prop 'rating' ainda é aceita, mas não é renderizada.
        */}
        {/* A prop 'description' é usada como o texto principal */}
        {description && (
          <p className="text-gray-600 text-sm mb-6">
            {badge && <span className="font-bold mr-1">{badge}</span>}{" "}
            {/* Prop 'badge' exibida antes da descrição */}
            {description}
          </p>
        )}
        <div className="flex-grow"></div>{" "}
        {/* Espaçador para empurrar o botão para baixo */}
        <Link
          href={`/cursos/${slugify(title)}`}
          // ESTILO VISUAL ALTERADO: Aplicado o estilo do botão do card de referência
          className="mt-auto block w-full text-center bg-[#8B1A3B] text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#6A0E29] group-hover:scale-105"
        >
          Saiba Mais {/* Texto do botão alterado */}
        </Link>
      </div>
    </div>
  );
}
