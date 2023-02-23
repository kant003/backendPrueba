let express = require("express")
// npm install cors
let cors = require("cors")

let app = express()
app.use(cors())

function saludar(req, res){
    res.json("hola soy el backend del profe")
}
function calcular(req, res){
    let num1=5
    let num2=2
    let resultado=num1+num2+''
    res.json(resultado)
}

function suma(req, res){
    let num1 = +req.params.num1
    let num2 = +req.params.num2
    let resultado = num1+num2
    res.send(resultado+"")
}
//http://127.0.0.1:3000/hola
//http://localhost:3000/hola
//(profe)     http://10.101.17.22:3000/hola
app.get("/hola", saludar)
app.get("/", calcular)

http://localhost:3000/suma/4/3
app.get("/suma/:num1/:num2", suma)


app.listen(3000)
console.log('Servidor encendido y a la escucha en el puerto 3000')
