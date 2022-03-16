const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    fones: ["559112345498", "5521988743124"],
    dependentes: [{
        nome: "Sara",
        parentesco: "Filha",
        dataNasc: "20/03/2011"
    }]
};

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "Filha",
    dataNasc: "04/01/2014"
});

//console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")
console.log(filhaMaisNova[0].nome)