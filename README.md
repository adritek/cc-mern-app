# MERN mobile phone preview app

This project uses with:
⚛️ [Create React App](https://github.com/facebook/create-react-app),
🐦 [Twitter Bootstrap 5](https://getbootstrap.com/),
🤖 [NodeJS + Express](https://nodejs.org/en/),
🥬 [MongoDB](https://www.mongodb.com/),
and 🐳 [Docker](https://www.docker.com/)

A full stack phone preview site.
Node runs the API with data supplied from Mongo, all this is injested by a React front end. The apps are containerised with Docker and run with docker-compose.

## Getting Started

### Project Structure

```
.
├── 📂 backend
│ ├── Dockerfile
│ ...
├── 📁 frontend
│ ├── Dockerfile
│ ...
├── docker-compose.yml
└── README.md
```

There are 2 ways to run the app

- via a Docker image
- or locally (npm)

### Docker

#### Have the following installed

- [Docker](https://www.docker.com/)

This repo contains the docker-compose.yml. Pull down the repo, and navigate to the root folder of the project.
In a terminal enter:

```
docker-compose up
```

Open a browser at [http://localhost:3000](http://localhost:3000) to view the front end, and [http://localhost:5000/posts](http://localhost:5000/posts) for the endpoint.

### Local development

#### Have the following installed

- [Node](https://www.nodejs.com/) (with npm)

Start both the front end (client) and the back end (server/endpoint) using npm.

Navigate to the root project folder and enter the 'Frontend' folder.
In a terminal enter:

```
npm install
npm start
```

Follow the same procedure in the 'backend' folder

Open a browser at [http://localhost:3000](http://localhost:3000) to view the front end, and [http://localhost:5000/posts](http://localhost:5000/posts) for the endpoint.
