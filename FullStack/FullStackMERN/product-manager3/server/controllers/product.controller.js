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

module.exports.updateProduct = (req,res) => {
    Product.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators:true}
        )
        .then(newProduct_ => res.json({product: newProduct_}))
        .catch(err => res.json({message: "something wrong in Product.findByIdAndUpdate()", error:err}))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne(
        {_id: req.params.id}
    )
        .then(deletedProduct => res.json({deletedProduct}))
        .catch(err => res.json({err}))
}