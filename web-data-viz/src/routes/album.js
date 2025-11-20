var express = require("express");
var router = express.Router();

var albumController = require("../controllers/albumController");

router.get("/buscarAlbumPorUsuario", function (req, res) {
  albumController.buscarAlbumPorUsuario(req, res);
});

module.exports = router;