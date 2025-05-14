let tempo = sessionStorage.getItem("tempoSessao");
tempo = tempo ? parseInt(tempo) : 0;
 
const tempoSpan = document.getElementById("tempo");
const mensagem = document.getElementById("mensagem");
 
function atualizarContador() {
  tempo++;
  tempoSpan.textContent = tempo;
  sessionStorage.setItem("tempoSessao", tempo);
 
  if (tempo > 10) {
    mensagem.classList.add("mensagem-visivel");
  }
}
 
setInterval(atualizarContador, 1000);