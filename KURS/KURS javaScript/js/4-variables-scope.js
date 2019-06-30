'use strict';

let kontoLukasza = 1000000;

/* zmienne gobalne sa dostepne wewnatrz skryptu
 */

const zrobZakupy = (zaIle) => {
    // dawniej: function zrobZakupy(zaIle) {
    let kontoNatalii = 2000000;
    let ileZostaloNaKoncie = kontoLukasza - zaIle;
    return ileZostaloNaKoncie
}

// console.log(kontoLukasza);

// nie wyswietli kontaNatalii, bo jest wewnatrz funkcji

console.log(zrobZakupy(500000));

// ZAWSZE uzywamy zmiennyh lokalnych !!!!!!!!!!!


const zaplacPodatek = (kwota) => {
    console.log(kontoNatalii)

}