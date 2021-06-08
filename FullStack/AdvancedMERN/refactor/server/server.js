// Const express = require(‘express’)
// Const app = express()
// Require(‘../config/mongoose.config’)
// Const cors = require(‘cors’)
// App.use(cors())
// App.use(express.json(), express.urlencoded({extended: true}) )
// Const nameRoutes = require(‘./routes/name.routes’)
// nameRoutes(app)
// app.listen(8000, () => console.log(“Server is connected on port 8000”) )

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}))

const productRoutes = require('./routes/product.route')

productRoutes(app)

app.listen(8000, ()=> console.log("listening on port 8000"))