
/* Clases */

class Fighter {
    
    /* Propiedades */

    constructor (nombre, vida, fuerza, defensa, suerte) {
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.suerte = suerte;
        this.handicap = suerte - Math.floor(Math.random() * 5);
    };

    /* Métodos */

    ataque (enemigo) {
        enemigo.vida -= (this.fuerza - enemigo.defensa) * (this.suerte - this.handicap);
    };

    ataqueEspecial (enemigo) {
        enemigo.vida -= (this.fuerza * 0.5 + this.fuerza) - enemigo.defensa;
    };
};


/* Instancias */

/* Las Propiedades son: nombre, vida, fuerza, defensa y suerte. */

let heroe1 = new Fighter ("CARTMAN", 100, 10, 10, 10);

let heroe2 = new Fighter ("Stan", 100, 10, 10, 10);

let heroe3 = new Fighter ("Kyle", 100, 10, 10, 10);

let heroe4 = new Fighter ("Kenny", 100, 10, 10, 10);

let heroe5 = new Fighter ("Butters", 100, 10, 10, 10);

let heroe6 = new Fighter ("Jimmy", 100, 10, 10, 10);

let p1 = "";

let p2 = "";


/*console.log(heroe2.vida)*/



/* Funciones */

    /* Función: Atacar */

/*let atacar = () => {
    let turno = Math.floor(Math.random() * 2);
    let especial = Math.floor(Math.random() * 5);

    console.log(atacar);

    if(turno == 0) {
        if (especial == 3) {
            console.log("ATAQUE ESPECIAL");
            heroe1.ataqueEspecial(heroe2);
        }else {

            heroe1.ataque(heroe2);
        }
    }else{
        if (especial == 3) {
            console.log ("ATAQUE ESPECIAL");
            heroe2.ataqueEspecial(heroe1);
        }else{
            heroe2.ataque(heroe1);
        }
    };

    console.log ("Heroe escogido: " + heroe1.nombre + " ||| Vida Restante: " + heroe1.vida);
    console.log ("Heroe escogido: " + heroe2.nombre + " ||| Vida Restante: " + heroe2.vida);
    
};

/* Función: Inicio GameFigth. */ /* FUNCIONA */

let inicioGame = () => {
    let vidaInicial = 100;

    heroe1.vida = vidaInicial;
    heroe2.vida = vidaInicial;

    p1 = "";
    p2 = "";

};

console.log("Iniciamos el juego y la vida del player 1 es..." + heroe1.vida);
console.log("Iniciamos el juego y la vida del player 2 es..." + heroe2.vida);

/* Función: Cambiar de Pantalla: */ /* FUNCIONA A MEDIAS? */

let cambiarPantalla = (faseAhora, faseFutura) => {
    let pantallaActual = document.getElementById(faseAhora);
    pantallaDestino = document.getElementById(faseFutura);

   

    // Procedemos al cambio del pantalla //

    pantallaActual.style.display = "none";
    pantallaDestino.style.display = "block";        // OJO!!! .STYLE NO COGE LA PROPIEDAD ///

};

/* Traductor */ /* Funciona */

let allheroes = {
    "Cartman": heroe1,
    "Stan": heroe2,
    "Kyle": heroe3,
    "Kenny": heroe4,
    "Butters": heroe5,
    "Jimmy": heroe6
};


/* Función: Selección de Personaje. */ /* FUNCIONA */

let selectHero = (personaje) => {
    if(p1 == "") {
        p1 = allheroes[personaje];

        document.getElementById(personaje).className = "elegido";
        document.getElementById(personaje).onclick = "";

    }else {
        p2 = allheroes[personaje];

        document.getElementById(personaje).className = "elegido";
        document.getElementById(personaje).onclick = "";
    };

    console.log(`El jugador uno ha escogido a: ${p1.nombre}`)
    console.log(`El jugador dos ha escogido a: ${p2.nombre}`)



    /* sub-Función: Mensaje de Selección de Personaje. */ /*FUNCIONA */

    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = `PLAYER ONE SELECT: ${p1.nombre} <br> <br> PLAYER TWO SELECT: ${p2.nombre}`;


};

/* PROMESA: Delay (Tiene que estar arriba de: FUNCION: Tiempo de Delay) FUNCIONA  */ 

const resolveIn = delay =>
new Promise (res => setTimeout(() => res(delay), delay));

/* Funcion: Tiempo de Delay Entre pantalla 0 y 1 */ /* FUNCIONA */

resolveIn(2000).then(delay => {
    cambiarPantalla("fase0","fase1");   /* ID DIV MAESTRO DE CADA PANTALLA */
})





































/*let arrayTeamA = [];

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
} */


/* PARA OCULTAR PERSONAJES

    if(arrayTeamA.length == 3) {
            // Eliminamos a los personajes ya escogidos //
            for(let i = 0; i < arrayTeamA.length; i++) {
                document.getElementById(arrayTeamA[i]).style = "visibility : hidden";
            }
    } */


