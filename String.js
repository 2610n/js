//cadeia de caracteres

let txt="luc4s";
let txt2="l3";
let txtArray="lucas,Adrielle,Bryan";
console.log(txt.charAt(2));// retornar a letra de acrodo com a posição iniciado com indice zero
console.log(txt.charAt(4));// retornar campo vazio
console.log(txt2.charCodeAt(1)); //codigo do unicode tabela ask
console.log(txt.indexOf('c')); //identifica o indice da letra ou numero dentro de uma palavra 
console.log(txt.indexOf('')); //identifica o indice da letra ou numero dentro de uma palavra  -1

console.log('Nome '.concat(txt).concat('!'));

console.log(txt.replace(3, "a")); //idice e depois a letra para subistituição

console.log(txtArray.split(',')) //definir o digito separador para trsformar o conjunto de palavraws em array

  let nome=txtArray.split(',');
      console.log(nome[1]);
 




