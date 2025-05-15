# 🛍️ Página de produto de E-commerce – Teste Técnico

Projeto de página de produto desenvolvida com **Next.js 13+ (App Router)** e **Tailwind CSS**, seguindo boas práticas de componentização, acessibilidade, UX/UI, e persistência de estado via `localStorage`.

- Site no AR [Teste Montink](https://teste-montink-e-commerce-sigma.vercel.app/)

---

## ✨ Funcionalidades

- Exibição de imagem principal e galeria de miniaturas
- Seletores dinâmicos de variantes (cor e tamanho)
- Campo de CEP com integração à API ViaCEP
- Persistência de estado (imagem selecionada, cor, tamanho e CEP) por 15 minutos
- Estrutura modular e escalável com componentes reutilizáveis

---

## 🧠 Destaques Técnicos

- ✅ Arquitetura baseada em **Templates reutilizáveis**
- ✅ Componentização clara e isolada
- ✅ Uso de `"use client"` apenas onde necessário
- ✅ Persistência via `usePersistedState` com expiração customizada
- ✅ Proteção contra SSR em chamadas ao `localStorage`
- ✅ Validação e formatação de CEP com fallback visual

## 🧪 Como Rodar o Projeto

```bash
# 1. Clone o repositório
git clone https://github.com/devKaduu/Teste-Montink.git

# 2. Acesse o projeto
cd Teste-Montink

# 3. Instale as dependências
npm install

# 4. Rode o projeto
npm run dev

````

## 🧠 Informações
- [Linkedin](https://www.linkedin.com/in/carlos-eduardo-sousa/)
- [Website](https://www.carlosedu.com.br/)
