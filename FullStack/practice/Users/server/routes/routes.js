const UserController = require("../controllers/user")

module.exports = app => {
    app.get('/api/user', UserController.allUsers);
    app.post('/api/user', UserController.createUser);
    app.get('/api/user/:id', UserController.oneUser);
    app.put('/api/user/:id', UserController.updateUser);
    app.delete('/api/user/:id', UserController.deleteUser);
}