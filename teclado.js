ESPACO = 32
SETA_ESQUERDA = 37
SETA_CIMA = 38
SETA_DIREITA = 39
SETA_BAIXO = 40

function Teclado(elemento) {

    this.elemento = elemento;

    this.pressionadas = [];
    this.disparadas = [];
    this.funcoesDisparo = [];

    let teclado = this;

    elemento.addEventListener("keydown", function(evento) {

        teclado.pressionadas[evento.keyCode] = true;

        if ((teclado.funcoesDisparo[evento.keyCode]) && (!teclado.disparadas[evento.keyCode])) {

            teclado.disparadas[evento.keyCode] = true;
            teclado.funcoesDisparo[evento.keyCode] ();

        }

    });

    elemento.addEventListener("keyup", function(evento) {

        teclado.pressionadas[evento.keyCode] = false;
        teclado.disparadas[evento.keyCode] = false;

    });

}

Teclado.prototype = {

    pressionada: function(tecla) {

        return this.pressionadas[tecla];

    },

    disparou: function(tecla, callback) {

        this.funcoesDisparo[tecla] = callback;

    }

}