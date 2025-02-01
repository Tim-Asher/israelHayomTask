# Project Name: Israel Hayom Writers

This project is a NestJS-based backend application that connects to MongoDB and provides an API for fetching writers and their posts. The frontend is a Next.js application that consumes this API to display writers' information.

## Table of Contents

1. Prerequisites
2. Installation
3. Backend Setup
4. Frontend Setup
5. Running the Project
6. Seeding the Database
7. Environment Variables
8. Prerequisites

## Before you start, make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- MongoDB or a MongoDB Atlas account for a cloud database
- NestJS CLI (optional, but useful for running NestJS commands)
- npm or Yarn as the package manager
- Installation

### Clone this repository:

```bash
git clone <repository_url>
cd <project_directory>
```

## Install the required dependencies for both the frontend and the backend:

### For the backend (NestJS):

```bash
cd backend
npm install
```

### For the frontend (Next.js):

```bash
cd frontend
npm install
```

## Backend Setup

### Set up the environment variables for the backend by creating a .env file inside the backend directory:

```bash
touch backend/.env
```

### Add the following variables to your .env file:

```env
MONGODB_CONNECTION=mongodb+srv://<username>:<password>@cluster0.tbr1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=8080
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### To run the backend, you can use the following command:

```bash
npm run start:dev
```

This will start the backend server on http://localhost:8080.

## Frontend Setup

### Set up the environment variables for the frontend by creating a .env.local file inside the frontend directory:

```bash
touch frontend/.env.local
```

### Add the following variable to your .env.local file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### To run the frontend, you can use the following command:

```bash
npm run dev
```

This will start the frontend server on http://localhost:3000.

## Running the Project

To run the complete project (backend and frontend), follow these steps:

1. Start the backend server in one terminal window:

```bash
cd backend
npm run start:dev
```

2. Start the frontend server in another terminal window:

```bash
cd frontend
npm run dev
```

3. Now, you can access the project at:

Backend: http://localhost:8080
Frontend: http://localhost:3000

4. Seeding the Database
   To seed the database with mock data (writers and posts), you dont need to to nothing.
   There is already script that runs when the backend is start to seed automatic the MongoDB.

## Environment Variables

For the project to work correctly, ensure the following environment variables are set in the .env files:

MONGODB_CONNECTION: MongoDB connection string for your MongoDB instance (either local or cloud).
PORT: The port the backend should listen on (default is 8080).
NEXT_PUBLIC_API_URL: The URL where the backend API is hosted (default is http://localhost:8080).

## Additional Information

The backend API exposes the following endpoints:
/writers/with-posts: Get writers with their latest posts. (base of the task request :] ).
