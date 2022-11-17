const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    nombres: { type: String, maxLength: 50, required: true, unique: false },
    apellidos: { type: String, maxLength: 50, required: true, unique: false },
    documento: { type: Number, required: true, unique: true },
    especialidad: { type: String, maxLength: 50, required: true, unique: false },
    direccion: { type: String, maxLength: 80, required: true, unique: false },
    telefono: { type: Number, required: true, unique: false },
    correo: { type: String, maxLength: 80, required: true, unique: true },
    passw: { type: String, maxLength: 20, required: false, unique: false }
});

module.exports = mongoose.model("Doctores", doctorSchema);