const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get("/menu", pedidoController.getAllMenu);
router.post("/pedidos", pedidoController.addPedido);
router.delete("/pedidos/:id", pedidoController.deletePedido);
router.get("/pedidos/:id", pedidoController.getPedidosById);
router.get("/pedidos", pedidoController.getAllPedidos);


module.exports = router;