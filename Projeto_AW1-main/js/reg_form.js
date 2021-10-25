//função ativada ao apertar o botão "enviar"
    function validar_form2(){

         //variáveis sendo associadas aos inputs da página   
        var nome = document.getElementById("nome");
        var email = document.getElementById("email");
        var nome_usuario = document.getElementById("nome_usuario");
        var telefone = document.getElementById("telefone");
        var idade = document.getElementById("idade");
        var tipo = document.getElementById("tipo");
        var tipo_afi = document.getElementById("tipo_afi");
    
    
             // verificar se o nome está vazio
             if (nome.value == "") {
                alert("Nome não informado");
    
             
                nome.focus();
                
                return;
              } 
                     // verificar se o email está vazio
                     if (email.value == "") {
                alert("Email não informado");
    
                
                email.focus();
              
                return;
              } 
//verifica se o email tem um formato válido (com @ e .)
              {
                if( document.forms[0].email.value=="" 
                   || document.forms[0].email.value.indexOf('@')==-1 
                     || document.forms[0].email.value.indexOf('.')==-1 )
                  {
                    alert( "Por favor, informe um E-MAIL válido!" );
                    return false;
                  }
                }
            
                     // verificar se o nome está vazio
                     if (nome_usuario.value == "") {
                alert("Nome Artisitcos não informado");
    
            
                nome_usuario.focus();
               
                return;
              } 
    
                       // verifica se o telefone está vazio
             if (telefone.value == "") {
                alert("telefone não informado");
    
                telefone.focus();

                return;
              } 
    
                   // verifica se o usuário é maior de 18 anos, condição para se inscrever
                       if (idade.value < 18) {
                        alert("a idade mínima para o envio do formulário é 18 anos");
            
                        
                        idade.focus();
                      
                        return;
                      } 
        // verifica se a idade está vazia
                      if (idade.value == "") {
                        alert("idade não informada");
            
                      
                        idade.focus();
                      
                        return;
                      } 
// verifica se o tipo de afinação está vazio
              if (tipo_afi.value == "") {
                alert("Nome de afinação não informado");
    
                tipo_afi.focus();
             
                return;
              } 
    
              alert("Formulário enviado!");
              // envia o formulário
              //formulario.submit();
            
            }  
             