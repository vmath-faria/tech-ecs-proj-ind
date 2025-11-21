var database = require("../database/config")

function requisitar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function requisitar(): ", email, senha)
    var instrucaoSql = `
        select (select count(fkUsuario) from resultadoquiz where qtCertas<3) as "Am I Going Insane",
            (select count(fkUsuario) from resultadoquiz where qtCertas<7 and qtCertas>=3) as "Neon Knight",
                (select count(fkUsuario) from resultadoquiz where qtCertas>=7) as "Supernaut" from resultadoquiz
                    limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function inserir(idUsuario, primeira, segunda, terceira, quarta, quinta, sexta, setima, oitava, certas) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserir():", idUsuario, primeira, segunda, terceira, quarta, quinta, sexta, setima, oitava, certas);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO resultadoquiz (fkUsuario, primeira, segunda, terceira, quarta, quinta, sexta, setima, oitava, qtCertas) VALUES ('${idUsuario}', '${primeira}', '${segunda}', '${terceira}', '${quarta}', '${quinta}', '${sexta}', '${setima}', '${oitava}', '${certas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    requisitar,
    inserir
};