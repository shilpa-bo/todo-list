# To-Do List App

## Overview

This is a simple To-Do List application that demonstrates the fundamental concepts of client-server relationships and API calls. The app is built with a **React.js** frontend and a **Node.js** backend. It serves as a tool for understanding how the frontend and backend interact through API requests to manage data.

## Features

- **Add Tasks:** Users can add new tasks to their to-do list.
- **Delete Tasks:** Users can delete tasks from their list.
- **Reorder Tasks:** Users can move tasks up or down in the list.
- **Persist Tasks:** Tasks are saved to a file on the server, ensuring that they are retained even after a page refresh or server restart.

## Technologies Used

- **Frontend:** React.js
  - The frontend is built using React, a popular JavaScript library for building user interfaces. It provides an interactive and dynamic experience, allowing users to manage their tasks easily.
  
- **Backend:** Node.js with Express.js
  - The backend is powered by Node.js and Express.js, which handle the server-side logic. It processes API requests, manages the storage of tasks, and serves the data to the frontend.

- **Data Persistence:** File System (fs) Module
  - The tasks are stored in a `tasks.txt` file on the server. The backend reads and writes to this file to maintain the task list across sessions.

## How It Works

### 1. Client-Server Relationship
- **Frontend (Client):** The React.js frontend allows users to interact with the application by adding, deleting, and reordering tasks.
- **Backend (Server):** The Node.js backend receives API requests from the frontend, processes the requests, and sends back the appropriate responses. It also handles the persistence of tasks by saving them to a text file.

### 2. API Calls
- **GET Request:** When the page loads, the frontend sends a `GET` request to the backend to retrieve the current list of tasks from the server.
- **POST Request:** Whenever a task is added, deleted, or reordered, the frontend sends a `POST` request to update the tasks on the server. The updated list is then saved to the `tasks.txt` file.

### Installation
- **Clone the repository and navigate to directory:**
   ```bash
  git clone https://github.com/your-username/todo-list-app.git
  cd todo-list-app

## Method 1:
- **Set up and run the application by executing the setup.sh script**
  ```bash
  chmod +x setup.sh
  ./setup.sh

## Method 2:
- **Navigate to the frontend directory, install dependencies, start frontend server:**
   ```bash
   cd todo-frontend
   npm install
   npm run dev
- **Navigate to the backend directory, install dependencies, create database file, start backend server:**
   ```bash
   cd todo-backend
   npm install
   touch tasks.txt
   npm run dev
