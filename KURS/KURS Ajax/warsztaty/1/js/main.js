const button = document.getElementById("btn");

//  const getData = () => {     
//      fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then(resp => resp.json())
//         .then(response => {
//             const user = response;
            
//             const paragraf = document.createElement('p');
//             paragraf.innerHTML = `
//             <span>User ID : ${user.id}</span><br>
//             <span>User ID : ${user.name}</span><br>
//             <span>User ID : ${user.website}</span><br>
//             `;
// button.insertAdjacentElement('afterend', paragraf);
//             // dla wszytskich danych - pobierz jako tablicę klucze:
//             // const userKeys = Object.keys(user)
//             // userKeys.forEach(key=> {
//             //    const paragraf = document.createElement('p');
//             // paragraf.innerText = ${key.toUpperCase() : ${user[key]}
//             }) 

//         }


        $.getJSON( "ajax/test.json", function( data ) {
            var items = [];
            $.each( data, function( key, val ) {
              items.push( "<li id='" + key + "'>" + val + "</li>" );
            });
           
            $( "<ul/>", {
              "class": "my-new-list",
              html: items.join( "" )
            }).appendTo( "body" );
          });
// wstawimy paragrafy
// więc najpier stworzymy templatkę -żeby robiła paragrafy




button.addEventListener("click", getData);
