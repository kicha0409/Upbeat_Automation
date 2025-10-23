# Use Playwright base image with Node.js 20 (includes browsers)
FROM mcr.microsoft.com/playwright:focal

# Set working directory
WORKDIR /repo

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your project
COPY . .

# Install browsers (already included in Playwright image, optional if custom)
# RUN npx playwright install --with-deps --no-browser-download

# Default command to run tests
CMD ["npx", "playwright", "test"]
