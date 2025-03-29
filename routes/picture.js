const express = require('express');
const router = express.router();

// Importando o middlware de upload (Multer)
const upload = require("../config/multer");

//  Controlador das imagens funções lógicas (get, post e etc...)
const PictureController = require('../controller/PictureController');

// Definindo a rota POST (Upload da Img e Armaz. no DB)
router.post("/", upload.single("file"), PictureController.create);

// Definindo a rota GET (Trazer todas as imagens do DB)
router.get("/", PictureController.findAll);

// Exportando para utilizar em outro arquivo
module.exports = router;