/*
var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
});
*/

/*
//Propriedade target irá nos dizer quem foi clicado, quem foi o alvo. Enquanto o this se refere ao dono do evento, o event.target será quem sofreu propriamente o evento. Mas se testarmos, veremos que isso quase funciona. Ao clicarmos em algum campo da tabela, apenas o <td> clicado será removido. No entanto, queremos remover a linha completa, ou seja, a tag <tr>, pai do <td>:

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event) {
    event.target.remove();
});
*/

/*
//Para selecionarmos o pai de um elemento, trabalharemos com a propriedade parentNode. A seguir selecionaremos quem foi clicado e removeremos o seu pai, uma tag <tr>:

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove();
});

//Poderemos até separar em variáveis para deixar mais explícito:

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    paiDoAlvo.remove();
});
*/

//Assim, mesmo que adicionarmos novos pacientes, no momento em que ele receber um duplo clique, o evento irá subir até chegar à tabela. Esta por sua vez, estará escutando. Desta forma, o paciente será removido. Quando clicamos em qualquer filho, o evento consegue chegar até o pai (table). Essa estratégia é muito boa por economizarmos código, deixando-o mais sucinto. E é possível simplificarmos ainda mais o código:

/*
var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove();
});
*/

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});