const Product = require('../models/product.model')

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(product_ => res.json({product: product_}))
        .catch(err => res.json({message: "Error in createProduct()", error: err}))
}

module.exports.findOneProduct = (req,res) => {
    Product.findById(
        {_id: req.params.id}
    )
        .then(product_ => res.json({product: product_}))
        .catch(err => res.json({message: "Error in findOneProduct()", error: err}))
}

module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then(products_ => res.json({products: products_}))
        .catch(err => res.json({message: "Error in findAllProducts()", error: err}))
}

module.exports.updateProduct = (req,res) => {
    Product.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedProduct => res.json({product: updatedProduct}))
        .catch(err => res.json({message: "Error in updateProduct()"}))
}

module.exports.deleteProduct = (req,res) => {
    Product.remove({_id: req.params.id})
        .then(response_ => res.json({response: response_}))
        .catch(err => res.json({message:"Error in deleteProduct()", error: err}))
}