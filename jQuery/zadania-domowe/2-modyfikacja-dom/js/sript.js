
$( function() {

$('body').append('<button id="up"> Up!</button>');
$('body').append('<button id="down"> Down! </button>');

$('body').append('<p id="one">To jest paragraf nr 1 </p>');
let one = $('#one');
$('#one').after('<p id="two">To jest paragraf nr 2 </p>');
let two = $('#two');
$('#two').after('<p id="three">To jest paragraf nr 3 </p>');
let three = $('#three');
$('#three').after('<p id="four">To jest paragraf nr 4 </p>');
let four = $('#four');
$('#four').after('<p id="five">To jest paragraf nr 5 </p>');


let five= $('#five');




$('button#up').click( function() {
    $("p").last().after($("p").first());
})

$('button#down').click( function() {
    $("p").first().before($("p").last());
})

})     
    
/* 

3. Po kliknięciu w przycisk ostatni paragraf ma zostać przeniesiony na
pierwszą pozycję
4. Kolejne kliknięcia mają przenosić aktualnie ostatni paragraf na
pierwszą pozycję
5. Stwórz kolejny przycisk (element button), który będzie miał działanie odwrotne, czyli będzie przenosił paragrafy z pierwszej pozycji na ostatnią


$('body').append('<button id="up"> Up!</button>');
$('body').append('<button id="down"> Down! </button>');

$('body').append('<p id="one">To jest paragraf nr 1 </p>');
let one = $('#one');
$('one').append('<p id="two">To jest paragraf nr 2 </p>');
let two = $('#two');
$('body').append('<p id="three">To jest paragraf nr 3 </p>');
let three = $('#three');
$('body').append('<p id="four">To jest paragraf nr 4 </p>');
let four = $('#four');
$('body').append('<p id="five">To jest paragraf nr 5 </p>');

 */
