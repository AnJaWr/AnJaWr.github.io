// metoda to funkja w obikie
'use strit';

let kaja = {
    imie: "Kaja",
    wzrost: 158,
    przedstawOsobe() {
        console.log(this.imie);
    }

}

let krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe() {
        console.log(this.imie);
        // this - bez tego nie zadziala, nie bedzie wiedzie, gdzie szukac
        // this odwoluje sie tez do zagniezdzonego
    }
}
krystian.przedstawOsobe();
kaja.przedstawOsobe();

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

// instanja -  istniejacy obiekt danej klasy