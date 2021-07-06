(function(document) {
    'use strict';

    document.getElementById('lero-generator-gerar').addEventListener('click', function(e) {

        var generator = document.getElementsByClassName('lero-generator-output')[0];
        var titulo = document.getElementsByName('titulo')[0].value;
        var linhas = document.getElementsByName('linhas')[0].value;
        generator.innerHTML = LeroLero.generate(titulo, linhas);

        e.preventDefault();
        console.log('TESTE', titulo, linhas);
        return false;
    })

}(document));
