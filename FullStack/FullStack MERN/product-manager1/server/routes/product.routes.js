const productControllers = require('../controllers/product.controller')

module.exports = (app) => {
    app.post('/api/products/create', productControllers.createProduct);
    app.get('/api/productes', productControllers.findAllProducts);
}