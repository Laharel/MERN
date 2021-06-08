const {User} = require('../models/User');

module.exports = {
    oneUser: (req, res) => {
        User.findOne({_id: req.params.id})
        .then( User => res.json(User))
        .catch( err => res.status(400).json(err))
    },
    allUsers: (req, res) => {
        User.find({})
            .then( Users => res.json(Users))
            .catch( err => res.status(400).json(err))
    },
    createUser: (req, res) => {
        User.create(req.body)
        .then( user => res.json(user))
        .catch( err => res.status(400).json(err))
    },
    updateUser: (req, res) => {
        User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then( updatedUser => res.json(updatedUser))
            .catch( err => res.status(400).json(err))

    },
    deleteUser: (req, res) => {
        User.findByIdAndDelete({ _id: req.params.id})
            .then(delConfirm => res.json(delConfirm))
            .catch( err => res.status(400).json(err))
    }

}