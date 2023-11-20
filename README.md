# Projeto Quer Apostar API

## Descrição

API de um sistema de apostas para esportes.

## Demo

Acesse a demo da API em [Quer Apostar API Demo](https://quer-apostar-api-9upr.onrender.com).

# Tecnologias

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Jest
- Supertest
- Eslint
- Prettier
- Husky
- Git Commit Message Linter

## Como Funciona?

### Rotas

A API possui as seguintes rotas:

- **POST /participants**: Cria um novo participante.
  - Parâmetros:
    - `name` (string): Nome do participante.
    - `balance` (number): Saldo inicial do participante.

- **GET /participants**: Obtém todos os participantes cadastrados.

- **POST /games**: Cria um novo jogo.
  - Parâmetros:
    - `homeTeamName` (string): Nome da equipe da casa.
    - `awayTeamName` (string): Nome da equipe visitante.

- **GET /games**: Obtém todos os jogos cadastrados.

- **POST /bets**: Realiza uma nova aposta.
  - Parâmetros:
    - `gameId` (number): ID do jogo para o qual está sendo feita a aposta.
    - `participantId` (number): ID do participante que está fazendo a aposta.
    - `amountBet` (number): Valor da aposta.

- **GET /bets**: Obtém todas as apostas cadastradas.

- **PUT /games/:id/finish**: Finaliza um jogo e atualiza os placares.
  - Parâmetros:
    - `id` (number): ID do jogo que será finalizado.
    - `homeTeamScore` (number): Pontuação da equipe da casa.
    - `awayTeamScore` (number): Pontuação da equipe visitante.

- **GET /games/:id**: Obtém um jogo específico com informações detalhadas sobre as apostas.

### Configuração do Projeto

1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Execute as migrações do banco de dados com `npm run migration:run`.
5. Inicie o servidor de desenvolvimento com `npm run dev`.

### Testes

- Execute os testes unitários com `npm test`.
- Execute os testes de integração com `npm run test:integration`.

### Estrutura do Projeto

- **src/controllers**: Controladores para cada rota.
- **src/repositories**: Camada de acesso ao banco de dados.
- **src/services**: Lógica de negócios da aplicação.
- **src/tests**: Testes unitários e de integração.
- **src/utils**: Utilitários diversos.
- **prisma**: Configuração do Prisma para acesso ao banco de dados.

