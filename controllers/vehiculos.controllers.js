const {request, response} = require("express");
const {vehiculos} = require("../vehiculos");

const getVehiculos = (req = request, res = response)=>{


    return res.json({
        ok:true,
        statuscode: 200,
        vehiculos:vehiculos
    })

}

const getVehiculoById = (req, res)=>{
    
    let id = parseInt(req.params.id);

    let vehiculobuscar = "";

    vehiculobuscar = vehiculos.find((vehiculo)=>{
        return vehiculo.id === id;

    })
    if (vehiculobuscar){
        return res.json({
            oka:true,
            statuscode:200,
            vehiculobuscar
        })
    }else{
        return res.json({
            oka:true,
            statuscode:404,
            msg: "no hay vehiculos con ese id"
        })
    }

}

module.exports = {
    getVehiculos,
    getVehiculoById
}