const usuariosService = require("../services/usuarioServices");

exports.getAllUsuarios = async (req, res) => {
    const usuarios = await usuariosService.getAll();
    res.status(200).json(usuarios);
};

exports.createUsuario = async (req,res) => {
    const usuario = await usuariosService.create(req.body);
    res.status(200).json(usuario);
};

exports.updateUsuario = async (req, res) => {
    const usuarioUpdated = await usuariosService.update(req.params.id, req.body);
    if(!usuarioUpdated){
        return res.status(404).json({message: "Usuario no encontrado"});
    }
    res.status(200).json(usuarioUpdated);
}

exports.deleteUsuario = async (req, res) => {
    const usuarioDeleted = await usuariosService.remove(req.params.id);
    if(!usuarioDeleted){
        return res.status(404).json({message: "Usuario no encontrado"});
    }

    res.json({message: "Usuario eliminado exitosamente"});
};