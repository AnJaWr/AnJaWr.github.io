$(() => {
    console.log('JQuery');

    const buttonLeft = $('.prev-slide');
    const buttonRight = $('.next-slide');
    console.log(buttonLeft);
    console.log(buttonRight);

    const slideShow = $('.slide-show');
    const singleSlide = $('.single-slide');
    const slideCount = singleSlide.length;
    // ustawiamy dynamicznie wielkość w zależnośi od ilości obrazków = długość tablicy
    const slideWidth = 100 / slideCount;


    let indexCounter = 0;

    console.log(slideShow);
    console.log(singleSlide);

    slideShow.css('width', slideCount * 100 + '%');
    // alternatywny zapis: slideCount + '00%' -> jQuery chce stringa!
    // tworzymy taśmę

    singleSlide.each(function(index) {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        })
    })



    // przypisanie eventu do buttona

    buttonLeft.click(function() {
        console.log('Lewy przycisk');
        slide(indexCounter - 1);
    })





    buttonRight.click(function() {
        console.log('Prawy przycisk');
        slide(indexCounter + 1)
    })

    //  Funkcja przewijania

    function slide(newIndex) {
        console.log(newIndex);
        if (newIndex < 0 || newIndex >= slideCount) {
            return;
        }


        // Ukrywamy napis
        const currentTitle = $('.slide-caption').eq(newIndex);
        currentTitle.fadeOut();


        const marginLeft = newIndex * (-100) + '%';
        //  wywołanie przełączania

        slideShow.animate({
            'margin-left': marginLeft
        }, 1000, function() {
            currentTitle.fadeIn();

        });
        indexCounter = newIndex;
        // po przesunieciu obrazka index się zmieni 
    }



});