const Store = require('../models/Loja');


exports.store_create = async (req, res) => {
    const { name, logo, link } = req.body;


    const storeExists = await Store.findOne({ user: name });

    if(storeExists) {
        return res.json(storeExists);
    }

    const store = await Store.create({
        name,
        logo,
        link
    })
    return res.json(store);
}

exports.store_get = async (req, res) => {
    const { sortBy, search, limit, offset, descending } = req.query
    const stores = await Store.find({ name: {$regex : search || ''} }, {}, { sort: { [sortBy]: 1 }})
    return res.json(stores);
}

exports.store_update = async (req, res, next) => {
    const _id = req.params.storeId
    const { name, logo, link } = req.body
    const store = await Store.updateOne({_id}, {
        name,
        logo,
        link
    })
    return res.json(store)
}

exports.store_delete = async (req, res, next) => {
    const _id = req.params.storeId
    const stores = await Store.deleteOne({_id})
    return res.json(stores)
}