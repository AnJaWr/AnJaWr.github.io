'use strit'

let imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
// doda 4. element

imiona[2] = 'Ela';
// podmieni 3. element

imiona.push('Geralt');
// doda element na koniec tablicy i wyswietli dlugos tablicy
imiona.pop();

console.log(imiona);

console.log(imiona.unshift('Robert'));

// dodaje robert na poczatku tablicy, zwraca liczbe elementow

console.log(imiona.shift());
// usunie

console.log(imiona.shift());
// znow usunieto pierwszy obiekt - monike
console.log(imiona);

console.log(imiona.length);

let imionaStr = imiona.join("-");
// Polaczy imiona w string, rozdizeli elementy myslnikiem
console.log(imionaStr);

imiona.reverse();
console.log(imiona);

imiona.unshift("Zenek");
console.log(imiona);

imiona.sort();
// sortuje
console.log(imiona);