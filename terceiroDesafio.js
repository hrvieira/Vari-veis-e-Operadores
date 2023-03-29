const nota1 = 8;
const nota2 = 9;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

/*
const nota = (8 + 9 + 8);

const media = nota / 3;
*/

if (media < 5) {
  console.log(`Sua é ${media.toFixed(1)}, você está reprovado!`);
} else if (media >= 5 && media <= 7) {
  console.log(`Sua é ${media.toFixed(1)}, você está de recuperação!`);
} else if (media > 7) {
  console.log(`Sua é ${media.toFixed(1)}, você passou de semestre!`)
}