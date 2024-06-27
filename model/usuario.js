const { Schema, model } = require("mongoose");




const usuarioSchema = Schema({
    usuario: {
        type: String,
        require: [true, 'El usuario es obligatorio']
    },
    nombre: {
        type: String,
        require: [true, 'El usuario es obligatorio']
    },
    apellido: {
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    passsword: {
        type: String,
        require: [true, 'El apellido es obligatorio']
    }
    
})



module.exports = model("Usuario", usuarioSchema)