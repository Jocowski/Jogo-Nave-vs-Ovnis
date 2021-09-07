function Fundo(context, imagem) {

    this.context = context;
    this.imagem = imagem;

    this.velocidade = 0;
    this.posicaoEmenda = 0;

}

Fundo.prototype = {

    atualizar: function() {

        this.posicaoEmenda += this.velocidade * this.animacao.decorrido / 1000;

        if (this.posicaoEmenda > this.imagem.height) {

            this.posicaoEmenda = 0;

        }

    },

    desenhar: function() {

        let posicaoY = this.posicaoEmenda - this.imagem.height;
        this.context.drawImage(this.imagem, 0, posicaoY, this.imagem.width, this.imagem.height);

        posicaoY = this.posicaoEmenda;
        this.context.drawImage(this.imagem, 0, posicaoY, this.imagem.width, this.imagem.height);

    }

}