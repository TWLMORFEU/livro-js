function gerarSenha(tamanho) {
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghjklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()-_=+[]{};:.<>?';


    const tudoJunto = letrasMaiusculas + letrasMinusculas + numeros + simbolos;

    let senha = '';


    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * tudoJunto.length);
        senha += tudoJunto[indiceAleatorio];
        // Adicione à variável senha o caractere aleatório escolhido de tudoJunto.
    }

    return senha;
 
};
 

console.log('Senha de 19 caracteres', gerarSenha(19));