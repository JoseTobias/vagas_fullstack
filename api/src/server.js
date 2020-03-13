const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes');

require('dotenv').config();

const app = express();

const server = require('http').Server(app);

mongoose.connect(`mongodb+srv://tobias:${process.env.DATABASE_PASSWORD}@cluster0-c6wbf.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.use(routes);

console.log("listening on port 3030")

server.listen(3030)