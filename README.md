<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="120" height="120" />

  <h1>⚡ Vite React Tailwind Shadcn Boilerplate</h1>

  <p>
    Um boilerplate moderno e completo para desenvolvimento React com TypeScript,
    arquitetura modular e as melhores práticas da indústria.
  </p>

  <p>
    <strong>⭐ Se este projeto foi útil para você, não esqueça de dar uma estrela!</strong>
  </p>

  <p>
    <strong>🍴 Faça um fork deste repositório para começar seu projeto!</strong>
  </p>
</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Principais Tecnologias](#-principais-tecnologias)
- [Ferramentas de Desenvolvimento](#-ferramentas-de-desenvolvimento)
- [Arquitetura Modular](#-arquitetura-modular)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Usar](#-como-usar)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Configuração do VS Code](#-configuração-do-vs-code)

## 🚀 Sobre o Projeto

Este boilerplate foi criado para fornecer uma base sólida e escalável para projetos React modernos. Ele combina as melhores ferramentas e práticas do ecossistema React, com foco em performance, manutenibilidade e experiência de desenvolvimento.

## 🛠 Principais Tecnologias

### **React 19**

A mais recente versão do React, oferecendo melhorias significativas em performance, novos hooks e recursos avançados. Escolhida por ser a biblioteca mais madura e amplamente adotada para construção de interfaces de usuário.

### **Vite**

Build tool extremamente rápido que utiliza ES modules nativos. Substitui ferramentas mais lentas como Create React App, oferecendo Hot Module Replacement (HMR) instantâneo e builds otimizados para produção.

### **TypeScript**

Adiciona tipagem estática ao JavaScript, proporcionando maior segurança, melhor autocomplete e detecção precoce de erros. Essencial para projetos grandes e manutenção a longo prazo.

### **Tailwind CSS**

Framework CSS utility-first que permite desenvolvimento rápido de interfaces modernas e responsivas. Elimina a necessidade de escrever CSS customizado na maioria dos casos, mantendo o código limpo e consistente.

### **React Router DOM**

Biblioteca oficial de roteamento para React. Permite criar Single Page Applications (SPA) com navegação fluida, rotas protegidas e lazy loading de componentes.

### **TanStack Query (React Query)**

Gerenciamento de estado assíncrono e cache de dados de servidor. Simplifica o trabalho com APIs, oferecendo cache inteligente, refetch automático, sincronização em background e muito mais. Reduz significativamente a complexidade de gerenciar estados de loading, error e success.

### **Axios**

Cliente HTTP baseado em Promises, mais poderoso que o fetch nativo. Oferece interceptors, cancelamento de requisições, transformação automática de dados e melhor tratamento de erros.

### **Vitest**

Framework de testes moderno e rápido, compatível com Vite. Oferece API similar ao Jest mas com melhor integração ao ecossistema Vite e performance superior.

### **ESLint**

Ferramenta de linting que ajuda a manter a consistência do código e detectar problemas antes mesmo de executar. Configurado com regras específicas para React e TypeScript, usando a nova flat config do ESLint 9.

## 🛠 Ferramentas de Desenvolvimento

### **Prettier**

Formatador de código automático que garante consistência visual em todo o projeto. Configurado para trabalhar em conjunto com ESLint, removendo conflitos e garantindo que o código seja formatado de acordo com as melhores práticas.

**Configurações principais:**

- Espaços em vez de tabs
- Aspas simples
- Sem ponto e vírgula
- Trailing commas (ES5)
- Line endings: LF

### **EditorConfig**

Padroniza configurações do editor entre diferentes IDEs e editores. Garante que todos os desenvolvedores usem as mesmas configurações de indentação, charset e quebra de linha, independente do editor escolhido.

**Configurações:**

- Indentação: 2 espaços
- Charset: UTF-8
- Line endings: LF
- Trim trailing whitespace: habilitado
- Insert final newline: habilitado

### **VS Code - Configuração Recomendada**

O projeto inclui configurações do VS Code para melhorar a experiência de desenvolvimento:

- **Extensões recomendadas**: O VS Code sugerirá automaticamente as extensões necessárias ao abrir o projeto
- **Formatação automática**: O código é formatado automaticamente ao salvar usando Prettier
- **Correção automática do ESLint**: Problemas do ESLint são corrigidos automaticamente ao salvar
- **Suporte completo ao TypeScript**: Configuração otimizada para TypeScript e React

## 🏗 Arquitetura Modular

Este projeto adota uma **arquitetura modular** que separa o código em duas camadas principais:

### **`/modules`** - Módulos de Negócio

Cada módulo representa uma funcionalidade ou domínio específico da aplicação (ex: `public`, `sign`). Cada módulo contém:

- **Pages**: Componentes de página específicos do módulo
- **Hooks**: Custom hooks relacionados ao módulo
- **Services**: Serviços específicos do módulo (opcional)

**Por que?**

- **Escalabilidade**: Facilita o crescimento do projeto sem criar uma estrutura confusa
- **Manutenibilidade**: Código relacionado fica agrupado, facilitando localização e modificação
- **Reutilização**: Módulos podem ser facilmente reutilizados ou removidos
- **Colaboração**: Diferentes equipes podem trabalhar em módulos diferentes sem conflitos

### **`/shared`** - Recursos Compartilhados

Contém código reutilizável em toda a aplicação:

- **Components**: Componentes UI reutilizáveis
- **Services**: Serviços de API e lógica de negócio compartilhada
- **Hooks**: Custom hooks genéricos
- **Utils**: Funções utilitárias
- **Types**: Definições de tipos TypeScript
- **Constants**: Constantes da aplicação
- **Lib**: Configurações de bibliotecas externas (axios, react-query, etc.)
- **Styles**: Estilos globais

**Por que?**

- **DRY (Don't Repeat Yourself)**: Evita duplicação de código
- **Consistência**: Garante que componentes e utilitários sejam usados de forma consistente
- **Centralização**: Facilita manutenção e atualizações de código compartilhado

### **Path Aliases**

O projeto utiliza aliases de caminho configurados para melhorar a legibilidade e evitar imports relativos confusos:

```typescript
// ❌ Antes (imports relativos confusos)
import { Button } from '../../../shared/components/Button'

// ✅ Agora (imports limpos e semânticos)
import { Button } from '@components/Button'
```

Aliases disponíveis:

- `@/*` → `./src/*`
- `@shared/*` → `./src/shared/*`
- `@components/*` → `./src/shared/components/*`
- `@services/*` → `./src/shared/services/*`
- `@hooks/*` → `./src/shared/hooks/*`
- `@utils/*` → `./src/shared/utils/*`
- `@types/*` → `./src/shared/types/*`
- `@public/*` → `./src/modules/public/*`
- `@sign/*` → `./src/modules/sign/*`

## 📁 Estrutura do Projeto

```
src/
├── modules/              # Módulos de negócio
│   ├── public/          # Módulo público
│   │   ├── hooks/       # Hooks específicos do módulo
│   │   └── pages/       # Páginas do módulo
│   └── sign/            # Módulo de autenticação
│       └── pages/       # Páginas de login/cadastro
│
├── shared/              # Recursos compartilhados
│   ├── components/      # Componentes UI reutilizáveis
│   ├── services/        # Serviços de API
│   ├── hooks/           # Custom hooks genéricos
│   ├── utils/           # Funções utilitárias
│   ├── types/           # Definições TypeScript
│   ├── constants/       # Constantes da aplicação
│   ├── lib/             # Configurações de libs
│   └── styles/          # Estilos globais
│
├── App.tsx              # Componente raiz
├── AppRoutes.tsx        # Configuração de rotas
└── main.tsx             # Entry point
```

## 🚀 Como Usar

### Pré-requisitos

- Node.js >= 22.14.0
- Yarn >= 1.22.22

### Instalação

1. Clone ou faça fork deste repositório:

```bash
git clone https://github.com/seu-usuario/vite-react-tailwind-shadcn-boilerplate.git
cd vite-react-tailwind-shadcn-boilerplate
```

2. Instale as dependências:

```bash
yarn install
```

3. Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

4. Acesse `http://localhost:5173` no seu navegador

## 📜 Scripts Disponíveis

- `yarn dev` - Inicia o servidor de desenvolvimento
- `yarn build` - Cria build de produção
- `yarn preview` - Preview do build de produção
- `yarn test` - Executa os testes
- `yarn test:ui` - Executa os testes com interface gráfica
- `yarn test:watch` - Executa os testes em modo watch
- `yarn test:coverage` - Executa os testes com cobertura
- `yarn lint` - Executa o linter
- `yarn lint:fix` - Executa o linter e corrige problemas automaticamente
- `yarn format` - Formata todos os arquivos com Prettier
- `yarn format:check` - Verifica se todos os arquivos estão formatados (útil para CI/CD)

## ⚙️ Configuração do VS Code

Este projeto inclui configurações otimizadas para VS Code que melhoram significativamente a experiência de desenvolvimento:

### **Extensões Recomendadas**

Ao abrir o projeto no VS Code, você receberá sugestões para instalar as seguintes extensões:

- **ESLint** - Integração com ESLint para linting em tempo real
- **Prettier** - Formatador de código
- **EditorConfig** - Suporte ao EditorConfig
- **Tailwind CSS IntelliSense** - Autocomplete e validação para Tailwind CSS
- **TypeScript and JavaScript Language Features** - Suporte aprimorado ao TypeScript

### **Configurações Automáticas**

O projeto está configurado para:

✅ **Formatar ao salvar** - Todos os arquivos são formatados automaticamente com Prettier ao salvar
✅ **Corrigir ESLint ao salvar** - Problemas do ESLint são corrigidos automaticamente
✅ **Formatar ao colar** - Código colado é formatado automaticamente
✅ **Usar Prettier como formatador padrão** - Prettier é o formatador padrão para todos os arquivos
✅ **Configurações de arquivo** - Line endings (LF), trim trailing whitespace, insert final newline

### **Como Usar**

1. Abra o projeto no VS Code
2. Aceite a instalação das extensões recomendadas quando solicitado
3. As configurações serão aplicadas automaticamente
4. Ao salvar qualquer arquivo, ele será formatado automaticamente

**Nota**: Se você não usar VS Code, certifique-se de que seu editor suporte EditorConfig e Prettier para manter a consistência do código.

---

<div align="center">
  <p>
    Desenvolvido com ❤️ usando React e as melhores práticas da indústria
  </p>
  <p>
    <strong>⭐ Não esqueça de dar uma estrela se este projeto foi útil!</strong>
  </p>
</div>
