const Joke = require('../models/jokes.model')

module.exports.getAllJokes = (req,res) => {
    Joke.find()
        .then(jokes_ => {
            res.json({jokes: jokes_})
        })
        .catch(err => res.json({message: "Error in getAllJokes() controller", error: err}))
}

module.exports.getOneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id})
        .then(joke_ => {
            res.json({joke: joke_})
        })
        .catch(err => res.json({message: "Error in getOneJoke() controller", error: err}))
}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Error in createJoke() controller", error: err}))
}

module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: "Error in updateJoke() controller", error: err}))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Error in deleteJoke() controller", error: err}))
}