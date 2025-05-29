# Use official Node.js 18 image
FROM node:18

WORKDIR /app

# copy only package.json & lockfile first, so Docker caches install
COPY package.json package-lock.json ./

RUN npm ci

# now copy the rest of your source
COPY public ./public
COPY src ./src
COPY vite.config.js ./
# (skip copying .env thanks to .dockerignore)

EXPOSE 3000

CMD ["npm", "run", "dev"]
