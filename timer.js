var seconds = 00;
var tempo = 00;
var intervalo
var temp = document.getElementById('tempo');
var sec = document.getElementById('segundos');

function start(){
    intervalo = setInterval(timer, 1000)
}

function timer(){
    tempo ++;

    if(tempo<9){
        temp.innerHTML = "0" + tempo;
    }
    if(tempo>9){
        temp.innerHTML = tempo;
    }
    if(tempo>59){
        seconds++;
        sec.innerHTML = "0" + seconds;
        tempo = 0;
        temp.innerHTML = "0" + 0;
    }
    if(sec>9){
        sec.innerHTML = seconds
    }

    // document.getElementById('crono').innerHTML = tempo
}

function pause() {
    clearInterval(intervalo)
}

function reset(){
    clearInterval(intervalo)
    tempo = 00
    seconds = 00
    document.getElementById('segundos').innerHTML = '00'
    document.getElementById('tempo').innerHTML = '00';
}
