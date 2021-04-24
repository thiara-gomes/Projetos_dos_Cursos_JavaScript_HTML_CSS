$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);

function inserePlacar(){
    //console.log("Linha inserida no placar");
    var corpoTabela = $(".placar").find("tbody");
    var usuario = $("#usuarios").val();;
    var numPalavras = $("#contador-palavras").text();
    /*var botaoRemover = "<a href='#'><i class='small material-icons'>delete</i></a>";*/

    /*var linha = "<tr>"+
                    "<td>"+ usuario + "</td>"+
                    "<td>"+ numPalavras + "</td>"+
                    "<td>"+ botaoRemover + "</td>"+
                "</tr>";
    */
   var linha = novaLinha(usuario, numPalavras);
   linha.find(".botao-remover").click(removeLinha); 

    //corpoTabela.append(linha);
    corpoTabela.prepend(linha);  

    $(".placar").slideDown(500);
    scrollPlacar();
}

function scrollPlacar() {
    //$(".placar").offset();
    var posicaoPlacar = $(".placar").offset().top;
    $("html, body").animate(
        {
            scrollTop: posicaoPlacar
        }, 1000);

}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event) {
    /*$(".botao-remover").click(function(event){})*/
    //console.log(this);
    event.preventDefault();
    //$(this).parent().remove();
    /*$(this).parent().parent().remove();*/
    /*$(this).parent().parent().fadeOut();//diminui a opacidade do elemento, até ficar com o display none*/

    var linha = $(this).parent().parent();

    //linha.fadeOut(1000);
    //linha.remove();

    linha.fadeOut(1000);
    setTimeout(function() {
        linha.remove();
    }, 1000);
}

function mostraPlacar() {
    /*$(".placar").css("display", "block");*/
    /*$(".placar").show();*/
    /*$(".placar").hide();*/
    /*$(".placar").toggle(); //a toggle mostra ou esconde um elemento*/
    /*$(".placar").slideDown(1000); //mesma função de show, mas realiza a transição de maneira mais suave*
    $(".placar").slideUp(1000);*/
    /*$(".placar").slideToggle(600); //queremos alternar entre essas duas funções (toogle e slide)*/
    $(".placar").stop().slideToggle(600); //antes de realizarmos a animação, paramos a que estiver acontecendo através da função stop
}

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr"); //pegar todas as tr que são filhas diretas de tbody

    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        //console.log(usuario);
        var palavras = $(this).find("td:nth-child(2)").text();
        //console.log(usuario);
        //console.log(palavras);
        
        var score = {
            usuario: usuario,
            pontos: palavras            
        };

        placar.push(score);

    });

    var dados = {
        placar: placar
    };

    $.post("http://localhost:3000/placar", dados, function(){
        console.log("Salvou o placar no servidor");
        $(".tooltip").tooltipster("open"); 
    }).fail(function(){
        $(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar"); 
    }).always(function(){ //novo
        setTimeout(function() {
        $(".tooltip").tooltipster("close"); 
    }, 1200);
    });
}

function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(data){
        //console.log("Busquei os dados no servidor");
        //console.log(data);
        $(data).each(function(){
            var linha = novaLinha(this.usuario, this.pontos);
            linha.find(".botao-remover").click(removeLinha); 
            $("tbody").append(linha);
        });
    });
}
