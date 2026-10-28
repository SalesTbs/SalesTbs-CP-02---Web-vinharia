# Vinheria Agnello 
## Sistema de Avaliação de Estoque e Tendência de Vinhos

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![FIAP](https://img.shields.io/badge/FIAP-Engenharia%20de%20Software-ED145B?style=for-the-badge)

[![Acessar Projeto](https://img.shields.io/badge/Acessar%20Projeto-9C0828?style=for-the-badge&logo=githubpages&logoColor=white)](https://salestbs.github.io/SalesTbs-CP-02---Web-vinharia/)
[![Repositório](https://img.shields.io/badge/Reposit%C3%B3rio-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SalesTbs/SalesTbs-CP-02---Web-vinharia)

Projeto desenvolvido para o **Checkpoint 02** da disciplina de Web Development (FIAP).

O sistema permite cadastrar vinhos em sequência pelo navegador, avalia o estoque de cada um, classifica o vinho pela idade da safra e, ao final, apresenta um resumo do que foi catalogado.

**Acesse a página publicada:** https://salestbs.github.io/SalesTbs-CP-02---Web-vinharia/

---

## O que foi implementado

- **Cadastro em sequência:** ao clicar em *Iniciar Cadastro*, o usuário informa nome, tipo, safra e quantidade de cada vinho via `prompt()`, e ao final de cada cadastro escolhe se deseja cadastrar outro.
- **Validação de entradas:** campos de texto não aceitam valor vazio, o tipo só aceita *Tinto*, *Branco* ou *Rosé*, e safra e quantidade só aceitam números maiores que zero.
- **Verificação de estoque:** vinhos com menos de 5 unidades são sinalizados como estoque baixo.
- **Classificação por idade da safra:**

  | Idade        | Classificação |
  |--------------|---------------|
  | até 5 anos   | Jovem         |
  | 6 a 15 anos  | Amadurecido   |
  | mais de 15   | Antigo        |

- **Exibição dos dados:** cada vinho cadastrado é registrado no console, com aviso por `alert()`.
- **Resumo final:** total de cadastros, quantidade de vinhos com estoque baixo e o vinho de safra mais antiga, exibidos por `alert()`, no console e em uma tabela na própria página.

## Conceitos de JavaScript aplicados

- **Funções reutilizáveis:** `validarTexto`, `validarTipo`, `validarNumero`, `estoqueBaixo`, `classificarVinho`, `mostrarDados`, `iniciarCadastro` e `exibirResumoNaPagina`.
- **Escopo de variáveis:** os dados do cadastro são declarados dentro de `iniciarCadastro()` e usados apenas localmente.
- **Laços de repetição:** `while` para repetir os cadastros e para repetir perguntas até a entrada ser válida.
- **Sem arrays e sem objetos:** as informações são manipuladas por variáveis simples, e a comparação da safra mais antiga é feita manualmente a cada iteração.

## Estrutura do projeto

```
├── index.html
├── README.md
└── src/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── assets/
        └── imgs/
```

## Como executar

1. Acesse o link do GitHub Pages acima, ou clone o repositório e abra o `index.html` no navegador.
2. Clique em **Iniciar Cadastro** e responda às perguntas.
3. Abra o console do navegador (F12) para acompanhar os registros detalhados.

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Integrantes

| Nome                                  | RM       |
|---------------------------------------|----------|
| Guilherme Andrade Dos Santos Trevisan | RM576676 |
| João Victor Matos de Almeida          | RM574928 |
| David Manoel Barros Pereira           | RM576915 |
| Lucas dos Santos Gomes                | RM576912 |
| Thales Bernardino Seixas              | RM574617 |
