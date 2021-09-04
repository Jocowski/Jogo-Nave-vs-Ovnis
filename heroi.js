let DIRECAO_ESQUERDA = 1;
let DIRECAO_DIREITA = 2;
let DIRECAO_CIMA = 3;
let DIRECAO_BAIXO = 4;

function Heroi(context, teclado, animacao) {

    this.context = context;
    this.teclado = teclado;
    this.animacao = animacao;

    this.x = 0;
    this.y = 0;
    this.tamanho = 10;
    this.direcao = DIRECAO_CIMA;

}

Heroi.prototype = {

    atualizar: function() {

        if ((this.teclado.pressionada(SETA_ESQUERDA)) && (this.x > 0)) {

            this.direcao = DIRECAO_ESQUERDA;
            this.x -= 10;

        }

        if ((this.teclado.pressionada(SETA_DIREITA)) && (this.x < this.context.canvas.width - this.tamanho)) {

            this.direcao = DIRECAO_DIREITA;
            this.x += 10;

        }

        if ((this.teclado.pressionada(SETA_CIMA)) && (this.y > 0)) {

            this.direcao = DIRECAO_CIMA;
            this.y -= 10;

        }

        if ((this.teclado.pressionada(SETA_BAIXO)) && (this.y < this.context.canvas.height - this.tamanho)) {

            this.direcao = DIRECAO_BAIXO;
            this.y += 10;

        }

    },

    desenhar: function() {

        this.context.fillRect(this.x, this.y, this.tamanho, this.tamanho);

    },

    atirar: function() {

        let tiro = new Bola(this.context);
        tiro.x = this.x + 10;
        tiro.y = this.y + 10;
        tiro.raio = 2;
        tiro.cor = "red";
        
        if (this.direcao == DIRECAO_ESQUERDA) {

            tiro.velocidadeX = -20;

        } else if (this.direcao == DIRECAO_DIREITA) {

            tiro.velocidadeX = 20;

        } else if (this.direcao == DIRECAO_CIMA) {

            tiro.velocidadeY = -20;

        } else {

            tiro.velocidadeY = 20;

        }

        this.animacao.novoSprite(tiro);

    }

}