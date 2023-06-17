import { operationsFunc } from "./operations"



const balanceAccount = parseFloat(document.querySelector('#balance-account').innerText.replace(/[R/$/s]/g,''))
let progressBar = document.querySelector('.circular-progress')
let valueContainer = document.querySelector('.value-container')
let text = valueContainer.querySelector('p')

let progressValue = 0 
let progressEndValue = 0
let speed = 10

export function scorePerson(){
  let progress = setInterval(()=>{
    progressValue++;
    if(balanceAccount<50 && operations()<74 && operations()>35){
    text.innerText = 'Seu score esta normal'
    progressBar.style.background = `conic-gradient(
    #fb8500 ${progressValue * 3.6}deg,
    #E2E1E3 ${progressValue*3.6}deg 
    )`;
    text.style.color = '#fb8500'
    progressEndValue = 25
    if(progressValue === progressEndValue){
      clearInterval(progress)
    }  
    }else if(balanceAccount<10 && operations()>74){
      text.innerText = 'Seu score esta ruim'
      progressBar.style.background = `conic-gradient(
        #d00000 ${progressValue * 3.6}deg,
        #E2E1E3 ${progressValue*3.6}deg 
       )`;
       text.style.color = '#d00000'
        progressEndValue = 10
        if(progressValue === progressEndValue){
          clearInterval(progress)
        } 
    }else if(balanceAccount<200 && balanceAccount>50 && operations()<=34 && operations()>25){
      text.innerText = 'Seu score esta bom'
      progressBar.style.background = `conic-gradient(
        #4d5bf9 ${progressValue * 3.6}deg,
        #E2E1E3 ${progressValue*3.6}deg 
       )`;
       text.style.color = '#4d5bf9'
        progressEndValue = 50
        if(progressValue === progressEndValue){
          clearInterval(progress)
        } 
    }else if(balanceAccount>200 && operations()<24){
      text.innerText = 'Seu score esta excelente'
      progressBar.style.background = `conic-gradient(
        #9EEF41 ${progressValue * 3.6}deg,
        #E2E1E3 ${progressValue*3.6}deg 
       )`;
       text.style.color = '#9EEF41'
        progressEndValue = 100
        if(progressValue === progressEndValue){
          clearInterval(progress)
        }
    }
  },speed)
}

scorePerson();
operationsFunc()