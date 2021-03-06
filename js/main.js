
/* PROMESA: Delay (Tiene que estar arriba de: FUNCION: Tiempo de Delay) FUNCIONA  */ 

const resolveIn = delay =>
new Promise (res => setTimeout(() => res(delay), delay));

/* Funcion: Tiempo de Delay Entre pantalla 0 y 1 */ /* FUNCIONA */

 resolveIn(1000).then(delay => {
    cambiarPantalla("fase0","fase1");   

}) 


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
        enemigo.vida -= (this.fuerza - this.defensa) * (this.suerte - this.handicap);
    };

    ataqueEspecial (enemigo) {
        enemigo.vida -= (this.fuerza * 0.5 + this.fuerza) - enemigo.defensa;
    };
};


/* Instancias */

/* Las Propiedades son: nombre, vida, fuerza, defensa y suerte. */

let heroe1 = new Fighter ("cartman", 200, 30, 5, 1);

let heroe2 = new Fighter ("stan", 200, 30, 5, 4);

let heroe3 = new Fighter ("kyle", 200, 20, 5, 2);

let heroe4 = new Fighter ("kenny", 200, 30, 5, 5);

let heroe5 = new Fighter ("butters", 200, 20, 5, 3);

let heroe6 = new Fighter ("jimmy", 200, 20, 5, 2);

let p1 = "";

let p2 = "";


/*console.log(heroe2.vida)*/

/* Traductor */ /* Funciona */

let allheroes = {
    "cartman": heroe1,
    "stan": heroe2,
    "kyle": heroe3,
    "kenny": heroe4,
    "butters": heroe5,
    "jimmy": heroe6
};


/* Funciones */

/* Función: Inicio GameFigth. */ /* FUNCIONA */

let inicioGame = () => {
    let vidaInicial = 200;

    p1.vida = vidaInicial;
    p2.vida = vidaInicial;

    p1 = "";
    p2 = "";


};
console.log("Iniciamos el juego y la vida del player 1 es..." + heroe1.vida);
console.log("Iniciamos el juego y la vida del player 2 es..." + heroe2.vida);


/* Función: Cambiar de Pantalla: */ /* FUNCIONA */

let cambiarPantalla = (faseAhora, faseFutura) => {
    let pantallaActual = document.getElementById(faseAhora);
    let pantallaDestino = document.getElementById(faseFutura);

   

    // Procedemos al cambio del pantalla // */ FUNCIONA */

    pantallaActual.style.display = "none";
    pantallaDestino.style.display = "block";        

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
    

    console.log(`El jugador uno ha escogido a: ${p1.nombre}`)
    console.log(`El jugador dos ha escogido a: ${p2.nombre}`)



    /* sub-Función: Mensaje de Selección de Personaje. */ /*FUNCIONA */

    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = `PLAYER ONE SELECT: ${p1.nombre} <br> <br> PLAYER TWO SELECT: ${p2.nombre}`;
    
        /* sub-Función: Cargo a los personajes en Fase 2 */

        let showHeroe1 = document.getElementById("contricante1");
        let showHeroe2 = document.getElementById("contricante2");

        showHeroe1.innerHTML = `<div><img class="estiloContrincante" src="img/${p1.nombre}.png"></div>`;
        showHeroe2.innerHTML = `<div><img class="estiloContrincante" src="img/${p2.nombre}.png"></div>`;

        console.log(showHeroe1.innerHTML);

        /* Asignar a los heroes... */

        console.log(p1);
        console.log(p2);

        /* Cambiar de pantalla porque ya tenemos a los personajes elegidos */

        resolveIn(500).then (delay => {
            cambiarPantalla("fase1", "fase2")
        });
    };    
};

/* Función: Atacar */ /* Funciona */

let atacar = () => {
    let turno = Math.floor(Math.random() * 2);
    let especial = Math.floor(Math.random() * 5);
    let info = document.getElementById("infoVs");

    if(turno == 0) {
        if (especial == 3) {
            console.log("ATAQUE ESPECIAL");
            p1.ataqueEspecial(p2);
            info.innerHTML = `${p1.nombre} makes a SUPER Attack to ` + `${p2.nombre}.<br><br>` + `${p2.nombre}'s life is now: ` + `${p2.vida}`
        }else {
            info.innerHTML = `${p1.nombre} makes a NORMAL Attack to ` + `${p2.nombre}.<br><br>` + `${p2.nombre}'s life is now: ` + `${p2.vida}`
            p1.ataque(p2);
        }
    }else{
        if (especial == 3) {
            console.log ("ATAQUE ESPECIAL");
            p2.ataqueEspecial(p1);
            info.innerHTML = `${p2.nombre} makes a SUPER Attack to ` + `${p1.nombre}.<br><br>` + `${p1.nombre}'s life is now: ` + `${p1.vida}`
        }else{
            info.innerHTML = `${p2.nombre} makes a SUPER Attack to ` + `${p1.nombre}.<br><br>` + `${p1.nombre}'s life is now: ` + `${p1.vida}`
            p2.ataque(p1);
        }
    };

    console.log ("Heroe escogido: " + p1.nombre + " ||| Vida Restante de:" + " " + p1.nombre + " " + p1.vida);
    console.log ("Heroe escogido: " + p2.nombre + " ||| Vida Restante de:" + " " + p2.nombre + " " + p2.vida);
    
    /* Sub-Funcion: Mostrar ganador*/
    let mostrarGanador = document.getElementById("ganador"); /* TENGO QUE CREAR UN ID DE ganador */
    let mostrarNombreGanador = document.getElementById("nombreGanador"); /* TENGO QUE CREAR UN ID DE nombreGanador */

    if(p1.vida <= 0) {
        console.log("PLAYER 2 WINS");
        mostrarGanador.innerHTML = `<img id="ganadorPantallaFinal" src="img/${p2.nombre}.png">`; /* TENGO QUE CREAR UN ID DE ganadorPantallaFinal */
        mostrarNombreGanador.innerHTML = `${p2.nombre} WINS THE GAME`

        /* Pasamos a la última pantalla si ha ganado el PLAYER 2 */
        resolveIn(2000).then(delay => {     
            cambiarPantalla("fase2","fase3");
        });

    }else if(p2.vida <= 0) {
        console.log("PLAYER 1 WINS");
        mostrarGanador.innerHTML = `<img id="ganadorPantallaFinal" src="img/${p1.nombre}.png">`; /* TENGO QUE CREAR UN ID DE ganadorPantallaFinal */
        mostrarNombreGanador.innerHTML = `${p1.nombre} WINS THE GAME`

        /* Pasamos a la última pantalla si ha ganado el PLAYER 1 */
        resolveIn(2000).then(delay => {     
            cambiarPantalla("fase2","fase3");
        });
    };
};































