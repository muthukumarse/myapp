FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# build sha - can be shorten but leaving it as it is, since it jsut testing.
ARG BUILD_SHA=in-development
RUN echo -n $BUILD_SHA | tr -d '\n' > build_sha

# App version
RUN cat package.json | grep "version" | awk '{ print $2 }' | tr -d ',"\n' > version

# keeping 8080 which harmless port to test on Dev
EXPOSE 8080
CMD [ "node", "server.js" ]