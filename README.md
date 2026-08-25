# Caio Marcondes Portfolio v2.0

Nova versão do portfólio profissional de Caio Marcondes, com identidade visual renovada, layout mais moderno e experiência de navegação aprimorada.

## Visão geral

A versão 2.0 preserva a proposta original do portfólio, mas oferece uma apresentação mais refinada e impactante, com foco em:

- navegação clara e direta;
- visual premium e profissional;
- melhor organização dos conteúdos;
- foco em experiência mobile e desktop;
- comunicação forte da atuação em sistemas, infraestrutura e tecnologia.

## Nova aparência

A interface foi redesenhada para transmitir mais modernidade, com:

- paleta escura com destaques em roxo e violeta;
- tipografia mais impactante e elegante;
- cards e blocos com espaçamento generoso;
- destaque emocional para apresentação profissional;
- sections bem estruturadas para sobre, skills, competências e contato;
- responsividade ajustada para diferentes tamanhos de tela.

## Dependências principais

Este projeto utiliza as seguintes bibliotecas e ferramentas:

- React 19
- Vite
- TypeScript
- Tailwind CSS
- @tanstack/react-router
- @tanstack/react-query
- clsx
- tailwind-merge
- lucide-react
- zod
- react-hook-form
- @hookform/resolvers
- sonner
- class-variance-authority
- Radix UI
- three

## Scripts disponíveis

- `npm install` para instalar dependências
- `npm run dev` para iniciar o ambiente local
- `npm run build` para gerar a build de produção
- `npm run preview` para executar a build localmente com Node
- `npm run start` para iniciar o servidor Node da build
- `npm run lint` para validar o código com ESLint

> Este projeto usa TanStack Start/Nitro com preset `node-server`. Para testar produção localmente, gere a build com `npm run build` e execute `npm run preview` (ou `npm run start`).

## Estrutura do projeto

- `src/components` — componentes reutilizáveis da interface
- `src/data` — conteúdo centralizado do portfólio
- `src/routes` — páginas e rotas do projeto
- `src/styles.css` — tema, paleta e estilos globais

## Autor

Caio Marcondes

Portfolio e presença profissional em tecnologia, infraestrutura e sistemas.│   ├── Header
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Experience
│   ├── Projects
│   ├── Contact
│   └── Footer
│
├── data/
│   └── portfolio
│
├── pages/
│   └── Home
│
├── assets/
│   ├── images
│   └── icons
│
└── styles/


```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
