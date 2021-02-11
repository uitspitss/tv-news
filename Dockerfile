FROM node:lts-alpine AS builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build


FROM node:lts-alpine AS runner

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile
COPY --from=builder /app/.next /app/public ./
CMD [ "yarn", "start"]

EXPOSE 3000
