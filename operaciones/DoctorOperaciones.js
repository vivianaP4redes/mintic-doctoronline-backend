const DoctorModelo = require("../modelos/DoctorModelo");
const DoctorOperaciones = {}

DoctorOperaciones.crearDoctor = async (req, res)=>{
    try {
        const objeto = req.body;
        console.log(objeto);
        const doctor = new DoctorModelo(objeto);
        const doctorGuardado = await doctor.save();
        res.status(201).send(doctorGuardado);
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

DoctorOperaciones.buscarDoctores = async (req, res)=>{
    try {
        const filtro = req.query;
        let listadoctores;
        if (filtro.q != null) {
            listadoctores = await DoctorModelo.find({
                "$or" : [ 
                    { "nombres": { $regex:filtro.q, $options:"i" }},
                    { "apellidos": { $regex:filtro.q, $options:"i" }},
                    { "direccion": { $regex:filtro.q, $options:"i" }}
                ]
            });
        }
        else {
            listadoctores = await DoctorModelo.find(filtro);
        }
        if (listadoctores.length > 0){
            res.status(200).send(listadoctores);
        } else {
            res.status(404).send([]);
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

DoctorOperaciones.buscarDoctor = async (req, res)=>{
    try {
        const id = req.params.id;
        const doctor = await DoctorModelo.findById(id);
        if (doctor != null){
            res.status(200).send(doctor);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

DoctorOperaciones.modificarDoctores = async (req, res)=>{
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
        const doctorActualizado = await DoctorModelo.findByIdAndUpdate(id, datosActualizar, { new : true });
        if (doctorActualizado != null) {
            res.status(200).send(doctorActualizado);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

DoctorOperaciones.borrarDoctor = async (req, res)=>{
    try {
        const id = req.params.id;
        const doctor = await DoctorModelo.findByIdAndDelete(id);
        if (doctor != null){
            res.status(200).send(doctor);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

module.exports = DoctorOperaciones;