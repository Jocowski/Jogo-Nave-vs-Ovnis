function Nave(context, teclado, imagem, imgExplosao) {

    this.context = context;
    this.teclado = teclado;
    this.imagem = imagem;
    this.imgExplosao = imgExplosao;

    this.spritesheet = new Spritesheet(context, imagem, 3, 2);
    this.spritesheet.linha = 0;
    this.spritesheet.interval = 100;

    this.x = 0;
    this.y = 0;
    this.velocidade = 0;

    this.acabaramVidas = null;
    this.vidasExtras = 3;

}

Nave.prototype = {

    atualizar: function() {

        let incremento = this.velocidade * this.animacao.decorrido / 1000;

        if ((this.teclado.pressionada(SETA_ESQUERDA)) && (this.x > 0)) {

            this.x -= incremento;

        }

        if ((this.teclado.pressionada(SETA_DIREITA)) && (this.x < this.context.canvas.width - 36)) {

            this.x += incremento;

        }

        if ((this.teclado.pressionada(SETA_CIMA)) && (this.y > 0)) {

            this.y -= incremento;

        }

        if ((this.teclado.pressionada(SETA_BAIXO)) && (this.y < this.context.canvas.height - 48)) {

            this.y += incremento;

        }

    },

    desenhar: function() {

        if (this.teclado.pressionada(SETA_ESQUERDA)) {

            this.spritesheet.linha = 1;

        } else if (this.teclado.pressionada(SETA_DIREITA)) {

            this.spritesheet.linha = 2;

        } else {

            this.spritesheet.linha = 0;

        }

        this.spritesheet.desenhar(this.x, this.y);
        this.spritesheet.proximoQuadro();

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

            this.animacao.excluirSprite(this);
            this.animacao.excluirSprite(sprite);

            this.colisor.excluirSprite(this);
            this.colisor.excluirSprite(sprite);

            let exp1 = new Explosao(this.context, this.imgExplosao, this.x, this.y);
            let exp2 = new Explosao(this.context, this.imgExplosao, sprite.x, sprite.y);

            this.animacao.novoSprite(exp1);
            this.animacao.novoSprite(exp2);

            let nave = this;

            exp1.fimDaExplosao = function() {

                nave.vidasExtras--;

                if (nave.vidasExtras < 0) {

                    if (nave.acabaramVidas) {
                        
                        nave.acabaramVidas();

                    }

                } else {

                    nave.colisor.novoSprite(nave);
                    nave.animacao.novoSprite(nave);

                    nave.posicionar();

                }
            }

        } 

    },

    posicionar: function() {

        this.x = this.context.canvas.width / 2 - 18;
        this.y = this.context.canvas.height - 48;

    }

}