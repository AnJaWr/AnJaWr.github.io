$(() => {
    const button = $('#btn');

    button.click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users/1",
            dataType: "json",
            success: function (resultJSON) {
                let wynik = resultJSON;
                

                console.log(resultJSON)
                $("body").append($('<p>'));
                $('p').html(` 
            <span>User ID : ${wynik.id}</span><br>
            <span>User ID : ${wynik.name}</span><br>
            <span>User ID : ${wynik.website}</span><br>
            `)
            },
            onerror: function (msg) { console.log(msg); }
        })
    })


})

