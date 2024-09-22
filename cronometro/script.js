
const tempo = document.getElementById("timer");
const listaRegistro = document.getElementById("listaRegistrados");
const botaoAltera = document.getElementById("comeca");
const botaoRegistra = document.getElementById("registrar");
const botaoApaga = document.getElementById("reinicia");

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