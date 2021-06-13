const Player = require('../models/Model')

module.exports.findAllPlayers = (req,res) => {
    Player.find()
        .then(players_ => res.json({players: players_}))
        .catch(err => res.status(400).json({message:"wrong in Player.findAllPlayers()", error:err}))
}

module.exports.createPlayer = (req,res) => {
    Player.create(req.body)
        .then(newPlayer => res.json({player: newPlayer}))
        .catch(err => res.status(400).json({message:"wrong in Player.createPlayer()", error:err}))
}

module.exports.deletePlayer = (req,res) => {
    Player.findByIdAndDelete ({_id: req.params.id})
        .then(response => res.json({response: response}))
        .catch(err => res.status(400).json({message:"wrong in Player.deletePlayer()", error:err}))
}