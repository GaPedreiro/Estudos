// Capturar evento de submit do formulário

const form = document.querySelector('#formulario'); // através do ID definido no html nós podemos referenciar o campo aqui no backend.

form.addEventListener('submit', function (evento) {
    evento.preventDefault(); //Pausando o evento de enviar o formulário, evitando que ele atualize a página.
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value); //Capturando somente o valor do peso, se não passamors o '.value' virá toda as informações da classe 'peso' que tem lá no HTML
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso informado inválido.', false); //Para o 'isValid" funcionar.
        return;     //Inserindo um   'return' aqui, caso o código entre nessa condição, ele para a execução, tudo que houver após o 'return' não é executado.
    }
    if (!altura) {
        setResultado('Altura infomada inválida.', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    // Não foi utilizado o 'else if' porque a função já não será executada caso o valor do imc não a ative, caso ela seja executada quando o valor o imc for condizente com a condição dela, o fato de ter o 'return' já garante que os demais códigos não serão executados.
    if (imc >= 39.9) {
        return nivel[5];
    };

    if (imc >= 34.9) {
        return nivel[4];
    };

    if (imc >= 29.9) {
        return nivel[3];
    };

    if (imc >= 24.9) {
        return nivel[2];
    };

    if (imc >= 18.5) {
        return nivel[1];
    };

    if (imc < 18.5) {
        return nivel[0];
    };
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2) // Retorna o resultado com somente duas casas decimais.
}

function criaP (className) {  // Função para criar um parágrafo.
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}