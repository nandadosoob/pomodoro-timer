// const bells = new Audio('./sounds/bell.wav');
const botaoComeca = document.querySelector('#comecaPomo');
const sessao = document.querySelector('#timerPomo');
let intervalo;
let estado = true;

const appTimer = () => {
    const sessaoValor = Number.parseInt(sessao.textContent)

    if (estado) {
        estado = false;
        let totalSegundos = sessaoValor * 60;

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
        
            if (minutosFaltando === 0 && segundosFaltando === 0) {
                bells.play()
                clearInterval(intervalo);
            }

            // Function code here.
        }
        intervalo = setInterval(updateSeconds, 1000);
    } else {
        alert('Session has already started.')
    }
}


botaoComeca.addEventListener('click', appTimer);