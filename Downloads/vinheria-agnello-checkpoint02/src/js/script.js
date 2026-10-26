nome = prompt("Qual é o seu nome?");
alert(`Olá,  ${nome}! Seja bem-vindo à Vinharia Agnello!`);
console.log(`Nome do usuário: ${nome}`);
alert('Cadastro realizado! Veja os detalhes no console');

alert("por favor tenha as informações do vinho que deseja cadastrar em mãos, para que o cadastro seja realizado com sucesso!");

nomeVinho = prompt("Qual é o nome do vinho que você deseja cadastrar?");
console.log(`Nome do vinho: ${nomeVinho}`);

tipoVinho = prompt("Qual é o tipo do vinho que você deseja cadastrar? (Tinto, Branco, Rosé)");
console.log(`Tipo do vinho: ${tipoVinho}`);

safraVinho = parseInt(prompt("Qual é a safra do vinho que você deseja cadastrar?"));
console.log(`Safra do vinho: ${safraVinho}`);

quantidadeVinho = parseInt(prompt("Qual é a quantidade do vinho que você deseja cadastrar?"));
console.log(`Quantidade do vinho: ${quantidadeVinho}`);

alert("Cadastro do vinho realizado! Veja os detalhes no console");

var nomeVinhoTitulo = document.getElementById("nome-vinho");
nomeVinhoTitulo.textContent = `O nome do vinho é: ${nomeVinho}`

var tipoVinhoTitulo = document.getElementById("tipo-vinho");
tipoVinhoTitulo.textContent = `O tipo do vinho é: ${tipoVinho}`

var safraVinhoTitulo = document.getElementById("safra-vinho");
safraVinhoTitulo.textContent = `O safra do vinho é: ${safraVinho}`

var quantidadeVinhoTitulo = document.getElementById("quantidade-vinho");
quantidadeVinhoTitulo.textContent = `O safra do vinho é: ${quantidadeVinho}`

console.log(nomeVinhoTitulo)
console.log(tipoVinhoTitulo)
console.log(safraVinhoTitulo)
console.log(quantidadeVinhoTitulo)