const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        maxlength: [100, "You can't exceed 100 characters"]
    },
    price: Number,
    description: {
        type: String,
        required: [true, "description is required"]
    }
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;