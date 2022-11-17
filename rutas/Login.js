const loginOperaciones = require("../operaciones/LoginOperaciones");
const router = require("express").Router();


router.post("/", loginOperaciones.crearLogin);
router.post("/iniciarSesion", loginOperaciones.iniciarSesion);

module.exports = router;