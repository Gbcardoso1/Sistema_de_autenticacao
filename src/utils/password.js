
const bcrypt = require("bcrypt");

const hashSenha = async(senha) => {
    return await bcrypt(senha, 10);
};


const compararSenha = async (senha, hash){
    return await bcrypt.compare(senha, hash);
};

module.exports = {
    hashSenha,
    compararSenha
};