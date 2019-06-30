const getData = () => {

    console.log(window.innerHeight);
    if(window.scrollY + window.innerHeight > document.body.offsetHeight){
        // window.innerHeight to wewnetrzne okno bez paneli menu
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            // TU NAZYWAMY SOBIE JAK NAZYWA SOBIE UZYSKANE DANE I HCEMY DLA NIEJ FUKCJE
            data.forEach(user => {
                const container = document.getElementById("container")       
    
                container.innerHTML += `
            <p>User ID : ${user.id}</p><br>
            <p>User NAME : ${user.name}</p><br>
            <p>User WEB : ${user.website}</p><br>
            <p> -------------------------------</p>
            `;
            })
        })
        }
    };
    





window.addEventListener('scroll', getData);

/* $(() => {
    $(window).scroll(getData =() => {
if(window.scrollY + window.innerHeight > document.body.offsetHeight){
    // window.innerHeight to wewnetrzne okno bez paneli menu
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const container = $("container")       
            container.innerHTML += `
        <p>User ID : ${user.id}</p><br>
        <p>User NAME : ${user.name}</p><br>
        <p>User WEB : ${user.website}</p><br>
        <p> -------------------------------</p>
        `;
        })
    })
    }
})})

 */
