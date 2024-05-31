
const express  = require("express");
const cors = require("cors")
const app = express();
const puerto = 3000;

const {getVehiculos, getVehiculoById} = require("./controllers/vehiculos.controllers")

app.use(cors());

app.get("/" , getVehiculos)

app.get("/:id" , getVehiculoById)



app.listen( puerto, () => {
    console.log(`servidor arriba ok en el puerto ${puerto}`);
});