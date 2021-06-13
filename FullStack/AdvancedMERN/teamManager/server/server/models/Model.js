const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            minlength: [2, "Name must be at least two characters long"],
            required: [true, "Name is a required field"]
        },
        position: {
            type: String,
            required: [false]
        },
    },
    {timestamps:true}
);
const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;
