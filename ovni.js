function Ovni(context, animacao, colisor, imagem) {

    this.context = context;
    this.animacao = animacao;
    this.colisor = colisor;
    this.imagem = imagem;

    this.x = 0;
    this.y = 0;
    this.velocidade = 0;

}

Ovni.prototype = {

    atualizar: function() {

        this.y += this.velocidade;

        if (this.y > this.context.canvas.height) {

            this.animacao.excluirSprite(this);
            this.colisor.excluirSprite(this);

        }

    },

    desenhar: function() {

        this.context.drawImage(this.imagem, this.x, this.y, this.imagem.width, this.imagem.height);

    },

    retangulosColisao: function() {

        return [

            {
                x: this.x + 20, 
                y: this.y + 1, 
                largura: 25, 
                altura: 10
            },

            {
                x: this.x + 2, 
                y: this.y + 11, 
                largura: 60, 
                altura: 12
            },

            {
                x: this.x + 20, 
                y: this.y + 23, 
                largura: 25, 
                altura: 7
            }

        ];

    },
    
    colidiuCom: function(sprite) {

        if (sprite instanceof Tiro) {

            this.animacao.excluirSprite(this);
            this.animacao.excluirSprite(sprite);
            this.colisor.excluirSprite(this);
            this.colisor.excluirSprite(sprite);

        }

    }

}