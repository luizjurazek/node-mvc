const ClienteModel = require('../models/ClienteModel.js')

const clienteController = {
    getAllClients: async (req, res) => {
        try {
            const clients = await ClienteModel.getAllClients();
            res.status(200).json(clients)
        } catch (error) {
            res.status(500).json({error: 'Erro ao obter lista de clientes.'})
            console.log(error)
        }
    },

    createNewClient: async (req, res) => {
        const { nome, cpf } = req.body;
        try {
            const newClient = await ClienteModel.createNewClient(nome, cpf)
            res.status(201).json(newClient)
        } catch (error){
            res.status(500).json({error: 'Erro ao criar novo cliente.'})
            console.log(error)
        }
    }
}

module.exports = clienteController;