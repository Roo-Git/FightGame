let arrayTeamA = [];

let arrayTeamB = [];

let selectHeroe = (figther) => {
    if(arrayTeamA.length < 3) {
        // Introducimos Heroe en el array A //
        arrayTeamA.push(figther);
        // getElementByID //
        document.getElementById(figther).className = "Elegido";
        document.getElementById(figther).onclick = "";

        if(arrayTeamA.length == 3) {
            // Cambio color de fondo //
            for(let i = 0; i < arrayTeamA.length; i++) {
                document.getElementById(arrayTeamA[i]).style = "background-color : red";
            }
    } 
        
    }else if(arrayTeamB.length < 3) {
        // Introducimos Heroe en el array B //
        arrayTeamB.push(figther);
        document.getElementById(figther).className = "Elegido";
        document.getElementById(figther).onclick = "";
    };
    
    console.log("EL EQUIPO A: ", arrayTeamA);
    console.log("EL EQUIPO B: ", arrayTeamB);
} 


/* PARA OCULTAR PERSONAJES

    if(arrayTeamA.length == 3) {
            // Eliminamos a los personajes ya escogidos //
            for(let i = 0; i < arrayTeamA.length; i++) {
                document.getElementById(arrayTeamA[i]).style = "visibility : hidden";
            }
    } */


class Fighter {
    
    constructor (nombre, fuerza, defensa, suerte, malaSuerte) {
        this.vida = 100;
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.suerte = suerte;
        this.malaSuerte = malaSuerte;
    };

    ataqueNormal (enemigo) {
        enemigo.vida -= (this.fuerza - enemigo.suerte);
    };

    ataqueEspecial (enemigo) {
        enemigo.vida -= (this.fuerza - enemigo.malaSuerte)
    };
};

let player1 = new Fighter ("cartman", 40, 50, 0, 40);

let player2 = new Fighter ("stan", 20, 20, 50, 30);

player1.ataqueNormal(player2);

console.log(player2.vida);