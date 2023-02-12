horas = () => {

    let dt = new Date();
    let hora = dt.getHours();
    let minuto = dt.getMinutes();
    let segundo = dt.getSeconds();
    let dia = dt.getDay();
    let diaSemana = ["Domingo", "segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
    let mes=dt.getMonth();
    let ano=dt.getFullYear();
       
        
    if (hora < 10) { hora = `0${hora}` }
    if (minuto < 10) { minuto = `0${minuto}` }
    if (segundo < 10) { segundo = `0${segundo}` }

    return `${hora}:${minuto}:${segundo} Dia da semana : ${diaSemana[dia]}`;

}

console.log(horas());

jogo = (n1) => n1 % 2 ? "IMPA" : `PAR`;

console.log(jogo(2));

potencia = (n1) => {
    return Math.pow(n1, 2);
}

console.log(potencia(2))

const [a,b,c]=[2,3,1];

console.log();