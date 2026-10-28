var nome = prompt("Qual é o seu nome?");
alert(`Olá, ${nome}! Seja bem-vindo à Vinheria Agnello!`);
console.log(`Nome do usuário: ${nome}`);

alert("por favor tenha as informações do vinho que deseja cadastrar em mãos, para que o cadastro seja realizado com sucesso!");


// Valida texto: não deixa vazio
function validarTexto(pergunta) {
    var resposta = prompt(pergunta);
    while (resposta === null || resposta === "") {
        alert("Resposta inválida! Digite algo.");
        resposta = prompt(pergunta);
    }
    return resposta;
}

// Valida tipo: só aceita Tinto, Branco ou Rosé
function validarTipo(pergunta) {
    var tipo = validarTexto(pergunta);
    while (tipo !== "Tinto" && tipo !== "Branco" && tipo !== "Rosé") {
        alert("Tipo inválido! Digite Tinto, Branco ou Rosé.");
        tipo = validarTexto(pergunta);
    }
    return tipo;
}

// Valida número: não deixa letra nem número negativo
function validarNumero(pergunta) {
    var numero = parseInt(prompt(pergunta));
    while (!(numero > 0)) {
        alert("Número inválido! Digite um número maior que zero.");
        numero = parseInt(prompt(pergunta));
    }
    return numero;
}

// Verifica se o estoque está baixo (menos de 5)
function estoqueBaixo(quantidade) {
    return quantidade < 5;
}

// Classifica o vinho pela idade
function classificarVinho(safra) {
    var idade = 2026 - safra;
    if (idade <= 5) {
        return "Jovem";
    } else if (idade <= 15) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}
// Mostra os dados no console e avisa por alert
function mostrarDados(nomeV, tipoV, safraV, quantV, classificacao, baixo) {
    console.log(`Nome do vinho: ${nomeV}`);
    console.log(`Tipo do vinho: ${tipoV}`);
    console.log(`Safra do vinho: ${safraV}`);
    console.log(`Quantidade do vinho: ${quantV}`);
    console.log(`Classificação: ${classificacao}`);
    if (baixo) {
        console.log("⚠️ Estoque baixo!");
    }
    alert("Cadastro do vinho realizado! Veja os detalhes no console");
}

// ===== CADASTRO =====

var contador = 0;
var contadorEstoqueBaixo = 0;
var nomeMaisAntigo = "";
var safraMaisAntiga = 0;
var continuar = "s";

while (continuar === "s") {
    var nomeVinho = validarTexto("Qual é o nome do vinho que você deseja cadastrar?");
    var tipoVinho = validarTipo("Qual é o tipo do vinho que você deseja cadastrar? (Tinto, Branco, Rosé)");
    var safraVinho = validarNumero("Qual é a safra do vinho que você deseja cadastrar?");
    var quantidadeVinho = validarNumero("Qual é a quantidade do vinho que você deseja cadastrar?");

    var classificacao = classificarVinho(safraVinho);
    var baixo = estoqueBaixo(quantidadeVinho);

    contador++;

    if (baixo) {
        contadorEstoqueBaixo++;
    }

    // Compara a safra manualmente: o primeiro já é o mais antigo até aparecer um menor
    if (contador === 1 || safraVinho < safraMaisAntiga) {
        safraMaisAntiga = safraVinho;
        nomeMaisAntigo = nomeVinho;
    }

    mostrarDados(nomeVinho, tipoVinho, safraVinho, quantidadeVinho, classificacao, baixo);

    continuar = validarTexto("Deseja cadastrar outro vinho? (s/n)");
}

// ===== RESUMO FINAL =====

alert(`Resumo final:\nCadastros: ${contador}\nEstoque baixo: ${contadorEstoqueBaixo}\nVinho mais antigo: ${nomeMaisAntigo} (${safraMaisAntiga})`);
console.log(`Total de cadastros: ${contador}`);
console.log(`Vinhos com estoque baixo: ${contadorEstoqueBaixo}`);
console.log(`Vinho com a safra mais antiga: ${nomeMaisAntigo} (${safraMaisAntiga})`);

// ===== PÁGINA (mostra o último vinho cadastrado) =====

var nomeVinhoTitulo = document.getElementById("nome-vinho");
nomeVinhoTitulo.textContent = `O nome do vinho é: ${nomeVinho}`;

var tipoVinhoTitulo = document.getElementById("tipo-vinho");
tipoVinhoTitulo.textContent = `O tipo do vinho é: ${tipoVinho}`;

var safraVinhoTitulo = document.getElementById("safra-vinho");
safraVinhoTitulo.textContent = `A safra do vinho é: ${safraVinho}`;

var quantidadeVinhoTitulo = document.getElementById("quantidade-vinho");
quantidadeVinhoTitulo.textContent = `A quantidade do vinho é: ${quantidadeVinho}`;

console.log(nomeVinhoTitulo);
console.log(tipoVinhoTitulo);
console.log(safraVinhoTitulo);
console.log(quantidadeVinhoTitulo);