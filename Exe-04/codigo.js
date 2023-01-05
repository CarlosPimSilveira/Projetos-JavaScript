
var nome = window.prompt('Qual é seu nome?');

document.write(`Seu nome tem <strong> ${nome.length} </strong> letras.`);

document.write(`Seu nome ${nome.toUpperCase()}.`);

document.write(`Seu nome ${nome.toLowerCase()}.`);
/*
 Aqui criamos uma variavel e usamos uma caixa de texto para que o usuario preencha e com essa informação conseguimos imprimir ela no codigo html e ainda conseguimos mostrar a quantidade de digitos tem e tambem deixar o que foi escrito pelo usuario em tamanho grande e tamanho pequeno.
*/
var salario = 10528.8
  
salario.toFixed(2);

salario.toFixed(2).replace('.', ',');

salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});