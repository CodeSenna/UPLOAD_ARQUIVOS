// Importa para interagir com o banco de dados
const mongoose = require("mongoose");

//  Carregar váriaveis de ambiente do arquivo .env
require("dotenv").config();

// Configurar o mongoose para permitir consulta (Restritas)
mongoose.set("strictQuery", true);

// Função para conectar ao DB
async function main () {
    await mongoose.connect(
        // Link do DB
    );

    // Exibe a mensagem ao úsuario que realizou a conexão
    console.log("Conectou ao banco de dados!");
}

// Caso ocorra erro monstra uma mensagem
main().catch((err) => console.log(err));

// Exportar a função para utilizar em outro arquivo
module.exports = main;