function subistituir(){
    let txt=document.querySelector(".txt").value;
    let sub=document.querySelector("#sub").value;
    let por=document.querySelector("#por").value;
    ntxt=txt.replaceAll(sub,por);
    
    document.querySelector("#nt").innerHTML=ntxt;
    
}