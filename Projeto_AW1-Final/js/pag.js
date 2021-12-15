function mascara(o,f){ //mascara para número do cartão
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mcc(v){
  v=v.replace(/\D/g,"");
  v=v.replace(/^(\d{4})(\d)/g,"$1 $2");
  v=v.replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3");
  v=v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4");
  return v;
}
function id( el ){
return document.getElementById( el );
}
window.onload = function(){
id('cardnumber').onkeypress = function(){
  mascara( this, mcc );
}
}

$(document).ready(function () { //máscara para data de validade
  var $date = $("#data");
  $date.mask('00/00');
});

function validar(){
  //verifica se os campos estão vazios e retorna um alerta ao usuário

    var nomecc = document.getElementById("nomecc");
    if (nomecc.value == ""){
      alert("Por favor insira o nome do seu cartão");
      nomecc.focus();
    }
    var cardnumber = document.getElementById("cardnumber");
    if (cardnumber.value == ""){
      alert("Por favor insira o número do seu cartão");
      cardnumber.focus();
    }
    var data = document.getElementById("data");
    if (data.value == ""){
      alert("Por favor insira a data de validade do seu cartão");
      data.focus();
    }
    var cvv = document.getElementById("cvv");
    if (cvv.value == ""){
      alert("Por favor insira o código de verificação do seu cartão");
      cvv.focus();
    }

  
}