# Teste Técnico - Connect Digital

### Autor: Higor Matheus

## Descrição

Este projeto é uma aplicação fullstack composta por um backend (NestJS), frontend (React + Vite) e um mock gateway, simulando um fluxo de pagamento via PIX. O sistema permite criar cobranças PIX, exibir QR Code e código "copia e cola", além de tratar estados de loading e erro.

---

## Tecnologias

- **Backend:** NestJS + TypeORM + PostgreSQL
- **Frontend:** React + Vite + React Toastify
- **Mock Gateway:** NestJS
- **Banco de Dados:** PostgreSQL
- **Containerização:** Docker & Docker Compose

---

## Como executar a aplicação com Docker

### 1. Pré-requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

### 2. Clone o repositório

```sh
git clone https://github.com/Higas01/teste-connect-digital

cd ./teste-connect-digital
```

### 3. Execute os containers

```sh
docker compose up
```

### 4. Como acessar a aplicação:

#### O backend estará disponível na rota: http://localhost:3000

#### O frontend estará disponível na rota: http://localhost:8080

#### O mock_gateway estará disponível na rota: http://localhost:4000

## Como executar a aplicação sem Docker

### 1. Pré-requisitos

- Node.js
- PostgreSQL
- pnpm

### 2. Clone o repositório

```sh
git clone https://github.com/Higas01/teste-connect-digital

cd ./teste-connect-digital
```

### 3. Copie as variáveis de ambiente

```sh
find . -name ".env.example" -execdir cp .env.example .env \;
```

### 4. Altere as variáveis de ambiente necessárias

```sh
DB_HOST=localhost # seu host do banco
DB_PORT=5432  # sua porta do banco
DB_USERNAME=postgres # seu usuário do banco
DB_PASSWORD=postgres # sua senha do banco
DB_NAME=app_db # o nome do seu banco
```

### 4. Instale as dependencias

```sh
cd backend && pnpm install
cd ../frontend && pnpm install
cd ../mock_gateway && pnpm install
```

### 5. Execute em ambiente de dev, criando três abas de terminal

```sh
# Aba 1
cd backend && pnpm run start:dev

# Aba 2
cd mock_gateway && pnpm run start:dev

# Aba 3
cd frontend && pnpm run dev
```

### 5. Como acessar a aplicação:

#### O backend estará disponível na rota: http://localhost:3000

#### O frontend estará disponível na rota: http://localhost:5173

#### O mock_gateway estará disponível na rota: http://localhost:4000

---

### Observações:

As pastas principais do mono repo (backend, mock_gateway, frontend) possuem README específicos sobre suas respectivas atividades.
