const db = require('./db');

const Jogadores = db.sequelize.define('tblJogadores', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    posicoesId: {
        type: db.Sequelize.STRING,
        allowNull: false,
        references: {
            model: Posicoes,
            key: 'nome'
        }
    }
})

// const Post = db.sequelize.define('tblPosicoes', {
//     posicao: {
//         type: db.Sequelize.STRING,
//         allowNull: false
//     }
// })

// const Post = db.sequelize.define('tblJogadores', {
//          nome: {
//              type: db.Sequelize.STRING,
//              allowNull: false
//          },

//          condominioId: {
//             type: db.Sequelize.STRING,
//             allowNull: false,
//             references: {
//                 model: Condominio,
//                 key: 'nome'
//             }
//      })

Jogadores.sync({force: true})
module.exports = Jogadores






















