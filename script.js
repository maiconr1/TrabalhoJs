// 1. Variáveis
function exibirVariaveis() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    document.getElementById("variavel-demo").innerHTML = `Nome: ${nome}, Idade: ${idade}`;
}

// 2. Operações Matemáticas e Lógicas
function operacoesMatematicas() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    let soma = numero1 + numero2;
    let multiplicacao = numero1 * numero2;
    let comparacao = (numero1 > numero2);
    document.getElementById("operacoes-demo").innerHTML = `
        Soma: ${soma} <br> 
        Multiplicação: ${multiplicacao} <br> 
        Número 1 é maior que Número 2? ${comparacao}
    `;
}

// 3. Funções
function mostrarSaudacao() {
    const nome = document.getElementById("nome").value;
    document.getElementById("funcoes-demo").innerHTML = `Olá, ${nome}! Bem-vindo ao JavaScript.`;
}

// 4. Eventos
function eventoExemplo() {
    document.getElementById("eventos-demo").innerHTML = "Evento ativado: Você clicou no botão!";
}

// 5. Manipulação do DOM
function mudarCor() {
    document.body.style.backgroundColor = "#add8e6";  // Altera a cor para azul claro
    document.getElementById("dom-demo").innerHTML = "Cor de fundo alterada!";
}

// 6. Estrutura Condicional
function verificarIdade() {
    const idade = parseInt(document.getElementById("idade").value);
    if (idade >= 18) {
        document.getElementById("condicional-demo").innerHTML = "Você é maior de idade.";
    } else {
        document.getElementById("condicional-demo").innerHTML = "Você é menor de idade.";
    }
}

// 7. Estrutura de Repetição
function mostrarRepeticoes() {
    const quantidade = parseInt(document.getElementById("quantidade").value);
    let repeticaoTexto = "";
    for (let i = 1; i <= quantidade; i++) {
        repeticaoTexto += `Repetição ${i}<br>`;
    }
    document.getElementById("repeticao-demo").innerHTML = repeticaoTexto;
}

// 8. Tipos de Dados
function mostrarTiposDados() {
    let numero = 100;           // Tipo Number
    let texto = "JavaScript";    // Tipo String
    let booleano = true;         // Tipo Boolean
    let objeto = {chave: "valor"};  // Tipo Object
    document.getElementById("tipos-demo").innerHTML = `
        Tipo Number: ${numero}<br>
        Tipo String: ${texto}<br>
        Tipo Boolean: ${booleano}<br>
        Tipo Object: ${JSON.stringify(objeto)}
    `;
}

// 9. Arrays
let frutas = [];
function adicionarFruta() {
    const fruta = document.getElementById("fruta").value;
    if (fruta) {
        frutas.push(fruta);
        document.getElementById("array-demo").innerHTML = `Frutas: ${frutas.join(", ")}`;
        document.getElementById("fruta").value = "";  // Limpa o campo de entrada
    }
}
