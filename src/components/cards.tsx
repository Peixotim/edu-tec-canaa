import { Clock, Users, Award } from "lucide-react";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

// Interface ORIGINAL MANTIDA, com os novos campos como OPCIONAIS (?)
export interface CardPageProps {
  title: string;
  description: string;
  category: string;
  maisClicado: boolean;
  lancamentos: boolean;
  flag: string;
  benneficies: string[];
  img?: {
    src: string;
    alt: string;
  };
  bgColorFlag: string;
  bgColorCategory: string;
  bgColorHover: string;

  // Campos NOVOS agora são OPCIONAIS com o '?'
  duration?: string; // ex: "18 meses"
  studentCount?: number; // ex: 24
}

export default function CardPage({
  title,
  description,
  category,
  benneficies,
  bgColorCategory,
  duration, // Recebe a prop opcional
  studentCount, // Recebe a prop opcional
}: CardPageProps) {
  const courseSlug = slugify(category);

  return (
    //                                                                              👇 AQUI ESTÃO AS MUDANÇAS PARA A ANIMAÇÃO 👇
    <div className="group w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 flex flex-col font-sans">
      {/* Seção Superior: Categoria e Ícone */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${bgColorCategory}`}
        >
          {category}
        </span>
        <Award className="text-yellow-500" size={24} />
      </div>

      {/* Conteúdo Principal */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-[#6A0E29] mb-2 transition-colors group-hover:text-[#8B1A3B]">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mb-6">{description}</p>

        {/* RENDERIZAÇÃO CONDICIONAL */}
        {(duration || studentCount) && (
          <div className="flex items-center gap-8 text-gray-500 mb-6">
            {duration && (
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span className="text-sm font-medium">{duration}</span>
              </div>
            )}
            {studentCount && (
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span className="text-sm font-medium">
                  {studentCount} alunos
                </span>
              </div>
            )}
          </div>
        )}

        {/* Especializações (usando 'benneficies') */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Especializações:
          </h3>
          <div className="flex flex-wrap gap-2">
            {benneficies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-none text-xs font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Botão "Saiba Mais" */}
        <div className="mt-auto">
          <Link
            href={`/cursos/${courseSlug}`}
            //                                                   👇 PEQUENO BÔNUS: ANIMAÇÃO NO BOTÃO 👇
            className="block w-full text-center bg-[#8B1A3B] text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#6A0E29] group-hover:scale-105"
          >
            Saiba Mais
          </Link>
        </div>
      </div>
    </div>
  );
}
