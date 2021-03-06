#------------------------------------------------------
#               Dashboard build begin
#------------------------------------------------------
# build environment
FROM node:carbon-alpine as builder

ARG REACT_APP_API_HOST
ENV REACT_APP_API_HOST=${REACT_APP_API_HOST}

ARG REACT_APP_ENV
ENV REACT_APP_ENV=${REACT_APP_ENV}

RUN mkdir -p /usr/src/dashboard
WORKDIR /usr/src/dashboard

# Install all dependencies of the current project.
COPY ./dashboard/package.json package.json
COPY ./dashboard/yarn.lock yarn.lock
RUN yarn install

# Copy all local files into the image.
COPY ./dashboard .

# Build for production.
RUN yarn run build --production

#------------------------------------------------------
#                   Package
#------------------------------------------------------

FROM node:9

WORKDIR /usr/app

COPY ./server/package.json .
COPY ./server/yarn.lock .
COPY ./server/package-lock.json .

RUN npm install --production

COPY ./server .

RUN mkdir ./public/dashboard

COPY --from=builder /usr/src/dashboard/build ./public/dashboard