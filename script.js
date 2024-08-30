const pomodoro255 = document.getElementsByClassName("pomodoro25-5");
const pomodoro5010 = document.getElementsByClassName("pomodoro50-10");
const cronometro = document.getElementsByClassName("cronometro");
const tempLivre = document.getElementsByClassName("temporizadorLivre");
const tomateIcon255 = document.getElementById("tomate255");
const tomateIcon5010 = document.getElementById("tomate5010");
const cronometroIcon = document.getElementById("conometroIcon");
const temporizadorIcon = document.getElementById("temporizadorIcon");

const tempo = document.getElementById("timer");
const listaRegistro = document.getElementById("listaRegistrados");
const botaoAltera = document.getElementById("comeca");
const botaoRegistra = document.getElementById("registrar");
const botaoApaga = document.getElementById("reinicia");

const botaoIniciaPomo = document.getElementById("comecaPomo")
const botaoOpcoesPomo = document.getElementById("pauseOp")
const botaoProximo = document.getElementById("proximo")
const tempoPomodoro = document.getElementById("timerPomo")
let isPaused = false; 
let enteredTime = null; 

let timerPomo;
let intervalID = 0;
let timer = 0; //armazena o tempo em centesimos de segundos
let marks = [];


function formataTempo(time){
    const horas = Math.floor (time / 360000);
    const minutos = Math.floor ((time % 360000) / 6000);
    const segundos = Math.floor ((time % 6000) / 100);
    const centesimos = time % 100;

    return `${horas.toString().padStart(2,"0")}:${minutos.toString().padStart(2,"0")}:${segundos.toString().padStart(2,"0")}:${centesimos.toString().padStart(2,"0")}`;
}

function adicionaMarcacao(markIndex, marcaTempo){
    listaRegistro.style.display = "flex"
    listaRegistro.innerHTML += `<p id="marks">Marca ${markIndex}: ${formataTempo(marcaTempo)}</p>`
}


function marcaTempo(){
    marks.push(timer)
    adicionaMarcacao(marks.length,timer)
}

function resetaTempo(){
    clearInterval(intervalID)
    timer = 0
    marks = []
    setTime(timer)
    listaRegistro.innerHTML = ''
    botaoAltera.setAttribute("action", "start")
}

function alteraStart(){
    const acao = botaoAltera.getAttribute('action');

    clearInterval(intervalID);

    if (acao === "start" || acao === "continue"){
        intervalID = setInterval(() => {
            timer += 1;
            setTime(timer)
        }, 10);
        botaoAltera.setAttribute("action", "pause")
        botaoAltera.innerHTML.src = "./imagens/pause-bold.png";
        //muda o icone aq
    } else if (acao == "pause")
        botaoAltera.setAttribute("action", "continue")
        botaoAltera.innerHTML.src = "./imagens/play-bold.png";
        //muda o icone aq
}

function setTime(time){
    tempo.innerText = formataTempo(time)
}

function trocaFuncaoPomodoro255(){
    pomodoro255.style.display = "flex";
    pomodoro5010.style.display = "none";
    cronometro.style.display = "none";
    tempLivre.style.display = "none";
}

function trocaFuncaoPomodoro5010(){
    pomodoro255.style.display = "none";
    pomodoro5010.style.display = "flex";
    cronometro.style.display = "none";
    tempLivre.style.display = "none";
}

function trocaFuncaoCronometro(){
   
    cronometro.style.display = "flex";

}

function trocaFuncaoTemporizador(){
    pomodoro255.style.display = "none";
    pomodoro5010.style.display = "none";
    cronometro.style.display = "none";
    tempLivre.style.display = "flex";
}


botaoAltera.addEventListener("click", alteraStart);
botaoRegistra.addEventListener("click", marcaTempo);
botaoApaga.addEventListener("click", resetaTempo);

// tomateIcon255.addEventListener("click", trocaFuncaoPomodoro255);
// tomateIcon5010.addEventListener("click", trocaFuncaoPomodoro5010);
// cronometroIcon.addEventListener("click", trocaFuncaoCronometro);
// temporizadorIcon.addEventListener("click", trocaFuncaoTemporizador);


/////////////////////////////////////////////////////////////////////////////////////////////// POMODORO 25/5


function startTimer() { 
    timerPomo = setInterval(updateTimer, 1000); 
} 

function atualizaTempo(){
    tempoPomodoro.textContent = formataTempo(minutos, segundos);
    if (minutos === 0 && segundos === 0){
        clearInterval(timerPomo)
        alert('Time is up! Take a break.');

    }else if (!isPaused) { 
        if (segundos > 0) { 
            segundos--; 
        } else { 
            segundos = 59; 
            minutos--; 
        } 
    } 
}

function alteraPausaDespausa(){

}

function comecaPomodoro(){
    clearInterval(timerPomo); 
    minutos = enteredTime || 15; 
    segundos = 0; 
    isPaused = false; 
    tempoPomodoro.textContent = formatTime(minutos, segundos); 
    // const pauseResumeButton = 
    //     document.querySelector('.control-buttons button'); 
    // pauseResumeButton.textContent = 'Pause'; 
    startTimer(); 
}

botaoIniciaPomo.addEventListener("click", )
botaoOpcoesPomo.addEventListener("click", )
botaoProximo.addEventListener("click", )