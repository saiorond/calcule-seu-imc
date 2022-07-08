const btn = document.querySelector("#enviar");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const nome = document.querySelector("#nome").value;
    const altura = document.querySelector("#altura").value;
    const peso = document.querySelector("#peso").value;

    console.log(nome, altura, peso);
});

function calculaImc(altura, peso) {

    return peso * altura;
}

console.log(calculaImc);

