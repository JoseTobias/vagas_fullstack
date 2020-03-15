const express = require('express');
const StoreController = require('./controllers/Loja');
const ProductController = require('./controllers/Produto');

const routes = express.Router();

routes.get('/stores', StoreController.store_get);
routes.get('/stores/:storeId', StoreController.store_get_one);
routes.post('/stores', StoreController.store_create);
routes.put('/stores/:storeId', StoreController.store_update);
routes.delete('/stores/:storeId', StoreController.store_delete);

routes.get('/products', ProductController.product_get);
routes.post('/products', ProductController.product_create);
routes.put('/products/:productId', ProductController.product_update);
routes.delete('/products/:productId', ProductController.product_delete);

module.exports = routes;