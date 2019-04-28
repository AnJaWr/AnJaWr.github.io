'use strit';

let mainHeader = document.getElementById('header');
// przypisujemy naglowek strony do zmiennej

console.log(mainHeader.innerHTML);
// pobiera to, co w srodku od <p>
console.log(mainHeader.innerText);
// pobiera same teksty
console.log(mainHeader.outerHTML);
// pobiera tez to co na zwenatrz: od <header>

mainHeader.id = "nowe-id";

mainHeader.setAttribute("class", "haeder");
// parametry- atrybut i wartosc

mainHeader.className = "nowa-klasa";

let klasy = mainHeader.className;
// pobiera liste klas
console.log(klasy);
//mozna zrobic petle i dodac funkje zmieniajaca kolor


// jesli chcemy zmienic jedna klase

// mainHeader.classList.add("active");
//mainHeader.classList.toggle("active");

let zmienKolor = document.getElementById("toggle");
zmienKolor.addEventListener('click', () => {
    zmienKolor.classList.toggle("active")
});


zmienKolor.style.olor = "blue";
zmienKolor.style.backgroundColor = "lime";