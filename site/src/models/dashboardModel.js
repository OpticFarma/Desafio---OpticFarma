var database = require("../database/config")

function dadosEmpresa(telefoneEmpresa, cepEmpresa, numEmpresa, emailEmpresa, fkEmpresa) {
    var instrucao1 = `
        UPDATE dadosEmpresa SET telefone_empresa = '${telefoneEmpresa}', email_empresa = '${emailEmpresa}' WHERE id_empresa = ${fkEmpresa};
    `
    console.log("Executando a instrução SQL: \n" + instrucao1);
    database.executar(instrucao1);

    var instrucao2 = `
        INSERT INTO enderecoEmpresa (cep_empresa,numero_empresa,fk_empresa) 
        VALUES ('${cepEmpresa}', '${numEmpresa}', '${fkEmpresa}')
    `
    console.log("Executando a instrução SQL: \n" + instrucao1);
    return database.executar(instrucao2);
}

module.exports = {
    dadosEmpresa
};