FROM node:18-alpine as base

WORKDIR /src
COPY src/package*.json /
EXPOSE 3000

#prepare a prod enviroment
FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY src/. /
RUN ls
CMD ["node", "bin/www"]

#prepare a dev enviroment
FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY src/. /
CMD ["nodemon", "bin/www"]