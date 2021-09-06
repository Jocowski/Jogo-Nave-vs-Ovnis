function Nave(context, animacao, teclado, colisor, imagem) {

    this.context = context;
    this.animacao = animacao;
    this.teclado = teclado;
    this.colisor = colisor;
    this.imagem = imagem;

    this.x = 0;
    this.y = 0;
    this.velocidade = 0;

}

Nave.prototype = {

    atualizar: function() {

        if ((this.teclado.pressionada(SETA_ESQUERDA)) && (this.x > 0)) {

            this.x -= this.velocidade;

        }

        if ((this.teclado.pressionada(SETA_DIREITA)) && (this.x < this.context.canvas.width - this.imagem.width)) {

            this.x += this.velocidade;

        }

        if ((this.teclado.pressionada(SETA_CIMA)) && (this.y > 0)) {

            this.y -= this.velocidade;

        }

        if ((this.teclado.pressionada(SETA_BAIXO)) && (this.y < this.context.canvas.height - this.imagem.height)) {

            this.y += this.velocidade;

        }

    },

    desenhar: function() {

        this.context.drawImage(this.imagem, this.x, this.y, this.imagem.width, this.imagem.height);

    },

    atirar: function() {

        let tiro = new Tiro(this.context, this.animacao, this.colisor, this);

        this.animacao.novoSprite(tiro);
        this.colisor.novoSprite(tiro);

    },

    retangulosColisao: function() {

        return [

            {
                x: this.x + 2, 
                y: this.y + 19, 
                largura: 9, 
                altura: 13
            },

            {
                x: this.x + 13, 
                y: this.y + 3, 
                largura: 10, 
                altura: 33
            },

            {
                x: this.x + 25, 
                y: this.y + 19, 
                largura: 9, 
                altura: 13
            }

        ];

    },
    
    colidiuCom: function(sprite) {

        if (sprite instanceof Ovni) {

            this.animacao.desligar();

            alert("GAME OVER!")

        } 

    }

}