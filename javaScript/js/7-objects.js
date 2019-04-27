// metoda to funkja w obikie
'use strit';

let kaja = {
    imie: "Kaja",
    wzrost: 158,
    przedstawOsobe() {
        console.log(this.imie);
    }

}

// let krystian = {
//     imie: "Krystian",
//     wzrost: 180,
//     przedstawOsobe() {
//         console.log(this.imie);
//         // this - bez tego nie zadziala, nie bedzie wiedzie, gdzie szukac
//         // this odwoluje sie tez do zagniezdzonego
//     }
// }
// krystian.przedstawOsobe();
// kaja.przedstawOsobe();

console.log(kaja.wzrost);
// inny sposob zapisu:
console.log(kaja['wzrost']);

kaja.wzrost = 200;

console.log(kaja);


let monetaZl = {
    promien: 20,
    nominal: 100,
    waga: 50,
    material: "zloto"
}

console.log(monetaZl.material);

// instanja -  istniejacy obiekt danej klasy; klasa-sablon

class Osoba {
    // nazwa klasy wielką literą
    constructor(imie, nazwisko, wzrost, oczy) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
        this.oczy = oczy;

        // construtor - tworzy klase
    }


    wyswietlInfo() {
        console.log("Imię: " + this.imie + "\n" +
            "Nazwisko: " + this.nazwisko + "\n" +
            "Wzrost: " + this.wzrost + "\n" +
            "Oczy: " + this.oczy);
    }

}

let krystian = new Osoba('Krystian', 'Dziopa', 180, 'niebieskie');
let andrzej = new Osoba('Andrzej', 'Szymański', 177, 'niebieskie');
andrzej.wzrost = 178;

andrzej.wyswietlInfo();
console.log(krystian, andrzej);