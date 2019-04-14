var txtSaldo = document.querySelector("#saldo");
var txtModalidade = document.querySelector("#modalidade");
var txtViagensCompletas = document.querySelector("#completas");
var txtMeiaViagem = document.querySelector("#meias");
var btnDescontarUm = document.querySelector("#dscnt-um");
var btnDescontarDois = document.querySelector("#dscnt-dois");
var btnEditar = document.querySelector("#editar");

var modalidade = localStorage.getItem("modalidade");
var saldo = localStorage.getItem("valor");

var valorDescontoUm; 
var valorDescontoDois;

window.onload = function(){
    if(modalidade == "Comum"){
        console.trace("comum foi checado");
        calcularComum();
        valorDescontoUm = 4.3;
        valorDescontoDois = 8.6;
    }
    else if(modalidade == "Estudante"){
        console.trace("estudante foi checado");
        calcularEstudante();
        valorDescontoUm = 2.15;
        valorDescontoDois = 4.3;
    }
}

btnDescontarUm.addEventListener('click', descontarUm);
btnDescontarDois.addEventListener('click', descontarDois);
btnEditar.addEventListener('click', function(){
    window.location.href = "index.html";
})


function descontarUm(){
    saldo -= valorDescontoUm;
    localStorage.setItem("valor", saldo);

    modalidade == "Comum" ? calcularComum() : calcularEstudante();     
    
}

function descontarDois(){
    saldo -= valorDescontoDois;
    localStorage.setItem("valor", saldo);

    modalidade == "Comum" ? calcularComum() : calcularEstudante(); 
}

function calcularComum(){
    let valor = saldo;
    let dias = valor / 8.6;
    let diasRedondos = Math.trunc(dias);
    let meiaViagem = 0;

    if (dias % 1 != 0) {
        let posVirgula = dias - diasRedondos;

        // saber se tem pelo menos uma ida
        if (posVirgula >= 0.5) {
            meiaViagem = 1;
        }
    }

    txtSaldo.textContent = Number(valor).toFixed(2);
    txtModalidade.textContent = "Comum";
    txtViagensCompletas.textContent = diasRedondos;
    txtMeiaViagem.textContent = meiaViagem;
}

function calcularEstudante(){
    let valor = saldo;
    let dias = valor / 4.3;
    let diasRedondos = Math.trunc(dias);
    let meiaViagem = 0;

    if (dias % 1 != 0) {
        let posVirgula = dias - diasRedondos;

        // saber se tem pelo menos uma ida
        if (posVirgula >= 0.5) {
            meiaViagem = 1;
        }
    }

    txtSaldo.textContent = Number(valor).toFixed(2);
    txtModalidade.textContent = "Estudante";
    txtViagensCompletas.textContent = diasRedondos;
    txtMeiaViagem.textContent = meiaViagem;
}

