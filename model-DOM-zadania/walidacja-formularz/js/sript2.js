'use strict';
/* Przypisanie*/
const formularz = document.querySelector('form');
const polaTekstowe = document.querySelectorAll('input[type=text]');
const zgoda1 = document.getElementById('zgoda-marketingowa-1');

const zgoda2 = document.getElementById('zgoda-marketingowa-2');

const zgody = document.getElementById('wszystkie-zgody');

const wyslij = document.getElementById('wyslij');

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
            // jeżeli string jest pusty

            //  tworzymy wyskakujacy jako paragraf błąd:
            let error1 = document.createElement("p");
            let pErrorClass = document.createAttribute("class");
            pErrorClass.value = "error";
            error1.setAttributeNode(pErrorClass);

            // ustawiamy tekst, wpisany w ten paragraf
            error1.innerHTML = "Uzupełnij dane";
            //każemy mu się wstawić pod polem:
            formularz.insertBefore(error1, polaTekstowe[i]);
            // nie wysyłaj
            e.preventDefault();
        } else {
            console.log("Warunek spełniony");
            let err1 = document.getElementsByClassName("error")

            err1.parentNode.removeChild(err1);

        }
    }
};

const checkBoxing = (e) => {
    if (zgoda1.checked == false) {
        let error2 = document.createElement("p");
        error2.innerHTML = "Zaznacz zgodę";
        let pError2id = document.createAttribute("id");
        pError2id.value = "error2";
        error2.setAttributeNode(pError2id);
        formularz.insertBefore(error2, zgoda2);
        e.preventDefault();
    } else {
        console.log("Warunek spełniony");
        let err2 = document.getElementById("error2")
        err2.parentNode.removeChild(err2);
    }
};


const walidacja = (e) => {
    wprowadzText(e);
    checkBoxing(e);
};


/* sprawdzanie checkboxów */





formularz.addEventListener('submit', walidacja);




// let userExist = false;

// for (let i = 0; i < tab.length; i++) {
//     if (tab[i] === "Beata") {
//         userExist = true;