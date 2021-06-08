const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            minlength: [3, "Name must be at least three characters long"],
            required: [true, "Name is a required field"]
        },
    },
    {timestamps:true}
);
const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;
