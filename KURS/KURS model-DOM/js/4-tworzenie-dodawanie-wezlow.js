'use strict';

let btn = document.createElement("button");
console.log(btn)

// zrobiony button

let txtBtn = document.createTextNode("Kliknij mnie!");
console.log(txtBtn);

let classBtn = document.createAttribute("class");
console.log(classBtn);

classBtn.value = "btn";
// poki co to wszystko jest stworzone osobno, teraz to lączymy

btn.appendChild(txtBtn);
btn.setAttributeNode(classBtn);
btn.setAttribute("onclick", "btnClik();")

//teraz wrzuamy na strone. to wklei na konie

document.body.appendChild(btn);

// teraz usuwamy

btn.removeAttribute("onclick");
btn.removeAttribute("class");

// btn.parentElement.removeChild(btn);
// albo
document.body.removeChild(btn);
// pierwszy sposob jest lepszy