const UsuarioExam = require("../models/usuarioModel");

exports.getAll = async () => await UsuarioExam.findAll();

exports.create = async (data) => await UsuarioExam.create(data);

exports.update = async (id_usuario,data) => {
    const [usuario] = await UsuarioExam.update(data, {
        where: {id_usuario}
    });

    if (usuario) {
        return await UsuarioExam.findByPk(id_usuario); 
    }

    return null; 
};

exports.remove = async (id_usuario) => {
    const usuario = await UsuarioExam.findByPk(id_usuario);
    if(!usuario) return false;
    await usuario.destroy();
    return true;
};