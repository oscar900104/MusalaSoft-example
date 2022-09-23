const express = require('express');
const cors = require('cors');
require('.././config/conexion_mysql')
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;


//admite
app.use(express.json())
app.use(cors())

//rutas
app.use('/api',require('.././src/routes'))




app.listen(port, () => console.log('server listening on port', port));   