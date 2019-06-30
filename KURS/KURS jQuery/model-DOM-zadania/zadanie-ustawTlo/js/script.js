let button = document.querySelector("#button");
console.log(button);

const ustawTlo = (color) => {
    document.getElementById("pierwszy").style.background = 'red';
    document.getElementById("drugi").style.background = 'yellow';
}


button.addEventListener('click', ustawTlo);