const { Schema, model } = require('mongoose');

const LojaSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    logo: {
        type: String,
        required: true,
    },

    link: {
        type: String,
        required: true,
    }
});

module.exports = model('Loja', LojaSchema);