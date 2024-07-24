const tempo = document.getElementById("timer")
const listaRegistro = document.getElementById("listaRegistrados")
const botaoAltera = document.getElementById("comeca");
const botaoRegistra = document.getElementById("registrar");
const botaoApaga = document.getElementById("reinicia")
let intervalID = 0;
let timer = 0; //armazena o tempo em centesimos de segundos
let marks = [];

const formataTempo = (time) =>{
    const horas = Math.floor (time / 360000);
    const minutos = Math.floor ((time % 360000) / 6000);
    const segundos = Math.floor ((time % 6000) / 100);
    const centesimos = time % 100;

    return `${horas.toString().padStart(2,"0")}:
    ${minutos.toString().padStart(2,"0")}:
    ${segundos.toString().padStart(2,"0")}:
    ${centesimos.toString().padStart(2,"0")}:`;
}

const adicionaMarcacao = (markIndex, marcaTempo) =>{
    listaRegistro.innerHTML += `<p>Marca ${markIndex}: ${formataTempo(marcaTempo)}</p>`
}

const marcaTempo = () =>{
    marks.push(timer)
    adicionaMarcacao(marks.length,timer)
}

const resetaTempo = () =>{
    clearInterval(intervalID)
    timer = 0
    marks = []
    setTime(timer)
    listaRegistro.innerHTML = ''
    botaoAltera.setAttribute("action", "start")
}

const alteraStart = () =>{
    const acao = botaoAltera.getAttribute('action');

    clearInterval(intervalID);

    if (acao === "start" || acao === "continue"){
        intervalID = setInterval(() => {
            timer += 1;
            setTime(timer)
        }, 10);
        botaoAltera.setAttribute("action", "pause")
        //muda o icone aq
    } else if (acao == "pause")
        botaoAltera.setAttribute("action", "continue")
        //muda o icone aq
}

const setTime = (time) =>{
    tempo.innerText = formataTempo(time)
}

botaoAltera.addEventListener("click", alteraStart);
botaoRegistra.addEventListener("click", marcaTempo);
botaoApaga.addEventListener("click", resetaTempo);