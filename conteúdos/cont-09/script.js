// gerador senhas fortes


// ----- constantes globais -----
const MAIUS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const MINUS = 'abcdefghijklmnopqrstuvwxyz';
const NUMS  = '0123456789';
const SIMS  = '!@#$%^&*()-_=+[]{};:,.<>?';

// ---- funções que retornam um caractere aleatório de cada tipo ----
function maiuscula() {
  return MAIUS[Math.floor(Math.random() * MAIUS.length)];
}
function minuscula() {
  return MINUS[Math.floor(Math.random() * MINUS.length)];
}
function numero() {
  return NUMS[Math.floor(Math.random() * NUMS.length)];
}
function simbolo() {
  return SIMS[Math.floor(Math.random() * SIMS.length)];
}

// ---- Fisher–Yates shuffle (embaralhar array in-place) ----
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---- função principal ----
function gerarSenhaforte(tamanho) {
  if (tamanho < 4) {
    throw new Error('Tamanho mínimo é 4 para garantir todas as categorias.');
  }

  // 1) garantir pelo menos 1 de cada categoria
  const obrigatorios = [
    maiuscula(),
    minuscula(),
    numero(),
    simbolo()
  ];

  // 2) preencher o restante com caracteres aleatórios de todas as categorias
  const todas = MAIUS + MINUS + NUMS + SIMS;
  const resto = [];
  for (let i = obrigatorios.length; i < tamanho; i++) {
    const idx = Math.floor(Math.random() * todas.length);
    resto.push(todas[idx]);
  }

  // 3) juntar e embaralhar para evitar posições previsíveis
  const senhaArr = obrigatorios.concat(resto);
  shuffleArray(senhaArr);

  // 4) retornar como string
  return senhaArr.join('');
}

// ---- testes ----
console.log(gerarSenhaforte(8));
console.log(gerarSenhaforte(12));
console.log(gerarSenhaforte(16));
