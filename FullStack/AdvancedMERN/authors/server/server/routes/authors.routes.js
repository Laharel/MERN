const authorsController = require("../controllers/authors.controllers")
module.exports = (app) => {
	app.get("/api/authors", authorsController.findAllAuthors);
	app.post("/api/authors/create", authorsController.createAuthor);
	app.delete("/api/authors/delete/:id", authorsController.deleteAuthor);
	app.put("/api/authors/update/:id", authorsController.updateAuthor);
	// app.update("/api/users/:id", nameController.updateUser);
}
