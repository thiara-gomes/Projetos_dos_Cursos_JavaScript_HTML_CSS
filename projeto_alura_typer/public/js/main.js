/*jQuery(".frase");
$(".frase");*/

var campo = $(".campo-digitacao");
var tempoInicial = $("#tempo-digitacao").text();

/*
$(document).ready(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro(); 
    $("#botao-reiniciar").click(reiniciaJogo);
});
*/

$(function(){ //atalho da função $(document).ready()
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    atualizaPlacar();
    
    $("#usuarios").selectize({
        create: true,
        sortField: 'text'
    });

    $(".tooltip").tooltipster({
        trigger: "custom"
    });
});

function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    /*campo.on("click", function()*/
    campo.on("input", function() {
        var conteudo = campo.val();
        
        /*var qtdPalavras = conteudo.split(" ").length;*/
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        /*console.log(qtdPalavras);*/
        $("#contador-palavras").text(qtdPalavras);
    
        /*console.log(conteudo.length);*/
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    /*var tempoRestante = $("#tempo-digitacao").text(); //variável passada p/ dentro do evento focus*/
    campo.one("focus", function() {
        var tempoRestante = $("#tempo-digitacao").text();
        //desabilitar o botão de reiniciar caso o usuário dê início ao jogo e o cronômetro comece a descer. Assim quando o usuário começar a digitar o botão será desabilitado.
        /*$("#botao-reiniciar").attr("disabled",true);*/ 
        
        var cronometroID = setInterval(function() {
            tempoRestante--;
            /*console.log(tempoRestante);*/
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroID);
                /*campo.attr("disabled", true);*/ //passada p/ dentro da função finalizaJogo           

                //função css do jquery, p/ alterar algo específico
                /*campo.css("background-color", "lightgray");*/

                //melhor add uma classe e fazer as alterações dentro do css
                /*campo.addClass("campo-desativado");*/ 

                //o jQuery criou uma função específica (toggleClass()) p/ add ou remover. Se no momento que a função for chamada, o elemento possuir a classe, ela será removida. Mas se o elemento não possuir a classe, ela será adicionada. 
                /*campo.toggleClass("campo-desativado");*/ //passada p/ dentro da função finalizaJogo 

                /*inserePlacar();*/ //passada p/ dentro da função finalizaJogo 

                //para reabilitar o botão de reiniciar, basta remover o atributo disabled.
                $("#botao-reiniciar").attr("disabled", false);

                finalizaJogo();
            }
    }, 1000);
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar(); 

}

function inicializaMarcadores() {
    /*var frase = $(".frase").text(); //variável passada p/ dentro do evento focus*/
    campo.on("input", function() {
        var frase = $(".frase").text();
        var digitado = campo.val();
        //console.log(frase);
        //console.log(digitado);
        var comparavel = frase.substr(0 , digitado.length);
        //console.log("Digitado:" + digitado);
        //console.log("Frase C.:" + comparavel);

        if(digitado == comparavel) {
            //console.log("Está certo");
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            //console.log("Está errado");
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }

        //reescrever esse código sem if, fica mais enxuto porém menos legível:
        /*var ehCorreto = (digitado == comparavel);
        campo.toggleClass("borda-verde", ehCorreto);
        campo.toggleClass("borda-vermelha", !ehCorreto);*/
    });
}

function reiniciaJogo() {
    // $("#botao-reiniciar").on("click", function() {...});
    // $("#botao-reiniciar").click(function() {...});
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();

    //para remover (removeclass()) a cor de fundo (background) cinza da classe campo-desativado e retomar a cor branca da textarea, após acionar o botao-reiniciar e iniciar uma nova digitação.
    /*campo.removeClass("campo-desativado");*/

    //o jQuery criou uma função específica (toggleClass()) p/ add ou remover. Se no momento que a função for chamada, o elemento possuir a classe, ela será removida. Mas se o elemento não possuir a classe, ela será adicionada. 
    campo.toggleClass("campo-desativado");

    campo.removeClass("borda-vermelha"); 
    campo.removeClass("borda-verde");
}

/*
No nosso caso escrevemos a aplicação servidora em node.js (JavaScript) usando o framework Express. Para habilitar CORS com Express basta utilizar:

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000, http://192.168.0.83:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/