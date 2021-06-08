const authorsController = require("../controllers/authors.controllers")
module.exports = (app) => {
	app.get("/api/authors", authorsController.findAllAuthors);
	app.post("/api/authors/new", authorsController.createAuthor);
	app.delete("/api/authors/delete/:id", authorsController.deleteAuthor);
	app.put("/api/authors/edit/:id", authorsController.updateAuthor);

}
