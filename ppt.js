const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const TIE = 0;
const WIN = 1;
const LOSE = 2;

let usercontador = 0;
let machinecontador = 0;


/* dar a cada imagen un valor numerico */







const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");
const resultado = document.getElementById("text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");
const contadorPartidas = document.getElementById("table");
const resetbtn = document.getElementById("reset");






rockbtn.addEventListener("click", () => {
    play(ROCK);
    userImg.src = "img/piedra.jpg";
    
    
});

paperbtn.addEventListener("click", () => {
    play(PAPER);
    userImg.src = "img/papel.jpg";
   
    

}
);

scissorsbtn.addEventListener("click", () => {
    play(SCISSORS);
    userImg.src = "img/tijera.jpg";
    
    
    
}
);
resetbtn.addEventListener("click", () => {
    /* habilitar los botones */
    rockbtn.disabled = false;
    paperbtn.disabled = false;
    scissorsbtn.disabled = false;
    /* ocultar el boton de reset */
    reset.style.display = "none";
    text.innerHTML = "¿Piedra, papel o tijera?";
    userImg.src = "img/piedra.jpg";
    machineImg.src = "img/piedra.jpg";
    contadorPartidas.innerHTML = "Partidas: " + usercontador + " - " + machinecontador;
}
);

function play(useroption){
    const machineoption = Math.floor(Math.random() * 3);
    const result = clacResult(useroption, machineoption);
    /* ocultar el boton de reset */
    

       
        machineImg.src = machineoption == ROCK ? "img/piedra.jpg" : machineoption == PAPER ? "img/papel.jpg" : "img/tijera.jpg";
   

    switch(result){
        case TIE:
            text.innerHTML = "Empate🤔";
            contadorPartidas.innerHTML = "Partidas: " + usercontador + " - " + machinecontador;
            break;
        case WIN:
            text.innerHTML = "¡Ganaste!😁";
            usercontador++;
            contadorPartidas.innerHTML = "Partidas: " + usercontador + " - " + machinecontador;
            if(usercontador == 10){
                text.innerHTML = "¡Ganaste la partida!😎";
                usercontador = 0;
                machinecontador = 0;
                /* desabilitar los botones */
                rockbtn.disabled = true;
                paperbtn.disabled = true;
                scissorsbtn.disabled = true;
                /* mostrar el boton de reset */
                reset.style.display = "block";

            }
            break;
        case LOSE:
            text.innerHTML = "Perdiste😒";
            machinecontador++;
            contadorPartidas.innerHTML = "Partidas: " + usercontador + " - " + machinecontador;
            if(machinecontador == 10){
                text.innerHTML = "¡Perdiste la partida!😭";
                usercontador = 0;
                machinecontador = 0;
                /* desabilitar los botones */
                rockbtn.disabled = true;
                paperbtn.disabled = true;
                scissorsbtn.disabled = true;
                /* mostrar el boton de reset */
                reset.style.display = "block";
            }

            break;
    }

}




function clacResult(useroption, machineoption){

    if(useroption == machineoption){
        return TIE;
    }
    else if(useroption == ROCK && machineoption == SCISSORS){
        return WIN;
    }
    else if(useroption == PAPER && machineoption == ROCK){
        return WIN;    
    }
    else if(useroption == SCISSORS && machineoption == PAPER){
        return WIN;
    }
    else{
        return LOSE;
    }
}
   



// Language: javascript




