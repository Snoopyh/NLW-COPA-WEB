# NLW COPA - Trilha Ignite

<p align="center">
  <img src="https://img.shields.io/static/v1?label=VISUALSTUDIOCODE&message=IDE&color=blue&style=for-the-badge&logo=VISUALSTUDIOCODE">
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

Site criado com a premissa de aprender sobre as linguagens mais ultilizadas no mercado atualmente, tendo como apoio as aulas e a comunidade da Rocketseat, durante a NLW-COPA que tem duração de uma semana.

## ✔️ Técnicas e tecnologias ultilizadas

Tecnicas e tecnologias que foram ultilizada nos site:

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-423330?style=for-the-badge&logo=Next.js&logoColor=F7D000">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white"/>
  <img src="https://img.shields.io/badge/Fastify.js-000000?style=for-the-badge&logo=Fastify&logoColor=white"/>
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Hoppscotch-31C48D?style=for-the-badge&logo=hoppscotch&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"/>
  <img src="https://img.shields.io/badge/ts--node--dev-3178C6?style=for-the-badge&logo=ts-node-dev&logoColor=white"/>
</p>
- `Next.js`
- `JavaScript`;
- `TypeScript`;
- `Node`;
- `Tailwind CSS`;
- `Expo`;
- `React Native`;
- `HTML 5`;
- `CSS 3`;
- `Hoppscotch`;
- `Prisma`;
- `Sqlite`;
- `Fastify`;
- `JWT`;
- `Ts-node-dev`.

## ✏️ Funcionalidades
- [X] Conexão do back-end (server) e do front-end para mostrar os jogos;
- [X] Conexão de criação de Bolôes com a API (back-end);
- [X] Listagem de jogos e palpites;
- [X] Buscar sala do bolão pelo codigo da sala;

<p align="center">
  <img src="https://user-images.githubusercontent.com/81600908/200904000-ef70585c-5f09-4ce3-8b96-1f3155fe96f8.png"/>
  <img src="https://user-images.githubusercontent.com/81600908/200903972-b585350c-7a73-4619-b447-8b532f11d310.png"/>
</p>

## 🕹️ Como Utilizar
Para rodar estas aplicações será necessário, primeiramente escolher a que deseja, entre elas:
- WEB;
- MOBILE.


A aplicação "server" se integra com a "web" e a "mobile", realizando o Back-end. Caso queira rodar as aplicações basta utilizar os seguintes comandos:


Rodando a aplicação web, primeiro iniciar o servidor e depois o próprio "web", ambos com o comando:
```bash
npm run dev
```

Rodando a aplicação mobile, primeiro iniciar o servidor e depois o próprio "mobile":
#### Server
```bash
npm run dev
```
#### Mobile
```bash
expo start --tunnel
ou
expo start 
```

Obs.: não esqueça de trocar pelo IP da sua máquina, para verificar o IP utilize o seguinte comando no terminal e achei o IPv4:
#### windows
```bash
ipconfig
```

#### Linux
```bash
ipconfig
```
## Informações Extras:

### HTTP methods 
- GET = Buscar
- POST = Criar
- PUT = Editar uma entidade
- PATCH = Editar uma informação específica
- DELETE = Deletar/Apagar

Obs.: o nome das rotas são sempre no plural.

### HTTP Codes

Tipo de resposta que o back-end está dando.

Status 201 - Algo foi criado

Status 200 - Resposta genérica de sucesso (ok)

Principais: 

- Começa com 2 -> Sucesso
- Começa com 3 -> Redirecionamento
- Começa com 4 -> Erro no código
- Começa com 5 ou derivados -> Erros inesperados