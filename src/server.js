const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./controller/auth.controller')(app)
require('./controller/user.controller')(app)
require('./controller/relatorio-visita.controller')(app)



dotenv.config();
app.listen(process.env.PORT);