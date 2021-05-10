var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona"); 

    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    /*
    //Cria a td e a tr do paciente
    var pacienteTr = montaTr(paciente);
    */

    /*
    if (!validaPaciente(paciente)) {  //incrementando código depois da crição da função validaPaciente - testando
        console.log("Paciente inválido");
        return;
    }
    */

    var erros = validaPaciente(paciente); //incrementando código depois da crição da função validaPaciente

    /*
    if (erros.length > 0) {
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }
    */

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    /*
    //Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    */

    adicionaPacienteNaTabela(paciente); //após criar a função adcionaPaciente, desconsideramos as linhas acima.

    //Limpar os campos do formulário, após inserir um paciente
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
   
});

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    /*
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-peso");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");
    */

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

/*
 ---> Primeira sugestão antes de criar a função montaTd: teria que criar essas 3 linhas para cada elemento (nome,peso etc):
var nomeTd = document.createElement("td");
nomeTd.classList.add("info-nome");
nomeTd.textContent = paciente.nome;

---> Formulando a ideia da função montaTd, até termos a ersão mais enxuta (acima):
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add("info-nome"); ---> classe
    td.textContent = paciente.nome; ---> dado
*/

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    
    /* Testando apenas o peso. Abaixo, código abranendo todos os elementos.
    if (validaPeso(paciente.peso)) {
        //return true;
        return "";
    } else {
        //return false;
        return "O peso é inválido";
    }
    */
   var erros = [];

    if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco");

    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");

    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");

    if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");

    if (paciente.peso.length == 0) erros.push("O peso não pode ser em branco");

    if (paciente.altura.length == 0) erros.push("A altura não pode ser em branco");

    return erros;
}

function exibeMensagensDeErro(erros){

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
