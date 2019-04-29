'use strict';

let submit = document.querySelector("#formularz");
console.log(submit);

const wyslij = (x) => {
    console.log(document.querySelector("input[name='fname']").value);
    console.log(document.querySelector("input[name='lname']").value);
    x.stopDefault;
}


submit.addEventListener("click", wyslij)