# Backend - Teste Técnico Connect Digital

## Descrição

Este é o backend do desafio técnico da Connect Digital. Ele foi desenvolvido com foco em escalabilidade, boas práticas de arquitetura e facilidade de manutenção, simulando um sistema de pagamentos com integração PIX.

---

## Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/):** Framework Node.js para aplicações escaláveis e estruturadas.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para maior robustez.
- **[TypeORM](https://typeorm.io/):** ORM para integração com bancos relacionais.
- **[PostgreSQL](https://www.postgresql.org/):** Banco de dados relacional.
- **[Docker](https://www.docker.com/):** Containerização para ambientes isolados e reprodutíveis.
- **[pnpm](https://pnpm.io/):** Gerenciador de pacotes rápido e eficiente.
- **[class-validator](https://github.com/typestack/class-validator):** Validação de DTOs.

---

## Arquitetura

- **Modularização:** Separação clara entre controllers, services, entities, DTOs e utils.
- **Camada de Serviços:** Toda a lógica de negócio fica nos services, facilitando manutenção.
- **DTOs e Validação:** Uso de DTOs para entrada de dados e validação automática com decorators.
- **ORM:** Uso do TypeORM para abstração do banco de dados e fácil manipulação das entidades.
- **Middlewares e Providers:** Estrutura pronta para autenticação.
- **Configuração por variáveis de ambiente:** Uso de `.env` para segredos e configurações sensíveis.

---

## Principais Funcionalidades

- Manipulação de transações e entidades relacionadas.
- Integração simulada com gateway de pagamentos PIX.
- Filtros dinâmicos e busca avançada.
- Geração de assinaturas HMAC para segurança.
- Validação e tratamento de erros padronizados.

---

## Estrutura de Pastas

```
src/
  controllers/    # Controllers das rotas
  services/       # Lógica de negócio
  entities/       # Entidades do banco
  dto/            # Data Transfer Objects e validação
  utils/          # Utilitários e constantes
  providers/      # Providers customizados
  common/         # Arquivos compartilhados
```

---

## Principais Rotas

### POST `/payments/pix`

Gera uma cobrança PIX.

**Request Body:**

```json
{
  "description": "Pagamento de teste"
}
```

**Response:**

```json
{
  "qr_code_image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  "qr_code_copy_paste": "00020126580014br.gov.bcb.pix...",
  "transactionId": 123
}
```

---

### GET `/transactions`

Lista transações, podendo receber filtros via query params.

**Query Params (exemplo):**

```
/transactions?customer=Gabriel&status=paid
```

**Response:**

```json
[
  {
    "id": 1,
    "customer": "Gabriel",
    "status": "paid",
    "...": "..."
  }
]
```

---

### POST `/transactions/webhook`

Recebe notificações de eventos de transação (webhook).

**Request Body:**

```json
{
  "type": "transaction",
  "objectId": "282",
  "url": "https://test.com",
  "data" {"...": "..."}
}
```

**Response:**

```json
{
  "id": 21 // transaction id
}
```

---

### POST `/transactions/webhook/paid/:transactionId`

Marca uma transação como paga via webhook.

**Path Param:**

- `transactionId` (number): ID da transação a ser marcada como paga.

**Response:**

- HTTP 204 No Content

---

### Observações

- Todas as rotas retornam status HTTP apropriados (`200`, `204`, etc.).
- Utilize ferramentas como Postman ou Insomnia para testar os endpoints.
- O endpoint `/payments/pix` retorna o QR Code em base64 (para `<img>`) e o código "copia e cola".
- O endpoint `/transactions` aceita diversos filtros via query string, conforme o mapeamento do
