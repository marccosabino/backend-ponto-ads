const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Ponto = sequelize.define('Ponto', {
    id_ponto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
justificativa: {
    type: DataTypes.TEXT,
    allowNull: true
},
anexo: {
    type: DataTypes.STRING
    allowNull: true
},
passado
})