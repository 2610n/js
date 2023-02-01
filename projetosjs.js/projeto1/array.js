function gerarArray(){
    let mochila=(document.getElementById('idarray').value).split(',');
    let txt=document.getElementById('p');
    
    for(let x;x<=3;x++){
        document.write(txt.innerHTML='Nome '+mochila[x]);

    }
        

}

