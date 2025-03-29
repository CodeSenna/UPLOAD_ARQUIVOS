// Importando para uploads de arquivos
const multer = require("multer")

// Importando para manipulação de caminhos de arquivos (Windows)
const path = require("path")

//  Configura o armazenamento dos arquivos com Multer
const storange = multer.diskStorage({
    // Função para definir o diretório de arquivos (Localização)
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    // Função para definir o nome dos arquivos (Nome único)
    filename: function (req, file, cb) {
        //  Define o nome do arquivo com a data e Entensão originl do arquivo
        cb(null, Date.now() + path.extname(file.originalmente));
    },
});

// Configurando o middleware de Upload
const upload = multer({ storage });

// Exporta para utlizar em outros arquivos
module.exports = upload;