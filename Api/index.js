const express = require('express') //"contiene el router"
const cors = require('cors') //peticion de un pais a otro
const mongoose = require('mongoose') //BD
const bodyparser = require('body-parser')

const personas = require('./routes/personas') //vaya a la carpeta routes, dentro esta el archivo personas y metale a la variable los métodos
//const empresas_rutas = require('./routes/empresas')
require('dotenv').config() //

const app = express() //lo que tiene express pongalo adentro de app

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true})) //procesa la info que viene desde los formularios
//app.use habilita esos sistemas
app.use(cors())

mongoose.connect(process.env.MONGO_URI) //string de conexión dentro del () pero se usa env para que no se vea la clave. otras variables de entorno son como Googlemaps
// mongoose.connect("mongodb+srv://leaosoluciones:Cenfotec.2024@agronline.0dx5usr.mongodb.net/") 

//http://localhost:800/api
app.use('/api',personas)
//app.use('/api',empresas_rutas) //use los métodos que ya le metió a la variable personas en al línea 6


PORT = 8000

app.listen(PORT, () => {
  console.log(`Aplicación levantada en puerto: ${PORT}`)
})
//escuche mi aplicación en ese puerto y, si todo sale bien, ponga ese mensaje en la consola