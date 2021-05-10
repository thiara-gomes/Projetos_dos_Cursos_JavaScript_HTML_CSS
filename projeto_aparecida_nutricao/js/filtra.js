var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    //console.log("Digitaram no campo");
    console.log(this.value);
    
    var pacientes = document.querySelectorAll(".paciente");

    /*
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;

        if (nome != this.value) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    }
    */

    /*
    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            if (nome != this.value){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
    */

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); //criando experssão regular (RegExp); parâmetro "i" = case insensitive, ou seja, devem ser buscadas tanto letras maiúsculas como minúsculas.

            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});