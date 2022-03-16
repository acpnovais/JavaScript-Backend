const notas = [10, 6.5, 8, 7.5]
let somaDasNotas = 0
// for (let i = 0; i < notas.length; i++) {
//     somaDasNotas += notas[i]    
// }
// notas.forEach(nota =>{
//     somaDasNotas+= nota
// })
// let media = somaDasNotas/notas.length
// console.log(media)

const notasAtualizadas = notas.map(nota =>nota==10 ? nota: nota+1)
console.log(notasAtualizadas)