# React B2B Orders Dashboard

Aplicação frontend para gestão de pedidos em um contexto B2B, desenvolvida com React, Next.js e TypeScript.

O objetivo do projeto é demonstrar organização de código, componentização, gerenciamento de estado e boas práticas em aplicações frontend, mantendo o escopo propositalmente simples.

---

## 🧩 Contexto do Projeto

Este projeto simula um sistema interno utilizado por empresas para acompanhar pedidos e seus respectivos status ao longo do fluxo operacional.

As principais funcionalidades incluem:
- Listagem de pedidos
- Visualização de status (Pendente, Em andamento, Concluído)
- Filtro por status
- Busca por texto (pedido, nome ou e-mail)
- Detalhe do pedido
- Atualização de status com estado global

---

## 🛠️ Stack Utilizada

- Next.js
- React
- TypeScript
- Zustand (gerenciamento de estado)
- Tailwind CSS
- API mockada (dados simulados)

---

## 🏗️ Estrutura do Projeto

A estrutura foi organizada por responsabilidade, visando escalabilidade e manutenção:

```text
src/
├─ app/                     # App Router
│  ├─ page.tsx              # Página inicial (Dashboard)
│  ├─ orders/               # Rotas de pedidos
│  │  ├─ page.tsx           # Lista de pedidos
│  │  └─ [id]/page.tsx      # Detalhe do pedido
│  └─ layout.tsx            # Layout global
├─ components/              # Componentes reutilizáveis
├─ features/orders/         # Domínio de pedidos
├─ shared/                  # Componentes compartilhados (Table, Cards, Skeletons)
├─ store/                   # Zustand / estado global
├─ services/                # API mockada / serviços
├─ types/                   # Tipagens compartilhadas
```

---

## 🧠 Decisões Técnicas

Zustand foi escolhido para gerenciamento de estado por ser simples, performático e adequado ao escopo do projeto.

-O estado é persistido no localStorage, garantindo funcionamento correto em navegação direta e reload da página.

-A API foi mockada para manter o foco no frontend e evitar complexidade desnecessária.

-O layout foi desenvolvido com foco em responsividade, separando visualização desktop e mobile.

-O escopo foi mantido intencionalmente enxuto para priorizar clareza, legibilidade e boas práticas de código.

-Separação clara entre lógica de negócio e componentes de UI.

## ▶️ Como rodar o projeto localmente
```bash
npm install
npm run dev
```

## A aplicação estará disponível em:
```bash
http://localhost:3000
```

## 🚀 Deploy

O projeto está publicado na Vercel e pode ser acessado em:
https://SEU-LINK-VERCEL-AQUI.vercel.app
