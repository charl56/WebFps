#####
##### Docker multi-stage build : Node.js build image
#####
FROM node:lts-alpine as build-stage

# make the 'app' folder the current working directory
WORKDIR /app

# Copy project files and restore as distinct layers
COPY package.json ./

# install project dependencies
RUN npm install

# Copy everything else for build
# COPY config/ ./config
COPY controllers/ ./controllers
COPY models/ ./models
COPY utils/ ./utils
COPY server.js ./


# build app for production with minification
EXPOSE 3000 
CMD [ "node", "server" ]




# # production stage
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]