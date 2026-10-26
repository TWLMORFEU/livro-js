// Variáveis compostas


// Variáveis simples, só conseguem armazenar um valor por vez

// Variáveis compostas, devem ser capazes de armazenar valores em uma mesma estrutura


let num = [5, 8, 4]
//         0  1  2       Sim eu ja aprendi isso, estou relembrando 

num[3] = 6

console.log(num[2])

num.push(8) // adiciona a ultima colocacao
num.sort()  // Coloca os valores dos indices em ordem crescente
num.length  // Quantidade de elementos/ indices que tem o array




let numss = [2, 4, 6, 9, 5,  3, 1]


// inicio 0,      vai repetir ate completar o tamanho total
for (let pos=0; pos<numss.length;pos++) {
    console.log(numss[pos])
};

for(let pos in numss) {    // modo simplificado que so funciona para arrays e objetos
    console.log(numss[pos])
}