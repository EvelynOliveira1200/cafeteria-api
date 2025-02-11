const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get("/pedidos", pedidoController.getAllMenu);
router.post("/pedidos", pedidoController.addPedido);
router.delete("/pedidos/:id", pedidoController.deletePedido);
router.get("/pedidos/:id", pedidoController.getPedidosById);


module.exports = router;