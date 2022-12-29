
var nome = window.prompt('Qual é seu nome?');
var salario = 10528.8

document.write(`Seu nome tem <strong> ${nome.length} </strong> letras.`);

document.write(`Seu nome ${nome.toUpperCase()}.`);

document.write(`Seu nome ${nome.toLowerCase()}.`);

salario.toFixed(2);

salario.toFixed(2).replace('.', ',');

salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});