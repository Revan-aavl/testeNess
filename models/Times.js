const db = require('./db');

const Times = db.sequelize.define('tblTimes', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

// Times.sync({force: true})
module.exports = Times






















