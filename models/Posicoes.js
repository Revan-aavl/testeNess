const db = require('./db');

const Posicoes = db.sequelize.define('tblPosicoes', {
    posicao: {
        type: db.Sequelize.STRING,
        allowNull: false
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

Posicoes.sync({force: true})
// module.exports = Posicoes






















