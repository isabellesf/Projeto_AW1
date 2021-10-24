
    function validar_form2(){
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
    
                // Deixa o input com o focus
                nome.focus();
                // retorna a função e não olha as outras linhas
                return;
              } 
                     // verificar se o nome está vazio
                     if (email.value == "") {
                alert("Email não informado");
    
                // Deixa o input com o focus
                email.focus();
                // retorna a função e não olha as outras linhas
                return;
              } 

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
    
                // Deixa o input com o focus
                nome_usuario.focus();
                // retorna a função e não olha as outras linhas
                return;
              } 
    
                       // verificar se o nome está vazio
             if (telefone.value == "") {
                alert("telefone não informado");
    
                // Deixa o input com o focus
                telefone.focus();
                // retorna a função e não olha as outras linhas
                return;
              } 
    
                       // verificar se o nome está vazio
                       if (idade.value < 18) {
                        alert("a idade mínima para o envio do formulário é 18 anos");
            
                        // Deixa o input com o focus
                        idade.focus();
                        // retorna a função e não olha as outras linhas
                        return;
                      } 
        
                      if (idade.value == "") {
                        alert("idade não informada");
            
                        // Deixa o input com o focus
                        idade.focus();
                        // retorna a função e não olha as outras linhas
                        return;
                      } 

              if (tipo_afi.value == "") {
                alert("Nome de afinação não informado");
    
                // Deixa o input com o focus
                tipo_afi.focus();
                // retorna a função e não olha as outras linhas
                return;
              } 
    
              alert("Formulário enviado!");
              // envia o formulário
              //formulario.submit();
            
            }  
             