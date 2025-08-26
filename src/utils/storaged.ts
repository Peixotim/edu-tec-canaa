import { CardPageProps } from "../components/cards";

export default function Storaged(): CardPageProps[] {
  return [
    {
      title: "Área da Saúde – Sua Carreira com Propósito",
      description:
        "🚨 Últimas vagas! Torne-se referência na saúde. Aprenda com especialistas e garanta certificação reconhecida. Trabalhe salvando vidas e tenha estabilidade no setor que mais cresce no Brasil!",
      category: "Saúde",
      flag: "🔥 Últimas Vagas",
      benneficies: [
        "Estude no seu ritmo",
        "Certificação Nacional",
        "Conteúdo atualizado com tendências",
      ],
      img: {
        src: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
        alt: "Profissionais da saúde em uma discussão de caso",
      },
      bgColorFlag: "bg-red-100 text-red-800", // <-- MUDADO
      bgColorCategory: "bg-red-100 text-red-800", // <-- MUDADO
      bgColorHover: "hover:bg-red-700", // <-- MUDADO
      maisClicado : true,
      lancamentos : false,
    },
    {
      title: "Administração & Gestão – Liderança na Prática",
      description:
        "📈 Suba de cargo e conquiste sua independência financeira. Aprenda estratégias modernas para gerir equipes e negócios com excelência. Vagas limitadas – garanta a sua agora!",
      category: "Finanças",
      flag: "🚀 Alta Demanda",
      benneficies: [
        "Flexibilidade total",
        "Instrutores experientes",
        "Aprenda gestão moderna",
      ],
      img:{
        src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        alt: "Equipe de gestão e liderança colaborando em um escritório moderno"
      },
      bgColorFlag: "bg-amber-100 text-amber-800", // <-- MUDADO
      bgColorCategory: "bg-blue-100 text-blue-800", // <-- MUDADO
      bgColorHover: "hover:bg-blue-700", // <-- MUDADO
      maisClicado : false,
      lancamentos : false,
    },
    {
      title: "Tecnologia e Informática – Futuro em Suas Mãos",
      description:
        "💻 Torne-se indispensável no mercado digital! Aprenda programação, redes e inovação com métodos práticos. Comece hoje mesmo e garanta sua vaga nesse setor que não para de crescer!",
      category: "Tecnología",
      flag: "⭐ Novidade",
      benneficies: [
        "Aprenda com cases reais",
        "Certificado valorizado",
        "Suporte dedicado",
      ],
      img:{
        src:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        alt:"Desenvolvedor trabalhando com código em múltiplas telas",
      },
      bgColorFlag: "bg-indigo-100 text-indigo-800", // <-- MUDADO
      bgColorCategory: "bg-purple-100 text-purple-800", // <-- MUDADO
      bgColorHover: "hover:bg-purple-700", // <-- MUDADO
      maisClicado : true,
      lancamentos : true,
    },
    {
      title: "Engenharia & Manutenção – Carreira Sólida",
      description:
        "🔧 Domine projetos e manutenção industrial para garantir salários altos e estabilidade. Vagas exclusivas – inscreva-se e prepare-se para grandes oportunidades!",
      category: "Infraestrutura",
      flag: "🔥 Concorrido",
      benneficies: [
        "Aulas práticas e objetivas",
        "Instrutores qualificados",
        "Formação completa",
      ],
      img:{
        src:"https://images.pexels.com/photos/3861439/pexels-photo-3861439.jpeg",
        alt:"Engenheiro industrial inspecionando maquinário em uma fábrica",
      },
      bgColorFlag: "bg-amber-100 text-amber-800", // <-- MUDADO
      bgColorCategory: "bg-slate-100 text-slate-800", // <-- MUDADO
      bgColorHover: "hover:bg-slate-700", // <-- MUDADO
      maisClicado : false,
      lancamentos : false,
    },
    {
      title: "Construção e Infraestrutura – Transforme Cidades",
      description:
        "🏗 Participe das maiores obras do Brasil! Domine planejamento e execução com técnicas modernas. Matrículas abertas por tempo limitado. Aproveite!",
      category: "Infraestrutura",
      flag: "⏳ Tempo Limitado",
      benneficies: [
        "Treinamento dinâmico",
        "Certificação nacional",
        "Conteúdo atualizado",
      ],
      img:{
        src: "https://images.pexels.com/photos/2249603/pexels-photo-2249603.jpeg",
        alt: "Canteiro de obras de um grande projeto de infraestrutura urbana"
      },
      bgColorFlag: "bg-red-100 text-red-800", // <-- MUDADO
      bgColorCategory: "bg-slate-100 text-slate-800", // <-- MUDADO
      bgColorHover: "hover:bg-slate-700", // <-- MUDADO
      maisClicado : false,
      lancamentos : false,
    },
    {
      title: "Meio Ambiente & Agro – Impacto com Resultado",
      description:
        "🌱 Seja protagonista da sustentabilidade! Aprenda práticas para gestão ambiental e produção agrícola eficiente. Torne-se um profissional requisitado no mercado!",
      category: "Meio Ambiente",
      flag: "💡 Oportunidade",
      benneficies: [
        "Aprendizado 100% online",
        "Reconhecimento no mercado",
        "Aulas com especialistas",
      ],
      img:{
        src:"https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg",
        alt:"Agrônomo analisando uma plantação com um tablet na mão",
      },
      bgColorFlag: "bg-green-100 text-green-800", // <-- MUDADO
      bgColorCategory: "bg-green-100 text-green-800", // <-- MUDADO
      bgColorHover: "hover:bg-green-700", // <-- MUDADO
      maisClicado : false,
      lancamentos : true,
    },
    {
      title: "Serviços – Ganhe Autoridade e Mais Clientes",
      description:
        "⚡ Capacite-se para oferecer serviços de excelência e aumentar sua renda. Cursos rápidos, práticos e com certificado para impulsionar sua carreira!",
      category: "Serviços Gerais",
      flag: "🔥 Alta Procura",
      benneficies: [
        "Certificação rápida",
        "Materiais completos",
        "Flexibilidade total",
      ],
      img:{
        src:"https://images.pexels.com/photos/8940733/pexels-photo-8940733.jpeg",
        alt:"Chef de cozinha profissional preparando um prato gourmet"
      },
      bgColorFlag: "bg-amber-100 text-amber-800", // <-- MUDADO
      bgColorCategory: "bg-teal-100 text-teal-800", // <-- MUDADO
      bgColorHover: "hover:bg-teal-700", // <-- MUDADO
      maisClicado : true,
      lancamentos : false,
    },
  ];
}