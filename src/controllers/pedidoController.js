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
menu.addItem(new Item("Café com leite", 5));
menu.addItem(new Item("Café preto", 5));
menu.addItem(new Item("Açaí com granola", 12));
menu.addItem(new Item("Tapioca de frango", 7));
menu.addItem(new Item("Bolo de cenoura", 10));
menu.addItem(new Item("Suco de laranja", 8));
menu.addItem(new Item("Coxinha", 4));
menu.addItem(new Item("Pizza", 3));


//Criar pedidos
const lista = new PedidosList();
lista.addPedido(new Pedido("João", "Café", "Café com leite", 5, "concluido"));
lista.addPedido(new Pedido("Maria", "Suco", "Suco de laranja", 8, "concluido"));
lista.addPedido(new Pedido("José", "Açaí", "Açaí com granola", 12, "concluido"));
lista.addPedido(new Pedido("Marta", "Tapioca", "Tapioca de frango", 7, "concluido"));
lista.addPedido(new Pedido("Carlos", "Bolo", "Bolo de cenoura", 10));
lista.addPedido(new Pedido("Ana", "Salgado", "Coxinha", 4));
lista.addPedido(new Pedido("Pedro", "Pão de queijo", "Pão de queijo", 3));
lista.addPedido(new Pedido("Lucas", "Café", "Café preto", 5));

const router = {
    getAllMenu: (req, res) => {
        try {
            res.status(200).json(menu);
        } catch (error) {
            res.status(400).json({ message: "Erro", error });
        }
    },

    getAllPedidos: (req, res) => {
        try {
            res.status(200).json(lista);
        } catch (error) {
            res.status(400).json({ message: "Erro", error });
        }
    },

    addPedido: (req, res) => {
        try {
            const { cliente, tipo, descricao, valor } = req.body;
            if (!cliente || !tipo || !descricao || !valor) {
                throw new Error("Todos os campos são obrigatórios");
            }
            const pedido = new Pedido(cliente, tipo, descricao, valor);
            lista.addPedido(pedido);
            res.status(200).json({ message: "Pedido realizado com sucesso", pedido });
        } catch (error) {
            res.status(400).json({ message: "Erro", error });
        }
    },

    getPedidosById: (req, res) => {
        try {
            const id = req.params.id;
            const pedido = lista.getPedidosById(id);

            if (pedido) {
                res.status(200).json({ cliente: pedido.cliente, status: pedido.status });
            } else {
                res.status(404).json({ message: "Pedido não encontrado" });
            }

        } catch (error) {
            res.status(404).json({ message: "pedido erro", error });
        }
    },

    deletePedido: (req, res) => {
        try {
            const pedido = lista.getPedidosById(req.params.id);
            if (pedido.status == "concluido") {
                return res.status(403).json({ message: "Pedido já foi concluído, não pode ser cancelado." });
            }
            lista.deletePedido(req.params.id);
            res.status(200).json({ message: "Pedido cancelado com sucesso!" })

        } catch (error) {
            res.status(404).json({ message: "pedido not found", error });
        }
    },
}

module.exports = router;

