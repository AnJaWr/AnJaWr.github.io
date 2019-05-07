'use strict';

const formularz = document.querySelector('form');

const polaTekstowe = document.querySelectorAll('input[type=text]');

const zgoda1 = document.getElementById('zgoda-marketingowa-1');

const zgoda2 = document.getElementById('zgoda-marketingowa-2');

const zgody = document.getElementById('wszystkie-zgody');

const wyslij = document.getElementById('wyslij');



for (let i = 0; i < polaTekstowe.length; i++) {
    let error1 = document.createElement("p");
    let errorClass = document.createAttribute("class");
    errorClass.value = "error";
    error1.setAttributeNode(errorClass);
    error1.innerHTML = "";
    formularz.insertBefore(error1, polaTekstowe[i].nextSibling);
}


let error2 = document.createElement("p");
let error2Id = document.createAttribute("id");
error2.setAttributeNode(error2Id);
error2Id.value = "error2";
error2.innerHTML = "";
formularz.insertBefore(error2, zgoda2);


const pError = document.getElementsByClassName('error');
console.log(pError);


/* Zaznaczanie wszystkich zgód na raz */
zgody.addEventListener("change", zaznaczWszystkie);

function zaznaczWszystkie() {
    if (zgody.checked) {
        zgoda1.checked = true;
        zgoda2.checked = true;
        zgoda1.disabled = true;
        zgoda2.disabled = true;
    } else {
        zgoda1.checked = false;
        zgoda2.checked = false;
        zgoda1.disabled = false;
        zgoda2.disabled = false;
    }
};
/* WALIDACJA */
const wprowadzText = (e) => {
    for (let i = 0; i < polaTekstowe.length; i++) {
        // dla każdego inputu typu text sprawdź warunek:
        if (polaTekstowe[i].value === "") {
            e.preventDefault();
            // jeżeli string jest pusty
            // ustawiamy tekst, wpisany w ten paragraf
            // for (let j = 0; j < pError.length; j++) {
            polaTekstowe[i].nextSibling.innerHTML = "Uzupełnij dane";
        }
        // nie wysyłaj
        else {
            polaTekstowe[i].nextSibling.innerHTML = "";
        }
    }
    console.log("Warunek spełniony");
};



const checkBoxing = (e) => {
    if (zgoda1.checked == false) {
        e.preventDefault();
        error2.innerHTML = "Zaznacz zgodę";
    } else {
        console.log("Warunek spełniony");
        error2.innerHTML = "";
    }
};


const walidacja = (e) => {
    wprowadzText(e);
    checkBoxing(e);
};


/* sprawdzanie checkboxów */


formularz.addEventListener('submit', walidacja);