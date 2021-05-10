var titulo = document.querySelector(".titulo"); //busca por seletores de CSS 
titulo.textContent = "Aparecida Nutricionista";

/*
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
//var imc = peso / (altura * altura);
//tdImc.textContent = imc

var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido!";
    //tdPeso.textContent = 'peso inválido';
}

if (altura < 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválido!";
    //tdAltura.textContent = 'altura inválida';
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

//Por enquanto, estamos utilizando o console.log para inspecionar se o que foi feito deu certo.
console.log(paciente); //tr
console.log(tdPeso); //td que tem o peso
console.log(peso); //Obter 100
console.log(tdAltura); 
console.log(altura);
console.log(imc);
*/

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    //console.log(pacientes[i]);
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    //var pesoEhValido = true;
    //var alturaEhValida = true;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    //estamos testando se o peso não é válido, para identificar se ele é negativo ou maior que uma tonelada, vamos utilizar o operador de negação (!). O ! será responsável por inverter os valores da condição avaliada.

    //if (peso < 0 || peso >= 1000) {  
    if (!pesoEhValido) { //só vai entrar no if se o peso inválido for falso; quando o peso for inválido, chama o if
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        //tdPeso.textContent = 'peso inválido'; //caso queira alertar o erro na coluna do peso.
        //paciente.style.backgroundColor = "lightcoral"; //O local correto para definirmos o estilo da página é no arquivo CSS.
        paciente.classList.add("paciente-invalido"); //no CSS foi incluída a classe paciente-invalido
    }

    //if (altura < 0 || altura >= 3.00) {
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválido!";
        //tdAltura.textContent = 'altura inválida'; //caso queira alertar o erro na coluna da altura.
        //paciente.style.backgroundColor = "lightcoral"; //O local correto para definirmos o estilo da página é no arquivo CSS.
        paciente.classList.add("paciente-invalido"); //no CSS foi incluída a classe paciente-invalido
    }

    if (alturaEhValida && pesoEhValido) {
        //var imc = peso / (altura * altura);
        var imc = calculaImc(peso, altura);
        
        //função toFixed() = recebe como parâmetro a quantidade de casas decimais a serem exibidas depois do ponto.
        //tdImc.textContent = imc.toFixed(2);
        tdImc.textContent = imc; //passamos o toFixed() para dentro da função.
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}