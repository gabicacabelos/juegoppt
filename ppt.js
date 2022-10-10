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

function play(useroption){
    const machineoption = Math.floor(Math.random() * 3);
    const result = clacResult(useroption, machineoption);





    
       
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




