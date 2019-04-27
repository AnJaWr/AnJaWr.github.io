'use strict';
console.log('Dziala');

const PI = 3.14;

// function poleKola(r) {
//     let poleKola = PI * r * r;
//     console.log(poleKola);
// } - to funkja ES5


// poniżej funkja ES6. 
// const - by nikt nie zmienił funkcji
//wyglad funkji: const nazwa = parametr =>strzałka

const poleKola = (r, x) => {
    // x tutaj to ilosć kół
    let poleKola = x * PI * r * r;
    // console.log(poleKola);
    return poleKola;
}

poleKola(25);

let rDuzego = 108;

poleKola(rDuzego);

let wynikDzialaniaFunkji = poleKola(rDuzego, 10);
alert(wynikDzialaniaFunkji);