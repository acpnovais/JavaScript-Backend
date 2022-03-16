const cliente = [
{
    nome: "André",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
    fones: ["559112345498", "5521988743124"],
    dependentes: [{
        nome: "Sara",
        parentesco: "Filha",
        dataNasc: "20/03/2011"},
        {
        nome: "Samia Maria",
        parentesco: "Filha",
        dataNasc: "04/01/2014"
        }],
    },
    {
        nome: "Juliana",
        cpf: "34567891023",
        dependentes: [{
            nome: "Sophia",
            parentesco: "Filha",
            dataNasc: "30/08/2020"
        }],
    }
]

//emitindo relatorio de dependentes
const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]
console.table(listaDependentes)