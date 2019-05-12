/* // AJAX - FETCH

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(response=>console.log(response));

// pobieramy bazę danych, staje się obiektem, na którym można pracować
// dziala dla json i hml, ale tu jest dowolnos, jaka forma, getjson pobiera tylko json


// 2. AJAX - $.getJSON()
// deflautowo paramtrem jest odpowiedź
$.getJSON(
'https://jsonplaceholder.typicode.com/posts', 
response => {
console.log(response);
}
)

//getjson dziala tylko gdy wiemy na 100% że obiekt to json
 */


//3. AJAX -$.ajax()     wersja odzytywana przez każdą przeglądarkę, każdy system

/* $. ajax({
    url: "https://jsonplaceholder.typicode.com/users/1",
    dataType: "json",
    success: function (resultJSON) { console. log(resultJSON);
    },
    onerror: function (msg) { console. log(msg);
    } }); */


const ajax = (method, url) => {
        // console.log(method, url); 
        // consollogiem sprawdzamy, zy dostal sie

let httpReq = new XMLHttpRequest();

// otwieramy połaczenie, parametr to metoda i adres
//  console.log(httpReq); 

httpReq.open(method, url);
// console.log(httpReq)
        
// jeśli dotrzemy do serwera to =>
httpReq.onreadystatechange = () => {
    if (httpReq.readyState === 4 && httpReq.status === 200){
// status 4 i 200 = jest ok!

    //  wrzuamy gotowe dane do  zmiennej  
        let response = httpReq.responseText;
        console.log(response);    
    
        // zamieniamy jsona na tablicę

    response = JSON.parse(response);
    //rozłaczamy się z serwerem
        httpReq = null;
    }
}
    httpReq.send();
    }


    ajax('GET', 'http://jsonplaceholder.typicode.com/users')
    
