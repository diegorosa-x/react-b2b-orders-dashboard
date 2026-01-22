# React B2B Orders Dashboard

Aplicação frontend para gestão de pedidos em um contexto B2B, desenvolvida com React e TypeScript.

O objetivo do projeto é demonstrar organização de código, componentização, gerenciamento de estado e boas práticas em aplicações frontend, mantendo o escopo propositalmente simples.

---

## 🧩 Contexto do Projeto

Este projeto simula um sistema interno utilizado por empresas para acompanhar pedidos e seus respectivos status ao longo do fluxo operacional.

As principais funcionalidades incluem:
- Listagem de pedidos
- Visualização de status (Pendente, Em andamento, Concluído)
- Filtro por status
- Detalhe do pedido
- Atualização de status com estado global

---

## 🛠️ Stack Utilizada

- React
- TypeScript
- Vite
- Zustand (gerenciamento de estado)
- API mockada (dados simulados)

---

## 🏗️ Estrutura do Projeto

A estrutura foi organizada por responsabilidade, visando escalabilidade e manutenção:

src/
├─ components/ # Componentes reutilizáveis
├─ features/orders/ # Domínio de pedidos (componentes, hooks, services e types)
├─ store/ # Estado global da aplicação
├─ services/ # Camada de acesso a dados (API mockada)
├─ types/ # Tipagens compartilhadas


---

## 🧠 Decisões Técnicas

- **Zustand** foi escolhido para gerenciamento de estado por ser simples, eficiente e adequado ao escopo do projeto.
- A **API foi mockada** para manter o foco no frontend e evitar complexidade desnecessária.
- O escopo foi mantido intencionalmente enxuto para priorizar clareza, legibilidade e boas práticas de código.
- Separação clara entre lógica de negócio e componentes de UI.

---

## ▶️ Como rodar o projeto

```bash
npm install
npm run dev
```
##  A aplicação estará disponível em:
```bash
http://localhost:3000
```
