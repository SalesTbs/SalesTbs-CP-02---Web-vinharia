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

// Roda todo o cadastro quando o usuário clica no botão "Iniciar Cadastro"
function iniciarCadastro() {
    var nome = prompt("Qual é o seu nome?");
    alert(`Olá, ${nome}! Seja bem-vindo à Vinheria Agnello!`);
    console.log(`Nome do usuário: ${nome}`);

    alert("por favor tenha as informações do vinho que deseja cadastrar em mãos, para que o cadastro seja realizado com sucesso!");

    var contador = 0;
    var contadorEstoqueBaixo = 0;
    var nomeMaisAntigo = "";
    var safraMaisAntiga = 0;
    var continuar = "s";
    var linhasTabela = ""; // guarda as linhas da tabela como texto (sem array)

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

        // Adiciona o vinho como uma nova linha da tabela da página
        linhasTabela += `<tr>
            <td>${contador}</td>
            <td>${nomeVinho}</td>
            <td>${tipoVinho}</td>
            <td>${safraVinho}</td>
            <td>${quantidadeVinho}</td>
            <td>${classificacao}</td>
            <td>${baixo ? "Baixo" : "OK"}</td>
        </tr>`;

        continuar = validarTexto("Deseja cadastrar outro vinho? (s/n)").toLowerCase();
    }

    // ===== RESUMO FINAL =====

    alert(`Resumo final:\nCadastros: ${contador}\nEstoque baixo: ${contadorEstoqueBaixo}\nVinho mais antigo: ${nomeMaisAntigo} (${safraMaisAntiga})`);
    console.log(`Total de cadastros: ${contador}`);
    console.log(`Vinhos com estoque baixo: ${contadorEstoqueBaixo}`);
    console.log(`Vinho com a safra mais antiga: ${nomeMaisAntigo} (${safraMaisAntiga})`);

    exibirResumoNaPagina(linhasTabela, contador, contadorEstoqueBaixo, nomeMaisAntigo, safraMaisAntiga);
}

// ===== PÁGINA =====

// Mostra a tabela com os vinhos e o resumo final na seção de saídas
function exibirResumoNaPagina(linhas, total, totalBaixo, nomeAntigo, safraAntiga) {
    var areaSaida = document.querySelector("#saidasJS div");

    areaSaida.innerHTML = `
        <table>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Safra</th>
                <th>Quantidade</th>
                <th>Classificação</th>
                <th>Estoque</th>
            </tr>
            ${linhas}
        </table>
        <p>Total de cadastros: ${total}</p>
        <p>Vinhos com estoque baixo: ${totalBaixo}</p>
        <p>Vinho com a safra mais antiga: ${nomeAntigo} (${safraAntiga})</p>
    `;
}

var botaoIniciar = document.getElementById("B_Start");
botaoIniciar.addEventListener("click", iniciarCadastro);
