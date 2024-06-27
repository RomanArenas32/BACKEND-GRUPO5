const Usuario = require("../model/usuario");

const autenticarUsuario = async (req, res) => {
  const { usuario, password } = req.body;
  const user = new Usuario({ usuario, password });

  res.json({
    mensaje: "Autenticando usuario",
  });

  await user.save();
};

const registrarUsuario = async (req, res) => {
  const { usuario, password, nombre, apellido } = req.body;
  const user = new Usuario({ usuario, password, nombre, apellido });

  try {
    res.status(200).json({
      mensaje: "Usuario registrado",
    });
  } catch (error) {
    return res.status(500).json({
        mensaje: "Error al registrar el usuario"
    })
  }
  await user.save();
};

const obtenerUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();

  res.json({
    usuarios,
  });
};

module.exports = {
  autenticarUsuario,
  obtenerUsuarios,
  registrarUsuario,
};
