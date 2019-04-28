'use strict';

let pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.childNodes[1]);
console.log(pierwszyDiv.children);

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.previousElementSibiling);

console.log(pierwszyChild.nextElementSibiling);
console.log(pierwszyChild.nextElementSibiling.nextElementSibiling);



//children wyswietli wszytkie elementy
//childNode wysiwtla wszytskie istniejae lementy np. kawalek tekstu