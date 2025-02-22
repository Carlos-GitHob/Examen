const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbSQL");

const UsuarioExam = sequelize.define("UsuarioExam", {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0,
        },
    },
    
},

{
    tableName: "usuario_exam",
    timestamps: false  
}
)

module.exports = UsuarioExam;
