

const bycript = require("bcrypt");

async function criarHash(senha) {
    const salt = await bycript.genSalt(12);
    return bycript.hash(senha,salt);
}

async function compararSenha(senha,hash){
    return bycript.compare(senha,hash);
}

module.exports  = {
    criarHash,
    compararSenha
}
 
