function analisarSequencia() {
  const n1 = parseInt(document.getElementById("num1").value);
  const n2 = parseInt(document.getElementById("num2").value);
  const n3 = parseInt(document.getElementById("num3").value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3) || n1 <= 0 || n2 <= 0 || n3 <= 0) {
    alert("Por favor, insira três números inteiros positivos.");
    return;
  }

  let padrao = "";
  let sequencia = [n1, n2, n3];

  if ((n2 - n1) === (n3 - n2)) {
    padrao = "Progressão Aritmética";
    const diff = n2 - n1;
    for (let i = 0; i < 5; i++) {
      sequencia.push(sequencia[sequencia.length - 1] + diff);
    }
  }
  else if ((n2 / n1 === n3 / n2) && Number.isInteger(n2 / n1) && (n2 / n1 > 0)) {
    padrao = "Progressão Geométrica";
    const razao = n2 / n1;
    for (let i = 0; i < 5; i++) {
      sequencia.push(sequencia[sequencia.length - 1] * razao);
    }
  }
  else {
    padrao = "Padrão Personalizado (semelhante a Fibonacci)";
    for (let i = 0; i < 5; i++) {
      let len = sequencia.length;
      sequencia.push(sequencia[len - 1] + sequencia[len - 2]);
    }
  }

  document.getElementById("resultado").innerHTML = `
    <strong>Padrão identificado:</strong> ${padrao}<br>
    <strong>Sequência completa:</strong> ${sequencia.join(", ")}
  `;
}