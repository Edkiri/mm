// Ya no hay ningún archivo html que haga enlace a este 'storage.js'. 
// Lo separé cosa que cada archivo html tenga un js.

// esta función 'saveJugador' la pasé al players.js.
// STORAGE JUGADOR

const saveJugador = () => {

    let jugador = document.getElementById("nombreJugador").value;
  
    sessionStorage.setItem("usuario", jugador);
    window.location.href = "../pages/winner.html";
  
    
        // if (jugador.length !== 0) {
        // sessionStorage.setItem("usuario", jugador);

        // window.location.href = "../pages/winner.html";
        // } else {
        //     alert("Introduce un nombre");
        // }
  }

////////////////////////////////////////////////////////////




//SESSION STORAGE NIVEL
const saveFacil = () => {
    sessionStorage.setItem("level", 10);
    window.location.href = "../pages/colorsL1.html";
}

const saveInter = () => {
    sessionStorage.setItem("level", 8);
    window.location.href = "../pages/colorsL2.html";
}

const saveDif = () => {
    sessionStorage.setItem("level", 6);
    window.location.href = "../pages/colorsL3.html";
}

//TRAER NIVELES
let nivel = sessionStorage.getItem("level");
console.log("¿Qué nivel es?", nivel)


//COLOR PICKER

//Pintado de los círculos por el usuario
const colorPicker = (inputId, circleId) => {
    let colorInput = document.getElementById(inputId);
    let circle = document.getElementById(circleId);

    colorInput.oninput = () => {
        circle.style.backgroundColor = colorInput.value;
        console.log("Color seleccionado:", colorInput.value);
    }
}

colorPicker("cp1", "circle1");
colorPicker("cp2", "circle2");
colorPicker("cp3", "circle3");
colorPicker("cp4", "circle4");
colorPicker("cp5", "circle5");
colorPicker("cp6", "circle6");


