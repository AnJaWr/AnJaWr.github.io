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



//  var textInputs = document.querySelectorAll('input[type=text]');
//     console.log(textInputs);
//     var firstAgreement = document.getElementById('zgoda-marketingowa-1');


const walidacja = (event) => {

    const polaTekstowe = document.querySelectorAll('input[type=text]');

    for (let i = 0; i < polaTekstowe.length; i++) {
        if (polaTekstowe[i].value == "") {
            event.preventDefault();
            let error1 = document.createElement("p");
            error1.innerHTML = "Uzupełnij dane";
            polaTekstowe[i].parentNode.replaceChild(error1, polaTekstowe[i].nextSibling);
        }
    }
}




















// event.preventDefault();





formularz.addEventListener('submit', walidacja);









// const wyslij = document.getElementById("wyslij");
// console.log(wyslij);*/

//       const polaTekstowe = document.querySelectorAll('input[type=text]');

// for (let i = 0; i < polaTekstowe.length; i++) {
//     if (polaTekstowe[i].value == "") {
//         event.preventDefault();
//         let error1 = document.createElement("p");
//         error1.innerHTML = "Uzupełnij dane";
//         polaTekstowe[i].parentNode.replaceChild(error1, polaTekstowe[i].nextSibling);
//     } else {
//         return true;
//     }
// }