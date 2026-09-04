# 🌍 Implementação de Internacionalização (i18n)

## ✅ O que foi implementado

Sistema completo de internacionalização com suporte para **Português** e **Inglês**.

### 📁 Arquivos Criados

```
src/i18n/
├── config.ts                    # Configuração do i18next
├── locales/
│   ├── pt.json                 # Tradução para Português
│   ├── en.json                 # Tradução para Inglês

src/components/
└── LanguageSwitcher.tsx         # Botão seletor de idioma
```

### 🔧 Arquivos Modificados

- **src/routes/__root.tsx** - Adicionado I18nextProvider
- **src/components/Header.tsx** - Integrado LanguageSwitcher no lado direito
- **src/components/Hero.tsx** - Tradução de conteúdo dinâmico
- **src/components/Skills.tsx** - Tradução de skills e categorias
- **src/components/Competencies.tsx** - Tradução de competências
- **src/components/Footer.tsx** - Tradução de rodapé
- **src/data/portfolio.ts** - Removidas strings hardcoded para centralizar tradução

## 🎯 Funcionalidades

### ✨ Detecção Automática de Idioma
O aplicativo detecta automaticamente o idioma preferido do navegador usando:
```javascript
navigator.language  // Ex: "pt-BR" ou "en-US"
```

### 💾 Persistência de Preferência
A escolha de idioma é salva no `localStorage`, portanto o usuário não precisa escolher novamente.

### 🌐 Seletor de Idioma
Um controle segmentado `BR | EN` para alternar entre idiomas, posicionado no **Header à direita do botão "Entre em contato"**.

Idiomas disponíveis:
- **BR** Português (pt)
- **EN** English (en)

## 📝 Como Usar

### Adicionar Novo Texto Traduzível

1. **Adicione a chave nos arquivos de tradução** (`src/i18n/locales/pt.json` e `src/i18n/locales/en.json`):

```json
{
  "header": {
    "contact": "Entre em contato",  // PT
    "contact": "Get in touch"       // EN
  }
}
```

2. **Use no componente com o hook `useTranslation()`**:

```tsx
import { useTranslation } from "react-i18next";

export function MyComponent() {
  const { t } = useTranslation();
  
  return <button>{t("header.contact")}</button>;
}
```

### Usar Valores de Array

Para arrays (como skills, competências):

```tsx
const items = t("skills.languages", { returnObjects: true }) as string[];
```

## 🚀 Como Testar

Execute no terminal:

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview
npm run preview
```

## 📍 Posicionamento do Seletor

O botão de idioma está posicionado no **Header**, à direita do botão "Entre em contato", junto com outros controles.

### Desktop (lg+)
```
[Logo] [Nav Links] [WhatsApp] [Entre em contato] [BR | EN]
```

### Mobile
O seletor também funciona no menu mobile.

## 🎨 Estrutura de Tradução

Todas as traduções estão organizadas por seção:

```json
{
  "header": { ... },
  "hero": { ... },
  "stats": { ... },
  "skills": { ... },
  "competencies": { ... },
  "contact": { ... },
  "footer": { ... },
  "profile": { ... }
}
```

## 🔄 Mudança de Idioma Programática

Se você quiser trocar de idioma via código:

```tsx
import { useTranslation } from "react-i18next";

export function SomeComponent() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };
  
  return <button onClick={() => changeLanguage("en")}>English</button>;
}
```

## 📦 Dependências Adicionadas

- `i18next` (^22.0.0 ou superior)
- `react-i18next` (^11.0.0 ou superior)

Ambas já foram instaladas via npm!

## ⚠️ Notas Importantes

1. **Fallback**: Se uma chave de tradução não existir, o aplicativo usa "pt" (Português) como fallback.
2. **Local Storage**: O idioma selecionado é persistido no navegador do usuário.
3. **SSR Compatible**: A configuração funciona perfeitamente com Server-Side Rendering do TanStack.

## 🎉 Pronto para Usar!

Seu site agora é completamente multilíngue. Os usuários podem:
- ✅ Navegar em Português ou Inglês
- ✅ Ter sua preferência salva automaticamente
- ✅ Usar um seletor visual intuitivo
- ✅ Experimentar detecção automática de idioma

**Aproveite! 🚀**
