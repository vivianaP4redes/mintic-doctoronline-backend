const pacienteOperaciones = require("../operaciones/PacienteOperaciones");
const router = require("express").Router();


router.get("/", pacienteOperaciones.buscarPaciente);
router.get("/:id", pacienteOperaciones.buscarPaciente);
router.post("/", pacienteOperaciones.crearPaciente);
router.put("/:id", pacienteOperaciones.modificarPacientes);
router.delete("/:id", pacienteOperaciones.borrarPaciente);


module.exports = router;