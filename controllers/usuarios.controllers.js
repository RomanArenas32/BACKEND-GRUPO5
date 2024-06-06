const Usuario = require('../model/usuario');

const autenticarUsuario = async(req, res)=>{

    const {usuario, password} = req.body;
    const user = new Usuario({usuario, password});

    res.json({
        mensaje: "Autenticando usuario"
    });

    await user.save();
}

const obtenerUsuarios = async(req, res)=>{
    const usuarios = await Usuario.find();

    res.json({
        usuarios
    })

}



module.exports = {
    autenticarUsuario,
    obtenerUsuarios
}