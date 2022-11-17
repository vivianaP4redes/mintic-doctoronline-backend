//Importación
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require("./conexion");

//Configuración
const app = express();
const env = process.env;
const port = env.PORT || 3000;
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Arranque
app.listen(port, () => {
    console.log("API iniciado en puerto " + port);
});

//Rutas base
app.get('/', (req, res) => {
    res.send("API iniciado");
});

app.use("/pacientes", require("./rutas/PacienteRutas"));
app.use("/doctores", require("./rutas/DoctorRutas"));