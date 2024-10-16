// const bells = new Audio('./sounds/bell.wav');
const botaoComeca = document.querySelector('#comecaPomo');
// const botaoPausa = document.querySelector('');
const botaoPausaOpcoes = document.querySelector('#pauseOp');
const botaoProximoTempo = document.querySelector('proximo');
const sessao = document.querySelector('#timerPomo');
const numTempo = 0;
const numPausaCurta = 0;
const numPausaLonga = 0;
const textoTempoSessao = document.querySelector("#tempoId")
let intervalo;
let estado = true;

const appTimer = () => {
    const sessaoValor = Number.parseInt(sessao.textContent)

    if (estado) {
        estado = false;
        const totalSegundos = sessaoValor * 60;

        const updateSeconds = () => {
            const minutosSpan = document.querySelector('#minuto');
            const segundosSpan = document.querySelector('#segundo');
        
            totalSegundos--;
        
            let minutosFaltando = Math.floor(totalSegundos / 60);
            let segundosFaltando = totalSegundos % 60;
        
            if (segundosFaltando < 10) {
                segundosSpan.textContent = '0' + segundosFaltando;
            } else {
                segundosSpan.textContent = segundosFaltando;
            }
            minutosSpan.textContent = `${minutosFaltando}`
        
            
            // Function code here.
        }
        intervalo = setInterval(updateSeconds, 1000);
    } else {
        alert('Session has already started.')
    }
}

function tempoSeparacao(){
    if (minutosFaltando === 0 && segundosFaltando === 0) {
        
        numTempo += 1;
        clearInterval(intervalo);
        textoTempoSessao.innerHTML = `time ${numTempo}`
    }

}


function alteraBotaoComeca () {
    const acao = botaoComeca.getAttribute('action');
    if (acao === "start" || acao === "continue"){

    }

}

botaoComeca.addEventListener('click', appTimer);