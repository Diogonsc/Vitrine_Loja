var emailField = document.querySelector('.email-field')
var nomeField = document.querySelector('.nome-field')

cadastrar.addEventListener('click', (e) => {
    registrarEmail(emailField.value, nomeField.value)
})


function registrarEmail (nome,email) {

    if(!validateEmail(emailField.value, nomeField.value )) {
        alert('Por favor, insira um e-mail válido')
    } else {
        console.log(nome, email)
        localStorage.setItem('email', email, 'nome', nome)
        alert('Created Successfully')
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}