# Use official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (to leverage Docker cache for better performance)
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the backend API port (default is 5000, adjust if needed)
EXPOSE 5173

# Command to run the app
CMD ["npm", "start"]