const mongoose = require("mongoose");

const pacienteSchema = mongoose.Schema({
    nombres: { type: String, maxLength: 50, required: true, unique: false },
    apellidos: { type: String, maxLength: 50, required: true, unique: false },
    documento: { type: Number, required: true, unique: true },
    direccion: { type: String, maxLength: 80, required: true, unique: false },
    telefono: { type: Number, required: true, unique: false },
    correo: { type: String, maxLength: 80, required: true, unique: true },
    passw: { type: String, maxLength: 20, required: true, unique: false }
});

module.exports = mongoose.model("Pacientes", pacienteSchema);