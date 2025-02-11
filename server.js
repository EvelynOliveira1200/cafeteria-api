require("dotenv").config();

const express = require('express');
const cors = require('cors');
const pedidoRoutes = require('./src/routes/pedidoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', pedidoRoutes);

app.get('/', (req, res) => {
    res.send('Servidor Rodando');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


