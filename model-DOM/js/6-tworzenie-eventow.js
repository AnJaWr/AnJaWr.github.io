'use strict';
/* 
// trzy spoosby podpinania zdarzeń

let parSecond = document.querySelector("#parSecond");
console.log(parSecond);

// niech po kliknieciu pojawi sie alert
// w indexie w divie dodano onclick="klikAlert()" 

const klikAlert = (e) => {
        e.preventDefault()
        alert("Kliknieto diva");
        console.log(e);
    }
    // e- mozna podejrzec funkcje w konsoli- szczegoly zdarzenia, mozna dodac te inne e-event zdarzenia np. zablokowac deflautowe dzialanie linka

let link = document.querySelector('.link');

link.addEventListener('click', klikAlert);

// parSecond.onclick = klikAlert;

// wyzej - funkcja callbackbez naw iasow!!! inaczej wyswietli to podczas ladowania-;
//dziala tylko na pierwszy

parSecond.addEventListener('click', klikAlert);
// eventListener jest najmilej widziany 

// parSecond.addEventListener('click', () => { alert("Funkcja anonimowa") });

parSecond.removeEventListener('click', klikAlert); */


let parSecond = document.querySelector("#parSecond");
console.log(parSecond);

let paragrafWparSeond = document.getElementById('paragrafWparSeond');
console.log(paragrafWparSeond);

const klikDiv = (e) => {

    console.log("Kliknieto div");
}


const klikParagraf = (e) => {
    e.stopPropagation();
    console.log("Kliknieto paragraf");
}

parSecond.addEventListener('click', klikDiv);
paragrafWparSeond.addEventListener('click', klikParagraf);

// uruchamia sie wpierw najglebszy, potem nastepne
// aby temu zapobie, trzeba uzy .stopPropagation