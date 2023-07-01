import { operationsFunc } from "./operations"



const balanceAccount = JSON.parse(localStorage.getItem('Saldo'))
const obj = JSON.parse(localStorage.getItem('Usuarios'))
const wage = obj.salario
const monthValue = localStorage.getItem('Contas Junho')
const values = JSON.parse(monthValue)
const valueInPercent = values/wage*100
const fixValue = valueInPercent.toFixed(2)
let progressBar = document.querySelector('.circular-progress')
let valueContainer = document.querySelector('.value-container')
let text = valueContainer.querySelector('p')


let progressValue = 0 
let progressEndValue = 0
let speed = 10

export function scorePerson(){
  let progress = setInterval(()=>{
    progressValue++;
    if(balanceAccount<50 && parseInt(fixValue)>75){
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
    }else if(balanceAccount>50 && balanceAccount<=350  && parseInt(fixValue)>50 && parseInt(fixValue)<75){
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
    }else if(balanceAccount>350 && balanceAccount<=1000 && parseInt(fixValue)>25 && parseInt(fixValue)<50){
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
    }else if(balanceAccount>1000 && parseInt(fixValue)<24){
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

