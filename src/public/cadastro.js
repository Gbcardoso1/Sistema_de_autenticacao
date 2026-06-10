
//CRIAR CADASTRO

const { response } = require("express");

const btnCadastrar = document.getElementById('btnCadastrar');

btnCadastrar.addEventListener('click', async (e) =>{
    const nome = document.getElementById('Cadastrar-nome').value;
    const senha = document.getElementById('Cadastrar-senha').value;
    const email = document.getElementById('Cadastrar-email').value;
    const confirmarSenha = document.getElementById('Cadastrar-confirmar-senha').value;

    if(senha !== confirmarSenha){
        alert("as senha não coincidem")
        return;
    }

    try{
        const response = await fetch("http:localhost:3000/auth/register", {
            method: "post",
            headers: {'content-type':'application/json'},
            body:JSON.stringify({
                nome,email,senha
            })
    });

    const data = await response.json();

    alert(data.message);

} catch(error){
    console.log(error);
}

});