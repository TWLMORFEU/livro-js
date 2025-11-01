function gerarNumeroTelefone() {

   const numeros = '0123456789'

   let num = '';

   for(let i = 0; i < 4; i++) {
      const geradorAleatorio = Math.floor(Math.random() * numeros.length);

      num += numeros[geradorAleatorio]
    }

    return num 
};

const num1 = gerarNumeroTelefone();
const num2 = gerarNumeroTelefone();

console.log(`(31) ${num1}-${num2}`)