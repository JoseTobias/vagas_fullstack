const express = require('express');
const StoreController = require('./controllers/Loja');

const routes = express.Router();

routes.get('/store', StoreController.store_get);
routes.post('/store', StoreController.store_create);
routes.put('/store/:storeId', StoreController.store_update);
routes.delete('/store/:storeId', StoreController.store_delete);

module.exports = routes;