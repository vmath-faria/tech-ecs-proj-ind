var database = require("../database/config")

function requisitar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function requisitar(): ",)
    var instrucaoSql = `
        select (select count(idUsuario) from usuario where qtAcertadas<3) as "AIGI",
            (select count(idUsuario) from usuario where qtAcertadas<7 and qtAcertadas>=3) as "NK",
                (select count(idUsuario) from usuario where qtAcertadas>=7) as "SN",
                    (select q.descricao from questao as q join resultadoquiz as r on r.fkQuestao=q.idQuestao
                            group by q.idQuestao order by SUM(r.acertou) desc limit 1) as "MQ"
                                from resultadoquiz join usuario on fkUsuario=idUsuario
                                    join questao on fkQuestao=idQuestao limit 1;    
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function inserir(acertouPrimeira, acertouSegunda, acertouTerceira, acertouQuarta, acertouQuinta, acertouSexta, acertouSetima, acertouOitava,
            primeira, segunda, terceira, quarta, quinta, sexta, setima, oitava, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserir():", acertouPrimeira, acertouSegunda, acertouTerceira, acertouQuarta, acertouQuinta, acertouSexta, acertouSetima, acertouOitava,
            primeira, segunda, terceira, quarta, quinta, sexta, setima, oitava, idUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO resultadoquiz (fkUsuario, acertou, fkQuestao) VALUES
            (${idUsuario}, ${acertouPrimeira}, ${primeira}),
                (${idUsuario}, ${acertouSegunda}, ${segunda}),
                    (${idUsuario}, ${acertouTerceira}, ${terceira}),
                        (${idUsuario}, ${acertouQuarta}, ${quarta}),
                            (${idUsuario}, ${acertouQuinta}, ${quinta}),
                                (${idUsuario}, ${acertouSexta}, ${sexta}),
                                    (${idUsuario}, ${acertouSetima}, ${setima}),
                                        (${idUsuario}, ${acertouOitava}, ${oitava});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(certas, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar():", certas, idUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        UPDATE usuario SET qtAcertadas=${certas} WHERE idUsuario=${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    requisitar,
    inserir,
    atualizar
};