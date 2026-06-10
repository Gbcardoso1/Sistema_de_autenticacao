
//ROTAS DE CADASTRO 

const express = require('express');
const router = express.Router();

const {registro,login,enviarCodigo,validarCodigo,redefinirSenha} = require("../controllers/authControllers");

router.post("/registro", register);
router.post("/login", login);
router.post("/esqueceu-senha", enviarCodigo);
router.post("/verificar-codigo", validarCodigo);
router.post("/resertar-senha", redefinirSenha);


module.exports = router;


