# TagChat - Fullstack com NestJS, React, MongoDB e WebSockets
Este é um projeto **Fullstack** de um sistema de **chat online em tempo real**, desenvolvido com a utilização de tecnologias modernas. Toda a stack foi construída com **TypeScript**, garantindo uma tipagem forte e maior segurança durante o desenvolvimento.

A aplicação foi dividida em **backend**, responsável pela lógica e persistência dos dados, e **frontend**, responsável pela interface e experiência do usuário.
## Tecnologias Utilizadas
### Backend
- **NestJS** (Framework Node.js com TypeScript)
- **MongoDB Atlas** (Banco de dados NoSQL)
- **WebSockets (Socket.IO)** para comunicação em tempo real
### Frontend
- **React** com **Vite** (para uma build rápida e eficiente)
- **TypeScript**
- **Socket.IO Client** para atualização em tempo real
---
## Funcionalidades
- Cadastro de usuários (**Registro**)
- Login com autenticação
- Sistema de **chat principal**, acessível após o login
- Envio de mensagens em **tempo real**, utilizando **WebSockets**
- Persistência das mensagens no **MongoDB Atlas**

## Como Rodar o Projeto
### Pré-requisitos
- Node.js (versão recomendada: >=18)
- Conta no MongoDB Atlas ou instância local do MongoDB
- npm ou yarn instalado na máquina
---
## Backend (NestJS)
1. Acesse a pasta do backend:
 ```bash
 cd backend
 ```
2. Instale as dependências:
 ```bash
 npm install
 ```
3. Configure as variáveis de ambiente:
 - Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
 ```env
 MONGO_URI= sua_string_de_conexao_do_mongoDB
 JWT_SECRET= sua_chave_secreta
 ```
4. Inicie o servidor de desenvolvimento:
 ```bash
 nest start
 ```
---
## Frontend (React + Vite)
1. Acesse a pasta do frontend:
 ```bash
 cd frontend
 ```
2. Instale as dependências:
 ```bash
 npm install
 ```
3. Configure as variáveis de ambiente:
 - Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
 ```env
 VITE_API_URL=http://localhost:3000
 ```
4. Inicie o servidor de desenvolvimento:
 ```bash
 npm run dev
 ```
---
## Diferenciais do Projeto
- 100% TypeScript (backend e frontend)
- WebSockets para atualização em tempo real
- Persistência de dados no MongoDB Atlas
- Segurança com autenticação via JWT
- Código modular, escalável e de fácil manutenção
- Integração real-time entre NestJS e React com Socket.IO
---
## Próximos Passos / Melhorias
- Criação de múltiplas salas de chat
- Implementação de envio de imagens e arquivos
- Melhorias de UI/UX
- Deploy completo em produção
---
## Contato
Se quiser trocar uma ideia sobre o projeto ou sobre tecnologia:
- [LinkedIn](https://www.linkedin.com/in/felipe-silva-pires-07bb44233/)