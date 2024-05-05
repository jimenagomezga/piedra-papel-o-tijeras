const areaBatalla = document.getElementById('zona_de_juego'); // Campo de batalla
const msjBatalla = document.getElementById('mensaje_de_batalla'); // Mensaje de batalla
const ataqueJugadorimg = document.getElementById('ataque_pc'); //img ataque pc
const ataquePcimg = document.getElementById('ataque_jugador'); //img ataque jugador
const btnPiedra = document.getElementById('boton_piedra'); //btn piedra
const btnPapel = document.getElementById('boton_papel'); //btn papel
const btnTijeras = document.getElementById('boton_tijera'); //btn tijera

const imagenes = [
    {
        name: "Piedra",
        url: "images/Piedra.png"
    },

    {
        name: "Papel",
        url: "images/Papel.png"
    },

    {
        name: "Tijeras",
        url: "images/Tijera.png"
    }
];

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;


function inicioJuego() { } {
    areaBatalla.style.display = 'none';
};

btnPiedra.addEventListener('click', function () {
    opcionJugador = "Piedra";
    opcionesPc();
});

btnPapel.addEventListener('click', function () {
    opcionJugador = "Papel";
    opcionesPc();
});

btnTijeras.addEventListener('click', function () {
    opcionJugador = "Tijeras";
    opcionesPc();
})


function opcionesPc() {
    var aleaorio = numeroAleatorioPc();

    if (aleaorio == 0) {
        opcionPc = "Piedra";
    } else if (aleaorio == 1) {
        opcionPc = "Papel";
    } else if (aleaorio == 2) {
        opcionPc = "Tijeras"
    };

    batalla();

};

function batalla() {
    if (opcionJugador == opcionPc) {
        msjBatalla.innerHTML = "Haz Empatado";
    } else if (opcionJugador == "Piedra" && opcionPc == "Tijeras") {
        msjBatalla.innerHTML = "Haz Ganado!";
    } else if (opcionJugador == "Papel" && opcionPc == "Piedra") {
        msjBatalla.innerHTML = "Haz Ganado!";
    } else if (opcionJugador == "Tijeras" && opcionPc == "Papel") {
        msjBatalla.innerHTML = "Haz Ganado";
    } else {
        msjBatalla.innerHTML = "Haz Perdido";
    };

    mostrarImagenes();

}


function numeroAleatorioPc() {
    let n = Math.floor(Math.random() * 3);
    return n;
}


function mostrarImagenes() {
    for (let i = 0; i < imagenes.length; i++) {
        if (opcionJugador == imagenes[i].name) {
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            ataqueJugadorimg.innerHTML = inserta;
        };

        if (opcionPc == imagenes[i].name) {
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            ataquePcimg.innerHTML = inserta;
        };

    };


    areaBatalla.style.display = 'flex';

};


window.addEventListener('load', inicioJuego);