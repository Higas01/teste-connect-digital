# Etapa 1: Build
FROM node:23-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

ARG VITE_BACKEND_URL
ARG VITE_MOCK_GATEWAY_URL

RUN VITE_BACKEND_URL=${VITE_BACKEND_URL} VITE_MOCK_GATEWAY_URL=${VITE_MOCK_GATEWAY_URL} pnpm run build


FROM nginx:stable-alpine AS production

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN apk add --no-cache wget netcat-openbsd && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

EXPOSE 80

