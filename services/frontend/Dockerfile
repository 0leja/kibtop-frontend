FROM node:18 as dependencies
WORKDIR /app/frontend
COPY package.json  ./
RUN npm i

FROM node:18 as builder
WORKDIR /app/frontend
COPY . .
COPY --from=dependencies /app/frontend/node_modules ./node_modules
RUN npm run build

FROM node:18 as runner
WORKDIR /app/frontend
ENV NODE_ENV production

COPY --from=builder /app/frontend/public ./public
COPY --from=builder /app/frontend/package.json ./package.json
COPY --from=builder /app/frontend/.next ./.next
COPY --from=builder /app/frontend/.env ./.env
COPY --from=builder /app/frontend/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]