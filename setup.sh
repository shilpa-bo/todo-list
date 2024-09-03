#!/bin/bash

# Navigate to the project directory
cd todo-list

# Navigate to frontend, install dependencies, start server
cd todo-frontend
npm install
npm run dev &

# Navigate to backend, install dependencies, create database file, start server
cd ../todo-backend
npm install
touch tasks.txt
npm run dev &
