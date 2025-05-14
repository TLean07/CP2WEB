const corDigitada = document.getElementById('cor');
const listaDeCores = document.getElementById('listaVazia'); 

const cores = []; 

const mapaCores = {
      red: '#ff0000',
      blue: '#0000ff',
      green: '#008000',
      yellow: '#ffff00',
      black: '#000000',
      white: '#ffffff',
      orange: '#ffa500',
      purple: '#800080',
      pink: '#ffc0cb',
      brown: '#a52a2a',
      gray: '#808080',
      cyan: '#00ffff',
      magenta: '#ff00ff',
    };

    corDigitada.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            const nomeCor = corDigitada.value.trim().toLowerCase();
            if(nomeCor === '') return; 

            const codigo = mapaCores[nomeCor] || ''; 

            cores.unshift({nome: nomeCor, codigo: codigo}); 

            atualizarLista();
            corDigitada.value = '';
        }
    });

    function atualizarLista() {
        listaDeCores.innerHTML = ''; 
        cores.forEach(cor => {
        const item = document.createElement('li');
        item.textContent = cor.nome;
        if (cor.codigo) {
          item.style.backgroundColor = cor.codigo;
        } else {
          item.style.backgroundColor = '#ccc';
          item.style.color = '#000';
        }
        listaDeCores.appendChild(item);
      });
    }