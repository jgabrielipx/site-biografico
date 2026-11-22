const habilidades = [
  { grupo: "Linguagens",     itens: ["Python", "HTML", "CSS", "JavaScript"] },
  { grupo: "Banco de dados", itens: ["SQL", "Fundamentos de banco de dados"] },
  { grupo: "Conceitos",      itens: ["Lógica de programação", "Algoritmos", "Orientação a objetos"] },
  { grupo: "Ferramentas",    itens: ["Git", "GitHub", "VS Code", "Pacote Office"] },
  { grupo: "Competências pessoais", itens: ["Aprendizagem rápida", "Pensamento analítico", "Organização", "Comunicação", "Proatividade", "Trabalho em equipe"] },
  { grupo: "Idiomas",        itens: ["Inglês (básico)", "Espanhol (básico)"] }
];

const projetos = [
  {
    titulo: "Desafio Colaborativo Git",
    capa: "git",
    status: "Concluído",
    descricao: "Calculadora de média em HTML, CSS e JavaScript, feita em grupo para praticar Git e GitHub.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    aprendi: [
      "Trabalhar em equipe com 3 contribuidores e 9 branches.",
      "Resolver um conflito de merge no Git.",
      "Usar o GitHub para colaborar em um projeto em grupo."
    ],
    link: "https://github.com/jgabrielipx/desafio-colaborativo-git"
  },
  {
    titulo: "Controle de Gastos",
    capa: "gastos",
    descricao: "Aplicação web para controle de despesas pessoais.",
    tags: ["JavaScript"],
    aprendi: [
      "Praticar JavaScript construindo uma aplicação web."
    ],
    link: "https://github.com/jgabrielipx/controle-de-gastos"
  },
  {
    titulo: "Algoritmo de Kaprekar",
    capa: "kaprekar",
    descricao: "Implementação da Constante de Kaprekar (6174) em Python.",
    tags: ["Python"],
    aprendi: [
      "Transformar uma regra matemática em código.",
      "Praticar lógica de programação em Python."
    ],
    link: "https://github.com/jgabrielipx/kaprekar-algoritmo"
  },
  {
    titulo: "Site biográfico",
    capa: "site",
    status: "Em andamento",
    descricao: "Este portfólio, feito do zero com HTML, CSS e JavaScript puros.",
    tags: ["HTML", "CSS", "JavaScript"],
    aprendi: [
      "Organizar o projeto em pastas separadas de HTML, CSS, JavaScript e imagens.",
      "Criar um layout responsivo, que funciona no computador e no celular.",
      "Usar JavaScript para o tema claro e escuro e para montar listas a partir de dados.",
      "Publicar um site com Git, GitHub e GitHub Pages."
    ],
    link: "https://github.com/jgabrielipx/site-biografico"
  }
];

const certificados = [
  {
    titulo: "Python Essentials 1",
    descricao: "Programação em Python 3: lógica, algoritmos, sintaxe e biblioteca padrão. Também prepara para a certificação PCEP.",
    emissor: "Cisco Networking Academy · OpenEDG Python Institute",
    data: "Nov/2026",
    imagem: "img/python-essentials-1.png",   // selo do curso (opcional)
    arquivo: "docs/certificado-python-essentials-1.pdf",
    verificar: "" // se tiver o link de verificação do certificado, cole aqui
  }
];
