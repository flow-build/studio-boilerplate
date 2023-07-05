# STAGE 1: install
FROM node:18-alpine AS base
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
COPY tsconfig.json /usr/src/app/
RUN npm ci -omit=dev
# Copy project 
COPY . .

# STAGE 2: build
FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /usr/src/app/ ./
RUN npm run build

# STAGE 3: app
FROM node:18-alpine AS app
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next/
COPY --from=build /build/public ./public/
COPY --from=build /build/node_modules ./node_modules/
COPY --from=build /build/next.config.js ./

EXPOSE 3000
EXPOSE 80
CMD ["npm", "start"] 
