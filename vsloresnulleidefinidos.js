
//use o null mais do ue o undefine isso é padrão
//evite atribuir o undefined
//se voce quer zerar uma referencia vc ponhe nulo como valor 

let jogo;
console.log(jogo)// vai retornar undefined(não tem nada atribuido e nem foi inicializado)

let valor=null; //não tem valor nenhum não esta apontado nenhum endereço ausencia de valor;

console.log(valor);

//Atribuição por referencia passa a potar para o mesmo lugar 
//Ex
const produto={nome:'Arroz'}
const a=produto;
console.log(a.nome);