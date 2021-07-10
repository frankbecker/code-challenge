FROM node AS development
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node AS development
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD ["node","dist/main"]