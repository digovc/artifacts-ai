ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG BUCKET
ARG CLOUD_FRONT_DISTRIBUTION

FROM node:20-alpine as build
WORKDIR /usr/src
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

FROM amazon/aws-cli:2.9.23 AS upload
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG BUCKET
ARG CLOUD_FRONT_DISTRIBUTION

COPY --from=build /usr/src/dist /dist
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
    AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
RUN aws s3 sync /dist $BUCKET --delete && \
    aws cloudfront create-invalidation --distribution-id $CLOUD_FRONT_DISTRIBUTION --paths "/*"
