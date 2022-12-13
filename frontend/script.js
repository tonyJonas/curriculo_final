var nomeId = "#nome";
var nomeCursoId = "#dataCurso1";
var resumoAlt = "#resumoAlt";

var nomeValor = "#nome";
var cargoValor = "#cargo";
var curso1Valor = "#nomeCurso1";
var curso2Valor = "#nomeCurso2";
var dataInicioCurso1Valor = "#dataInicioCurso1";
var dataInicioCurso2Valor = "#dataInicioCurso2";
var dataFimCurso1Valor = "#dataFimCurso1";
var dataFimCurso2Valor = "#dataFimCurso2";
var caracteristicasCurso1Valor = "#caracteristicasCurso1";
var caracteristicasCurso2Valor = "#caracteristicasCurso2";
var nomeEmpresa1Valor = "#nomeEmpresa1";
var nomeEmpresa2Valor = "#nomeEmpresa2";
var dataInicioEmpresa1Valor = "#dataInicioEmpresa1";
var dataInicioEmpresa2Valor = "#dataInicioEmpresa2";
var dataFimEmpresa1Valor = "#dataFimEmpresa1";
var dataFimEmpresa2Valor = "#dataFimEmpresa2";
var cargoEmpresa1Valor = "#cargoEmpresa1";
var cargoEmpresa2Valor = "#cargoEmpresa2";
var nomeRealizacao1Valor = "#nomeRealizacao1";
var nomeRealizacao2Valor = "#nomeRealizacao2";
var dataRealizacao1Valor = "#dataRealizacao1";
var dataRealizacao2Valor = "#dataRealizacao2";
var dataInicioRealizacao1Valor = "#dataInicioRealizacao1";
var dataInicioRealizacao2Valor = "#dataInicioRealizacao2";
var dataFimRealizacao1Valor = "#dataFimRealizacao1";
var dataFimRealizacao2Valor = "#dataFimRealizacao2";
var caracteristicasRealizacao1Valor = "#caracteristicasRealizacao1";
var caracteristicasRealizacao2Valor = "#caracteristicasRealizacao2";
var enderecoValor = "#endereco";
var telefoneValor = "#telefone";
var emailValor = "#email";

function resumoAleat2(){
    var url = "http://127.0.0.1:3000/";

    
    let random_number_id = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    let urlUsuario = `${url}usuario?id=${random_number_id}`;
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", urlUsuario, false);
    
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    respostaUsuario = JSON.parse(xhttp.responseText);

    xhttp.open("GET", urlUsuario, false);
    
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    respostaUsuario = JSON.parse(xhttp.responseText);

    let urlFormacao = `${url}formacao?id=${random_number_id}`;
    var respostaFormacao;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlFormacao, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    respostaFormacao = JSON.parse(xhttp.responseText);
    let urlExperiencia = `${url}experiencia?id=${random_number_id}`;
    var respostaExperiencia;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlExperiencia, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    respostaExperiencia = JSON.parse(xhttp.responseText);

    let urlRealizacoes = `${url}realizacoes?id=${random_number_id}`;
    var respostaRealizacoes;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlRealizacoes, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    respostaRealizacoes = JSON.parse(xhttp.responseText);
    console.log(respostaUsuario)
    $(nomeValor).text(respostaUsuario[0].nome_usuario)
    $(cargoValor).text(respostaUsuario[0].cargo_usuario)
    $(curso1Valor).text(respostaFormacao[0].nome_curso)
    $(curso2Valor).text(respostaFormacao[0].nome_curso)
    $(dataInicioCurso1Valor).text(respostaFormacao[0].ano_inicio_curso)
    $(dataInicioCurso2Valor).text(respostaFormacao[0].ano_inicio_curso)
    $(dataFimCurso1Valor).text(respostaFormacao[0].ano_final_curso)
    $(dataFimCurso2Valor).text(respostaFormacao[0].ano_final_curso)
    $(caracteristicasCurso1Valor).text( respostaFormacao[0].descricao)
    $(caracteristicasCurso2Valor).text(respostaFormacao[0].descricao)
    $(nomeEmpresa1Valor).text(respostaExperiencia[0].nome_empresa)
    $(nomeEmpresa2Valor).text(respostaExperiencia[0].nome_empresa)
    $(dataInicioEmpresa1Valor).text(respostaExperiencia[0].ano_inicio_experiencia)
    $(dataInicioEmpresa2Valor).text(respostaExperiencia[0].ano_inicio_experiencia)
    $(dataFimEmpresa1Valor).text(respostaExperiencia[0].ano_final_experiencia)
    $(dataFimEmpresa2Valor).text(respostaExperiencia[0].ano_final_experiencia)
    $(cargoEmpresa1Valor).text(respostaExperiencia[0].descricao)
    $(cargoEmpresa2Valor).text(respostaExperiencia[0].descricao)
    $(nomeRealizacao1Valor).text(respostaRealizacoes[0].nome_realizacao)
    $(nomeRealizacao2Valor).text(respostaRealizacoes[0].nome_realizacao)
    $(dataInicioRealizacao1Valor).text(respostaRealizacoes[0].ano_realizacao)
    $(dataInicioRealizacao2Valor).text(respostaRealizacoes[0].ano_realizacao)
    $(dataFimRealizacao1Valor).text(respostaRealizacoes[0].ano_realizacao)
    $(dataFimRealizacao2Valor).text(respostaRealizacoes[0].ano_realizacao)
    $(caracteristicasRealizacao1Valor).text(respostaRealizacoes[0].descricao_realizacao)
    $(caracteristicasRealizacao2Valor).text(respostaRealizacoes[0].descricao_realizacao)
    $(enderecoValor).text(respostaUsuario[0].endereco)
    $(telefoneValor).text(respostaUsuario[0].telefone)
    $(emailValor).text(respostaUsuario[0].email)
}




// $('#formHeader').on('submit', function(event) {
//     event.preventDefault();
//     let nome = $(novoNome).val();
//     $(nomeId).text(nome);
// });

$('#formCurso1').on('submit', function(event) {
    event.preventDefault();
    let data = $(novoDataCurso).val();
    $(nomeCursoId).text(data);
});

function resumoAleat(){
    let random_number = Math.floor(Math.random() * (200 - 1) + 1)
    var url = (`https://jsonplaceholder.typicode.com/todos/${random_number}`);

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    let resposta = JSON.parse(xhttp.responseText)
    $(resumoAlt).text(resposta.title);
}
