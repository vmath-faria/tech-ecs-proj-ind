var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função requisitar de quizController.js
router.post("/requisitar", function (res) {
    quizController.requisitar(res);
})

router.post("/inserir", function (req, res) {
    quizController.inserir(req, res);
});

module.exports = router;