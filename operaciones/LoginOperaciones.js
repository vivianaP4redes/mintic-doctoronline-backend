const LoginModelo = require("../modelos/LoginModelo");
const LoginOperaciones = {}

LoginOperaciones.crearLogin = async (req, res)=>{
    try {
        const objeto = req.body;
        const login = new LoginModelo(objeto);
        const loginGuardado = await login.save();
        res.status(201).send(loginGuardado);
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

LoginOperaciones.iniciarSesion = async (req, res)=>{
    try {
        const objeto = req.body;
        const loginModel = await LoginModelo.findOne({usuario: objeto.usuario, clave:objeto.clave});
        
        if (loginModel != null){
            res.status(200).send(loginModel);
        } else {
            res.status(404).send({});
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

module.exports = LoginOperaciones;