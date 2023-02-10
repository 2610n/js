

function relogio() {
    ponteiros = document.querySelector(".ponteiros");
    let dt = new Date();
    let horas = dt.getHours();
    let min = dt.getMinutes();
    let seg = dt.getSeconds();

    if (horas < 10) { horas = `0${horas}`; }
    if (min < 10) { min = `0${min}`; }
    if (seg < 10) { seg = `0${seg}`; }

    ponteiros.innerHTML = `${horas}:${min}:${seg}`;

}
var  h=0,m=0,s=0,tmp;

function start(){
    tmp=setInterval(crono,1000);
}
function pausar(){
    clearInterval(tmp);

}
function parar(){
    clearInterval(tmp);
    s=0;
    m=0;
    document.getElementById("cro").innerText=`00:00`;

}

function crono(){
    s++;
    if(s==60){
        m++;
        s=0;
    }
    
    
    document.getElementById("cro").innerText=`${m}:${s}`;
}

