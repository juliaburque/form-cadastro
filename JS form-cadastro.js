
function Validar(){
    let email = document.getElementById('loginEmail').value;
    let nome = document.getElementById('loginNome').value;
    let telefone = document.getElementById('loginTelefone').value;
    let dataNascimento = document.getElementById('loginDataNascimento').value;
    let CPF = document.getElementById('loginCPF').value;
    let endereço = document.getElementById('loginEndereço').value;
    let senha = document.getElementById('loginSenha').value;
    
    if(!email || !nome || !telefone || !dataNascimento || !CPF || !endereço || !senha ){
        alert("Campos de preenchimento obrigatorio. Favor preencher");
    }else{
        alert("campos preenchidos com sucesso");
    }
}

 