function tab() {
    var numero = prompt('Digite um numero');
    numero = parseInt(numero);
    document.querySelector('#head').innerHTML = '';
    if (!isNaN(numero) && numero !== 0) {
        //if(!(!numero.match(/([1-9])+/g))){
        for (contador = 1; contador <= 10; contador++) {
            var tab = numero * contador;
            document.querySelector('#head').innerHTML += `</br>  ${numero}  X  ${contador}  =  ${tab}`;
        }
    } else {
        alert('Número inválido');
        document.querySelector('#head').innerHTML = 'Erro!';
    }

}

function mostraAsterisco() {
    var asterisco = prompt('Digite a quantidade de Asterisco ');
    var linha = '';
    document.querySelector('#head').innerHTML = '';
    for (contador = 1; contador <= asterisco; contador++) {
        linha = linha + '*'
    }
    for (contador = 1; contador <= asterisco; contador++) {
        document.querySelector('#head').innerHTML += `</br>${linha}`;
    }
}

function voltar(){
    document.querySelector('#head').innerHTML = '';
    document.querySelector('#head').innerHTML = 'Tabuada';
  }