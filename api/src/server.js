const express = require('express');

const mongoose = require('mongoose');

const app = express();

const server = require('http').Server(app);

mongoose.connect('mongodb+srv://tobias:tobias@cluster0-c6wbf.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
console.log("listening on port 3030")

server.listen(3030)