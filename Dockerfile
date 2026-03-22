FROM node:21-alpine as build-stage
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx tsc --noEmit && npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]