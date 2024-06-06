const mongoose = require("mongoose")


const dbConnecion = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_CONNECT);
        console.log("Conexion exitosa!")
    } catch (error) {
        console.log(error)
        throw new Error("Errror al conectar a la base de datos")
    }    
}

module.exports = {
    dbConnecion
}