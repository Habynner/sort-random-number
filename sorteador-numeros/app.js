function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(btnName) {
    let btn = document.getElementById(btnName);
    if(btn.classList.contains('container__botao-desabilitado')){
        btn.classList.remove('container__botao-desabilitado');
        btn.classList.add('container__botao');
    }else{
        btn.classList.remove('container__botao');
        btn.classList.add('container__botao-desabilitado');
   }
}

function sortear(){
    alterarStatusBotao('btn-sortear');
    let qnt = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    const sorteados = [];
    let num;

    for (let i = 0; i < qnt; i++) {
        num = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(num)){
        num = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(num);
    }

    let result = document.getElementById('resultado');
    result.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao('btn-reiniciar');

}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao('btn-sortear');
    alterarStatusBotao('btn-reiniciar');
}
