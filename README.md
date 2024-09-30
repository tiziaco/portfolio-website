# portfolio-website
Welcome to my portfolio website! This project showcases my skills and work using a dynamic web application built with Next.js and Aceternity UI. The site is designed to present my portfolio in a clean and user-friendly manner, leveraging Django for backend operations and Bootstrap for a responsive frontend.

## Features

- **Dynamic Content**: Pages are dynamically generated based on data stored in a .ts files. This allows for easy updates and maintenance of portfolio items.
- **Responsive Design**: Utilizing Next.js, the website is designed to be fully responsive, ensuring a seamless experience on both desktop and mobile devices.
- **Interactive UI**: Enhanced user experience with a modern and interactive interface, thanks to Aceternity UI's extensive components library.

## Technologies Used

- **Next.js**: A high-level Python web framework that enables rapid development and clean, pragmatic design. It handles the backend operations, data management, and server-side logic.
- **Docker**: Containerizes the application for consistent development and deployment environments.
- **Nginx**: Configured as a reverse proxy to serve static files efficiently during deployment.

## Setup and Installation

### Local Development

1. **Clone the Repository**
   ```bash
   git clone https://github.com/tiziaco/portfolio-website.git
   cd portfolio-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```

4. **Open the Website**
   Visit `http://127.0.0.1:3000/` in your web browser to see the portfolio in action.


### Docker Setup

To build and run the project within a Docker container:

1. **Install Docker and Docker Compose** (if not already installed).
[Docker's installation guide](https://docs.docker.com/engine/install/)

2. **Build and Start the Docker Containers**
   ```bash
   docker-compose up --build
   ```

3. **Access the Application**
   Visit `http://localhost:80/` in your web browser to see the portfolio running inside the Docker container.

Or for testing the django container only:
1. Build the Docker container from the image:
```bash
docker build -t portfolio-website .
```

2. Run the Docker container with the .env file
```bash
docker run -d -p 8000:8000 --env-file .env.local --name portfolio-website-container portfolio-website
```
