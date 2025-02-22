const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);

app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send({message: "Internal Server Error"});
});

module.exports = app;