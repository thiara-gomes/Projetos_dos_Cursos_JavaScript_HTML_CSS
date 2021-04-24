$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle(); //mostrando o spinner

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    /*$.get("http://192.168.0.83/frases", trocaFraseAleatoria) //outro servidor que não é o local*/
    .fail(function() {
        /*$("#erro").show(); //ao falhar mostra a mensagem de erro*/
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },1500);
    })
    .always(function(){ 
        $("#spinner").toggle();//sempre escondendo o spinner
})
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function buscaFrase() {

    $("#spinner").toggle();

    var fraseId = $("#frase-id").val();
    //console.log("Id da minha frase" + fraseId);
    var dados = {id : fraseId}; //criacao do objeto JS que guarda a id

    $.get("http://localhost:3000/frases", dados, trocaFrase) //passando objeto como segundo parâmetro
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data) {

    console.log(data);

    var frase = $(".frase");
    frase.text(data.texto); //cuidado, texto com "o" no final 
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}