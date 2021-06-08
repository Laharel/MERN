const productControllers = require('../controllers/product.controller')

module.exports = (app) => {
    app.post("/api/products/create", productControllers.createProduct),
    app.get("/api/products", productControllers.findAllProducts),
    app.get("/api/products/:id", productControllers.findOneProduct),
    app.put("/api/products/update/:id", productControllers.updateProduct),
    app.delete("/api/products/delete/:id", productControllers.deleteProduct)
}