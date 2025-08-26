"use client";

import { useParams } from "next/navigation";
import StoragedCourses from "@/utils/storagedCourses";
import StoragedCoursesInfo from "@/utils/storagedCoursesInformations";
import { slugify } from "@/utils/slugify";
import { CourseInformationsProps } from "@/components/courseInformations";
import CourseInformations from "@/components/courseInformations";
import CourseCard from "@/components/courseCard";
import Link from "next/link";

export default function CursosSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const decodedSlug = decodeURIComponent(slug || "");

  // --- LÓGICA PRINCIPAL ---

  // 1. Tenta encontrar uma categoria correspondente
  const allCoursesForCards = StoragedCourses();
  const filteredByCategory = allCoursesForCards.filter(
    (course) => slugify(course.subTitle) === decodedSlug
  );

  if (filteredByCategory.length > 0) {
    // --- Visualização de Categoria ---
    return (
      <div className="bg-[#F1F1F1] min-h-screen">
        <div className="p-8 max-w-7xl mx-auto">
          <Link
            href="/"
            // CORES ALTERADAS
            className="group relative mb-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#6A0E29] px-5 py-2 text-sm font-bold text-white shadow-md transition-all duration-300"
          >
            {/* COR ALTERADA */}
            <div className="absolute inset-0 w-0 bg-[#8B1A3B] transition-all duration-300 ease-out group-hover:w-full"></div>
            <span className="relative flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Voltar
            </span>
          </Link>
          <h1
            // COR ALTERADA
            className="text-4xl font-extrabold mb-4 text-[#6A0E29] leading-tight"
          >
            Explore os melhores cursos de {/* COR ALTERADA */}
            <span className="text-[#8B1A3B]">
              {filteredByCategory[0].subTitle}
            </span>
          </h1>
          <p className="text-slate-700 text-lg mb-8 max-w-2xl">
            Aprimore suas habilidades com cursos reconhecidos e conteúdo de alta
            qualidade. Escolha abaixo e invista no seu futuro!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredByCategory.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. Se não for categoria, tenta encontrar um curso específico
  const allCourseDetails = StoragedCoursesInfo();
  const course = allCourseDetails.find(
    (c: CourseInformationsProps) => slugify(c.title) === decodedSlug
  );

  if (course) {
    const cardData = allCoursesForCards.find((c) => c.title === course.title);
    return <CourseInformations course={course} cardData={cardData} />;
  }

  // 3. Se não encontrou nada, mostra a página de erro
  return (
    <div className="bg-[#F1F1F1] flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1
        // COR ALTERADA
        className="text-3xl font-bold text-[#6A0E29]"
      >
        Página não encontrada!
      </h1>
      <p className="text-slate-600 mt-2 mb-6">
        O conteúdo que você procura não existe ou foi movido.
      </p>
      <Link
        href="/"
        // CORES ALTERADAS
        className="mt-6 inline-flex items-center gap-2 bg-[#8B1A3B] hover:bg-[#6A0E29] text-white
          px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-500 hover:scale-105 shadow-lg"
      >
        Voltar para Início
      </Link>
    </div>
  );
}
