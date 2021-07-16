// DESAFIOS JAVASCRIPT - DIO

// DESAFIO 1

function botao1() {

    $(".dados1").show();

}

function fecha1() {

    $(".dados1").hide();

}

function recebe() {

    let i = 0;

    let total = 0;

    let valor;

    function gets() {

        let line = document.getElementById("num1").value.split(" ");
        return parseFloat(line[i]);

    }

    while (i < 6) { // RESPOSTA DO DESAFIO 1

        valor = parseFloat(gets());

        if (valor > 0) { // RESPOSTA DO DESAFIO 1

            total = total + 1;

        }

        i = i + 1;

    }

    $(".resposta1").show();
    $("#resp1").html(total + " valores positivos");
    //print(total + " valores positivos"); // RESPOSTA DO DESAFIO 1

    i = 0;

}

// DESAFIO 2

function botao2() {

    $(".dados2").show();

}

function fecha2() {

    $(".dados2").hide();

}

function mostra() {

    function gets() {

        let num = document.getElementById("num2").value;
        return parseInt(num);

    }

    let N = gets(); // RESPOSTA DO DESAFIO 2

    if (N <= 0) {

        alert("N\u00daMERO INV\u00c1LIDO!"); // Ú = \u00da   |   Á = \u00c1

    }
    else {

        $(".resposta2").show();

        $("#resp2").html("");

        for (let num = 2; num <= N; num += 2) { // RESPOSTA DO DESAFIO 2

            $("#resp2").append(num + "<p>");
            // console.log(num);
        }

    }
   
}

// DESAFIO 3

function botao3() {

    $(".dados3").show();

}

function fecha3() {

    $(".dados3").hide();

}

function exibe() {

    let i = 0;

    function gets() {

        console.log("1");
        let num = document.getElementById("num3").value.split(" ");
        return parseInt(num[i]);

    }

    numero = Array(5);

    while (i < 5) {

        numero[i] = gets();
        i++;

    }

    /*
    numero[0] = gets();
    numero[1] = gets();
    numero[2] = gets();
    numero[3] = gets();
    numero[4] = gets();
    */

    pares = numero.filter(value => value % 2 == 0); // RESPOSTA DESAFIO 3
    impares = numero.filter(value => value % 2 != 0); // RESPOSTA DESAFIO 3

    positivos = numero.filter(value => value > 0); // RESPOSTA DESAFIO 3
    negativos = numero.filter(value => value < 0); // RESPOSTA DESAFIO 3

    $(".resposta3").show();

    $("#resp3").html("");

    $("#resp3").html(pares.length + " valor(es) par(es)" + "<p>");
    $("#resp3").append(impares.length + " valor(es) impar(es)" + "<p>");

    $("#resp3").append(positivos.length + " valor(es) positivo(s)" + "<p>");
    $("#resp3").append(negativos.length + " valor(es) negativo(s)" + "<p>");

    // print(pares.length + " valor(es) par(es)");
    // print(impares.length + " valor(es) impar(es)");

    // print(positivos.length + " valor(es) positivo(s)");
    // print(negativos.length + " valor(es) negativo(s)");

    i = 0;
}

// DESAFIO 4

function botao4() {

    $(".dados4").show();

}

function fecha4() {

    $(".dados4").hide();

}

