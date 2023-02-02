let mochila=[30,10,5,11,6];




 mochila.push('lil'); //adiciona um elemento na ultima posição do array
 mochila.unshift('ola'); //adiciona um elemento na primeira posição
 mochila.pop(); //apaga o ultimo elemento do array

 delete mochila[0]; //comando que deleta valores dentro do array  passando como parametro o valor do indice


 for(let x =0;x<mochila.length;x++){
    console.log(mochila[x]);
}
console.log(typeof mochila);
