const Product = require('../models/product.models')

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({product: newProduct}))
        .catch(err => res.json({message: "something wrong in Product.create()", error: err}))
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(products_ => res.json({products: products_}))
        .catch(err => res.json({message: "something wrong in Product.find()", error: err}))
}

module.exports.findOneProduct = (req,res) => {
    Product.find({_id: req.params.id})
        .then(product_ => res.json({product: product_}))
        .catch(err => res.json({message: "something wrong in Product.find()", error: err}))
}