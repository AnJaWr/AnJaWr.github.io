'use strict';
/* Opcja zaznaczania checboxów */

const zgoda1 = document.getElementById('zgoda-marketingowa-1');

const zgoda2 = document.getElementById('zgoda-marketingowa-2');

const zgody = document.getElementById("wszystkie-zgody");

zgody.addEventListener("change", zaznaczWszystkie);

function zaznaczWszystkie() {

    if (zgody.checked) {
        zgoda1.checked = true;
        zgoda2.checked = true;
    } else {
        zgoda1.checked = false;
        zgoda2.checked = false;
        zgoda1.disabled = false;
        zgoda2.disabled = false;
    }
}

/* Walidacja */

const formularz = document.querySelector('form');


const walidacja = (event) => {

    const polaTekstowe = document.querySelectorAll('input[type=text]');

    for (let i = 0; i < polaTekstowe.length; i++) {
        if (polaTekstowe[i].value == "") {
            event.preventDefault();
            let error1 = document.createElement("p");
            error1.innerHTML = "Uzupełnij dane";
            polaTekstowe[i].parentNode.replaceChild(error1, polaTekstowe[i].nextSibling);
        } else {
            error1.remove();
        }

    }

    if (zgoda1.checked == false) {
        event.preventDefault();
        let error2 = document.createElement("p");
        error2.innerHTML = "Zaznacz zgodę";
        zgoda1.parentNode.replaceChild(error2, zgoda1.nextSibling);
    } else {
        error2.remove();
    }

}


formularz.addEventListener('submit', walidacja)