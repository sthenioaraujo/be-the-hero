const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },    
    
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        // Criando id com String aleatória utilizando "crypto"
        const id = crypto.randomBytes(4).toString('HEX');

        // Comando "await" faz com que sistema aguarde o fim da inserção para executar a próxima sentença
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json( {id} );
    }
}