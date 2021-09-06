function Tiro(context, animacao, colisor, nave) {

    this.context = context;
    this.animacao = animacao;
    this.colisor = colisor;
    this.nave = nave;

    this.largura = 4;
    this.altura = 20;
    this.x = nave.x + nave.imagem.width / 2 - this.largura / 2;
    this.y = nave.y - this.altura;
    this.velocidade = 10;
    this.cor = "red";

}

Tiro.prototype = {

    atualizar: function() {

        this.y -= this.velocidade;

        if (this.y < - this.altura) {

            this.animacao.excluirSprite(this);
            this.colisor.excluirSprite(this);

        }

    },

    desenhar: function() {

        this.context.save();

        this.context.fillStyle = this.cor;
        this.context.fillRect(this.x, this.y, this.largura, this.altura);

        this.context.restore();

    },

    retangulosColisao: function() {

        return [
            
            {
                x: this.x, 
                y: this.y, 
                largura: this.largura, 
                altura: this.altura
            }

        ];

    },
    
    colidiuCom: function(sprite) {



    }

}