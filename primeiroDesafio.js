const precoCombustivel = 5.79;
//const mediaGastoPorKM = (precoCombustivel / 10);
const mediaGastoPorKM = 10;
const distanciaDaViagemKM = 100;

//const valorViagem = (mediaGastoPorKM * distanciaDaViagem)
const valorViagem = (precoCombustivel / mediaGastoPorKM) * distanciaDaViagemKM;

console.log(valorViagem);


// no vídeo em questão foi feito de outra maneira