$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
        .fail(function() {
            $("#erro").toggle();
            setTimeout(function() {
                $("#erro").toggle();
            }, 1500);
        })
        .always(function() {
            $("#spinner").toggle();
        });
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


    var dados = { id: fraseId }; //criacao do objeto JS que guarda a id

    //passando objeto como segundo parâmetro

    //criacao do objeto JS que guarda a id
    var dados = { id: fraseId };

    //passando objecto como segundo parametro

    $.get("http://localhost:3000/frases", dados, trocaFrase)
        .fail(function() {
            $("#erro").toggle();
            setTimeout(function() {
                $("#erro").toggle();
            }, 2000);

        }, 2000);
})
.always(function() {
    $("#spinner").toggle();
});
}

function trocaFrase(data) {

    console.log(data);

    var frase = $(".frase"); <<
    <<
    <<
    <
    HEAD
    frase.text(data.texto); ===
    ===
    =
    frase.text(data.texto); //cuidado, texto com "o" no final 
    >>>
    >>>
    >
    5 cdde1bcd92dc222b35343cb4f226d133893cd02
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}