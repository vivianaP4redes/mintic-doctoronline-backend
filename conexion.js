const mongoose = require("mongoose");

const username = "admin";
const password = "admin";
const database = "TudoctoronlineBD";
const URI ="mongodb://"+username+":"+password+"@ac-e4gtx4a-shard-00-00.vi5lgcg.mongodb.net:27017,ac-e4gtx4a-shard-00-01.vi5lgcg.mongodb.net:27017,ac-e4gtx4a-shard-00-02.vi5lgcg.mongodb.net:27017/"+database+"?ssl=true&replicaSet=atlas-2081l4-shard-0&authSource=admin&retryWrites=true&w=majority"


const conectar = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Atlas está en linea");
    } catch (error) {
        console.log("Error de conexión. "+error);
    }
    /*
    mongoose.connect(URI)
        .then(()=>{ console.log("Atlas está en linea"); })
        .catch(()=>{ console.log("Error de conexión. "+error); })
    */
}
conectar();

module.exports = mongoose;