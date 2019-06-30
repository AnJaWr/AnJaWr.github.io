
$(document).ready(function() {
    let pizzaType = []
   pizzaType[0] = ['Hawajska' , 25];
   pizzaType[1] = ['Capriciosa' , 25]; 
   pizzaType[2] = ['Salami' , 20]; 
   pizzaType[3] = ['Frutti di Mare' , 30]; 
   pizzaType[4] = ['Margarita' , 18];

   let price = 0;
   
 
$('select').change(function() {
   
    if ($('select').val() === 'hawajska' ){
                $("#order").append("<p class='orderedPizza'>" + "Pizza " + pizzaType[0][0]+" "+pizzaType[0][1]+ " zł </p>")
                price =+ pizzaType[0][1]
    
    }
    else if ($('select').val() === 'capri' ){
                    $("#order").append("<p class='orderedPizza'>" + "Pizza " + pizzaType[1][0]+" "+pizzaType[1][1]+ " zł </p>");
                    price += pizzaType[1][1]}
     else if ($('select').val() === 'salami' ){
                        $("#order").append("<p class='orderedPizza'>" + "Pizza " + pizzaType[2][0]+" "+pizzaType[2][1]+ " zł </p>");
                        price += pizzaType[3][1]}
    else if ($('select').val() === 'frutti' ){
                            $("#order").append("<p class='orderedPizza'>" + "Pizza " + pizzaType[3][0]+" "+pizzaType[3][1]+ " zł </p>");
                        
                        
price += pizzaType[3][1]            }      
    else if ($('select').val() === 'marga' ){
                                $("#order").append("<p class='orderedPizza'>" + "Pizza " + pizzaType[4][0]+" "+pizzaType[4][1]+ " zł </p>");

                                price += pizzaType[4][1] };

$("#order".val).change(function() { ("#order").append("<p class='price'>" + "Wartość zamówienia " + price + "</p>");});
    });


function validateForm() {
    var imie = $('#name').val()
    var nazwisko = $('#surname').val()
    var ulica = $('#street').val()
    var miejscowość = $('#city').val()
    var numerDomu = $('#houseNumber').val()
    var post = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    var errors = true
 
    if (imie.length < 3 && !(imie === '')) {
        $('#name-label').text('Wpisz swoje imię')
        $('#name-label').addClass('second-clr') // Klasa second-clr powoduje że opis danej rubryki - #(nazwaRubryki)-label staje się czerwony 
    } else if (!(imie === '')) {
        $('#name-label').text('Imię')
        $('#name-label').removeClass('second-clr')
        errors = false
    }
 
    if (nazwisko.length < 2 && !(nazwisko === '')) {
        $('#surname-label').text('Wpisz swoje nazwisko')
        $('#surname-label').addClass('second-clr')
    } else if (!(nazwisko === '')) {
        $('#surname-label').text('Nazwisko')
        $('#surname-label').removeClass('second-clr')
        errors = false
    }
 
    


 
    return errors;
};
 
function wyslij() {
    var areErrors = validateForm()
 
    if (areErrors == true) {
        return 0;
    } else if (areErrors == false) {
        $('form').attr('action', 'mail.php')
        $('#submit').click()
    }
};

$('form').submit(validateForm());

})

//     }
//   }

// })

//     $("#add").click(function() {
//         let newListItem = $("#addtoList").val();
//         let counter = $('li.item').length;
//         if (newListItem.length > 0) {
//             counter++;
//             $("#toDoList").append("<li class='item'>" + "Task number " + counter + ": " + newListItem + "</li>");
//             $("#addtoList").val('');
//         }
//     });

//     $("#remove").click(function() {
//         $("#toDoList li:last-child").remove();
//     });


//     $("#clear").click(function() {
//         $("#toDoList li").remove();
//     });

// });



// naglowek2.on({
//     'dblclick': function() {
//         $(this).css('background-color', 'green');
//     },
//     'mouseenter': function() {
//         $(this).css('font-size', '3em', 'transition', 'all .4s');
//     },

//     'mouseleave': function() {
//         $(this).css('font-size', 'inherit');
//     }

// })



/* Za pomocą jQuery zrób walidację formularza. Walidator ma sprawdzać:
- czy wszystkie pola zostały wypełnione? Jeśli nie, to zwracać odpowiedni komunikat
- czy została wybrana Pizza przy zamówieniu? Jeśli nie, to zwracany odpowiedni komunikat
Na końcu walidator ma stworzyć obiekt zamówienia np. w formacie JSON i wyświetlić go w
konsoli */