let nome = document.getElementById('nome')
let labelNome = document.getElementById('labelNome')
let validnome = false

let usuario = document.getElementById('usuario')
let labelUsuario = document.getElementById('labelUsuario')
let validusuario = false

let senha = document.getElementById('senha')
let labelSenha = document.getElementById('labelSenha')
let validsenha = false

let confirmaSenha = document.getElementById('confirm')
let labelConfirmaSenha = document.getElementById('labelconfirmSenha')
let validconfirmasenha = false

let msgError = document.getElementById('msgError')
let msgSucess = document.getElementById('msgSucess')


let olho = document.getElementById('mostrar')
let confirmaOlho = document.getElementById('confirmaolho')

let formulario = document.getElementById('cadastro')
let popup = document.getElementById('popup')

nome.addEventListener('keyup', () =>{
    if(nome.value.length <=2){
    labelNome.setAttribute('style' , 'color:blue')
    nome.setAttribute('style','border-color:blue')
    validnome= false
    }
    else{
    labelNome.setAttribute('style' , 'color:green')
    nome.setAttribute('style','border-color:green')
    validnome= true
    }
     })

     usuario.addEventListener('keyup', () =>{
        if(usuario.value.length <=4){
        labelUsuario.setAttribute('style' , 'color:blue')
        usuario.setAttribute('style','border-color:blue')
        validusuario= false
        }
        else{
        labelUsuario.setAttribute('style' , 'color:green')
        usuario.setAttribute('style','border-color:green')
        validusuario= true
        }
         })

         senha.addEventListener('keyup', () =>{
            if(senha.value.length <=5){
            labelSenha.setAttribute('style' , 'color:blue')
            senha.setAttribute('style','border-color:blue')
            validsenha= false
            }
            else{
            labelSenha.setAttribute('style' , 'color:green')
            senha.setAttribute('style','border-color:green')
            validsenha= true
            }
             })

             confirmaSenha.addEventListener('keyup', () =>{
                if(confirmaSenha.value != senha.value){
                labelConfirmaSenha.setAttribute('style' , 'color:blue')
                confirmaSenha.setAttribute('style','border-color:blue')
                validconfirmasenha= false
                }
                else{
                labelConfirmaSenha.setAttribute('style' , 'color:green')
                confirmaSenha.setAttribute('style','border-color:green')
                validconfirmasenha= true
                }
                 })
                

                 function ver(){
                    if(senha.type =="password"){
                        senha.type ="text"
                    }
                    else{
                        senha.type ="password"
                    }
                }


                 function mostrar(){
                    if(confirmaSenha.type =="password"){
                        confirmaSenha.type ="text"
                    }
                    else{
                        confirmaSenha.type ="password"
                    }
                 }

                function cadastrar(){

                 if(validnome && validusuario && validsenha && validconfirmasenha ){
                    msgSucess.setAttribute('style' , 'display:block')
                    msgSucess.innerHTML = "<strong>Cadastro feito com sucesso !!!</strong>"
                    msgError.setAttribute('style' , 'display:none')
                    msgError.innerHTML = ""
                    formulario.classList.add('hide')
                    document.body.style.overflow= 'hidden'
                    popup.classList.add('subir')
                   }
                 else{
                    msgError.setAttribute('style' , 'display:block')
                    msgError.innerHTML = "<strong>Preencha todos os campos !!!</strong>"
                    msgSucess.setAttribute('style' , 'display:none')
                    msgSucess.innerHTML = ""
                    formulario.classList.add('validate-error')    
                    
                   
                   
                }
                }