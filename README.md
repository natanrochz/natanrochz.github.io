# Portfólio

Meu site pessoal, com meus projetos, um pouco sobre mim e formas de contato. Tem versão em português e em inglês e dá pra alternar entre tema escuro e claro.

Acesse em **https://natanrochz.github.io**

## Tecnologias

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## Rodando o projeto

```bash
npm install
npm run dev
```

O site abre em `http://localhost:4321`.

Para gerar a versão final, use `npm run build` (os arquivos vão para a pasta `dist/`).

## Estrutura

```
src/
├── components/   seções da página
├── data/         textos e informações (perfil, experiência, habilidades, projetos)
├── i18n/         traduções
├── icons/        ícones em svg
├── layouts/
├── pages/        / (português), /en/ (inglês) e 404
└── styles/
```

Pra mudar algum conteúdo do site, basta editar os arquivos em `src/data`. Foto, currículo e imagens dos projetos ficam em `public/`.

O formulário de contato usa o [Formspree](https://formspree.io).

## Deploy

O site é publicado no GitHub Pages automaticamente a cada push na branch `main` (workflow em `.github/workflows/deploy.yml`).
