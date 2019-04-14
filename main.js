// index
var btnEstudante = document.querySelector("#btnEstudante");
var btnComum = document.querySelector("#btnComum");
var inputValor = document.querySelector("#inputValor");

// painel
var txtSaldo = document.querySelector("#saldo");
var txtModalidade = document.querySelector("#modalidade");
var txtViagensCompletas = document.querySelector("#completas");
var txtMeiaViagem = document.querySelector("#meias");



btnComum.addEventListener('click', function () {
    localStorage.setItem("valor", inputValor.value);
    localStorage.setItem("modalidade", "Comum");
    window.location.href = "painel.html";
});

btnEstudante.addEventListener('click', function () {
    localStorage.setItem("valor", inputValor.value);
    localStorage.setItem("modalidade", "Estudante");
    window.location.href = "painel.html";
});







