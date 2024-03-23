const express = require('express') // tiene todos los métodos (verbos HTTP) que permiten egstionar la información
const router = express.Router() //quiero meter todos los métodos dentro de la constante que se llama router


//CRUD->Create (post), Read (get), Update (put), Delete (delete)


//POST
//http://localhost:8000/api/registro_persona
router.post('/registro_persona', function(req,res){ //registro_persona es el nombre que yo me invento ---REQ para hacer la peticion al servidor y RES es la respuesta
    res.json({
        mensaje:"Prueba hecha en registro_persona"
    })
})

//GET
//http://localhost:8000/api/listar_persona
router.get('/listar_persona', function(req,res) {
    res.json({
        mensaje:"Prueba hecha enn listar_persona"
    })
})

//PUT
//http://localhost:8000/api/actualizar_persona
router.put('/actualizar_persona', function(req,res) {
    res.json({
        mensaje:"Prueba hecha en actualizar_persona"
    })
})

//DELETE
//http://localhost:8000/api/eliminar_persona
router.delete('/eliminar_persona', function(req,res) {
    res.json({
        mensaje:"Prueba hecha en eliminar_persona"
    })
})




module.exports = router