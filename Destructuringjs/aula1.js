//destructing é uma forma de desetrturar um determinado bloco seja um objeto , função ou até array é uma forma de 
//estrair um dado da estrutura

const pessoa =  {
    nome:"lucas",
    idade:12,
    edereco: {
       logradouro:"Recanto",
       numero:12
    }

}

const {nome,idade} =pessoa//esta estrutura e operador detructing
console.log(nome,idade);

const {edereco:{logradouro:n, numero:num}}=pessoa; // forma de determinar uma variável
console.log(n,num);


