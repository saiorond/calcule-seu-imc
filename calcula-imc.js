const btn = document.querySelector("#enviar");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const nome = document.querySelector("#nome");

    const value = nome.value;

    console.log(value)
});