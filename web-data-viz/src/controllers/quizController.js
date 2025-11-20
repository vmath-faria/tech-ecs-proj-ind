var usuarioModel = require("../models/usuarioModel");
var quizModel = require("../models/quizModel");

function requisitar(req, res) {
    var primeira = req.body.usuarioAcertou1Server;
    var segunda = req.body.usuarioAcertou2Server;
    var terceira = req.body.usuarioAcertou3Server;
    var quarta = req.body.usuarioAcertou4Server;
    var quinta = req.body.usuarioAcertou5Server;
    var sexta = req.body.usuarioAcertou6Server;
    var setima = req.body.usuarioAcertou7Server;
    var oitava = req.body.usuarioAcertou8Server;
    var certas = req.body.certasServer;
    var idUsuario = req.body.idUsuarioServer;

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
    } else if (certas == undefined) {
        res.status(400).send("A soma das questões certas está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else {

        usuarioModel.autenticar(primeira, segunda, terceira, quarta, quinta, sexta, setima, oitava, certas, idUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);


                        albumModel.buscarAlbumPorUsuario(resultadoAutenticar[0].albumId)
                            .then((resultadoalbum) => {
                                if (resultadoalbum.length > 0) {
                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        senha: resultadoAutenticar[0].senha,
                                        fkAlbum: resultadoalbum
                                    });
                                } else {
                                    res.status(204).json({ album: [] });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function inserir(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var primeira = req.body.usuarioAcertou1Server;
    var segunda = req.body.usuarioAcertou2Server;
    var terceira = req.body.usuarioAcertou3Server;
    var quarta = req.body.usuarioAcertou4Server;
    var quinta = req.body.usuarioAcertou5Server;
    var sexta = req.body.usuarioAcertou6Server;
    var setima = req.body.usuarioAcertou7Server;
    var oitava = req.body.usuarioAcertou8Server;
    var certas = req.body.certasServer;
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
    } else if (certas == undefined) {
        res.status(400).send("A soma das questões certas está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.inserir(idUsuario, primeira, segunda, terceira, quarta, quinta, sexta, setima, oitava, certas)
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
    inserir
}