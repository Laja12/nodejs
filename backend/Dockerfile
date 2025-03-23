# Use official Node.js image for the backend
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose port 5000 for the back-end
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
