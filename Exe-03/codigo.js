
var n1 = Number.parseInt(window.prompt('Digite um numero: ')); //inteiro convertido

var n2 = Number.parseInt(window.prompt('Digite um segundo numero: ')); //inteiro convertido

var s = n1 + n2;

window.alert('Soma dos valores é: '+ s);
/*
 aqui criamos 2 variaveis com capacidade de receber numeros inteiros para criar uma nova variavel que ira realizar a soma de 2 numeros e apresentar os valores para o usuario em uma caixa de alerta.
 tambem usamos 2 caixas de texto para coletar os valores.
*/
var nome = window.prompt('Digite seu nome: ');

var idade = window.prompt('Digite sua idade: ');

var nota = window.prompt('Digite sua nota: ');

window.alert(`O aluno ${nome} com ${idade} anos tirou a nota ${nota}`);
/*
 aqui criamos 3 variaveis com capacidade para receber valor string.
 coletamos as informações digitadas pelo usuario em caixas de texto e com elas criamos um alerta que usando o ${} consegue colocar os valores das variaveis junto ao texto criando uma mensagem com as informações que a pessoa digitou.
*/
// (number + number)  para adição
// (string + string)  para concatenação