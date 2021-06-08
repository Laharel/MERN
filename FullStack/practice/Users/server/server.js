const express = require('express')
const app = express()
const port = 8000;
const cors = require('cors')
app.use(cors())

require('./config/config')

app.use(express.json(), express.urlencoded({extended: true}))

require('./routes/route')(app);


app.listen(port, ()=> console.log(`listening on port ${port}`))