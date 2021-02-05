
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

let heroe1 = new Fighter ("CARTMAN", 100, 60, 0, 0);

let heroe2 = new Fighter ("Stan", 100, 50, 0, 0);

let heroe3 = new Fighter ("Kyle", 100, 40, 0, 0);

let heroe4 = new Fighter ("Kenny", 100, 30, 0, 0);

let heroe5 = new Fighter ("Butters", 100, 90, 0, 0);

let heroe6 = new Fighter ("Jimmy", 100, 80, 0, 0);

let p1 = "";

let p2 = "";


/*console.log(heroe2.vida)*/

/* Traductor */ /* Funciona */

let allheroes = {
    "Cartman": heroe1,
    "Stan": heroe2,
    "Kyle": heroe3,
    "Kenny": heroe4,
    "Butters": heroe5,
    "Jimmy": heroe6
};


/* Funciones */

/* Función: Inicio GameFigth. */ /* FUNCIONA */

let inicioGame = () => {
    let vidaInicial = 100;

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

        showHeroe1.innerHTML = `<div><img class="estiloContricante" src="img/${p1.nombre}.png"></div>`;
        showHeroe2.innerHTML = `<div><img class="estiloContricante" src="img/${p2.nombre}.png"></div>`;

        console.log(showHeroe1.innerHTML);

        /* Asignar a los heroes... */

        console.log(p1);
        console.log(p2);

        /* Cambiar de pantalla porque ya tenemos a los personajes elegidos */

        resolveIn(1000).then (delay => {
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
            info.innerHTML = `${p1.nombre} SUPER ATTACK`
        }else {
            info.innerHTML = `${p1.nombre} NORMAL ATTACK`
            p1.ataque(p2);
        }
    }else{
        if (especial == 3) {
            console.log ("ATAQUE ESPECIAL");
            p2.ataqueEspecial(p1);
            info.innerHTML = `${p2.nombre} SUPER ATTACK`
        }else{
            info.innerHTML = `${p2.nombre} NORMAL ATTACK`
            p2.ataque(p1);
        }
    };

    console.log ("Heroe escogido: " + p1.nombre + " ||| Vida Restante de:" + " " + p1.nombre + " " + heroe1.vida);
    console.log ("Heroe escogido: " + p2.nombre + " ||| Vida Restante de:" + " " + p2.nombre + " " + heroe2.vida);
    
    /* Sub-Funcion: VIDA DE LOS HEROES  TESTING*/

    let vida1 = document.getElementById("vidaP1");  /* TENGO QUE CREAR UN ID DE  vidaP1 */
    let vida2 = document.getElementById("vidaP2");  /* TENGO QUE CREAR UN ID DE ganador vidaP2 */
    let mostrarGanador = document.getElementById("ganador"); /* TENGO QUE CREAR UN ID DE ganador */
    let mostrarNombreGanador = document.getElementById("nombreGanador"); /* TENGO QUE CREAR UN ID DE nombreGanador */

    if(p1.vida <= 0) {
        console.log("PLAYER 2 WINS");
        mostrarGanador.innerHTML = `<img id="ganadorPantallaFinal" src="img/${p2.nombre}.png">`; /* TENGO QUE CREAR UN ID DE ganadorPantallaFinal */
        mostrarNombreGanador.innerHTML = `${p2.nombre} WINS THE GAME`

        /* Pasamos a la última pantalla si ha ganado el PLAYER 2 */
        resolveIn(3000).then(delay => {     
            cambiarPantalla("fase2","fase3");
        });

        /* Volvemos a iniciar el juego */
        resolveIn(1000).then(delay => {         
            cambiarPantalla("fase3","fase0");
        });
    }else if(p2.vida <= 0) {
        console.log("PLAYER 1 WINS");
        mostrarGanador.innerHTML = `<img id="ganadorPantallaFinal" src="img/${p1.nombre}.png">`; /* TENGO QUE CREAR UN ID DE ganadorPantallaFinal */
        mostrarNombreGanador.innerHTML = `${p1.nombre} WINS THE GAME`

        /* Pasamos a la última pantalla si ha ganado el PLAYER 1 */
        resolveIn(3000).then(delay => {     
            cambiarPantalla("fase2","fase3");
        });
        
        /* Volvemos a iniciar el juego */
        resolveIn(4000).then(delay => {         
            cambiarPantalla("fase3","fase0");       /* PROBLEMA AL VOLVER A INICIAR EL JUEGO */
        });
    }else{
        vida1.innerHTML = Math.floor(`${p1.vida}`);     /* NO ENTIENDO ESTE INNERHTML, NI EL NUMERO RANDOM */
        vida2.innerHTML = Math.floor(`${p2.vida}`);
    };
};





/* PROMESA: Delay (Tiene que estar arriba de: FUNCION: Tiempo de Delay) FUNCIONA  */ 

const resolveIn = delay =>
new Promise (res => setTimeout(() => res(delay), delay));

/* Funcion: Tiempo de Delay Entre pantalla 0 y 1 */ /* FUNCIONA */

resolveIn(1000).then(delay => {
    cambiarPantalla("fase0","fase1");   /* ID DIV MAESTRO DE CADA PANTALLA */
})





























