const express = require("express");
const cors = require("cors");
const { dbConnecion } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 8080; // Establecer un valor predeterminado para PORT

    this.dbConnecion();
    
    this.middleware();
    this.router();
  }

  async dbConnecion(){
    await dbConnecion();
  }

  middleware() {
    // Configuración de CORS
    this.app.use(cors({
      origin: 'https://fanciful-hamster-2718f7.netlify.app/', // Reemplaza esto con el origen de tu frontend
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }));

    // Middleware para parsear el cuerpo de las solicitudes
    this.app.use(express.json());
  }

  router() {
    this.app.use("/user", require("../routes/usuarios.routes"));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Servidor corriendo en el puerto`, this.PORT);
    });
  }
}

module.exports = Server;

