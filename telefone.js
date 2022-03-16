const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678911",
    email: "andre@gmail.com",
    fones: ["5561999999999", "5562999999999"]
}

//cliente.fones.forEach(fone => console.log(fone))
// adicionando nova classe
cliente.dependentes = {
    nome:"Sara",
    parentesco: "filha",
    dataNascimento: "20/03/2011"
}

//console.log(cliente)

//alterando dados da nova classe
cliente.dependentes.nome = "Sara Silva"
console.log(cliente)

//adicionando itens
cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "Filha",
    dataNasc: "04/01/2014"
});
console.log(cliente);