const JokeControllers = require('../controllers/jokes.controller')

module.exports = app => {
    app.get('/api/jokes', JokeControllers.getAllJokes);
    app.get('/api/jokes/:id', JokeControllers.getOneJoke);
    app.post('/api/jokes/new', JokeControllers.createJoke);
    app.put('/api/jokes/:id', JokeControllers.updateJoke);
    app.delete('/api/jokes/:id', JokeControllers.deleteJoke);
}