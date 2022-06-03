
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () =>{
mario.classList.add('jump');
setTimeout(()=>{

mario.classList.remove('jump');
},500);
}

const loop = setInterval(()=>{
    const pipePosition= pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '');
    console.log(marioPosition)
    console.log(pipePosition)
    if(pipePosition <=54 && pipePosition > 0 && marioPosition <56){
    pipe.style.animation='none';
    pipe.style.left = `${pipePosition}px`
    
    mario.style.animation='none';
    mario.style.bottom = `${marioPosition}px`

    mario.src = './Imagens/pin-game-over-mario.png'
    mario.style.marginLeft= '8px'
    mario.style.marginBottom= '-21px'
    clearInterval(loop)
    }
}, 10)
document.addEventListener('keydown',jump);