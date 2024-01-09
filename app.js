const express = require('express')
const connection = require('./config/db.js')
const clienteController = require('./controllers/clienteController.js');

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/api/clientes', clienteController.getAllClients);
app.post('/api/clientes', clienteController.createNewClient);

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`);
});