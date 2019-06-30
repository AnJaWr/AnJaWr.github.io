// $('#naglowek-1').hide('slow').show('slow');

// $('#naglowek-2').fadeOut('slow').fadeIn('slow');

// $('#naglowek-2').slideUp('slow').slideDown('slow');




function przesunNaSrodek() {
    $('#naglowek-1').delay(1000).animate({
        'margin-left': '250px',
        'font-size': '4em',
    }, 3000, przesunWlewo);
}

function przesunWlewo() {
    $('#naglowek-1').delay(1000).animate({
        'margin-left': '0px',
        'font-size': '10px',
    }, 3000, przesunNaSrodek);
}

przesunNaSrodek();