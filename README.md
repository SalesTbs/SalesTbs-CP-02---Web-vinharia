# ✅ Checkpoint 02 – Sistema de Avaliação de Estoque e Tendência de Vinhos

**Projeto: _vinheria-agnello-checkpoint02_**

---

### 👥 Trabalho em Grupo

- Este checkpoint deve ser feito **em grupo de até 5 pessoas**
- Cada integrante deve realizar **ao menos dois novos commits**, com mensagens claras
- Código **organizado, indentado e comentado**
- Reaproveite a ideia do CP01, mas partindo de um **novo repositório**

---

### 📤 Entrega

- Criar um novo repositório no GitHub com o nome:  
  **`vinheria-agnello-checkpoint02`**
- Ativar o **GitHub Pages**
- Enviar via **Microsoft Teams**:
  - Link do repositório no GitHub
  - Link da página publicada no GitHub Pages

---

### 📄 README.md – Explicação do Projeto

No arquivo `README.md`, incluir:
- Nome do projeto  
- Descrição do que foi implementado no Checkpoint 02  
- Nome completo dos integrantes do grupo  
- Link do GitHub Pages  
- (Opcional) Imagem ou GIF de demonstração

---

### 🧠 Objetivo da Atividade

Aprofundar os fundamentos do JavaScript com:
- **Funções e reutilização de código**
- **Escopo de variáveis**
- **Laços de repetição e iteração (`for`, `while`, etc.)**

---

### 📋 Requisitos do Sistema

1. O sistema deve funcionar **via `prompt()` e `alert()`** como no CP01.
2. **Reaproveite a ideia de cadastro de vinhos**, mas agora:
   - Permita o **cadastro de vários vinhos em sequência**, perguntando ao final se deseja cadastrar outro.
3. Crie **funções reutilizáveis**:
   - Para validar entradas
   - Para verificar se o estoque está baixo (menos de 5)
   - Para classificar o vinho (jovem, amadurecido, antigo)
   - Para mostrar os dados no console com aviso por `alert()`
4. **Evite repetir código**: funções são obrigatórias.
5. **Escopo deve ser respeitado**:
   - Variáveis declaradas dentro das funções devem ser usadas localmente
6. Ao final, exiba:
   - Quantos cadastros foram feitos
   - Quantos vinhos têm estoque baixo
   - O vinho com a safra mais antiga (comparando manualmente dentro das iterações)

⚠️ **Não é permitido usar arrays nem objetos!**  
Todas as informações devem ser armazenadas e manipuladas por variáveis únicas (ex: `nome1`, `nome2`, `quant1`, etc.)

---

### 💡 Dica

- Use um **contador para acompanhar quantos cadastros foram feitos**
- Utilize variáveis com numeração no nome para diferenciar cada vinho cadastrado (sim, na unha!)

---

### 💻 Página `index.html`

- Deve manter:
  - Título com o nome da vinícola
  - Breve descrição do projeto
  - Estilização com CSS (em `style.css`)
- O código JS deve rodar **após o carregamento da página** (script no final do `body`)

---

### 📁 Estrutura do Projeto

```
vinheria-agnello-checkpoint02/
│
├── index.html
├── README.md
│
└── src/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── assets/
        └── imgs/
```