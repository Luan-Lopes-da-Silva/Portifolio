const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const button = document.querySelector('#btn')
 



export default function checkMsg(){

function checkInputs(ev){
ev.preventDefault() 
if(email.value.length>8 && message.value.length>1 && name.value.length>3){
  alert('Mensagem enviada com sucesso. Aguarde que em pouco tempo algum de nossos representantes ira entrar em contato.')
}else{
  alert('Preencha todos os campos')
}  
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

name.addEventListener('keyup',function(){
  if(name.value.length<3){
  name.style.borderColor = 'rgba(246, 67, 72, 1)'  
  }else{
  name.style.borderColor = 'rgba(128, 237, 153,1)'   
  }  
  })


email.addEventListener('keyup',function(){
  if(validateEmail(email.value)){
  email.style.borderColor = 'rgba(128, 237, 153,1)'   
  }else{
  email.style.borderColor = 'rgba(246, 67, 72, 1)'  
  }  
  })

  message.addEventListener('keyup',function(){
    if(message.value.length>1){
    message.style.borderColor = 'rgba(128, 237, 153,1)'   
    }else{
    message.style.borderColor = 'rgba(246, 67, 72, 1)'  
    }  
    })

button.addEventListener('click',checkInputs)
}

