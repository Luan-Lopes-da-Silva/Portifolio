function clicar(){
let enviar = window.document.getElementById('enviar');
let load = window.document.getElementById('load');
load.style.display='block'
enviar.style.display='none'
}

document.querySelector('#items')
.addEventListener("wheel" , event => {
if(event.deltaY > 0){
event.target.scrollBy(300, 0)    
}
else{
event.target.scrollBy(-300, 0) 
}
})