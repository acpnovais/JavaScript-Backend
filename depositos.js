const cliente = {
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
    saldo: 100,
    depositar: function(valor)
    {
        this.saldo += valor
    }
};
//usando a função depositar
// console.log(cliente.saldo)
// cliente.depositar(30)
// console.log(cliente.saldo)

//emitindo relatorio do objeto
// let relatorio = "";
// for (let info in cliente){
//     if(typeof cliente[info]=== "object" || typeof cliente[info] === "function"){
//         continue
//     } else{
//         relatorio += `
//         ${info} ==> ${cliente[info]}
//         `
//     }
// }
// console.log(relatorio)

//filtrando o relatorio
// function oferecerSeguro(obj){
//     const propsClientes = Object.keys(obj);
//     if (propsClientes.includes("dependentes")){
//         console.log(`Oferta de seguro de vida para ${obj.nome}`)
//     } else{
//         console.log("Cliente sem dependentes")
//     }
// }
// oferecerSeguro(cliente)

//lista de dependentes
