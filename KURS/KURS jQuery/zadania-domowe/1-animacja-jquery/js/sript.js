// 1. Stwórz przycisk - (element button)
$( function() {
$('body').append('<button> I Like To Move It </button>');

// 2. Pod przyciskiem stwórz kwadrat (znacznik div) o wysokości i
// szerokości 200px oraz kolorze czerwonym
$('body').append('<div id="kwadrat"><h2>Animacja zakończona</h2></div>');

$('div').css({
        'background': 'red',
        'width': '200px',
        'height': '200px',
        'margin-top': '15px',
        'position': 'absolute',
        'text-align': 'center'
  
    });

$('h2').css({
        'font-size': '12px',
        'color': 'white',
        'opacity': '0'
  
    });

let kwadrat = $("div");
//     $("button").click(function(){
//       kwadrat.animate({left: '100px', width: '100px', height: '100px',}, "3000", beBlue);
//       });

// function beBlue() {
//     kwadrat.css({background: 'blue', transition: '5s'})
//              }


                 
             
$('button').on({
    'click': function(){
        kwadrat.animate({left: '100px', width: '100px', height: '100px',}, "3000", function(){
        kwadrat.animate({backgroundColor: 'blue'}, 5000, function() {
        $('h2').animate({opacity: '1'}, 500)})})}})    
      
        })
         
    


   

// Zadanie podsyłamy z użyciem https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - pamiętaj, że skrypty zawsze podpinamy na końcu, a biblioteka jQuery ma być podpięta powyżej Twojego skryptu.
// - bibliotekę jQuery podepnij w wersji zdalnej z serwera CDN.

