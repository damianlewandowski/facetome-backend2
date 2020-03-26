FROM node:13.10.1-alpine as ts-builder
WORKDIR /app
COPY . .
#RUN npm install
RUN npm run clean
RUN npm run build

FROM node:13.10.1-alpine AS ts-prod
COPY --from=ts-builder ./app/dist ./dist
COPY package* ./
RUN npm install --production
USER node
CMD npm run start:prod