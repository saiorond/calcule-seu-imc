// const btn = document.querySelector("#enviar");

//btn.addEventListener("click", function(e) {

//    e.preventDefault();

//   const nome = document.querySelector("#nome").value;
//   const altura = document.querySelector("#altura").value;
//   const peso = document.querySelector("#peso").value;

//   let imc = peso / (altura * altura);
//   console.log(imc)
//});


function calculaImc() {
  let nome = document.getElementById("nome").value;
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let imc = peso / (altura * altura);
  document.getElementById("resultado").innerHTML = imc;
}

