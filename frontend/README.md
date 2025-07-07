# Frontend - Teste Técnico Connect Digital

## Descrição

Este é o frontend do desafio técnico da Connect Digital. Desenvolvido em **React** com **TypeScript** e **Vite**, ele oferece uma interface simples para simular pagamentos via PIX, exibindo QR Code, código "copia e cola" e feedbacks visuais com toast.

---

## Tecnologias Utilizadas

- **[React](https://react.dev/):** Biblioteca para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para maior robustez.
- **[Vite](https://vitejs.dev/):** Bundler moderno e rápido para desenvolvimento React.
- **[React Toastify](https://fkhadra.github.io/react-toastify/):** Notificações toast elegantes.
- **[pnpm](https://pnpm.io/):** Gerenciador de pacotes rápido e eficiente.
- **[Docker](https://www.docker.com/):** Containerização para ambientes isolados e reprodutíveis.

---

## Principais Funcionalidades

- Botão "Pagar com PIX" que dispara uma cobrança via API.
- Exibição do QR Code e do código "copia e cola" ao receber a resposta.
- Botão para copiar o código PIX automaticamente.
- Feedback visual de sucesso e erro com toast.
- Tratamento de estados de carregamento e erro.

---

## Estrutura de Pastas

```
src/
App.tsx # Componente principal
App.css # Estilos para o App.tsx
main.tsx # Bootstrap da aplicação
index.css # Estilos globaisW
```

## Principais Rotas Consumidas

- **POST `/payments/pix`**
  Gera cobrança PIX e retorna QR Code e código "copia e cola".

- **POST `paid/${transactionId}`**
  Simula um "disparo" de pagamentos no gateway de pagamentos.

---

## Observações

- O frontend está preparado para integração com o backend e mock gateway via variáveis de ambiente.
