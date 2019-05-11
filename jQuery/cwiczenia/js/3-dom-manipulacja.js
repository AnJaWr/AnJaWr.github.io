// let paragrafy = $('p');
// // console.log(paragrafy.text());


// // paragrafy.text('Nowy tekst');


// let paragrafyByHtml = $('p');
// console.log(paragrafyByHtml.html());

// // zwroci tylko z pirrwszego
// paragrafyByHtml.html('<span>Treść znacznika span</span>');

// let naglowek2 = $('#naglowek-2');
// naglowek2.prepend(' Prependujemy treść | ');
// naglowek2.append('| Apendujemy treść ');

// naglowek2.before(' Beforujemy tresc | ');
// naglowek2.after('| Afterujemy treść');

// naglowek2.empty();
// // ziknie tylko zawartosc naglowka
// naglowek2.remove();
// // usuwa tez znacznik

// naglowek2.replaceWith('<span> Tekst span </span>');
// zamiana h2 na span

// let paragrafy = $('p');
// // paragrafy.css('background-color', 'green');
// // dla jednej wlasciwosci

// paragrafy.css({
//     'background-color': 'green',
//     'font-size': '2em',
//     'color': 'yellow'
// });

// dla kilku wlasciwosci tworzymy obiekt z keyami i wartosciami

// let pierwszyParagraf = $('.par').eq(0);

// // dopisanie [0]zadziala, ale potem metody jq nie beda dzialaly na js!
// console.log(pierwszyParagraf);

// pierwszyParagraf.addClass('red');

// $('input#input-1').val('Jan Kowalski');

$('input#input-1').change(function() {
    console.log($(this).val());
})

// sprawdz kak dziala value w js