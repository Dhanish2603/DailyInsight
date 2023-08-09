
# News Feeed

A brief description of what this project does and who it's for


## MERN Stack Newsfeed Application

This repository contains the code for a basic newsfeed application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows users to view and post news articles, providing a seamless and responsive user experience.
## Prerequisites

Before running this application, make sure you have the following installed:

Node.js and npm (Node Package Manager)              
MongoDB     
Git (optional)
## Getting Started



1.Clone the Repository

```bash
git clone https://github.com/Dhanish2603/NewsFeeed.git
cd mern-newsfeed-app

```
2.Install Dependencies

```bash
cd client
npm install
```
```bash
cd ../server
npm install
```
In Server,

Create a .env File

Add Environment Variables

Inside the .env file, add the following environment variables:

```bash
# MongoDB connection URL
MONGO_URL=""

# Server port
PORT=5000
```

4.Start the application

Open two separate terminal windows:

In one terminal, navigate to the client directory and start the React app:
```bash
cd client
npm start

```
```bash
cd server
npm start

```
## Features

- Features
- User registration and authentication.
- View a feed of news articles.
- Bookmark articles.
- Responsive design for mobile and desktop.


## Folder Structure

```bash

mern-newsfeed-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── ...
│   ├── package.json
│   └── ...
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── ...
├── .gitignore
└── README.md

```
## Contributing

Contributions are always welcome!

Feel free to contribute to this project by creating pull requests. For major changes, please open an issue first to discuss the proposed changes.


## License

[MIT](https://choosealicense.com/licenses/mit/)

