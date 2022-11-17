const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
    nombres: { type: String, maxLength: 50, required: true, unique: false },
    apellidos: { type: String, maxLength: 50, required: true, unique: false },
    usuario: { type: String, maxLength: 80, required: true, unique: true },
    clave: { type: String, maxLength: 50, required: true, unique: false }
});

module.exports = mongoose.model("Login", loginSchema);