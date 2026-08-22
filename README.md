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
- `npm run preview` para visualizar a build localmente
- `npm run lint` para validar o código com ESLint

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


Mantenha conteúdo separado da apresentação sempre que possível.

Por exemplo, informações profissionais devem ficar em estruturas de dados/componentes, e não espalhadas pelo HTML.

7. Tecnologias

Utilize uma stack moderna.

Preferência:

React ou Next.js;

TypeScript;

Tailwind CSS;

componentes reutilizáveis;

Lucide Icons ou outra biblioteca moderna de ícones;

CSS moderno;

animações leves.

Se o projeto existente já possuir uma stack definida, preserve a stack existente quando isso fizer sentido em vez de reconstruir tudo desnecessariamente.

8. SEO

Implemente:

title;

meta description;

Open Graph;

favicon;

headings semânticos;

HTML semântico;

alt text nas imagens;

URLs amigáveis;

informações estruturadas quando aplicável.

Utilize o conteúdo real do caioit.com para gerar os metadados.

9. Performance

Priorize:

imagens otimizadas;

lazy loading;

componentes leves;

evitar JavaScript desnecessário;

evitar bibliotecas pesadas sem necessidade;

evitar animações que prejudiquem performance;

boa pontuação no Lighthouse.

10. Interações

Reproduza a experiência do site de referência quando apropriado:

hover;

transições;

scroll;

animações de entrada;

navegação entre seções;

efeitos nos cards;

estados de botão;

menu mobile.

As animações devem ser discretas e profissionais.

Não transforme o site em uma apresentação de PowerPoint com efeitos especiais em cada pixel.

11. Imagens e assets

Utilize as imagens existentes no caioit.com quando estiverem disponíveis e forem apropriadas.

Caso alguma imagem necessária não esteja disponível:

não invente uma fotografia pessoal;

utilize um placeholder apropriado;

deixe a estrutura preparada para substituição posterior.

Não utilize imagens aleatórias que possam parecer pertencer ao Caio.

12. Fidelidade visual

O resultado final deve transmitir claramente a mesma linguagem visual do fdcserver.com.

Analise principalmente:

proporções;

espaçamento;

composição;

largura máxima do conteúdo;

posicionamento dos elementos;

estilo dos cards;

tipografia;

navegação;

ritmo vertical;

tratamento das imagens;

contraste;

responsividade.

Mas mantenha o conteúdo e a identidade do caioit.com.

13. Não faça

NÃO:

copie literalmente o código do FDC Server;

copie textos do FDC Server;

invente experiências profissionais;

invente empresas;

invente tecnologias;

invente projetos;

invente contatos;

remova informações importantes do caioit.com;

coloque Lorem Ipsum;

crie seções vazias;

utilize dados fictícios para parecer que o site está completo.

14. Processo de implementação

Execute o trabalho nesta ordem:

Etapa 1

Analise fdcserver.com.

Etapa 2

Analise caioit.com.

Etapa 3

Crie um mapa das seções do FDC Server.

Etapa 4

Crie um mapa das informações disponíveis no CaioIT.

Etapa 5

Faça o mapeamento:

Seção do FDC Server
        ↓
Conteúdo equivalente do CaioIT
        ↓
Novo componente


Etapa 6

Implemente a estrutura.

Etapa 7

Aplique o design.

Etapa 8

Implemente responsividade.

Etapa 9

Implemente animações e microinterações.

Etapa 10

Revise o resultado comparando visualmente com o FDC Server.

Etapa 11

Revise o conteúdo comparando com o CaioIT.

Etapa 12

Corrija inconsistências, espaçamentos, responsividade e problemas de acessibilidade.

15. Resultado esperado

Quero um portfólio profissional completo do Caio, onde:

FDC Server = referência de design

CaioIT = fonte de conteúdo

O visitante deve perceber que o site é um portfólio profissional moderno, e não uma cópia do site de referência.

O resultado final precisa ser visualmente refinado, responsivo, rápido, acessível e pronto para produção.

Antes de finalizar, faça uma revisão completa de todas as páginas e componentes e remova qualquer conteúdo fictício ou placeholder que não seja estritamente necessário.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://caio-design-revamp.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/600bf2d5-90d6-433a-9ef7-35900949f7ca).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
