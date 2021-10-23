function validar(){

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

    dataAtual = new Date();

    data = new Date(data);

    if (data < dataAtual) {
      alert("Seu cartão está fora da validade, não será possível finalizar a compra");o
         } 
        }