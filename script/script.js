/*
    ETEC DE SAPOPEMBA 2C DESENVOLVIMENTO DE SISTEMAS MANHÃ 2021
    PROGRAMAÇÃO DE WEB II
    desenvolvido por Gustavo Cavalcante, Kayo Vinicius e Brendon Gomes
*/

const input = document.querySelector("#username")
const input2 = document.querySelector("#password")

function checar(){
    let acesso = false
    let loginDataBase = {
        // Banco de ddados do usuario
        nome: ["Israel", "israel", "Brendon", "Gustavo", "Kayo"],
        senha: ["123", "123", "123", "123", "123"]
    }
    let cadastroLength = loginDataBase.nome.length
    for(let i = 0; i < cadastroLength; i++ ){
        let userLogin = loginDataBase.nome[i]
        let passwordLogin = loginDataBase.senha[i]
        if (userLogin == input.value && passwordLogin == input2.value){
            acesso = true
        }
    }
    if (acesso){
        alert("Login com sucesso")
        // direcioanr para o site especifico
        window.location.href = "html/site_esportes.html"
    } else{
        if(input.value == "" || input2.value == ""){
            alert("Preencha todos os campos!")
        }else{
            alert("Usuário ou Senha incorretos")
        }
    }
}