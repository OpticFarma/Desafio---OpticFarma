var dashboardModel = require("../models/dashboardModel");

function dadosEmpresa(req, res) {
    var telefoneEmpresa = req.body.telefoneEmpresaServer;
    var cepEmpresa = req.body.cepEmpresaServer;
    var numEmpresa = req.body.numEmpresaServer;
    var emailEmpresa = req.body.emailEmpresaServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    // Faça as validações dos valores
    if (telefoneEmpresa == undefined) {
        res.status(400).send("O telefone da empresa está undefined!");
    } else if (cepEmpresa == undefined) {
        res.status(400).send("O cep está undefined!");
    } else if (numEmpresa == undefined) {
        res.status(400).send("Seu número está undefined!");
    } else if (emailEmpresa == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dashboardModel.dadosEmpresa(telefoneEmpresa, cepEmpresa, numEmpresa, emailEmpresa, fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



module.exports = {
    dadosEmpresa
}