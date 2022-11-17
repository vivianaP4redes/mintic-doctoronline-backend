const PacienteModelo = require("../modelos/PacienteModelo");
const PacienteOperaciones = {}

PacienteOperaciones.crearPaciente = async (req, res)=>{
    try {
        const objeto = req.body;
        console.log(objeto);
        const paciente = new PacienteModelo(objeto);
        const pacienteGuardado = await paciente.save();
        res.status(201).send(pacienteGuardado);
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

PacienteOperaciones.buscarPacientes = async (req, res)=>{
    try {
        const filtro = req.query;
        let listapacientes;
        if (filtro.q != null) {
            listapacientes = await PacienteModelo.find({
                "$or" : [ 
                    { "nombres": { $regex:filtro.q, $options:"i" }},
                    { "apellidos": { $regex:filtro.q, $options:"i" }},
                    { "direccion": { $regex:filtro.q, $options:"i" }}
                ]
            });
        }
        else {
            listapacientes = await PacienteModelo.find(filtro);
        }
        if (listapacientes.length > 0){
            res.status(200).send(listapacientes);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

PacienteOperaciones.buscarPaciente = async (req, res)=>{
    try {
        const id = req.params.id;
        const paciente = await PacienteModelo.findById(id);
        if (cliente != null){
            res.status(200).send(paciente);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

PacienteOperaciones.modificarPacientes = async (req, res)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        const datosActualizar = {
            nombres: body.nombres,
            apellidos: body.apellidos,
            direccion: body.direccion,
            telefono: body.telefono,
            passw: body.passw
        }
        const pacienteActualizado = await PacienteModelo.findByIdAndUpdate(id, datosActualizar, { new : true });
        if (pacienteActualizado != null) {
            res.status(200).send(pacienteActualizado);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
    
}

PacienteOperaciones.borrarPaciente = async (req, res)=>{
    try {
        const id = req.params.id;
        const paciente = await PacienteModelo.findByIdAndDelete(id);
        if (paciente != null){
            res.status(200).send(paciente);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}
module.exports = PacienteOperaciones;