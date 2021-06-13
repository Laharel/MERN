const playersController = require("../controllers/controllers")
module.exports = (app) => {
	app.get("/api/players", playersController.findAllPlayers);
	app.post("/api/players/new", playersController.createPlayer);
	app.delete("/api/players/delete/:id", playersController.deletePlayer);
}
