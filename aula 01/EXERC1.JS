document.write("<h1 style='color : red'> Aula 01 - Exercício 1 </h1>");

document.body.style.backgroundColor = 'red';

var numero = prompt("Digite um número qualquer: ");

document.write("<p>O número digitado foi " + numero + "</p>");

var quadrado = Number(numero) * Number(numero);
document.write("<p>O quadrado do número digitado é " + quadrado + "</p>");

var cubo = Number(numero) * Number(numero) * Number(numero);
document.write("<p>O cubo do número digitado é " + cubo + "</p>");
