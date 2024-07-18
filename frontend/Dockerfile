#####
##### Docker multi-stage build : Node.js build image
#####
FROM node:lts-alpine as build-stage

# Install git for git dependancies in package.json
RUN apk add --no-cache git

# make the 'app' folder the current working directory
WORKDIR /app

# Copy project files and restore as distinct layers
COPY package.json ./

# install project dependencies
RUN npm install --legacy-peer-deps

# Copy everything else for build
COPY src/ ./src
COPY static/datas/ ./static/datas   
COPY static/Models/ ./static/Models   
COPY static/Sounds/ ./static/Sounds   
COPY vite.config.js ./
COPY index.html ./

# Args
ARG VITE_FRONT_URI=$VITE_FRONT_URI 
ARG VITE_BACK_URL=$VITE_BACK_URL
ARG VITE_BACK_WS=$VITE_BACK_WS

# build app for production with minification
RUN npm run build

# Data game
COPY static/ /app/dist/static

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
