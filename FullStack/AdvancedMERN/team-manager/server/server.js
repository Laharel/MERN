const express = require('express')
const app = express()
const port = 8000;
require('./server/config/mongoose.config')
const cors = require('cors')
app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}) )
require('./server/routes/players.routes')(app);
app.listen(port, () => console.log('Server is connected on port ' + port) )
