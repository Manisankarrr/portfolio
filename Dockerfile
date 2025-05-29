# 1. Build stage
FROM node:18 AS builder
WORKDIR /app

# 1.1 Copy only what’s needed for install
COPY package.json package-lock.json ./
RUN npm ci

# 1.2 Copy app sources **including index.html**
COPY index.html ./
COPY vite.config.js ./
COPY public ./public
COPY src ./src

# 1.3 Build the production bundle
RUN npm run build

# 2. Serve stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
