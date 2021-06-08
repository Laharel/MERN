const express = require("express")
const app = express()
require("./server/config/mongoose.config")
const cors = require("cors")
app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}) )
const nameRoutes = require("./server/routes/authors.routes")
nameRoutes(app)
app.listen(8000, () => console.log("Server is connected on port 8000") )
