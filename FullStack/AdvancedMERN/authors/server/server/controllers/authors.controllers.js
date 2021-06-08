const Author = require('../models/authors.models')

module.exports.findAllAuthors = (req,res) => {
    Author.find()
        .then(authors_ => res.json({authors: authors_}))
        .catch(err => res.status(400).json({message:"wrong in Author.findAllAuthors()", error:err}))
}

module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({author: newAuthor}))
        .catch(err => res.status(400).json({message:"wrong in Author.createAuthor()", error:err}))
}

module.exports.deleteAuthor = (req,res) => {
    Author.remove({_id: req.params.id})
        .then(response => res.json({response: response}))
        .catch(err => res.status(400).json({message:"wrong in Author.deleteAuthor()", error:err}))
}

module.exports.updateAuthor = (req,res) => {
    Author.findByIdAndUpdate(
        {_id:req.params.id}, 
        req.body,
        {new:true, runValidators:true}
        )
        .then(updatedAuthor => res.json({author:updatedAuthor}))
        .catch(err => res.status(400).json({message:"wrong in Author.updateAuthor()", error:err}))
}