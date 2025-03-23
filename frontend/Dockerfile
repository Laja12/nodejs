# Use official Node.js image for building React app
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# Use an official Nginx image to serve the build
FROM nginx:alpine

# Copy the build folder to Nginx's default folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3000 for the front-end
EXPOSE 3000
