const doctorOperaciones = require("../operaciones/DoctorOperaciones");
const router = require("express").Router();


router.get("/", doctorOperaciones.buscarDoctores);
router.get("/:id", doctorOperaciones.buscarDoctor);
router.post("/", doctorOperaciones.crearDoctor);
router.put("/:id", doctorOperaciones.modificarDoctores);
router.delete("/:id", doctorOperaciones.borrarDoctor);

module.exports = router;