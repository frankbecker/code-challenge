FROM node AS development
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --only=development
COPY . .
RUN npm run build
FROM node AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /usr/src/app/ ./
CMD ["node","app/dist/main"]