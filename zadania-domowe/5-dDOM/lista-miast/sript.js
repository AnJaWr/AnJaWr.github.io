/* Wyświetl nazwy miast w postaci listy numerowanej.
Miasta zostały umieszczone w tablicy poniżej.*/

const cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];


let listaMiast = document.createElement("ol");

document.body.appendChild(listaMiast);
let i;
let liClass = document.createAttribute("class");
liClass.value = "city;"

cities.forEach(lista = () => {
    for (i = 0; i < cities.length; i++) {
        const miasto = document.createElement("li");


        listaMiast.appendChild(miasto);


        miasto.innerText = cities[i];
        // miasto.appendChild(nazwaMiasta);
    }





});