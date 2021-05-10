var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    // selecionar o <form> para que tenhamos acesso aos campos de input com os dados do paciente. Vamos trazê-lo do HTML
    var form = document.querySelector("#form-adiciona"); 
    
    //console.log(form.altura.value);
    //console.log(form.peso.value);

    /*EXTRAINDO INFORMAÇÕES DO PACIENTE DO FORM
    Depois de selecionado o form, precisamos ter acesso a cada um dos inputs.
    Para fazer isto podemos nos apoiar numa característica do form, que é o acesso que temos aos seus inputs como se fossem propriedades do form, bastando usar como nome da propriedade os atributos name dos inputs.
    Como temos inputs com os name's com valor de nome,altura,peso e gordura.
    Lembrando que para pegar o valor digitado dentro de um input, devemos acessar a sua propriedade value.*/
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

     /*
    console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(gordura);
    */

    /*CRIA A TR E A TD DO PACIENTE
    Agora com os valores extraídos do formulário HTML para o Javascript, podemos começar a criar um novo paciente na tabela.
    Sabemos que pacientes são representados por <tr>'s na tabela, então precisamos criar um elemento <tr> dentro do Javascript. Para isto, vamos utilizar a função document.createElement()*/
    var pacienteTr = document.createElement("tr");

    /*Agora precisamos criar cada uma das <td>'s que ficarão dentro da <tr>.
    Como um paciente tem 5 atributos (nome,peso,altura,gordura e imc).
    Vamos utilizar a mesma função para criar estas <td's>*/
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    /*Temos que colocar os valores que extraímos do form dentro de cada uma das <td's>, então vamos preênche-las com nossa conhecida .textContent:*/
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);

    /*Agora temos 5 <td>'s e 1 <tr> , mas elas não estão conectadas.
    O certo é posicionar as <td>'s dentro de cada <tr>'s.
    Vamos fazer isso através da função appendChild():*/
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    /*ADICIONANDO O PACIENTE NA TABELA
    Por último precisamos adicionar esta <tr> na tabela.
    Para isto vamos usar uma tática parecida, selecionar a tabela em seguida usar a função .appendChild():*/
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
   
});

/*
Extrair o peso e a altura que representamos pelos elementos do tipo td dentro da tr e acessamos no mundo JavaScript através da variável trPaciente.

A função querySelector() nos retorna apenas um elemento, independentemente do que passarmos para a mesma.
Se estivermos interessados em buscar vários elementos com a classe .paciente, devemos utilizar querySelectorAll().

É uma boa prática, em vez de adicionarmos um estilo, incluirmos uma classe ao elemento.
Então criaremos uma nova classe em index.css com dados do paciente inválido -> classe paciente-invalido.
De volta ao JavaScript, assim como temos o style** para acesso aos estilos e o textContent para acessarmos o conteúdo de texto de um elemento, teremos a classList para acessarmos as classes.
E usando o método add, adicionaremos a classe desejada, no caso, paciente-invalido.
Sempre que for necessária uma alteração na parte visual da página, elas serão feitas no arquivo index.css.
Caso queiramos que o fundo da linha com o dado inválido fique com a cor azul, por exemplo, devemos alterar a classe .paciente-invalido no código CSS

Na aula, explicamos a importância de não misturarmos os "mundos" de linguagens diferentes, no caso, quando queremos alterar o visual da página, devemos manipular as classes do arquivo CSS.
A nova classe será adicionada com classList.add() no JavaScript.
Este tipo de ajuste é uma boa prática que deve ser adotada por facilitar a manutenção do código. 
*/