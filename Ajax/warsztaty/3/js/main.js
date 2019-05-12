$(() => {
    let clicked = false;

const getData = () => {
    $.getJSON("https://jsonplaceholder.typicode.com/users/1",
    response => {
        const paragraf = $('<p>'); 
        const user = response;
        
        paragraf.html(`
        <span>User ID: ${user.id}</span></br>
        <span>User Name: ${user.name}</span></br>
        <span>User Web: ${user.website}</span></br>
        `);
    
        $('#btn').after(paragraf);
    });
}

$('#btn').click(() => {
    // getData();

if(!clicked){
    getData();

    clicked= true;}
    else {
        return;
    }

})

})
