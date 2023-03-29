const precoEtiqueta = 10;

const formaDePagamento = 4;

/*
if (formaDePagamento === 1) {
  const valorFinal = (precoEtiqueta * 0.90);
  console.log(valorFinal);
} 
else if (formaDePagamento === 2) {
  const valorFinal = (precoEtiqueta * 0.85);
  console.log(valorFinal);
}
else if (formaDePagamento === 3) {
  const valorFinal = (precoEtiqueta);
  console.log(valorFinal);
} else {
  console.log(precoEtiqueta * 1.1);
}

Aqui onde diminui um pouco a escrita, mas funcionando. */

if (formaDePagamento === 1) {
  console.log(precoEtiqueta * 0.90);
} 
else if (formaDePagamento === 2) {
  console.log(precoEtiqueta * 0.85);
}
else if (formaDePagamento === 3) {
  console.log(precoEtiqueta);
} else {
  console.log(precoEtiqueta * 1.1);
}