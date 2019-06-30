const cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];


let listaMiast = document.createElement("ol");

document.body.appendChild(listaMiast);
let i;


cities.forEach(() => {
    for (i = 0; i < cities.length; i++) {
        const miasto = document.createElement("li");
        listaMiast.appendChild(miasto);
        miasto.innerText = cities[i];
        let liClass = document.createAttribute("class");
        liClass.value = "city";
        miasto.setAttributeNode(liClass);

    }





});