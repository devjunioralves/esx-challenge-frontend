# Overview

This interface was developed using React with Typescript, it allows the user to list saved URLS, create, delete and edit URLS through communication with the Django API in banckend

## Functionalities

### List URLs

Displays a list of all stored URLs fetched from the backend.
Fetches the data from the backend using a GET request.

### Add a URL

Allows the user to add a new URL.
Sends the URL to the backend via a POST request.

### Edit a URL

Provides an option to edit an existing URL.
Sends an update to the backend using a PUT request with the updated URL.

### Delete a URL

Enables the user to delete a URL by clicking on a delete button.
Sends a DELETE request to remove the URL from the backend.

## Installation Instructions

### Requirements

Node.js and npm must be installed on your machine.
Backend API must be running locally at http://localhost:8000/api/urls/.

### `git clone https://github.com/devjunioralves/esx-challenge-frontend.git`

### `cd esx-challenge-frontend`

### `npm install`

### `npm start`

## Future improvements

### 1 - Separation of Logic into Layers

#### The business logic and data manipulation (adding, editing, deleting URLs) could be separated into a specific module (such as a "services" or "repository" layer) to follow the principle of separation of concerns

### 2 - Data Validation

#### Libraries like `yup` or `joi` to validate form inputs, preventing incorrect data from being sent to the backend.

### 3 - Pagination and Optimization of the Listing

#### Add pagination or dynamic loading to the list of URLs to avoid performance issues when there are many URLs.
