const nomes = ['ana', 'pedro', 'bianca']
const notas = [7, 4.5, 7.5]

const reprovados = nomes.filter((aluno, indice) => notas[indice]<5)
console.log(`reprovados: ${reprovados}`)
