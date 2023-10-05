function meuEscopo () {
    const form = document.querySelector('.form'); //pode ser selecionado pelo nome da classe ou pelo tipo '.form'
    const resultado = document.querySelector('.resultado'); //Parte que printa os resultados na tela.
    const pessoas = [];

    /*form.onsubmit = function (evento) { //capturando a ação do form, as ações aqui irao ocorrer no momento do envio do formulário.
       
        evento.preventDefault(); //Isso é pra prevenir o comportamento normal da página, ela atualiza ao enviarmos o formulário, não queremos que ela atualize porque perdemos as informações quando isso acontece.
        alert(69);
        console.log('Formulário enviado'); //Mensagem printada no console ao enviarmos o formulário
    };*/

    function recebeEventoform (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ` + 
            `${peso.value} ${altura.value}</p>`;

        console.log(`Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, Peso: ${peso.value}, Altura: ${altura.value}`); // Tem que passar o '.value' no final se quiser que ele retorne o valor atribuído a variável, caso contrário ele só printa no console que se trata de um HTML input
    }
    form.addEventListener('submit', recebeEventoform);
}

meuEscopo();


