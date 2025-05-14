# 🚀 Checkpoint 2 — WebDev

Bem-vindo ao repositório do **Checkpoint 2 de Desenvolvimento Web**! Aqui estão reunidos três mini-projetos criativos feitos com **HTML**, **CSS** e **JavaScript**.

---

## 👥 Integrantes do Grupo

| Nome                               | Responsável por | GitHub                                                |
| ---------------------------------- | ------------------ | ----------------------------------------------------- |
| Leandro Afonso Silva Santos Júnior | Contador de tempo de Sessão com Feedback     | [TLean07](https://github.com/TLean07)                 |
| Luigi Escudero Grigoletto          | Enigma da Sequência Misteriosa | [Lueg2007](https://github.com/Lueg2007)               |
| Guilherme Barone Milani            | Lista de Cores com Estilização Dinamica | [GuilhermeBM3012](https://github.com/GuilhermeBM3012) |

---

## 🔗 Links Úteis

* **Repositório GitHub:** [https://github.com/TLean07/CP2WEB](https://github.com/TLean07/CP2WEB)

---

## ⏱️ 1. Contador de Tempo de Sessão com Feedback

**Descrição:**  
Inicia a contagem do tempo assim que a página é carregada. O tempo é armazenado via `sessionStorage`, permitindo continuidade mesmo após recarregar.

**Funcionalidades:**
- ⌛ Exibe tempo decorrido em segundos.
- 🔁 Persistência de sessão com `sessionStorage`.
- ⚠️ Exibe alerta sutil após 10 segundos para incentivar interação.

---

## 🔍 2. Enigma da Sequência Misteriosa

**Descrição:**  
Receba 3 números, identifique o padrão da sequência e gere mais 5 termos automaticamente!

**Padrões detectáveis:**
- ➕ Progressão Aritmética (PA)
- ✖️ Progressão Geométrica (PG)
- 🔄 Padrão Personalizado (semelhante à sequência de Fibonacci)

**Exemplo de uso:**
- Entrada: `2, 4, 6`
- Saída:  
  - 🧠 Padrão: Progressão Aritmética  
  - 📈 Sequência: 2, 4, 6, 8, 10, 12, 14

**Robustez:**  
Identifica corretamente mesmo quando os padrões tradicionais não se aplicam (ex: `2, 4, 7` → Padrão Personalizado).

---

## 🎨 3. Lista de Cores com Estilização Dinâmica

**Descrição:**  
Adicione cores por nome (em inglês) a uma lista estilizada automaticamente com base no nome digitado.

**Funcionalidades:**
- ✅ Adição dinâmica ao topo da lista.
- 📦 Armazenamento em array de objetos `{ nome, codigo }`.
- 🎨 Fundo colorido baseado no nome da cor (ex: "red", "blue", etc).
- ⚡ Atualização em tempo real no DOM.

**Visual esperado:**
```
[ 🔴 Red ]
[ 🔵 Blue ]
[ 🟢 Green ]
```

---

## 🛠️ Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/TLean07/CP2WEB.git
   ```
2. Abra o arquivo `index.html` de cada projeto no navegador.

---

## 🧰 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript Vanilla