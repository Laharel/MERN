const mongoose = require('mongoose')

const JokeScehma = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"],
        maxlength: [150, "Oops! you shouldn't exceed 150"]
    }
})

const Joke = mongoose.model('Joke', JokeScehma)
module.exports = Joke