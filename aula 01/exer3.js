var valor;
var taxa;
var tempo;
var parcela;

valor = prompt ("digite o valor da prestaçao:");
taxa = prompt ("digite a taxa de juros:");
tempo = prompt ("digite o tempo de atraso:");

parcela = valor + (valor *(taxa * taxa / 100) * tempo);

alert ("valor da parcela: " + parcela);