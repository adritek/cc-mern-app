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
├── docker-compose.yaml
└── README.md
```

### You will need the following installed on your computer

- node 16+/npm 8+
- Docker and Docker hub

### Installing local files

- in the Frontend and Backend folders

```
npm install
npm start
```

### To run the Docker images

- in the Root folder

```
docker-compose up
```

Open a browser at [http://localhost:3000](http://localhost:3000) to view the front end, and [http://localhost:5000/posts](http://localhost:5000/posts) for the endpoint.
