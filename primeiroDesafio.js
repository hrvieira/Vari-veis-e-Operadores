const precoCombustivel = 5.79;
//const mediaGastoPorKM = (precoCombustivel / 10);
const mediaGastoPorKM = 12;
const distanciaDaViagemKM = 1580;

//const valorViagem = (mediaGastoPorKM * distanciaDaViagem)
const valorViagem = (precoCombustivel / mediaGastoPorKM) * distanciaDaViagemKM;

console.log(valorViagem.toFixed(2));


// no vídeo em questão foi feito de outra maneira