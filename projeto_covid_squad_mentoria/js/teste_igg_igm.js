//Código em fase de teste. Precisa de correções e ajustes.

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var igmInformado = grupo.querySelector("#igm");
var iggInformado = grupo.querySelector("#igg");

function resultado () {

    if (igmInformado <= 0.8  && iggInformado < 1.4) {mostra("IgM e IgG não reagentes. Você não teve o vírus SARS-CoV-2.");}

    if (igmInformado > 1.2  && iggInformado < 1.4) {mostra("IgM reagente e IgG não reagente. Você tem o vírus SARS-CoV-2 e está transmitindo.");}

    if (igmInformado > 1.2  && iggInformado >= 1.4) {mostra("IgM e IgG reagentes. Já passou a fase viral, mas está transmitindo.");}

    if (igmInformado <= 0.8  && iggInformado >= 1.4) {mostra("IgM não reagente e IgG reagante. Você tem o vírus SARS-CoV-2 e está transmitindo.");}

    return resultado

}

/*
var button = document.querySelector("#botao-diagnostico");

    button.onclick = resultado;
*/