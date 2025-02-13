const { v4: uuid4 } = require('uuid');

class Pedido {
    constructor(cliente, tipo, descricao, valor, status = "pendente") {
        this.id = uuid4();
        this.cliente = cliente;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
        this.status = status;
    }
}

module.exports = Pedido;