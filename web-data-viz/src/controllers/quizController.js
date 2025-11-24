var quizModel = require("../models/quizModel");

function requisitar(res) {

        quizModel.requisitar()
            .then(
                function (resultadoRequisitar) {
                    console.log(`\nResultados encontrados: ${resultadoRequisitar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoRequisitar)}`); // transforma JSON em String

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o Select! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

function inserir(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertouPrimeira = req.body.usuarioAcertou1Server;
    var acertouSegunda = req.body.usuarioAcertou2Server;
    var acertouTerceira = req.body.usuarioAcertou3Server;
    var acertouQuarta = req.body.usuarioAcertou4Server;
    var acertouQuinta = req.body.usuarioAcertou5Server;
    var acertouSexta = req.body.usuarioAcertou6Server;
    var acertouSetima = req.body.usuarioAcertou7Server;
    var acertouOitava = req.body.usuarioAcertou8Server;
    var primeira = req.body.idPergunta1Server;
    var segunda = req.body.idPergunta2Server;
    var terceira = req.body.idPergunta3Server;
    var quarta = req.body.idPergunta4Server;
    var quinta = req.body.idPergunta5Server;
    var sexta = req.body.idPergunta6Server;
    var setima = req.body.idPergunta7Server;
    var oitava = req.body.idPergunta8Server;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (primeira == undefined) {
        res.status(400).send("A primeira questão está undefined!");
    } else if (segunda == undefined) {
        res.status(400).send("A segunda questão está undefined!");
    } else if (terceira == undefined) {
        res.status(400).send("A terceira questão está undefined!");
    } else if (quarta == undefined) {
        res.status(400).send("A quarta questão está undefined!");
    } else if (quinta == undefined) {
        res.status(400).send("A quinta questão está undefined!");
    } else if (sexta == undefined) {
        res.status(400).send("A sexta questão está undefined!");
    } else if (setima == undefined) {
        res.status(400).send("A sétima questão está undefined!");
    } else if (oitava == undefined) {
        res.status(400).send("A oitava questão está undefined!");
    } else if (acertouPrimeira == undefined) {
        res.status(400).send("A questão 1 está undefined!");
    } else if (acertouSegunda == undefined) {
        res.status(400).send("A questão 2 está undefined!");
    } else if (acertouTerceira == undefined) {
        res.status(400).send("A questão 3 está undefined!");
    } else if (acertouQuarta == undefined) {
        res.status(400).send("A questão 4 está undefined!");
    } else if (acertouQuinta == undefined) {
        res.status(400).send("A questão 5 está undefined!");
    } else if (acertouSexta == undefined) {
        res.status(400).send("A questão 6 está undefined!");
    } else if (acertouSetima == undefined) {
        res.status(400).send("A questão 7 está undefined!");
    } else if (acertouOitava == undefined) {
        res.status(400).send("A questão 8 está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.inserir(acertouPrimeira, acertouSegunda, acertouTerceira, acertouQuarta, acertouQuinta, acertouSexta, acertouSetima, acertouOitava,
            primeira, segunda, terceira, quarta, quinta, sexta, setima, oitava, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o insert! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var certas = req.body.certasServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (certas == undefined) {
        res.status(400).send("A soma das questões certas está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.atualizar(certas, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o insert! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    requisitar,
    inserir,
    atualizar
}