/* 'uste strict';

// for (let i = 10; i > 0; --i) {
//     console.log(i);
// }

let tablica = ["Krysitan", "Monika", "Danuta"];

for (let i = 0; i < tablica.length; i++) {
    console.log(tablica[i]);
}


// to dziala tylki na tablicach
//  definiujemy funkcję, ktora wykona się gdy

const iteruj = (element, index) => {
    console.log("Element z indexem: " + index + " ma wartość " +
        element);
}
tablica.forEach(iteruj);


tablica.forEach((element, index) => {
    console.log("Element z indexem: " + index + " ma wartość " +
        element);
});
// funkja anonimowa, potrzebna raz - wtedy anonimowe . Zapis EE6

// for in - przeleci przez elementy obiektu

let person = {
    name: 'Krysitan',
    age: 35
}

for (let key in person) {
    console.log(person[key]);
}

// petla for of

let iterable = [10, 20, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);

}

let it = 0;
while (it < 10) {
    console.log(it);
    it++;
}

let iter = 20;
// wykona sie o najmniej 1 raz
do {
    // console.log(iter);
    iter++;
    console.log(iter);
} while (iter < 10)
 */



// przerywanie
/* let a = 0;

while (a < 10) {
    console.log(++a);

    if (a == 5) {
        break;
    }
}

 */


for (let b = 0; b < 10; ++b) {
    if (b == 5) {
        continue;
    } else {
        console.log(b);
    }

    console.log("--");
}