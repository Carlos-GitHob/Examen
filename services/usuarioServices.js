const UsuarioExam = require("../models/usuarioModel");

exports.getAll = async () => await UsuarioExam.findAll();

exports.create = async (data) => await UsuarioExam.create(data);

exports.update = async (id_usuario,data) => {
    const usuario = await UsuarioExam.findByPk(id_usuario);
    if(!usuario) return null;
    return await UsuarioExam.update(data);
}

exports.remove = async (id_usuario) => {
    const usuario = await UsuarioExam.findByPk(id_usuario);
    if(!usuario) return false;
    await usuario.destroy();
    return true;
};