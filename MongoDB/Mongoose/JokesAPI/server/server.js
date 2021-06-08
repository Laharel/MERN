const express = require('express')
const app = express()
const port = 8000

// connecting to mongodb
require('./config/mongoose.config')

// middleware setup; part of bodyParser
app.use(express.json(), express.urlencoded({extended: true}))

// defining allRoutes
const allRoutes = require('./routes/jokes.routes')

// invoking allRoutes and passing express()
allRoutes(app)

// setup express to listen to the given port
app.listen(port, ()=> console.log(`Listening on port: ${port}`))

