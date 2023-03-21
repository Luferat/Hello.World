/*
 Esse é um comentário
 de muitas linhas
 no JavaScript
 */

// Cria uma variável chamada "name".
let name;

// Cria uma variável chamada "email" e já atribui um valor.
let email = "joca@gmail.com"

// Cria uma variável global chamada "age".
var age = 29

// Cria uma constante chamada "CPF".
const CPF = "012.345.678-90"

// Chama a função "getEmail()".
getEmail();

document.write(email)
document.write('<br>' + CPF)

// Tenta (mas não consegue) trocar o valor da constante.
CPF = "000.000.000-00"

// Função que exibe o valor da variável "email".
function getEmail() {
    let email = 'maria@gmail.com'
    document.write(email + "<br>")
}