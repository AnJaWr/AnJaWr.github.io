$('body')
    .find('.par2')
    .text('Tekst zmieniony metodą find')
    .css('color', 'red');

// zadnyh przeinkow!


let par2 = $('.par2');
par2.each(function(index, biezacyParagraf) {
    // console.log(index, biezacyParagraf);
    if (index === 0) { $(biezacyParagraf).css('color', 'green').text('Tekst zmieniony metodą each()') }
});

par2.each(function(index, biezacyParagraf) {
    // console.log(index, biezacyParagraf);
    if (index === 1) { $(biezacyParagraf).css('color', 'blue').text('Tekst zmieniony metodą each()') }
});


par2.each(function(index, biezacyParagraf) {
    // console.log(index, biezacyParagraf);
    if (index === 2) { $(biezacyParagraf).css('color', 'yellow').text('Tekst zmieniony metodą each()') }
});

par2.each(function(index, biezacyParagraf) {
    // console.log(index, biezacyParagraf);
    if (index = 0, index < 3) {
        index++;
        $(biezacyParagraf).css('background-color', 'pink')
    }
});



//JS ES6
// [1,2,3].forEach((element, index) => {...})