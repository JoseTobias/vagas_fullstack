const { Schema, model } = require('mongoose');

const ProdutoSchema = new Schema({
    storeid: { 
        type: Schema.Types.ObjectId,
        ref: 'Loja',
        required: true
    },

    price: {
        type: Number,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    link: {
        type: String,
        required: true,
    },

    percentage: {
        type: Number,
        required: true,
    }
});

module.exports = model('Produto', ProdutoSchema);