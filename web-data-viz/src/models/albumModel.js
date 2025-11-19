var database = require("../database/config");

function buscarAlbumPorUsuario(albumId) {

  var instrucaoSql = `SELECT * FROM album WHERE idAlbum = ${albumId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarAlbumPorUsuario
}
