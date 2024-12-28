# Weather Journal App

## Project Overview

The Weather Journal App is a web application designed to work with Web APIs and asynchronous JavaScript. The app leverages the OpenWeatherMap API to retrieve weather information based on the user's location. It dynamically updates the user interface (UI) to display real-time weather data.

This project is part of the Udacity Front-End Developer Nanodegree and focuses on integrating web APIs and handling asynchronous operations effectively.

## Technologies Used

*   **Node.js:** JavaScript runtime environment
*   **Express:** Web framework for Node.js
*   **CORS:** Package to handle cross-origin resource sharing
*   **Body-parser:** Middleware to parse incoming request bodies in a middleware
*   **OpenWeatherMap API:** API service for fetching weather data

## Project Objective

The main goal of this project is to create a web app that allows users to get weather updates based on their location. Using the OpenWeatherMap API, the app fetches real-time weather data and updates the UI dynamically. This is achieved by:

*   Fetching weather data using asynchronous code.
*   Displaying weather details based on the user's location.
*   Dynamically updating the UI with the fetched data.

## Setup Instructions

To set up the project environment, follow these steps:

### 1. Install Node.js and Required Packages
Ensure that Node.js is installed on your system. Afterward, install the necessary packages:

*   **Express:** To create the server and handle routes.
*   **CORS:** To allow cross-origin requests.
*   **Body-parser:** To parse incoming request bodies.

Run the following command to install the required packages:

```bash
npm install express cors body-parser
```

### 2. Start the Server

To start the server, use the following command in your terminal:

```bash
node server.js
```
This will run the Express server and begin handling requests for weather data.

## Development Strategy

*  **Project Setup:** Initialized the project environment, ensured Node.js and necessary packages were installed, and configured the server in the server.js file.
*  **API Integration:** Acquired an API key from the OpenWeatherMap website and created asynchronous functions to fetch weather data based on the user’s location.
*  **Server Routes:** Created POST and GET routes to manage data retrieval and posting to the server.
*  **UI Dynamic Update:**  Designed a function that dynamically updates the UI with the fetched weather data.
*  **Weather Data Fetching:** Implemented asynchronous code to fetch the weather data and store it on the local server.

## Outcome Images

![Initial UI](C:\Users\Zahaa Muhanna\Pictures\Screenshots\outcome1)

*   **UI After Fetching Weather Data:**

![UI after fetching data](C:\Users\Zahaa Muhanna\Pictures\Screenshots\outcome2)
