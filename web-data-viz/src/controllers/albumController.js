var albumModel = require("../models/albumModel");

function buscarAlbumPorUsuario(req, res) {
  var albumId = req.body.albumId;

  albumModel.buscarAlbumPorUsuario(albumId).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar o álbum: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  buscarAlbumPorUsuario
}