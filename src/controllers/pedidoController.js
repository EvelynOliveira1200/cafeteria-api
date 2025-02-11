const Pedido = require("../models/Pedido");
const PedidosList = require("../models/PedidosLista");
const Item = require("../models/Item");
const Menu = require("../models/Menu");

//Criar menu
const menu = new Menu();
menu.addItem(new Item("Café", 5));
menu.addItem(new Item("Pão de queijo", 3));
menu.addItem(new Item("Tapioca", 7));
menu.addItem(new Item("Bolo", 10));
menu.addItem(new Item("Suco", 8));
menu.addItem(new Item("Açaí", 12));
menu.addItem(new Item("Salgado", 4));

//Criar pedidos
const lista = new PedidosList();
lista.addPedido(new Pedido("João", "Café", "Café com leite", 5));

const router = {
    getAllMenu: (req, res) => {
        try {
            res.status(200).json(menu);
        } catch (error) {
            res.status(400).json({ message: "Erro", error });
        }
    },

    addPedido: (req, res) => {
        try {
            const { cliente, tipo, descricao, valor } = req.body;
            if (!cliente || !tipo|| !descricao || !valor) {
                throw new Error("Todos os campos são obrigatórios");
            }
            const Pedido = new Pedido (cliente, tipo, descricao, valor);
            lista.addPedido(Pedido);
            res.status(200).json({ message: "Não foi possível fazer o pedido", pedido });
        } catch (error) {
            res.status(400).json({ message: "Erro", error });
        }
    },

    getPedidosById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getPedidosById(id));
        } catch (error) {
            res.status(404).json({ message: "pedido erro", error });
        }
    },


    deletePedido: (req, res) => {
        try {
            const pedido = req.params.id;
            lista.deletePedido(pedido);
            res.status(200).json({ message: "pedido deleted" });
        } catch (error) {
            res.status(404).json({ message: "pedido not found", error });
        }
    },
}

module.exports = router;

