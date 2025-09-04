import { Search, List, Flame, Star } from "lucide-react";

interface SearchSectionProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function SearchSection({
  searchTerm,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: SearchSectionProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 sm:py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#6A0E29] tracking-tight">
        Encontre seu Curso Ideal
      </h2>
      <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
        Explore nossa ampla gama de cursos de pós-graduação e encontre o que
        melhor se adapta aos seus objetivos profissionais.
      </p>

      <div className="relative mt-10">
        <div className="flex w-full max-w-3xl mx-auto rounded-xl bg-white shadow-lg shadow-slate-300/40 overflow-hidden ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-[#6A0E29] transition-all duration-300">
          {" "}
          <input
            type="text"
            placeholder="Buscar por área, curso ou palavra-chave..."
            className="flex-grow w-full px-5 py-4 bg-transparent text-lg outline-none text-slate-800 placeholder-slate-400"
            value={searchTerm}
            onChange={onSearchChange}
          />
          <button className="bg-[#6A0E29] px-6 text-white flex items-center justify-center hover:bg-[#8B1A3B] transition-colors">
            <Search size={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        <button
          onClick={() => onFilterChange("todos")}
          className={`flex items-center gap-2.5 pl-4 pr-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md ${
            activeFilter === "todos"
              ? "bg-[#6A0E29] text-white scale-105"
              : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
          }`}
        >
          <List size={18} />
          Todos os Cursos
        </button>

        <button
          onClick={() => onFilterChange("mais_clicados")}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm ${
            activeFilter === "mais_clicados"
              ? "bg-[#8B1A3B] text-white scale-105 border-transparent shadow-md"
              : "bg-white border border-[#8B1A3B] text-[#8B1A3B] hover:bg-red-50"
          }`}
        >
          <Flame size={18} />
          Mais Clicados
        </button>

        <button
          onClick={() => onFilterChange("lancamentos")}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm ${
            activeFilter === "lancamentos"
              ? "bg-[#FFD700] text-[#6A0E29] scale-105 border-transparent shadow-md"
              : "bg-white border border-[#FFD700] text-[#B8860B] hover:bg-yellow-50"
          }`}
        >
          <Star size={18} />
          Lançamentos
        </button>
      </div>
    </div>
  );
}
