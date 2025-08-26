
import { CourseInformationsProps } from "@/components/courseInformations";

export default function StoragedCoursesInfo(): CourseInformationsProps[] {
  return [
    // --- ÁREA DA SAÚDE ---
    {
      title: "Técnico em Agente Comunitário de Saúde",
      img: {
        src: "https://images.pexels.com/photos/8942125/pexels-photo-8942125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Profissional da saúde realizando visita domiciliar",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar o profissional para ser o elo vital entre a comunidade e os serviços de saúde. O curso foca em desenvolver habilidades para o diagnóstico de condições de vida, promoção de ações educativas e vigilância em saúde, fortalecendo o SUS e melhorando a qualidade de vida da população local através de um trabalho preventivo e humanizado.",
        },
        {
          title: "Público Alvo",
          content: "Ideal para pessoas com forte vocação para o cuidado comunitário e que desejam causar um impacto social positivo. Destina-se a quem possui ensino médio completo, é comunicativo, empático e busca uma carreira estável e essencial dentro do Sistema Único de Saúde (SUS), atuando diretamente no território onde vive.",
        },
      ],
      whatYouWillLearn: [
        "Realizar diagnóstico das condições de vida e saúde da comunidade",
        "Promover ações de educação para a saúde individual e coletiva",
        "Registrar e analisar dados para planejamento de ações de saúde",
        "Orientar famílias sobre serviços de saúde disponíveis",
      ],
      depoiments: {
        texto: "O curso deu-me a base que eu precisava para fazer a diferença na minha comunidade. Hoje, sinto que o meu trabalho tem um impacto real na vida das pessoas.",
        autor: "Carlos Mendes",
        cargo: "Agente Comunitário de Saúde",
      },
    },
    {
      title: "Técnico em Análises Clínicas",
      img: {
        src: "https://images.pexels.com/photos/3993243/pexels-photo-3993243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Cientista em laboratório de análises clínicas com microscópio",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais de alta precisão para atuar nos bastidores do diagnóstico médico. O objetivo é capacitar o aluno para coletar, processar e analisar amostras biológicas com rigor técnico e científico, operando equipamentos modernos e garantindo a confiabilidade dos resultados que são cruciais para o tratamento de pacientes.",
        },
        {
          title: "Público Alvo",
          content: "Perfeito para pessoas detalhistas, metódicas e com grande interesse por ciências biológicas e investigação. Se você é organizado, possui bom raciocínio lógico e busca uma carreira fundamental na área da saúde, trabalhando em laboratórios de hospitais, clínicas ou centros de pesquisa, este curso é para você.",
        },
      ],
      whatYouWillLearn: [
        "Coletar diversos tipos de materiais biológicos",
        "Executar análises em hematologia, bioquímica e microbiologia",
        "Operar e calibrar equipamentos laboratoriais de alta precisão",
        "Aplicar normas de biossegurança e controle de qualidade",
      ],
      depoiments: {
        texto: "A precisão e o conhecimento técnico que adquiri no curso foram essenciais para a minha entrada no mercado de trabalho. Hoje atuo num grande laboratório e amo o que faço.",
        autor: "Juliana Costa",
        cargo: "Técnica em Laboratório",
      },
    },
    {
      title: "Técnico em Cuidados de Idosos",
      img: {
        src: "https://images.pexels.com/photos/4061442/pexels-photo-4061442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Cuidador auxiliando uma pessoa idosa",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais especializados e humanizados para promover a qualidade de vida e o envelhecimento saudável. O curso visa desenvolver competências para o cuidado integral da pessoa idosa, abrangendo desde a assistência em atividades diárias e administração de medicamentos até a promoção de atividades de lazer e integração social.",
        },
        {
          title: "Público Alvo",
          content: "Destinado a pessoas com grande senso de empatia, paciência e vocação para o cuidado humano. Se você busca uma profissão gratificante e com crescente demanda no mercado, e deseja especializar-se para atuar em residenciais, hospitais ou como cuidador particular, este curso oferece a formação completa que você precisa.",
        },
      ],
      whatYouWillLearn: [
        "Prestar cuidados de higiene, conforto e alimentação ao idoso",
        "Administrar medicamentos e realizar curativos simples",
        "Promover atividades de lazer e integração social",
        "Identificar e agir em situações de emergência",
      ],
      depoiments: {
        texto: "Aprendi não apenas as técnicas de cuidado, mas a importância da empatia и do carinho. O curso transformou-me como profissional e como pessoa.",
        autor: "Fernanda Lima",
        cargo: "Cuidadora de Idosos",
      },
    },
    {
      title: "Técnico em Enfermagem",
      img: {
        src: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnica de enfermagem sorrindo em ambiente hospitalar",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para serem a espinha dorsal do cuidado em saúde. O curso prepara o aluno para prestar assistência de enfermagem a pacientes de todas as complexidades, atuando em hospitais, clínicas e domicílios, sempre sob a supervisão do enfermeiro, com foco na segurança, ética e humanização do atendimento.",
        },
        {
          title: "Público Alvo",
          content: "Para quem tem o propósito de cuidar de pessoas e busca uma das profissões mais respeitadas e com maior empregabilidade na área da saúde. Exige dedicação, inteligência emocional e habilidade para trabalhar sob pressão e em equipe. Se você quer estar na linha de frente do cuidado, esta é a sua carreira.",
        },
      ],
      whatYouWillLearn: [
        "Administrar medicamentos e vacinas",
        "Realizar curativos e procedimentos de higiene",
        "Aferir sinais vitais e monitorizar pacientes",
        "Prestar assistência em urgências e emergências",
      ],
      depoiments: {
        texto: "O curso foi a base de tudo. A prática intensiva e o conhecimento dos professores deram-me a segurança para atuar na linha de frente da saúde.",
        autor: "Ricardo Alves",
        cargo: "Técnico de Enfermagem",
      },
    },
    {
      title: "Técnico em Equipamentos Biomédicos",
      img: {
        src: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico realizando manutenção em equipamento biomédico",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar o profissional que garante o funcionamento da tecnologia que salva vidas. O curso capacita o aluno para instalar, calibrar e realizar a manutenção preventiva e corretiva de equipamentos médico-hospitalares, assegurando que diagnósticos e terapias sejam realizados com máxima precisão e segurança.",
        },
        {
          title: "Público Alvo",
          content: "Ideal para pessoas com raciocínio lógico apurado e afinidade com eletrónica e tecnologia, que desejam aplicar as suas habilidades num ambiente de alto impacto como o da saúde. Se você gosta de resolver problemas complexos e quer trabalhar nos bastidores da medicina moderna, esta é a sua área.",
        },
      ],
      whatYouWillLearn: [
        "Realizar manutenção preventiva e corretiva em equipamentos",
        "Instalar e calibrar aparelhos de imagem e monitorização",
        "Gerir o inventário de equipamentos hospitalares",
        "Treinar equipas de saúde sobre o uso correto dos aparelhos",
      ],
      depoiments: {
        texto: "Eu sempre gostei de tecnologia, e este curso uniu isso à área da saúde. É gratificante saber que o meu trabalho ajuda a salvar vidas, garantindo que os equipamentos funcionem perfeitamente.",
        autor: "Beatriz Mota",
        cargo: "Técnica em Equipamentos Biomédicos",
      },
    },
    {
      title: "Técnico em Estética",
      img: {
        src: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Profissional de estética realizando procedimento facial",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar especialistas em beleza e bem-estar, capazes de aliar saúde e autoestima. O curso visa capacitar o aluno para realizar procedimentos estéticos faciais, corporais e capilares com segurança e conhecimento técnico, utilizando as mais modernas tecnologias e produtos do mercado para entregar resultados excecionais.",
        },
        {
          title: "Público Alvo",
          content: "Perfeito para pessoas que são apaixonadas pelo universo da beleza, têm senso estético apurado e gostam de interagir com o público. Se você busca uma carreira dinâmica, com grande potencial de empreendedorismo para atuar em clínicas, spas ou ter o seu próprio negócio, este curso é o caminho.",
        },
      ],
      whatYouWillLearn: [
        "Executar procedimentos de limpeza de pele e hidratação facial",
        "Aplicar técnicas de massagem modeladora e relaxante",
        "Realizar tratamentos estéticos com equipamentos modernos",
        "Orientar clientes sobre cuidados com a pele e o corpo",
      ],
      depoiments: {
        texto: "O curso abriu a minha mente para o mundo da estética. Hoje tenho a minha própria clínica e ajudo a elevar a autoestima de muitas pessoas. Foi o melhor investimento que fiz!",
        autor: "Larissa Andrade",
        cargo: "Esteticista e Empreendedora",
      },
    },
    {
      title: "Técnico em Farmácia",
      img: {
        src: "https://images.pexels.com/photos/7615469/pexels-photo-7615469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnica em farmácia organizando medicamentos",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar um profissional essencial na cadeia da saúde, responsável por garantir o acesso seguro a medicamentos. O curso prepara o aluno para atuar na dispensação, controlo de stock e organização de produtos farmacêuticos, sempre sob a supervisão do farmacêutico, sendo um pilar de confiança para o paciente.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para pessoas organizadas, responsáveis e com grande atenção aos detalhes. Se você busca uma carreira estável na área da saúde, com atuação em farmácias, drogarias, hospitais e na indústria farmacêutica, e entende a importância do seu papel no tratamento das pessoas, este curso é para você.",
        },
      ],
      whatYouWillLearn: [
        "Dispensar medicamentos e orientar sobre o uso correto",
        "Controlar o stock de medicamentos e produtos",
        "Realizar procedimentos de manipulação de fórmulas",
        "Aplicar injetáveis e realizar testes rápidos",
      ],
      depoiments: {
        texto: "Sempre quis trabalhar na área da saúde e o curso de técnico em farmácia foi a porta de entrada. A responsabilidade é grande, mas a satisfação em ajudar é maior ainda.",
        autor: "Marcos Vinícius",
        cargo: "Técnico em Farmácia",
      },
    },
    {
      title: "Técnico em Gerência em Saúde",
      img: {
        src: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Pessoas em reunião de gestão em um ambiente de saúde",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar gestores capazes de otimizar o funcionamento de organizações de saúde. O curso foca no desenvolvimento de competências administrativas, financeiras e de liderança aplicadas ao setor, visando a melhoria da qualidade, a eficiência dos serviços e a sustentabilidade de clínicas, hospitais e unidades de saúde.",
        },
        {
          title: "Público Alvo",
          content: "Ideal para profissionais da saúde que desejam migrar para cargos de gestão ou para pessoas com perfil administrativo que buscam uma especialização no promissor mercado da saúde. Se você tem visão estratégica, gosta de liderar equipas e quer otimizar processos para melhorar o atendimento ao paciente, encontrou o seu curso.",
        },
      ],
      whatYouWillLearn: [
        "Gerir equipas e processos em unidades de saúde",
        "Controlar faturação e custos hospitalares",
        "Implementar políticas de qualidade e segurança do paciente",
        "Planear e organizar os serviços de saúde",
      ],
      depoiments: {
        texto: "Eu era da área assistencial e queria migrar para a gestão. O curso deu-me as ferramentas de administração que eu precisava para crescer na minha carreira dentro do hospital.",
        autor: "Patrícia Ribeiro",
        cargo: "Gerente de Unidade de Saúde",
      },
    },
    {
      title: "Técnico em Nutrição e Dietética",
      img: {
        src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Nutricionista com prato de comida saudável",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar o profissional que transforma a ciência da nutrição em refeições saudáveis e seguras para grandes públicos. O curso capacita para a supervisão da produção de alimentos, controlo de qualidade, e auxílio na elaboração de ementas, promovendo a saúde e a educação alimentar em diversos ambientes.",
        },
        {
          title: "Público Alvo",
          content: "Perfeito para quem é apaixonado por alimentação, saúde e bem-estar. Se você é uma pessoa organizada, com senso de responsabilidade sanitária e deseja atuar em cozinhas industriais, restaurantes, hospitais ou escolas, auxiliando o nutricionista a garantir refeições de alta qualidade, este curso é o seu caminho.",
        },
      ],
      whatYouWillLearn: [
        "Supervisionar a produção de refeições em cozinhas industriais",
        "Auxiliar na elaboração de ementas balanceadas",
        "Realizar controlo de qualidade de alimentos",
        "Promover ações de educação alimentar e nutricional",
      ],
      depoiments: {
        texto: "Com o curso, aprendi a importância da alimentação para a saúde. Hoje, trabalho garantindo que centenas de pessoas recebam refeições de qualidade todos os dias.",
        autor: "Gustavo Pereira",
        cargo: "Técnico em Nutrição",
      },
    },
    {
      title: "Técnico em Radiologia",
      img: {
        src: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico em radiologia operando máquina de raio-x",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais de alta tecnologia, responsáveis por 'ver por dentro' do corpo humano para auxiliar diagnósticos. O curso prepara para operar equipamentos de Raio-X, Tomografia, Mamografia e outros, com profundo conhecimento das técnicas, da anatomia humana e, principalmente, das normas de proteção radiológica.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para pessoas focadas, responsáveis e com grande interesse pela tecnologia aplicada à medicina. Se você busca uma carreira com regulamentação específica, grande importância clínica e atuação em hospitais e clínicas de diagnóstico por imagem, esta é uma excelente escolha profissional.",
        },
      ],
      whatYouWillLearn: [
        "Operar equipamentos de Raio-X, Tomografia e Mamografia",
        "Preparar o paciente para a realização de exames",
        "Aplicar técnicas de posicionamento radiográfico",
        "Gerir e processar imagens digitais",
      ],
      depoiments: {
        texto: "É uma área fascinante da medicina. O curso preparou-me para ser um profissional seguro e competente, essencial para um diagnóstico preciso.",
        autor: "Camila Santos",
        cargo: "Técnica em Radiologia Médica",
      },
    },
    {
      title: "Técnico em Saúde Bucal",
      img: {
        src: "https://images.pexels.com/photos/6528859/pexels-photo-6528859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Assistente de saúde bucal auxiliando dentista",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar o braço direito do cirurgião-dentista, um profissional indispensável para o funcionamento de qualquer consultório. O curso capacita para auxiliar em procedimentos, realizar ações de prevenção como profilaxia, e gerir a organização e biossegurança do ambiente odontológico.",
        },
        {
          title: "Público Alvo",
          content: "Ideal para pessoas organizadas, ágeis e que gostam de trabalhar em equipa num ambiente dinâmico. Se você se interessa pela área odontológica e busca uma carreira com rápida inserção no mercado, atuando diretamente no cuidado e na promoção de sorrisos saudáveis, este curso é para você.",
        },
      ],
      whatYouWillLearn: [
        "Instrumentar o cirurgião-dentista durante procedimentos",
        "Realizar profilaxia e aplicação de flúor",
        "Processar e revelar radiografias odontológicas",
        "Organizar e esterilizar o ambiente e os instrumentos",
      ],
      depoiments: {
        texto: "Ser o braço direito do dentista é uma grande responsabilidade. O curso ensinou-me tudo o que preciso para garantir que o atendimento seja seguro e eficiente.",
        autor: "Lucas Martins",
        cargo: "Técnico em Saúde Bucal",
      },
    },
    {
      title: "Técnico em Veterinária",
      img: {
        src: "https://images.pexels.com/photos/6235116/pexels-photo-6235116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico em veterinária cuidando de um cachorro",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar profissionais para serem o suporte essencial ao médico veterinário no cuidado da saúde e bem-estar animal. O curso abrange desde o auxílio em procedimentos clínicos e cirúrgicos até o maneio, contenção и administração de medicamentos em animais de pequeno e grande porte.",
        },
        {
          title: "Público Alvo",
          content: "Para verdadeiros amantes de animais que desejam transformar essa paixão em profissão. Se você tem vocação para o cuidado, não tem medo de colocar a mão na massa e busca uma carreira gratificante em clínicas, hospitais veterinários, ONGs ou no agronegócio, este curso é o seu chamado.",
        },
      ],
      whatYouWillLearn: [
        "Auxiliar em procedimentos clínicos e cirúrgicos de animais",
        "Realizar a contenção e o maneio de animais de pequeno e grande porte",
        "Administrar medicamentos e aplicar vacinas",
        "Coletar amostras para exames laboratoriais",
      ],
      depoiments: {
        texto: "Trabalhar com animais era o meu sonho, e o curso tornou isso realidade. A prática que tivemos foi fundamental para eu conseguir o meu primeiro emprego numa clínica.",
        autor: "Mariana Oliveira",
        cargo: "Técnica em Veterinária",
      },
    },
    // --- ÁREA DE ADMINISTRAÇÃO E GESTÃO ---
    {
      title: "Técnico em Administração",
      img: {
        src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Equipa de administração em reunião de planeamento",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais versáteis e indispensáveis para o sucesso de qualquer organização. O curso oferece uma base sólida em finanças, recursos humanos, logística e marketing, preparando o aluno para otimizar processos, gerir recursos e contribuir ativamente para o crescimento do negócio.",
        },
        {
          title: "Público Alvo",
          content: "Ideal para pessoas com perfil organizado, proativo e com visão de futuro. Se você busca uma carreira com vastas oportunidades em diversos setores, gosta de planear, executar e liderar, e quer ser um profissional-chave em qualquer empresa, a formação técnica em Administração é o seu passaporte.",
        },
      ],
      whatYouWillLearn: [
        "Executar rotinas de contas a pagar e a receber",
        "Apoiar processos de recrutamento e seleção",
        "Controlar stocks e logística de materiais",
        "Utilizar softwares de gestão empresarial (ERP)",
      ],
      depoiments: {
        texto: "O curso deu-me uma visão 360º de como uma empresa funciona. Hoje consigo atuar em diversas áreas e sou muito mais valorizado no mercado.",
        autor: "João Pedro",
        cargo: "Assistente Administrativo",
      },
    },
    {
      title: "Técnico em Contabilidade",
      img: {
        src: "https://images.pexels.com/photos/7567433/pexels-photo-7567433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Pessoa a trabalhar com calculadora e folhas de cálculo de contabilidade",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar o profissional que é o guardião da saúde financeira de uma empresa. O curso prepara para executar com precisão todos os processos contabilísticos e fiscais, desde o registo de documentos até à elaboração de balanços e apuramento de impostos, garantindo a conformidade legal e o suporte para a tomada de decisões estratégicas.",
        },
        {
          title: "Público Alvo",
          content: "Perfeito para pessoas com raciocínio analítico, afinidade com números e alto senso de organização e responsabilidade. Se você busca uma carreira estável, com importância estratégica e essencial para todas as empresas, independentemente do porte ou setor, a contabilidade é uma escolha sólida e segura.",
        },
      ],
      whatYouWillLearn: [
        "Classificar e lançar documentos contabilísticos",
        "Calcular impostos e contribuições sociais",
        "Elaborar balancetes e demonstrações financeiras",
        "Analisar a saúde financeira da empresa",
      ],
      depoiments: {
        texto: "A contabilidade é a linguagem dos negócios, e este curso tornou-me fluente nela. Consegui um ótimo emprego antes mesmo de terminar os estudos.",
        autor: "Sofia Martins",
        cargo: "Analista Contabilístico Jr.",
      },
    },
    {
      title: "Técnico em Marketing",
      img: {
        src: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Gráficos e dados numa apresentação de marketing",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais criativos e estratégicos para conectar marcas e consumidores. O curso desenvolve habilidades para analisar o mercado, planear campanhas, gerir redes sociais e criar ações de venda que gerem resultados concretos, construindo uma imagem de marca forte e um relacionamento duradouro com o cliente.",
        },
        {
          title: "Público Alvo",
          content: "Ideal para pessoas comunicativas, criativas e antenadas com as tendências digitais. Se você gosta de entender o comportamento das pessoas, criar conteúdo e usar a criatividade para resolver problemas de negócio, e busca uma carreira dinâmica em agências ou empresas, o marketing é a sua área.",
        },
      ],
      whatYouWillLearn: [
        "Realizar pesquisas de mercado e análise da concorrência",
        "Planear e executar campanhas de marketing digital",
        "Gerir redes sociais e criar conteúdo relevante",
        "Desenvolver estratégias de vendas e relacionamento com o cliente",
      ],
      depoiments: {
        texto: "O curso mostrou-me que marketing é muito mais que propaganda. Aprendi a analisar dados e a criar estratégias que realmente geram resultados. Foi incrível!",
        autor: "Daniela Rocha",
        cargo: "Assistente de Marketing Digital",
      },
    },
    {
      title: "Técnico em Qualidade",
      img: {
        src: "https://images.pexels.com/photos/3807744/pexels-photo-3807744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Inspetor de qualidade a analisar produto numa fábrica",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar o profissional que garante a excelência em cada etapa de um processo. O curso capacita para inspecionar, monitorizar e auditar produtos e serviços, aplicando ferramentas de gestão da qualidade para garantir a conformidade com as normas, a satisfação do cliente e a melhoria contínua da organização.",
        },
        {
          title: "Público Alvo",
          content: "Perfeito para pessoas detalhistas, observadoras e com um forte compromisso com a perfeição. Se você tem um perfil analítico e busca uma carreira transversal, crucial para a competitividade de indústrias e empresas de serviços, a área da Qualidade oferece um caminho de grande valorização.",
        },
      ],
      whatYouWillLearn: [
        "Aplicar ferramentas de gestão da qualidade (PDCA, Ishikawa)",
        "Realizar auditorias internas de processos",
        "Controlar a qualidade de matérias-primas e produtos acabados",
        "Elaborar relatórios e indicadores de desempenho",
      ],
      depoiments: {
        texto: "Com o curso, passei a enxergar os processos com outros olhos. Hoje, ajudo a minha empresa a ser mais eficiente e a entregar produtos muito melhores aos clientes.",
        autor: "Felipe Borges",
        cargo: "Inspetor de Qualidade",
      },
    },
    {
      title: "Técnico em Recursos Humanos",
      img: {
        src: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Profissional de recursos humanos numa entrevista de emprego",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar o profissional que cuida do maior ativo de uma empresa: as pessoas. O curso prepara para atuar em todos os subsistemas de RH, desde o recrutamento e seleção até ao treino, desenvolvimento, administração de pessoal e gestão do clima organizacional, de forma estratégica e humanizada.",
        },
        {
          title: "Público Alvo",
          content: "Ideal para pessoas com excelentes habilidades de comunicação, empatia e interesse genuíno em desenvolvimento humano. Se você quer construir uma carreira ajudando a formar equipas de alta performance e a criar um ambiente de trabalho positivo e produtivo, o RH é a sua vocação.",
        },
      ],
      whatYouWillLearn: [
        "Conduzir processos de recrutamento e seleção",
        "Administrar a folha de pagamento e benefícios",
        "Organizar treinos e programas de desenvolvimento",
        "Apoiar a gestão de clima organizacional",
      ],
      depoiments: {
        texto: "Entender de pessoas é fundamental para qualquer empresa. O curso deu-me a técnica e a sensibilidade para atuar no RH de forma estratégica e humana.",
        autor: "Amanda Nunes",
        cargo: "Analista de RH",
      },
    },
    {
      title: "Técnico em Secretaria Escolar",
      img: {
        src: "https://images.pexels.com/photos/5212353/pexels-photo-5212353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Ambiente de uma secretaria escolar com arquivos e computador",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar o profissional que é o coração administrativo de uma instituição de ensino. O curso capacita para gerir com eficiência toda a documentação académica, desde matrículas e históricos até à expedição de certificados, garantindo a organização, a legalidade e o bom atendimento a toda a comunidade escolar.",
        },
        {
          title: "Público Alvo",
          content: "Perfeito para pessoas extremamente organizadas, com ótima comunicação e que gostam do ambiente educacional. Se você busca uma carreira estável e fundamental para o funcionamento de escolas, faculdades e cursos, e tem prazer em manter tudo em ordem, esta é a sua área.",
        },
      ],
      whatYouWillLearn: [
        "Gerir matrículas e transferências de alunos",
        "Organizar arquivos e registos académicos",
        "Expedir históricos, declarações e certificados",
        "Atender alunos, pais e professores com eficiência",
      ],
      depoiments: {
        texto: "O trabalho na secretaria é o coração da escola. O curso preparou-me para manter tudo organizado e a funcionar, o que faz toda a diferença no dia a dia.",
        autor: "Roberto Dias",
        cargo: "Secretário Escolar",
      },
    },
    {
      title: "Técnico em Serviços Jurídicos",
      img: {
        src: "https://images.pexels.com/photos/5816283/pexels-photo-5816283.jpeg",
        alt: "Pessoa a trabalhar num escritório de advocacia com livros de direito",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais de suporte essenciais para o dinâmico mundo do Direito. O curso prepara para dar apoio administrativo e técnico em escritórios de advocacia, departamentos jurídicos e órgãos públicos, gerindo processos, pesquisando legislações e garantindo a organização que permite o bom andamento dos serviços.",
        },
        {
          title: "Público Alvo",
          content: "Ideal para pessoas com grande senso de organização, discrição e interesse pela área jurídica. Se você busca uma porta de entrada para o universo do Direito, com atuação prática e fundamental para a rotina de advogados e juízes, este curso oferece uma base sólida e rápida inserção no mercado.",
        },
      ],
      whatYouWillLearn: [
        "Organizar e controlar processos judiciais e administrativos",
        "Elaborar petições e documentos simples sob supervisão",
        "Pesquisar legislação e jurisprudência",
        "Gerir prazos e a agenda do escritório",
      ],
      depoiments: {
        texto: "O curso foi um excelente ponto de partida para a área jurídica. Aprendi a rotina de um escritório e hoje sou peça fundamental na equipa em que trabalho.",
        autor: "Vanessa Cruz",
        cargo: "Assistente Jurídico",
      },
    },
    {
      title: "Técnico em Transações Imobiliárias",
      img: {
        src: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Corretor de imóveis a entregar as chaves de uma casa",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar corretores de imóveis de sucesso, capazes de transformar o sonho da casa própria em realidade. O curso prepara para atuar em todas as etapas da transação imobiliária – da captação e avaliação até à negociação e ao fecho do contrato – com conhecimento de mercado, técnicas de venda e da legislação vigente.",
        },
        {
          title: "Público Alvo",
          content: "Perfeito para pessoas com perfil empreendedor, excelentes habilidades de comunicação e negociação. Se você é dinâmico, gosta de se relacionar com pessoas e busca uma carreira com autonomia e grande potencial de ganhos, o mercado imobiliário, com a devida qualificação (CRECI), é o seu lugar.",
        },
      ],
      whatYouWillLearn: [
        "Avaliar e captar imóveis para venda e locação",
        "Conduzir negociações entre compradores e vendedores",
        "Analisar a documentação imobiliária",
        "Utilizar técnicas de marketing para divulgar imóveis",
      ],
      depoiments: {
        texto: "O curso deu-me o conhecimento e a credencial (CRECI) que eu precisava para atuar com segurança. Ajudar as pessoas a realizarem o sonho da casa própria é muito gratificante.",
        autor: "André Figueiredo",
        cargo: "Corretor de Imóveis",
      },
    },
    {
      title: "Técnico em Vendas",
      img: {
        src: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Vendedor a atender cliente numa loja",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais de alta performance, capazes de transformar produtos e serviços em soluções para os clientes. O curso foca no desenvolvimento de técnicas de negociação, planeamento de vendas, gestão de carteira de clientes e uso de ferramentas de CRM para superar metas e construir relacionamentos de longo prazo.",
        },
        {
          title: "Público Alvo",
          content: "Ideal para pessoas comunicativas, persuasivas e com forte orientação para resultados. Se você é competitivo, gosta de desafios e busca uma carreira onde o seu desempenho se reflete diretamente nos seus ganhos, em qualquer setor da economia, a área de vendas é o caminho mais rápido para o sucesso.",
        },
      ],
      whatYouWillLearn: [
        "Aplicar técnicas de negociação e fecho de vendas",
        "Gerir a carteira de clientes (CRM)",
        "Elaborar propostas comerciais e apresentações",
        "Analisar indicadores de desempenho de vendas",
      ],
      depoiments: {
        texto: "Eu achava que vender era um dom, mas o curso mostrou-me que é técnica. As minhas metas e comissões aumentaram muito depois que apliquei o que aprendi.",
        autor: "Bruno Siqueira",
        cargo: "Vendedor Técnico",
      },
    },
    {
      title: "Curso Técnico em Eventos",
      img: {
        src: "https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Organizador de eventos a coordenar uma conferência",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar o profissional que transforma ideias em momentos inesquecíveis. O curso prepara para planear, organizar e executar eventos de todos os tipos e portes, desde a conceção e controlo de orçamento até à logística, contratação de fornecedores e coordenação no dia do evento, garantindo que tudo saia perfeito.",
        },
        {
          title: "Público Alvo",
          content: "Perfeito para pessoas criativas, com grande capacidade de organização e que sabem trabalhar sob pressão. Se você é multitarefa, tem bom relacionamento interpessoal e busca uma carreira dinâmica e sem rotina, onde cada projeto é um novo desafio, a produção de eventos é a sua praia.",
        },
      ],
      whatYouWillLearn: [
        "Planear a logística de eventos (local, buffet, som)",
        "Controlar o orçamento e negociar com fornecedores",
        "Criar cronogramas e checklists de execução",
        "Coordenar equipas durante a montagem e realização do evento",
      ],
      depoiments: {
        texto: "Organizar eventos é uma paixão. O curso deu-me a metodologia e a confiança para transformar ideias em momentos inesquecíveis. Cada evento é um novo desafio!",
        autor: "Cláudia Leite",
        cargo: "Produtora de Eventos",
      },
    },
    // --- ÁREA DE TECNOLOGIA E INFORMÁTICA ---
    {
      title: "Técnico em Biotecnologia",
      img: {
        src: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Cientista a trabalhar com amostras em laboratório de biotecnologia",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Preparar profissionais para atuar em laboratórios, aplicando técnicas de biologia molecular e celular em processos industriais, na saúde e no meio ambiente.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para estudantes com interesse em ciências, biologia e tecnologia. É uma área de vanguarda, ideal para quem busca atuar em pesquisa e desenvolvimento em laboratórios e indústrias.",
        },
      ],
      whatYouWillLearn: [
        "Realizar análises de DNA e RNA",
        "Cultivar microrganismos para produção industrial",
        "Operar equipamentos de fermentação e purificação",
        "Aplicar técnicas de controlo de qualidade em bioprodutos",
      ],
      depoiments: {
        texto: "A biotecnologia é o futuro. O curso abriu-me as portas para uma área inovadora, onde posso trabalhar com pesquisa e desenvolvimento de novos produtos.",
        autor: "Rafael Gomes",
        cargo: "Técnico em Biotecnologia Industrial",
      },
    },
    {
      title: "Técnico em Design Gráfico",
      img: {
        src: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Designer gráfico a trabalhar num computador com software de edição",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar o aluno para criar projetos de comunicação visual, desenvolvendo peças gráficas para mídias impressas e digitais, como logotipos, websites e embalagens.",
        },
        {
          title: "Público Alvo",
          content: "Voltado para pessoas criativas, com senso estético e interesse em artes visuais e tecnologia. Ideal para quem deseja trabalhar em agências de publicidade, gráficas ou como freelancer.",
        },
      ],
      whatYouWillLearn: [
        "Utilizar softwares como Photoshop, Illustrator e InDesign",
        "Criar identidades visuais (logotipos, manuais de marca)",
        "Desenvolver layouts para mídias sociais e websites",
        "Preparar arquivos para impressão gráfica",
      ],
      depoiments: {
        texto: "Eu sempre gostei de desenhar, e o curso ensinou-me a transformar a minha criatividade numa profissão. Hoje, vejo o meu trabalho em todos os lugares!",
        autor: "Isabela Ferraz",
        cargo: "Designer Gráfico",
      },
    },
    {
      title: "Técnico em Desenvolvimento de Sistemas",
      img: {
        src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Desenvolvedor de sistemas a programar com código no ecrã",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para analisar, projetar, desenvolver, testar e manter sistemas computacionais, utilizando diferentes linguagens de programação e metodologias.",
        },
        {
          title: "Público Alvo",
          content: "Destina-se a estudantes com raciocínio lógico apurado e interesse em programação. É a porta de entrada para a carreira de desenvolvedor de software, uma das mais requisitadas do mercado.",
        },
      ],
      whatYouWillLearn: [
        "Desenvolver algoritmos e lógica de programação",
        "Programar em linguagens como Java, Python ou C#",
        "Criar e gerir bases de dados SQL",
        "Desenvolver aplicações web e mobile",
      ],
      depoiments: {
        texto: "O curso foi extremamente prático. Saí de lá com um portfólio de projetos que me ajudou a conseguir o meu primeiro emprego como desenvolvedor júnior.",
        autor: "Thiago Moreira",
        cargo: "Desenvolvedor de Software",
      },
    },
    {
      title: "Técnico em Informática para Internet",
      img: {
        src: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Profissional de informática para internet a criar um website",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Preparar o aluno para desenvolver e manter websites, portais e aplicações para a internet, integrando design, funcionalidade e base de dados.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para quem se interessa pelo desenvolvimento web (front-end e back-end). Ideal para pessoas criativas e lógicas que desejam construir a próxima geração de sites e aplicações online.",
        },
      ],
      whatYouWillLearn: [
        "Desenvolver interfaces com HTML, CSS e JavaScript",
        "Criar sites responsivos para desktop e mobile",
        "Integrar o front-end com o back-end usando APIs",
        "Gerir a hospedagem e a publicação de websites",
      ],
      depoiments: {
        texto: "Sempre fui curioso sobre como os sites funcionavam. O curso desmistificou tudo e deu-me as habilidades para criar as minhas próprias aplicações web do zero.",
        autor: "Gabriela Rios",
        cargo: "Desenvolvedora Front-end",
      },
    },
    {
      title: "Técnico em Redes de Computadores",
      img: {
        src: "https://images.pexels.com/photos/5380649/pexels-photo-5380649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico de redes a trabalhar num data center com servidores",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar profissionais para projetar, instalar, configurar e administrar redes de computadores, garantindo a segurança e a conectividade de sistemas e utilizadores.",
        },
        {
          title: "Público Alvo",
          content: "Voltado para pessoas com interesse em infraestrutura de TI, hardware e conectividade. É indicado para quem tem raciocínio lógico e gosta de resolver problemas técnicos.",
        },
      ],
      whatYouWillLearn: [
        "Montar e configurar redes locais (LANs)",
        "Administrar servidores Windows e Linux",
        "Implementar políticas de segurança de rede (firewall, VPN)",
        "Resolver problemas de conectividade e desempenho",
      ],
      depoiments: {
        texto: "O curso é muito prático. Aprendi a configurar routers, servidores e a garantir que a rede de uma empresa funcione sem problemas. É uma área com muita procura!",
        autor: "Eduardo Jorge",
        cargo: "Administrador de Redes",
      },
    },
    {
      title: "Técnico em Sistemas de Energia Renovável",
      img: {
        src: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico a instalar painéis solares num telhado",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para projetar, instalar e manter sistemas de geração de energia limpa, como solar e eólica, contribuindo para a sustentabilidade.",
        },
        {
          title: "Público Alvo",
          content: "Destina-se a estudantes com interesse em sustentabilidade, tecnologia e engenharia. É uma área em plena expansão, ideal para quem quer trabalhar com as tecnologias do futuro.",
        },
      ],
      whatYouWillLearn: [
        "Dimensionar e projetar sistemas de energia solar fotovoltaica",
        "Instalar painéis solares e inversores de frequência",
        "Realizar a manutenção de sistemas de energia renovável",
        "Analisar a viabilidade técnica e financeira de projetos",
      ],
      depoiments: {
        texto: "Trabalhar com energia renovável é gratificante. O curso deu-me o conhecimento técnico para atuar num mercado que não para de crescer e que ajuda o planeta.",
        autor: "Letícia Barros",
        cargo: "Técnica em Energia Solar",
      },
    },
    {
      title: "Técnico em Telecomunicações",
      img: {
        src: "https://images.pexels.com/photos/53621/metal-industry-work-manufacturing-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico a trabalhar numa torre de telecomunicações",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Preparar profissionais para instalar, operar e manter sistemas de comunicação, como redes de telefonia, rádio, TV e internet.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para quem gosta de tecnologia e infraestrutura de comunicação. O curso abre portas para trabalhar em operadoras de telefonia, provedores de internet e emissoras de TV e rádio.",
        },
      ],
      whatYouWillLearn: [
        "Instalar e manter redes de fibra ótica e cabos metálicos",
        "Configurar sistemas de telefonia e PABX",
        "Operar equipamentos de transmissão de rádio e TV",
        "Realizar testes e medições em sistemas de comunicação",
      ],
      depoiments: {
        texto: "O mundo está cada vez mais conectado, e eu ajudo a construir essa conexão. O curso foi essencial para eu entender como toda essa infraestrutura funciona.",
        autor: "Rodrigo Neves",
        cargo: "Técnico de Telecom",
      },
    },
    {
      title: "Técnico em Tradução e Interpretação de Libras",
      img: {
        src: "https://images.pexels.com/photos/4342401/pexels-photo-4342401.jpeg",
        alt: "Mãos a fazer um sinal da Língua Brasileira de Sinais (Libras)",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para atuar como ponte de comunicação entre surdos e ouvintes, traduzindo e interpretando a Língua Brasileira de Sinais (Libras) e o Português.",
        },
        {
          title: "Público Alvo",
          content: "Voltado para pessoas fluentes em Libras ou com grande interesse em aprendê-la, que buscam promover a inclusão e a acessibilidade comunicacional para a comunidade surda.",
        },
      ],
      whatYouWillLearn: [
        "Interpretar discursos e diálogos do português para Libras",
        "Traduzir textos e vídeos para a Língua Brasileira de Sinais",
        "Atuar como intérprete em eventos, escolas e empresas",
        "Compreender os aspetos culturais da comunidade surda",
      ],
      depoiments: {
        texto: "Ser a ponte de comunicação entre dois mundos é uma responsabilidade e um privilégio. O curso deu-me a fluência e a ética profissional para exercer essa função tão importante.",
        autor: "Aline Souza",
        cargo: "Intérprete de Libras",
      },
    },
    {
      title: "Técnico em Automação Industrial",
      img: {
        src: "https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Braço robótico numa linha de produção industrial automatizada",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar profissionais para projetar, instalar e manter sistemas automatizados em processos industriais, utilizando robótica, controladores lógicos e sensores.",
        },
        {
          title: "Público Alvo",
          content: "Destina-se a estudantes com interesse em tecnologia, robótica e processos industriais. Ideal para quem busca otimizar a produção industrial através da tecnologia.",
        },
      ],
      whatYouWillLearn: [
        "Programar Controladores Lógicos Programáveis (CLPs)",
        "Integrar robôs industriais em linhas de produção",
        "Configurar sensores e atuadores",
        "Desenvolver sistemas de supervisão (SCADA)",
      ],
      depoiments: {
        texto: "Ver uma linha de produção inteira a funcionar de forma autónoma graças a um sistema que eu programei é incrível. O curso preparou-me para a indústria 4.0.",
        autor: "Vinícius Bastos",
        cargo: "Técnico em Automação",
      },
    },
    {
      title: "Técnico em Eletromecânica",
      img: {
        src: "https://images.pexels.com/photos/8346066/pexels-photo-8346066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico em eletromecânica a trabalhar num motor industrial",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais polivalentes para atuar na manutenção e montagem de sistemas que integram mecânica e eletricidade em máquinas e equipamentos industriais.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para quem tem aptidão tanto para a mecânica quanto para a elétrica e busca uma formação versátil para atuar na manutenção industrial.",
        },
      ],
      whatYouWillLearn: [
        "Realizar a manutenção de motores elétricos e sistemas mecânicos",
        "Montar e desmontar máquinas e equipamentos industriais",
        "Diagnosticar falhas em sistemas elétricos e mecânicos",
        "Interpretar desenhos técnicos de ambas as áreas",
      ],
      depoiments: {
        texto: "A formação em eletromecânica tornou-me um profissional muito completo e disputado no mercado. Consigo resolver problemas que antes precisariam de dois técnicos diferentes.",
        autor: "Fábio Guimarães",
        cargo: "Técnico de Manutenção Industrial",
      },
    },
    {
      title: "Técnico em Eletrotécnica",
      img: {
        src: "https://images.pexels.com/photos/5849572/pexels-photo-5849572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Eletricista a trabalhar num painel elétrico de alta tensão",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Preparar profissionais para projetar, instalar e manter sistemas elétricos de baixa e média tensão, em ambientes prediais, comerciais e industriais, com foco em segurança e eficiência.",
        },
        {
          title: "Público Alvo",
          content: "Voltado para pessoas com interesse em eletricidade e projetos elétricos. É uma formação clássica e com alta procura no setor industrial e de construção civil.",
        },
      ],
      whatYouWillLearn: [
        "Projetar instalações elétricas prediais e industriais",
        "Montar e reparar painéis de comando elétrico",
        "Realizar a manutenção de redes de distribuição de energia",
        "Aplicar normas técnicas de segurança em eletricidade",
      ],
      depoiments: {
        texto: "O curso deu-me o conhecimento para trabalhar com segurança e eficiência numa área de grande responsabilidade. Hoje, participo de grandes projetos de instalações elétricas.",
        autor: "Diego Santos",
        cargo: "Técnico Eletrotécnico",
      },
    },
    {
      title: "Técnico em Eletrônica",
      img: {
        src: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico em eletrónica a soldar componentes numa placa de circuito",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar o aluno para desenvolver, montar e realizar a manutenção de circuitos e equipamentos eletrónicos, desde aparelhos de consumo até sistemas industriais.",
        },
        {
          title: "Público Alvo",
          content: "Destina-se a quem tem curiosidade sobre o funcionamento de aparelhos eletrónicos. Ideal para pessoas detalhistas e com bom raciocínio lógico para trabalhar com microcomponentes.",
        },
      ],
      whatYouWillLearn: [
        "Projetar e montar placas de circuito impresso (PCIs)",
        "Realizar a manutenção de equipamentos de áudio e vídeo",
        "Programar microcontroladores",
        "Diagnosticar e reparar falhas em circuitos eletrónicos",
      ],
      depoiments: {
        texto: "Sempre fui aquele que desmontava tudo para ver como funcionava. O curso ensinou-me a montar e, mais importante, a consertar. Transformei o meu hobby em profissão.",
        autor: "Pedro Henrique",
        cargo: "Técnico em Eletrónica",
      },
    },
    {
      title: "Técnico em Manutenção de Máquinas Industriais",
      img: {
        src: "https://images.pexels.com/photos/4474043/pexels-photo-4474043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Mecânico a realizar manutenção numa máquina industrial pesada",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para realizar manutenções preventivas e corretivas em equipamentos industriais, garantindo a continuidade e eficiência da produção.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para quem gosta de mecânica e de resolver problemas práticos. É uma profissão fundamental para qualquer indústria, garantindo que as máquinas estejam sempre operacionais.",
        },
      ],
      whatYouWillLearn: [
        "Diagnosticar e reparar falhas em sistemas mecânicos, hidráulicos e pneumáticos",
        "Executar planos de manutenção preventiva",
        "Realizar a lubrificação e o ajuste de máquinas",
        "Interpretar manuais e desenhos técnicos de equipamentos",
      ],
      depoiments: {
        texto: "Manter uma indústria a funcionar é um grande desafio. O curso deu-me o conhecimento prático para garantir que as máquinas nunca parem, o que é vital para a produção.",
        autor: "António Carlos",
        cargo: "Mecânico de Manutenção",
      },
    },
    {
      title: "Técnico em Máquinas Pesadas",
      img: {
        src: "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Operador numa escavadora num estaleiro de obras",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Preparar profissionais para operar e realizar a manutenção de equipamentos de grande porte, como tratores e escavadoras, utilizados na construção civil e mineração.",
        },
        {
          title: "Público Alvo",
          content: "Voltado para pessoas que desejam trabalhar com grandes equipamentos no setor de construção, agronegócio ou mineração, combinando habilidades de operação e mecânica.",
        },
      ],
      whatYouWillLearn: [
        "Operar tratores, escavadoras e outras máquinas pesadas com segurança",
        "Realizar a manutenção preventiva de motores a diesel",
        "Diagnosticar falhas em sistemas hidráulicos",
        "Aplicar normas de segurança na operação de equipamentos",
      ],
      depoiments: {
        texto: "O curso qualificou-me para operar máquinas que valem milhões. É uma grande responsabilidade, mas a formação que tive deu-me total segurança para o trabalho.",
        autor: "José Ferreira",
        cargo: "Operador de Máquinas Pesadas",
      },
    },
    {
      title: "Técnico em Metalurgia",
      img: {
        src: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Trabalhador numa siderúrgica com metal derretido",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para supervisionar e executar processos de extração, transformação e tratamento de metais e suas ligas, controlando a qualidade do produto final.",
        },
        {
          title: "Público Alvo",
          content: "Destina-se a estudantes com interesse em química, física e processos industriais. É uma área chave para a indústria de base, como siderúrgicas e automobilísticas.",
        },
      ],
      whatYouWillLearn: [
        "Realizar ensaios para controlo de qualidade de metais",
        "Supervisionar processos de fundição e laminação",
        "Aplicar tratamentos térmicos para alterar propriedades dos metais",
        "Analisar a microestrutura de materiais metálicos",
      ],
      depoiments: {
        texto: "Entender como transformar minério em aço de alta performance é fascinante. O curso abriu-me as portas da indústria pesada, uma área com ótimas oportunidades.",
        autor: "Marcelo Pinto",
        cargo: "Técnico Metalurgista",
      },
    },
    {
      title: "Técnico em Refrigeração e Climatização",
      img: {
        src: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico a realizar manutenção numa unidade de ar condicionado",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar profissionais para instalar e manter sistemas de ar-condicionado e refrigeração em ambientes domésticos, comerciais e industriais.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para quem busca uma profissão com alta procura de serviços. Ideal para quem gosta de trabalho técnico e prático, garantindo o conforto térmico e a conservação de produtos.",
        },
      ],
      whatYouWillLearn: [
        "Instalar sistemas de ar condicionado tipo split e central",
        "Realizar a manutenção preventiva e corretiva de equipamentos",
        "Diagnosticar e corrigir fugas de fluidos refrigerantes",
        "Projetar sistemas de climatização de pequeno porte",
      ],
      depoiments: {
        texto: "Nunca falta trabalho nesta área! O curso deu-me o conhecimento técnico para abrir o meu próprio negócio de instalação e manutenção. Estou muito satisfeito.",
        autor: "Paulo Sérgio",
        cargo: "Técnico em Climatização e Autônomo",
      },
    },
    {
      title: "Técnico em Soldagem",
      img: {
        src: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Soldador com máscara de proteção a trabalhar em estrutura metálica",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Preparar profissionais para unir estruturas metálicas por meio de diferentes processos de soldadura, interpretando desenhos técnicos e garantindo a qualidade e segurança das juntas soldadas.",
        },
        {
          title: "Público Alvo",
          content: "Voltado para pessoas com boa coordenação motora e atenção aos detalhes. É uma habilidade essencial na indústria metalúrgica, naval e de construção civil.",
        },
      ],
      whatYouWillLearn: [
        "Executar processos de soldadura como Elétrodo Revestido, TIG e MIG/MAG",
        "Interpretar simbologia de soldadura em desenhos técnicos",
        "Realizar o controlo de qualidade visual de juntas soldadas",
        "Aplicar normas de segurança em processos de solda",
      ],
      depoiments: {
        texto: "A soldadura é uma arte que exige técnica e precisão. O curso qualificou-me para trabalhar em grandes projetos industriais, com um ótimo salário e reconhecimento.",
        autor: "Alexandre Barros",
        cargo: "Soldador Industrial",
      },
    },
    {
      title: "Técnico em Manutenção de Máquinas Navais",
      img: {
        src: "https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Engenheiro naval a trabalhar na casa das máquinas de um navio",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para realizar a manutenção de motores, sistemas de propulsão e equipamentos a bordo de embarcações, garantindo a sua operacionalidade e segurança.",
        },
        {
          title: "Público Alvo",
          content: "Destina-se a quem se interessa pelo setor naval e tem aptidão para mecânica. É uma carreira para quem deseja trabalhar em estaleiros, portos ou a bordo de navios.",
        },
      ],
      whatYouWillLearn: [
        "Realizar a manutenção de motores diesel marítimos",
        "Diagnosticar falhas em sistemas de propulsão e governo",
        "Operar e manter sistemas hidráulicos e pneumáticos de bordo",
        "Aplicar normas de segurança e prevenção da poluição no mar",
      ],
      depoiments: {
        texto: "Trabalhar na casa das máquinas de um navio é uma experiência única. O curso deu-me a base sólida para garantir que tudo funcione perfeitamente em alto mar.",
        autor: "Leonardo Dantas",
        cargo: "Técnico de Máquinas da Marinha Mercante",
      },
    },
    {
      title: "Técnico em Agrimensura",
      img: {
        src: "https://images.pexels.com/photos/431722/pexels-photo-431722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Agrimensor a utilizar um teodolito num campo",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar profissionais para realizar medições, levantamentos topográficos e demarcação de terras, sendo essencial para projetos de construção, urbanismo e regularização de imóveis.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para pessoas com boa visão espacial, precisão e interesse em geografia e matemática. O profissional é fundamental no início de qualquer projeto de engenharia e arquitetura.",
        },
      ],
      whatYouWillLearn: [
        "Operar equipamentos topográficos como Estação Total e GPS Geodésico",
        "Realizar levantamentos planialtimétricos",
        "Elaborar plantas e mapas topográficos em software CAD",
        "Demarcar lotes, obras e divisas de propriedades",
      ],
      depoiments: {
        texto: "O curso ensinou-me a 'desenhar' o terreno. O meu trabalho é a base para qualquer grande obra, e a precisão que aprendi a ter é fundamental para o sucesso do projeto.",
        autor: "Tatiana Valente",
        cargo: "Técnica em Agrimensura",
      },
    },
    {
      title: "Técnico em Edificações",
      img: {
        src: "https://images.pexels.com/photos/3139612/pexels-photo-3139612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico em edificações a analisar a planta de uma construção",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Preparar o aluno para desenvolver e executar projetos de construção civil, supervisionando obras, elaborando orçamentos и controlando a qualidade dos materiais e serviços.",
        },
        {
          title: "Público Alvo",
          content: "Voltado para quem deseja atuar diretamente em estaleiros de obras, sendo o braço direito do engenheiro. Ideal para pessoas com perfil de liderança e boa capacidade de planeamento.",
        },
      ],
      whatYouWillLearn: [
        "Interpretar e desenhar projetos arquitetónicos e estruturais",
        "Supervisionar equipas e etapas da construção no estaleiro de obras",
        "Elaborar orçamentos e cronogramas de obras",
        "Realizar o controlo de qualidade de materiais e serviços",
      ],
      depoiments: {
        texto: "Estar no estaleiro de obras e ver um projeto sair do papel e tornar-se um prédio é incrível. O curso deu-me a visão técnica e de gestão para liderar equipas e garantir a qualidade da construção.",
        autor: "Márcio Garcia",
        cargo: "Técnico em Edificações",
      },
    },
    {
      title: "Técnico em Mineração",
      img: {
        src: "https://images.pexels.com/photos/8593455/pexels-photo-8593455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Mineiro com capacete e lanterna numa mina",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para planear e supervisionar as operações de extração mineral, desde a pesquisa geológica até ao beneficiamento do minério, com foco em segurança e sustentabilidade.",
        },
        {
          title: "Público Alvo",
          content: "Destina-se a estudantes com interesse em geologia e grandes projetos de engenharia. É uma carreira para quem busca atuar na indústria extrativa, uma das bases da economia.",
        },
      ],
      whatYouWillLearn: [
        "Supervisionar operações de perfuração e desmonte de rochas",
        "Controlar o processo de beneficiamento de minérios",
        "Realizar o planeamento de lavra de minas",
        "Aplicar normas de segurança e recuperação ambiental em mineração",
      ],
      depoiments: {
        texto: "A mineração é uma indústria de grande escala e complexidade. O curso preparou-me para os desafios do planeamento e da operação de uma mina com segurança e responsabilidade.",
        autor: "Sandro Viana",
        cargo: "Técnico de Mina",
      },
    },
    {
      title: "Técnico em Segurança do Trabalho",
      img: {
        src: "https://images.pexels.com/photos/1216559/pexels-photo-1216559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico de segurança do trabalho com capacete numa obra",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar o profissional para identificar riscos, implementar medidas de prevenção de acidentes e doenças ocupacionais, e promover um ambiente de trabalho seguro.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para pessoas com alto senso de responsabilidade e cuidado com o próximo. É uma profissão transversal, necessária em empresas de todos os setores e portes.",
        },
      ],
      whatYouWillLearn: [
        "Identificar e avaliar riscos ambientais no local de trabalho",
        "Implementar programas de prevenção de acidentes (CIPA, PPRA)",
        "Inspecionar equipamentos de segurança e de combate a incêndio",
        "Ministrar treinos sobre segurança para os colaboradores",
      ],
      depoiments: {
        texto: "A minha missão é garantir que todos voltem para casa em segurança no final do dia. O curso deu-me o conhecimento técnico e legal para proteger a vida dos trabalhadores.",
        autor: "Valéria Matos",
        cargo: "Técnica em Segurança do Trabalho",
      },
    },
    {
      title: "Técnico em Prevenção e Combate ao Incêndio",
      img: {
        src: "https://images.pexels.com/photos/69934/firefighters-fire-flames-outside-69934.jpeg",
        alt: "Bombeiro em ação a combater um incêndio",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para atuar como bombeiros civis, inspecionando sistemas de segurança, realizando resgates e combatendo incêndios em empresas e eventos.",
        },
        {
          title: "Público Alvo",
          content: "Voltado para pessoas corajosas, com bom preparo físico e desejo de proteger vidas e patrimónios. É uma profissão que exige treino constante e sangue-frio.",
        },
      ],
      whatYouWillLearn: [
        "Operar equipamentos de combate a incêndio",
        "Realizar técnicas de primeiros socorros e resgate",
        "Inspecionar e testar sistemas de hidrantes e extintores",
        "Elaborar planos de evacuação de emergência",
      ],
      depoiments: {
        texto: "Estar preparado para agir numa emergência é o que nos define. O treino que recebi no curso foi intenso e realista, essencial para a minha profissão.",
        autor: "Douglas Ramos",
        cargo: "Bombeiro Civil",
      },
    },
    {
      title: "Curso Técnico em Defesa Civil",
      img: {
        src: "https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Agente da defesa civil numa área de desastre",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Preparar profissionais para atuar na prevenção, mitigação e resposta a desastres, elaborando planos de contingência e gerindo ações em situações de emergência para proteger a população.",
        },
        {
          title: "Público Alvo",
          content: "Destina-se a quem busca atuar no serviço público ou em grandes empresas, planeando ações para reduzir os impactos de desastres naturais ou tecnológicos. Requer capacidade de análise e planeamento.",
        },
      ],
      whatYouWillLearn: [
        "Mapear áreas de risco e elaborar planos de prevenção",
        "Gerir abrigos temporários e a distribuição de ajuda humanitária",
        "Coordenar equipas de resposta em situações de desastre",
        "Promover a educação comunitária para a resiliência",
      ],
      depoiments: {
        texto: "Trabalhar na Defesa Civil é estar ao serviço da população nos momentos mais difíceis. O curso deu-me uma visão estratégica para planear e agir de forma eficaz.",
        autor: "Sérgio Monteiro",
        cargo: "Agente da Defesa Civil",
      },
    },
    {
      title: "Curso Técnico em Trânsito",
      img: {
        src: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Agente de trânsito a organizar o fluxo de veículos numa cidade",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para planear, operar e fiscalizar o trânsito, buscando a segurança e a fluidez viária, além de participar de projetos de engenharia de tráfego.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para quem se interessa pela mobilidade urbana e busca soluções para os desafios do trânsito nas cidades. Pode atuar em órgãos públicos de trânsito ou em empresas de consultoria.",
        },
      ],
      whatYouWillLearn: [
        "Fiscalizar o cumprimento da legislação de trânsito",
        "Planear e operar a sinalização viária",
        "Analisar dados de acidentes para propor melhorias",
        "Desenvolver projetos de educação para o trânsito",
      ],
      depoiments: {
        texto: "O trânsito é um sistema complexo. O curso ensinou-me a entendê-lo e a atuar para torná-lo mais seguro e eficiente para todos. É um trabalho de grande impacto social.",
        autor: "Elisa Pires",
        cargo: "Agente de Trânsito",
      },
    },
    {
      title: "Técnico em Agricultura",
      img: {
        src: "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Agricultor a analisar a colheita num campo de cultivo",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar o profissional para planear e executar atividades de cultivo, colheita e maneio de produções agrícolas, aplicando técnicas sustentáveis e de gestão rural.",
        },
        {
          title: "Público Alvo",
          content: "Voltado para quem tem ligação com o campo e interesse em otimizar a produção de alimentos e matérias-primas, utilizando a tecnologia e o conhecimento para uma agricultura mais eficiente.",
        },
      ],
      whatYouWillLearn: [
        "Planear a plantação e a colheita de diferentes culturas",
        "Operar máquinas e implementos agrícolas",
        "Realizar o maneio integrado de pragas e doenças",
        "Gerir os custos e a comercialização da produção",
      ],
      depoiments: {
        texto: "O curso modernizou a minha visão sobre a agricultura. Aprendi técnicas que aumentaram a produtividade da nossa fazenda e a tornaram mais sustentável.",
        autor: "Otávio Bernardes",
        cargo: "Técnico Agrícola",
      },
    },
    {
      title: "Técnico em Agropecuária",
      img: {
        src: "https://images.pexels.com/photos/33325761/pexels-photo-33325761.jpeg",
        alt: "Técnico agropecuário a cuidar do gado num pasto",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para atuar de forma integrada na produção agrícola e na criação de animais, gerindo propriedades rurais e aplicando tecnologias para aumentar a produtividade.",
        },
        {
          title: "Público Alvo",
          content: "Destina-se a quem busca uma formação completa para gerir negócios no campo, unindo o conhecimento sobre lavouras e criação de animais. Ideal para futuros gestores do agronegócio.",
        },
      ],
      whatYouWillLearn: [
        "Gerir a produção de lavouras e a criação de rebanhos",
        "Aplicar técnicas de melhoramento genético animal e vegetal",
        "Administrar uma propriedade rural de forma sustentável",
        "Comercializar a produção agropecuária",
      ],
      depoiments: {
        texto: "A formação integrada em agricultura e pecuária tornou-me um profissional muito mais completo. Hoje consigo gerir todos os aspetos do nosso negócio familiar com muito mais eficiência.",
        autor: "Guilherme Matos",
        cargo: "Técnico em Agropecuária",
      },
    },
    {
      title: "Técnico em Agroindústria",
      img: {
        src: "https://images.pexels.com/photos/289387/pexels-photo-289387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Linha de produção e processamento de alimentos numa agroindústria",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Preparar profissionais para processar e conservar matérias-primas de origem animal e vegetal, controlando a qualidade e a segurança na industrialização de alimentos.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para quem deseja trabalhar na indústria de alimentos, transformando a produção do campo em produtos para o consumidor final, com foco em qualidade e segurança alimentar.",
        },
      ],
      whatYouWillLearn: [
        "Supervisionar o processamento de carnes, leite, frutas e vegetais",
        "Realizar o controlo de qualidade físico-químico e microbiológico",
        "Desenvolver novos produtos alimentícios",
        "Aplicar as normas de boas práticas de fabrico (BPF)",
      ],
      depoiments: {
        texto: "O curso ensinou-me a ciência por trás dos alimentos. Hoje trabalho garantindo a qualidade e a segurança do que chega à mesa de milhares de pessoas.",
        autor: "Renata Fagundes",
        cargo: "Técnica em Alimentos",
      },
    },
    {
      title: "Técnico em Aquicultura",
      img: {
        src: "https://images.pexels.com/photos/816198/pexels-photo-816198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico em aquicultura a trabalhar em tanques de criação de peixes",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar profissionais para o cultivo de organismos aquáticos, como peixes e camarões, gerindo a produção desde a reprodução até à despesca.",
        },
        {
          title: "Público Alvo",
          content: "Voltado para estudantes com interesse em biologia e produção de alimentos. É uma área do agronegócio em crescimento, ideal para quem busca oportunidades num setor especializado.",
        },
      ],
      whatYouWillLearn: [
        "Gerir a criação de peixes, camarões e outros organismos aquáticos",
        "Monitorizar a qualidade da água dos tanques de cultivo",
        "Formular e administrar a alimentação dos animais",
        "Realizar a reprodução em laboratório e a despesca",
      ],
      depoiments: {
        texto: "A aquicultura é um setor incrível e em plena expansão no Brasil. O curso deu-me o conhecimento prático para gerir uma fazenda de peixes com alta produtividade.",
        autor: "Igor Nogueira",
        cargo: "Técnico Aquícola",
      },
    },
    {
      title: "Técnico em Meio Ambiente",
      img: {
        src: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico em meio ambiente com painéis solares ao fundo",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para coletar dados, analisar impactos ambientais, implementar programas de sustentabilidade e fiscalizar atividades para garantir a preservação dos recursos naturais.",
        },
        {
          title: "Público Alvo",
          content: "Destina-se a pessoas engajadas com as causas ambientais e que buscam uma carreira técnica para atuar na proteção e recuperação do meio ambiente em empresas, ONGs ou no setor público.",
        },
      ],
      whatYouWillLearn: [
        "Coletar e analisar amostras de água, solo e ar",
        "Elaborar relatórios de impacto ambiental",
        "Implementar sistemas de gestão ambiental (ISO 14001)",
        "Desenvolver projetos de educação ambiental",
      ],
      depoiments: {
        texto: "Sempre quis trabalhar para proteger a natureza. O curso deu-me as ferramentas técnicas para transformar a minha paixão numa profissão e fazer a diferença de verdade.",
        autor: "Bárbara Melo",
        cargo: "Técnica em Meio Ambiente",
      },
    },
    {
      title: "Técnico em Gastronomia",
      img: {
        src: "https://images.pexels.com/photos/3217157/pexels-photo-3217157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Chef de cozinha a preparar um prato gourmet",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar o aluno para preparar pratos da culinária nacional e internacional, gerir cozinhas, criar ementas e aplicar técnicas de segurança alimentar.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para apaixonados por culinária que desejam transformar o hobby em profissão. Ideal para quem é criativo, organizado e busca uma carreira em restaurantes, hotéis e outros serviços de alimentação.",
        },
      ],
      whatYouWillLearn: [
        "Dominar técnicas clássicas da culinária",
        "Criar e planear ementas criativas e rentáveis",
        "Gerir os custos e o stock de uma cozinha profissional",
        "Aplicar as normas de higiene e segurança alimentar",
      ],
      depoiments: {
        texto: "Cozinhar é a minha paixão, e o curso deu-me a técnica e a visão de negócio para transformar o meu sonho num restaurante de sucesso. Foi o ingrediente que faltava!",
        autor: "Davi Lacerda",
        cargo: "Chef de Cozinha",
      },
    },
    {
      title: "Técnico em Óptica",
      img: {
        src: "https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Técnico em ótica a ajustar um par de óculos",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Preparar profissionais para confecionar e adaptar lentes e óculos, interpretar prescrições médicas e orientar clientes sobre os produtos óticos mais adequados.",
        },
        {
          title: "Público Alvo",
          content: "Voltado para quem busca uma profissão técnica na área da saúde visual. Requer precisão manual, atenção aos detalhes e boa capacidade de atendimento ao público.",
        },
      ],
      whatYouWillLearn: [
        "Interpretar receitas oftalmológicas",
        "Realizar a surfaçagem e a montagem de lentes em armações",
        "Ajustar óculos no rosto do cliente para um encaixe perfeito",
        "Orientar sobre os diferentes tipos de lentes e tratamentos",
      ],
      depoiments: {
        texto: "É um trabalho de precisão que melhora a qualidade de vida das pessoas. O curso deu-me a habilidade técnica para entregar a melhor visão possível para cada cliente.",
        autor: "Sandra Regina",
        cargo: "Técnica em Ótica",
      },
    },
    {
      title: "Curso Técnico em Designer de Interiores",
      img: {
        src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Ambiente de sala de estar moderno e bem decorado",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Formar profissionais para planear e criar espaços internos harmoniosos e funcionais, selecionando materiais, cores e mobiliário para projetos residenciais e comerciais.",
        },
        {
          title: "Público Alvo",
          content: "Destina-se a pessoas criativas, com senso estético e boa visão espacial. Ideal para quem deseja transformar ambientes, tornando-os mais bonitos e funcionais para as pessoas.",
        },
      ],
      whatYouWillLearn: [
        "Desenvolver projetos de interiores em softwares como SketchUp e AutoCAD",
        "Criar layouts funcionais e ergonómicos",
        "Especificar materiais de acabamento, móveis e iluminação",
        "Apresentar projetos de forma profissional para os clientes",
      ],
      depoiments: {
        texto: "O curso ensinou-me a transformar espaços e a realizar os sonhos dos meus clientes. Aprendi a unir estética e funcionalidade de uma forma que eu não imaginava.",
        autor: "Carolina Peixoto",
        cargo: "Designer de Interiores",
      },
    },
    {
      title: "Curso Técnico no Guia em Turismo",
      img: {
        src: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Guia de turismo a orientar um grupo de turistas num ponto turístico",
      },
      sections: [
        {
          title: "Objetivos",
          content: "Capacitar profissionais para orientar e acompanhar grupos de turistas em excursões locais, regionais ou nacionais, apresentando informações sobre a cultura e os atrativos da região.",
        },
        {
          title: "Público Alvo",
          content: "Indicado para pessoas comunicativas, que gostam de história, cultura e de interagir com pessoas de diferentes lugares. É a formação ideal para quem quer trabalhar a viajar e a partilhar conhecimento.",
        },
      ],
      whatYouWillLearn: [
        "Elaborar roteiros turísticos criativos e informativos",
        "Conduzir grupos em visitas a museus, monumentos e parques",
        "Comunicar-se de forma clara e envolvente",
        "Prestar assistência aos turistas em diversas situações",
      ],
      depoiments: {
        texto: "Trabalhar como guia é apresentar o que há de melhor na nossa cultura para o mundo. O curso deu-me o conhecimento histórico e as técnicas de comunicação para encantar os turistas.",
        autor: "Miguel Bastos",
        cargo: "Guia de Turismo Regional",
      },
    },
  ];
}