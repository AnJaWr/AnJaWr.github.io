'use strict';
/* Przypisanie*/
const formularz = document.querySelector('form');
const polaTekstowe = document.querySelectorAll('input[type=text]');
const zgoda1 = document.getElementById('zgoda-marketingowa-1');

const zgoda2 = document.getElementById('zgoda-marketingowa-2');

const zgody = document.getElementById('wszystkie-zgody');

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



formularz.addEventListener('submit', walidacja);

function walidacja(e) {
    e.preventDefault();
    for (let i = 0; i < polaTekstowe.length; i++) {
        // dla każdego inputu typu text sprawdź warunek:
        if (polaTekstowe[i].value == "") {
            // jeżeli string jest pusty

            // nie wysyłaj
            e.preventDefault();
            //  tworzymy wyskakujacy jako paragraf błąd:
            let error1 = document.createElement("p");
            // ustawiamy tekst, wpisany w ten paragraf
            error1.innerHTML = "Uzupełnij dane";
            //każemy mu się wstawić pod polem:
            formularz.insertBefore(error1, polaTekstowe[i]);
        } else {
            console.log("Warunek spełniony");
            formularz.removeChild(error1);
        }
    }
    if (zgoda1.checked == false) {
        event.preventDefault();
        let error2 = document.createElement("p");
        error2.innerHTML = "Zaznacz zgodę";
        formularz.insertBefore(error2, zgoda2);
    } else {
        console.log("Warunek spełniony");
        formularz.removeChild(error2);
    }

};