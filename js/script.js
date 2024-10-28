function buscaCep() {

    let cep = document.querySelector("#cep").value;
    // result = cep.replace("-", " ")

    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(date => {
            console.log(date);
            resultCep.innerHTML = date.cep
            rua.innerHTML = date.logradouro
            bairro.innerHTML = date.bairro
            complemento.innerHTML = date.complemento
            estado.innerHTML = date.estado
            uf.innerHTML = date.uf
            ddd.innerHTML = date.ddd
        })
    } else {
        alert("Digite apenas os 8 números do cep");
    }
    
}
document.querySelector('button')
    .addEventListener('click', buscaCep)