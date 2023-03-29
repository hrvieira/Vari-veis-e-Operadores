const valorEtanol = 4.87;
const valorGasolina = 5.75;
const gastoMedioPorKM = 10;
const distanciaDaViagemKM = 100;

const litrosConsumidos = distanciaDaViagemKM / gastoMedioPorKM;

const tipoCombustivel = 'Etanol';

if (tipoCombustivel === 'Etanol') {
  const valorViagem = litrosConsumidos * valorEtanol;
  console.log(valorViagem);
} 
else {
  const valorViagem = litrosConsumidos * valorGasolina;
  console.log(valorViagem);
}