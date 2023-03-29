const altura = 1.69;
const peso = 83;

const imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log(`Seu IMC é ${imc.toFixed(1)}, você está abaixo do peso.`);
} else if(imc >= 18.5 && imc < 25) {
  console.log(`Seu IMC é ${imc.toFixed(1)}, você está com peso normal.`);
} else if(imc >= 25 && imc < 30) {
  console.log(`Seu IMC é ${imc.toFixed(1)}, você está acima do peso.`);
} else if(imc >= 30 && imc <= 40) {
  console.log(`Seu IMC é ${imc.toFixed(1)}, você está obeso.`);
} else {
  console.log(`Seu IMC é ${imc.toFixed(1)}, você está com obesidade grave.`);
}