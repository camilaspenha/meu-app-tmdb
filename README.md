# TMDB App - Projeto de Estudo de API com React + TypeScript

Este projeto é um site de busca de filmes e séries baseado na [API pública do TMDB](https://www.themoviedb.org/), criado com o objetivo de estudar e praticar:

- Consumo de APIs RESTful
- Gerenciamento de estado no React com TypeScript
- Estilização com Bootstrap
- Armazenamento local de favoritos com `localStorage`

## 🎯 Funcionalidades

- 🔍 Buscar filmes e séries por título
- 🎬 Ver detalhes completos de cada produção (sinopse, elenco, data de lançamento, etc.)
- ❤️ Adicionar/remover itens da lista de favoritos (armazenada localmente)
- 📺 Exibir onde assistir (se disponível na API)
- 📄 Navegação entre páginas e rotas com React Router
- 🚀 Interface moderna inspirada na Netflix

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
- [Bootstrap 5](https://getbootstrap.com/)
- [React Router DOM](https://reactrouter.com/en/main)
- [TMDB API](https://developer.themoviedb.org/docs)

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/tmdb-app.git
cd tmdb-app
```
2. Instale as dependências:

```
npm install
```

3. Crie um arquivo .env com sua chave da TMDB API:

```
VITE_TMDB_API_KEY=sua_chave_aqui
```

4. Execute localmente:

```
npm run dev
```

🗃️ Estrutura de Pastas

```
src/
├── components/        # Componentes reutilizáveis (Card, Banner, Spinner, etc)
├── pages/             # Páginas principais (Home, Detalhes, Favoritos, etc)
├── services/          # Lógica para fetch/axios (tmdb.ts)
├── assets/            # Imagens e ícones
├── App.tsx            # Componente principal com rotas
├── main.tsx           # Entrada do app

```

🔐 API Key TMDB

Para obter sua própria chave:

1. Acesse: https://developer.themoviedb.org
2. Crie uma conta e gere uma chave de API v3
3. Copie a chave e configure no arquivo .env
