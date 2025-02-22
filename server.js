const app = require('./app');
const sequelize = require('./config/dbSQL');

const PORT = process.env.PORT || 3000;

const server = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Base de datos connectada!");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("No se pudo connectar a la base de datos", error);
    }
}

server();