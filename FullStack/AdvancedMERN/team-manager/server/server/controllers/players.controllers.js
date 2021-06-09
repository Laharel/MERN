const Player = require('../models/players.models')

// find all
module.exports.findAllPlayers = (req,res) => {
    Player.find()
        .then(players_ => res.json({players: players_}))
        .catch(err => res.status(400).json({message:"error in findAllPlayers()", error:err}))
}
// find by ID
module.exports.findOnePlayer = (req,res) => {
    Player.findById({_id:req.params.id})
        .then(player_ => res.json({player: player_}))
        .catch(err => res.status(400).json({message:"error in findOnePlayer()", error:err}))
}
// create
module.exports.createPlayer = (req,res) =>{
    Player.create(req.body)
        .then(newPlayer => res.json({player: newPlayer}))
        .catch(err => res.status(400).json({message: "error in createPlayer()", error:err}))
}
// update 
module.exports.updatePlayer = (req,res) => {
	Player.findByIdAndUpdate({_id: req.params.id},
		req.body,
		{new: true, runValidators: true}
	)
	.then(updatedPlayer => res.json({player: updatedPlayer}) )
	.catch(err => res.status(400).json({message: "error in updatePlayer()", error: err}) )
}

module.exports.deletePlayer = (req,res) => {
    Player.findByIdAndDelete({_id:req.params.id})
        .then(response => res.json({response: response}))
        .catch(err => res.status(400).json({message:"error in deletePlayer()", error:err}))
}
