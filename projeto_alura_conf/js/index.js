/*Precisamos fazer event.preventDefault() para cancelar o evento padrão das nossas âncoras, que é seguir o valor do atributo href. Queremos que transição seja feita por JavaScript.
Para a âncora que foi clicada, precisamos extrair o valor do seu href. Esse valor guarda o ID do elemento no qual queremos fazer o scroll suave.
Em nosso código, target é o valor do href do elemento que clicamos. Fizemos $(this) para promovermos o this, que é um elemento do DOM para um jQuery Object para então extrairmos o valor do atributo href através de $(this).attr('href').
Depois que sabemos até onde a âncora deve ir após clicada, é feita uma animação através da função animate do jQuery. Ela será responsável em fazer nosso scroll suave:*/

function ativaScrollSuave(selector) {

    $(selector).click(function(event){
        
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);  
    });
}

/*precisamos passar como parâmetro para a função ativaScrollSuave o seletor CSS de cada âncora que desejamos fazer o scroll suave. Vamos usar um seletor de atributo para selecionar cada uma delas.*/

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');