const connection = require('../config/db.js');

const Cliente = {
    getAllClients: async () => {
        try {
            const query = 'SELECT * FROM Cliente';
            const [rows] = await connection.promise().query(query);
            return rows;
        } catch (error){
            throw error;
        }
    }, 

    createNewClient: async (nome, cpf) => {
        try {
            
            const query = 'INSERT INTO Cliente (nome, cpf) VALUES (?, ?);';
            const [result] = await connection.promise().query(query, [nome, cpf]);
            return result[0];
        } catch (error){
            throw error;
        }
    }
};

module.exports = Cliente;