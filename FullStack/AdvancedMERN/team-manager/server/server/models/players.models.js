const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "player name is required"],
            minlength: [2, "name should be at least 2 characters long"]
        },
        position: {
            type: String,
        },
        status1: {
            type: Number,
            default: 3
        },
        status2: {
            type: Number,
            default: 3
        },
        status3: {
            type: Number,
            default: 3
        },
        

    },
    {timestamps:true}
);
const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;