function calcula() {

    function gets() {

        let num = document.getElementById("num4").value;
        return parseInt(num);

    }

    let valor = parseInt(gets());

    if (valor <= 0 || valor >= 1000000) {

        alert("N\u00daMERO INV\u00c1LIDO!"); // Ú = \u00da   |   Á = \u00c1

    }
    else {

        let aux = valor; // RESPOSTA DO DESAFIO 4

        let notas = [0, 0, 0, 0, 0, 0, 0]; // RESPOSTA DO DESAFIO 4

        notas[0] = parseInt(aux / 100); // RESPOSTA DO DESAFIO 4
        aux = aux - 100 * notas[0]; // RESPOSTA DO DESAFIO 4

        notas[1] = parseInt(aux / 50); // RESPOSTA DO DESAFIO 4
        aux = aux - 50 * notas[1]; // RESPOSTA DO DESAFIO 4

        notas[2] = parseInt(aux / 20); // RESPOSTA DO DESAFIO 4
        aux = aux - 20 * notas[2]; // RESPOSTA DO DESAFIO 4

        notas[3] = parseInt(aux / 10); // RESPOSTA DO DESAFIO 4
        aux = aux - 10 * notas[3]; // RESPOSTA DO DESAFIO 4

        notas[4] = parseInt(aux / 5); // RESPOSTA DO DESAFIO 4
        aux = aux - 5 * notas[4]; // RESPOSTA DO DESAFIO 4

        notas[5] = parseInt(aux / 2); // RESPOSTA DO DESAFIO 4
        aux = aux - 2 * notas[5]; // RESPOSTA DO DESAFIO 4

        notas[6] = aux / 1; // RESPOSTA DO DESAFIO 4
        aux = aux - 1 * notas[6]; // RESPOSTA DO DESAFIO 4

        $(".resposta4").show();

        $("#resp3").html("");

        $("#resp4").html(valor + "<p>");
        $("#resp4").append(notas[0] + " nota(s) de R$ 100,00" + "<p>");
        $("#resp4").append(notas[1] + " nota(s) de R$ 50,00" + "<p>");
        $("#resp4").append(notas[2] + " nota(s) de R$ 20,00" + "<p>");
        $("#resp4").append(notas[3] + " nota(s) de R$ 10,00" + "<p>");
        $("#resp4").append(notas[4] + " nota(s) de R$ 5,00" + "<p>");
        $("#resp4").append(notas[5] + " nota(s) de R$ 2,00" + "<p>");
        $("#resp4").append(notas[6] + " nota(s) de R$ 1,00" + "<p>");

        // print(valor); // RESPOSTA DO DESAFIO 4
        // print(notas[0] + " nota(s) de R$ 100,00"); // RESPOSTA DO DESAFIO 4
        // print(notas[1] + " nota(s) de R$ 50,00"); // RESPOSTA DO DESAFIO 4
        // print(notas[2] + " nota(s) de R$ 20,00"); // RESPOSTA DO DESAFIO 4
        // print(notas[3] + " nota(s) de R$ 10,00"); // RESPOSTA DO DESAFIO 4
        // print(notas[4] + " nota(s) de R$ 5,00"); // RESPOSTA DO DESAFIO 4
        // print(notas[5] + " nota(s) de R$ 2,00"); // RESPOSTA DO DESAFIO 4
        // print(notas[6] + " nota(s) de R$ 1,00"); // RESPOSTA DO DESAFIO 4

    }

}

// DESAFIO 5

function botao5() {

    $(".dados5").show();

}

function fecha5() {

    $(".dados5").hide();

}

function consumo() {

    let i = 0;
    
    function gets() {

        let num = document.getElementById("num5").value.split(" ");
        return num[i];

    }

    let X = parseInt(gets()); // RESPOSTA DO DESAFIO 5
    i = 1;
    let Y = parseFloat(gets()).toFixed(1); // RESPOSTA DO DESAFIO 5

    if (X <= 0 || Y <= 0) {

        alert("VALOR INV\u00c1LIDO!"); // Ú = \u00da   |   Á = \u00c1

    }
    else {

        let total = parseFloat(X / Y).toFixed(3); // RESPOSTA DO DESAFIO 5

        $(".resposta5").show();

        $("#resp5").html(total + " km/l");

        // print(total + " km/l");  // RESPOSTA DO DESAFIO 5
    }
}

$(function () {
    $(".dados1").hide();
    $(".resposta1").hide();
    $(".dados2").hide();
    $(".resposta2").hide();
    $(".dados3").hide();
    $(".resposta3").hide();
    $(".dados4").hide();
    $(".resposta4").hide();
    $(".dados5").hide();
    $(".resposta5").hide();
})