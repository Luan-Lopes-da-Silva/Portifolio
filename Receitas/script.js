function ver(){
let olho = window.document.getElementById("mostrar");
let senha = window.document.getElementById("senha")

if(senha.type == "password"){
senha.type ="text"    

}else{
senha.type = "password"    

}
}

function mostra(){
    let confirmSenha=window.document.getElementById("confirm")
    let outroolho = window.document.getElementById("confirmaolho")

if(confirmSenha.type =="password"){
confirmSenha.type= "text"    
}else{
confirmSenha.type= "password"    
}
}









let nome = window.document.getElementById("nome")
let labelNome=window.document.getElementById("labelNome")
let validnome = false

let usuario = window.document.getElementById("usuario")
let labelUsuario = window.document.getElementById("labelUsuario")
let validUsuario = false

let Senha =window.document.getElementById("senha")
let labelSenha = window.document.getElementById("labelSenha")
let validSenha = false

let confirmaSenha=window.document.getElementById("confirm")
let labelconfirmaSenha = window.document.getElementById("labelconfirmSenha")
let validconfirmaSenha = false

let msgError = window.document.getElementById('msgError')
let msgSucess = window.document.getElementById('msgSucess')

nome.addEventListener('keyup', () =>{
   if(nome.value.length <=2 ){
    labelNome.setAttribute('style', 'color:blue')  
    nome.setAttribute('style' , 'border-color:blue')
    validnome= false
   }
    else{
    labelNome.setAttribute('style', 'color: white')
    nome.setAttribute('style' , 'border-color:white')
    validnome= true
    }
    })

    usuario.addEventListener('keyup', () =>{
        if(usuario.value.length <=4 ){
        labelUsuario.setAttribute('style', 'color:blue')  
         usuario.setAttribute('style' , 'border-color:blue')
         validUsuario = false

        }
         else{
         labelUsuario.setAttribute('style', 'color: white')
         usuario.setAttribute('style' , 'border-color:white')
         validUsuario = true
         }
         })

         senha.addEventListener('keyup', () =>{
            if(senha.value.length <=5 ){
            labelSenha.setAttribute('style', 'color:blue')  
             senha.setAttribute('style' , 'border-color:blue')
             validSenha = false
            }
             else{
             labelSenha.setAttribute('style', 'color: white')
             senha.setAttribute('style' , 'border-color:white')
             validSenha = true
             }
             })

            confirmaSenha.addEventListener('keyup', () =>{
                if(senha.value != confirmaSenha.value){
                labelconfirmaSenha.setAttribute('style', 'color:blue')  
                 confirmaSenha.setAttribute('style' , 'border-color:blue')
                 validconfirmaSenha = false
                }
                 else{
                 labelconfirmaSenha.setAttribute('style', 'color: white')
                 confirmaSenha.setAttribute('style' , 'border-color:white')
                 validconfirmaSenha = true
                 }
                 })

                 function cadastrar(){
                  
                    
                    if(validnome && validUsuario && validSenha && validconfirmaSenha ){
                        msgSucess.setAttribute('style' , 'display:block')
                        msgSucess.innerHTML="<strong>Usuario cadastrado com sucesso!</strong>"
                        msgError.setAttribute('style','display:none')
                        msgError.innerHTML=''

                        setTimeout(()=>{
                        window.location.href="Login.html"

                        },4000);

                        
                    }else{
                        msgError.setAttribute('style' , 'display:block') 
                        msgError.innerHTML="<strong>Preencha todos os campos!</strong>"  
                        msgSucess.setAttribute('style','display:none')
                        msgSucess.innerHTML='' 
                    }
                        
                        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
                    
                        listaUser.push(
                        {
                         nomeCad:nome.value,
                         usuarioCad: usuario.value ,
                         senhaCad : senha.value
                         }    
                        )
                    
                        localStorage.setItem('listaUser', JSON.stringify(listaUser))
                        }
                    
                    