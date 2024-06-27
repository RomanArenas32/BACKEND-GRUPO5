const {Router} = require('express');
const { autenticarUsuario, obtenerUsuarios, registrarUsuario } = require('../controllers/usuarios.controllers');


const routes = Router();


routes.post('/', autenticarUsuario)
routes.post('/register', registrarUsuario);
routes.get('/', obtenerUsuarios)




module.exports = routes;