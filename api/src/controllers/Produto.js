const Product = require('../models/Produto');
const Store = require('../models/Loja');

exports.product_create = async (req, res) => {
    const { storeid, price, title, image, link, percentage } = req.body

    try {
        const storeExists = await Store.findById(storeid)
        if(!storeExists) {
            return res.status(404).json({
                message: 'store not found'
            });
        }
        const productExists = await Product.findOne({title, storeid})
        if(productExists) {
            if(productExists.storeid !== storeid) {
                return res.json(productExists)
            }
        }

        const product = await Product.create({
            storeid,
            price,
            title,
            image,
            link,
            percentage
        })
        return res.json(product);
    }
    catch {
        return res.status(400).json({
            message: 'storeid format is invalid'
        });
    }
}

exports.product_get = async (req, res) => {
    const products = await Product.find()
    return res.json(products)
}