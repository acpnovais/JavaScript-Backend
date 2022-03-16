class Cliente{
    constructor(nome, email, cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}
//const andre = new Cliente("André", "andre@gmail.com", "88855544412", 100)
//console.log(andre)
class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const andre = new ClientePoupanca("André", "andre@gmail.com", "88855544412", 100, 30)
console.log(andre)

andre.depositarPoupanca(10)
console.log(andre.saldoPoupanca)