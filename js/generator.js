var LeroLero = (function() {
    'use strict';

    var scope = this || {};

    scope.validchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz()_/!$";

    scope.tab0 = [
        "Tudo torto, tudo fora do lugar, a não ser que: ",
        "Sou feliz e grato por viver, ",
        "Quando estou sozinho em casa eu: ",
        "Eu também concordo, ",
        "Rapaziada cheguei a uma conclusão: ",
        "A prática cotidiana da retenção seminal prova que ",
        "Nunca é demais lembrar o peso e o significado de 500 punhetas, uma vez que ",
        "ATENÇÃO, AVISO IMPORTANTE: ",
        "Acima de tudo, é fundamental ressaltar que ",
        "Ontem antes de dormir eu cheguei a uma conclusão importante ",
        "Não, ",
        "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se ",
        "Pensando mais a longo prazo, ",
        "O que temos que ter sempre em mente é que ",
        "Ainda assim, existem dúvidas a respeito de como ",
        "Gostaria de enfatizar que CANSEI DE SER ESTOICO PPORRAAAAAAAAAA",
        "Todavia, ",
        "A nível organizacional, química é muito mais big dick do que ",
        "Como um objeto que eu pego na mão pode ser abstrato? Isso ocorre porque ",
        "Percebemos, cada vez mais, que ",
        "No mundo atual, ",
        "É importante questionar o quanto resumir e refutar é essêncial ",
        "Neste sentido, leia Nietsche ",
        "Evidentemente, eu sou um homem simples ",
        "Por conseguinte, engraçado ele ja ter visto seu penis ",
        "É claro que ",
        "Podemos já vislumbrar o modo pelo qual ",
        "Desta maneira, ",
        "O cuidado em identificar pontos críticos começa com: ",
        "A certificação de metodologias que nos auxiliam a lidar com o fato de que"
    ];

    scope.tab1 = [
        "mulher é a melhor coisa do mundo ",
        "parar de rir ",
        "não gritar ",
        "tudo isso são pelos meus sagrados 7.5K mensais ",
        "isso que dizer que você é um homem ou um rato quando ",
        "o TODO, ABSOLUTAMENTE TUDO tem haver com a sexualidade ",
        "o caminho dos imortais ",
        "todos os nichos sociais tem um fragmento de verdade no seu discurso principal ",
        "retençãoo seminal ",
        "gordas de pés bonitos e sedosos ",
        "produzir música no fl studio ",
        "depois mandam foto do cu e ficam reclamando ",
        "alem de ser um gênio eu preciso ser o rambo ",
        "putz minha prima é futura consumidora de gore ",
        "ela perguntou pq eu nao fui no hospital e nao gravei uma mulher enforcada",
        "quem decidiu que você tem que ser alguém importante ",
        "quem disse que universidade é coisa de gente inteligente ",
        "quem disse que trabalhar pra sobreviver é o certo ",
        "quem disse que morrer triste é ruim ",
        "quem disse que viver feliz é bom ",
        "quem disse que viver é prazer ",
        "quem disse que morrer é dor ",
        "queria morrer na guerra logo nao aguento mais estudar",
        "nunca perca a castidade ",
        "dor, apenas dor, nada mais que isso ",
        "é meme, é humor, é engraçado ",
        "três vezes ao dia no mínimo ",
        "10 horas líquidas de estudo ",
        "física é muita mais big dick do que ",
        "o negro está "
    ];

    scope.tab2 = [
        "mais uma mitada ",
        "peito grande, bunda grande, ",
        "tomará que eu pegue corona vírus e morra logo ",
        "simplesmente cale essa boca imunda ",
        "pelo amor de deus alan volte a gostar de putaria ",
        "assume importantes posições no estabelecimento ",
        "estou transcendendo ",
        "obstaculiza a apreciação da importância ",
        "oferece uma interessante oportunidade para verificação ",
        "acarreta um processo de reformulação e modernização ",
        "pode nos levar a considerar a reestruturação ",
        "representa uma abertura para a melhoria ",
        "ainda não demonstrou convincentemente que vai participar na mudança ",
        "talvez venha a ressaltar a relatividade ",
        "prepara-nos para enfrentar situações atípicas decorrentes ",
        "maximiza as possibilidades por conta ",
        "desafia a capacidade de equalização ",
        "degeneração na familia agrega valor ao estabelecimento ",
        "é uma das consequências ",
        "promove a alavancagem da minha salsicha no seu pão ",
        "não pode mais se dissociar ",
        "possibilita uma melhor visão global ",
        "estimula a padronização ",
        "sismplesmente aponta para a melhoria do esfarelamento ",
        "faz parte de um processo de gerenciamento ",
        "causa impacto indireto na reavaliação ",
        "trabalhar no bonsai ",
        "estende o alcance e a importância da ODE",
        "deve passar por modificações independentemente da vontade do adiministrador ",
        "promoção na venda de cogumelos "
    ];

    scope.tab3 = [
        "tu é bicha?",
        "SOHCAHTOA.",
        "pele clara e olho verde = sexo.",
        "eu não ri, apaga.",
        "mas agor anão lembro o motivo.",
        "das direções preferenciais no sentido do progresso.",
        "do sistema de formação de quadros que corresponde às necessidades.",
        "das condições inegavelmente apropriadas.",
        "dos índices pretendidos.",
        "das formas de ação.",
        "dos paradigmas corporativos.",
        "dos relacionamentos verticais entre as hierarquias.",
        "do processo de comunicação como um todo.",
        "dos métodos utilizados na avaliação de resultados.",
        "de todos os recursos funcionais envolvidos.",
        "dos níveis de motivação departamental.",
        "da gestão inovadora da qual fazemos parte.",
        "dos modos de operação convencionais.",
        "de alternativas às soluções ortodoxas.",
        "dos procedimentos normalmente adotados.",
        "dos conhecimentos estratégicos para atingir a excelência.",
        "do fluxo de informações.",
        "do levantamento das variáveis envolvidas.",
        "das diversas correntes de pensamento.",
        "do impacto na agilidade decisória.",
        "das regras de conduta normativas.",
        "do orçamento setorial.",
        "do retorno esperado a longo prazo.",
        "do investimento no mercado de fundo imobiliário.",
        "resumindo: é pra faculdade esse vídeo ou é mais pra projetar a mente no terreno?"
    ];

    Array.prototype.shuffle = function() {
        var temp;
        var a, b;

        if (this.length < 2) return;

        for (var i = 0; i < 20; i++) {
            a = Math.floor(Math.random() * this.length);
            b = Math.floor(Math.random() * this.length);
            temp = this[a];
            this[a] = this[b];
            this[b] = temp;
        }
    }

    Array.prototype.chr = function(index, pos) {
        return this[index].charAt(pos);
    }

    scope.generate = function (atitle, lines) {

        //var rand = myArray[Math.floor(Math.random() * myArray.length)];

        var content = '';

        var firstshot = 1;
        var paragraph = 0;
        while (lines > 0) {

            //
            // scope.tab0.shuffle();
            // scope.tab1.shuffle();
            // scope.tab2.shuffle();
            // scope.tab3.shuffle();

            for (var i = 0; i < scope.tab0.length; i++) {
                if (paragraph == 0) {
                //    new_window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                    content += '<p>';
                }

                content += scope.tab0[Math.floor(Math.random() * scope.tab0.length)];
                content += scope.tab1[Math.floor(Math.random() * scope.tab1.length)];
                content += scope.tab2[Math.floor(Math.random() * scope.tab2.length)];
                content += " ";

                if (++paragraph >= (2 + Math.ceil(Math.random() * 3))) {
                    content += '</p>';
                    paragraph = 0;
                }

                if (--lines <= 0) break;
            }

            console.log(content);
        }

        return content;
    }

    return scope;
}());
