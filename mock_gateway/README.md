# Mock Gateway - Teste Técnico Connect Digital

## Descrição

Este é o serviço de **Mock Gateway** do desafio técnico da Connect Digital. Ele simula um gateway de pagamentos, especialmente para operações PIX, permitindo testar integrações e fluxos de pagamento de ponta a ponta sem depender de um provedor externo real.

---

## Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/):** Framework Node.js modular e escalável.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para maior segurança.
- **[pnpm](https://pnpm.io/):** Gerenciador de pacotes rápido e eficiente.
- **[class-validator](https://github.com/typestack/class-validator):** Validação de DTOs.
- **[qrcode](https://github.com/soldair/node-qrcode):** Geração de QR Codes para PIX.
- **[Docker](https://www.docker.com/):** Containerização para ambientes isolados e reprodutíveis.

---

## Arquitetura

- **Modularização:** Separação entre controllers, services, DTOs e utils.
- **Simulação de Pagamentos:** Endpoints para simular criação de cobranças PIX e notificações de pagamento.
- **Validação:** Uso de DTOs e validação automática dos dados recebidos.
- **Geração de QR Code:** Geração de QR Code em base64 e código "copia e cola" para pagamentos PIX.
- **Assinatura HMAC:** Geração de assinatura para simular segurança em callbacks/webhooks.
- **Configuração via `.env`:** Permite customizar URLs e segredos facilmente.

---

## Principais Funcionalidades

- Endpoint para criar cobranças PIX (`POST /payments/pix`).
- Retorno de QR Code em base64 e código "copia e cola".
- Simulação de notificações de pagamento (webhook).
- Geração de assinatura HMAC para validação de integridade.

---

## Estrutura de Pastas

```
src/
  controllers/    # Controllers das rotas
  services/       # Lógica de negócio
  dto/            # Data Transfer Objects e validação
  utils/          # Dados fake e utilitários
  main.ts         # Bootstrap da aplicação
  app.module.ts   # Módulo principal
```

---

## Principais Rotas

### POST `/payments/pix`

Gera uma cobrança PIX com QR Code e código "copia e cola".

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

### POST `/paid/:transactionId`

Simula o pagamento de uma transação PIX.

**Path Param:**

- `transactionId` (number): ID da transação a ser marcada como paga.

**Response:**

```json
{
  "status": "success",
  "message": "Paid notification sent successfully"
}
```

---

### Observações

- Todas as respostas seguem o padrão HTTP status code 200 para sucesso.
- Para testar, utilize ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/).
- O endpoint `/payments/pix` retorna o QR Code em formato base64 (pronto para ser exibido em uma tag `<img>` no frontend) e o código "copia e cola" para pagamentos PIX.
- O endpoint `/paid/:transactionId` pode ser usado para simular a confirmação de pagamento de uma cobrança PIX criada anteriormente.
