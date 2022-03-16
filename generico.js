function Cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf= cpf
    this.email= email
    this. saldo= saldo
    this.depositar = function(valor){
        this.saldo+= valor
    }
}

//const andre = new Cliente("Andre", "12345678911", "andre@gmail.com", 100)
//console.log(andre)

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this,nome, cpf, email, saldo)
    this.saldoPoup= saldoPoup
}

const ju = new ClientePoupanca("Ju", "45678945622", "ju@gmail.com", 100,200)

console.log(ju)
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
ju.depositarPoup(30)
console.log(ju.saldoPoup)