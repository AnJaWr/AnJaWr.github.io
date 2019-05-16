$( function() {
    $('body').append('<button id="btn">Pobierz dane</button>');

let button = $('#btn');
let dane = []


$.getJSON( "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", data => {
 dane = data;
console.log(dane)
});
  


const getData = () => {

 for (let key in dane) {
 let div =$('<div id="dane-programisty"></div>');
 div.html(`
 <span>  ${key}  :  ${dane[key]}  </span><br>`);
 $('body').append(div);
}};


button.one('click', getData)
});

