const Store = require('../models/Loja');
const Product = require('../models/Produto');

exports.store_create = async (req, res) => {
    const { name, logo, link } = req.body


    const storeExists = await Store.findOne({ name })

    if(storeExists) {
        return res.json(storeExists)
    }

    const store = await Store.create({
        name,
        logo,
        link
    })
    return res.json(store)
}

exports.store_get = async (req, res) => {
    const { sortBy, search, offset } = req.query
    const limit = (req.query.limit >= 30 ? 30 : req.query.limit)
    const stores = await Store.find({ name: {$regex : search || ''} },
    {},
    { sort: { [sortBy]: 1 }, limit: parseInt(limit), skip: parseInt(offset)})
    return res.json(stores)
}

exports.store_get_one = async (req, res) => {
    try {
        const _id = req.params.storeId
        const store = await Store.findOne({_id})
        return res.json(store)
    }
    catch {
        return res.status(400).json({
            message: 'storeid format is invalid'
        });
    }
}

exports.store_update = async (req, res, next) => {
    try {
        const _id = req.params.storeId
        const { name, logo, link } = req.body
        const store = await Store.updateOne({_id}, {
            name,
            logo,
            link
        })
        return res.json(store)
    }
    catch {
        return res.status(400).json({
            message: 'storeid format is invalid'
        });
    }
}

exports.store_delete = async (req, res, next) => {
    try {
        const _id = req.params.storeId
        const stores = await Store.deleteOne({_id})
        const product = await Product.deleteMany({storeid: _id})
        return res.json(stores)
    }
    catch {
        return res.status(400).json({
            message: 'storeid format is invalid'
        });
    }
}