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