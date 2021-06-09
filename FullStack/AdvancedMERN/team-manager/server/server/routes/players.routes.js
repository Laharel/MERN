const playerControllers = require('../controllers/players.controllers')
module.exports = (app) => {
	app.post('/api/players/create', playerControllers.createPlayer);
	app.get('/api/players', playerControllers.findAllPlayers);
	app.get('/api/players/:id', playerControllers.findOnePlayer);
	app.put('/api/players/update/:id', playerControllers.updatePlayer);
	app.delete('/api/players/delete/:id', playerControllers.deletePlayer);
}
