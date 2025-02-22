const express = require("express");
const { body, param } = require("express-validator");
const validateRequest = require("../middleware/validateMiddlware"); 
const usuarioController = require("../controllers/usuarioController");
const router = express.Router();

router.get("/", usuarioController.getAllUsuarios); 

router.post("/", 
    validateRequest([
        body("nombre").notEmpty().withMessage("El nombre is requerido"),
        body("email").isEmail().withMessage("Email valido es requerido"),
        body("edad").isInt({ min: 0 }).withMessage("La edad debe de ser mayor a 0"),
    ]),
    usuarioController.createUsuario
);

router.put("/:id_usuario",
    validateRequest([
        param("id_usuario").isInt().withMessage("El ID debe ser un numero entero"),
        body("nombre").optional().notEmpty().withMessage("El nombre no tiene que estar vacio"),
        body("email").optional().isEmail().withMessage("Email valido es requerido"),
        body("edad").optional().isInt({min : 0}).withMessage("Edad tiene que ser positivo"),
    ]),
    usuarioController.updateUsuario
);

router.delete("/:id",
    validateRequest([param("id").isInt().withMessage("El ID debe ser un numero entero"),]),
    usuarioController.deleteUsuario
);

module.exports = router;