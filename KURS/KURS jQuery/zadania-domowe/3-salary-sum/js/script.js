$(function(){
    let button = $('#count-sum');
    let suma = 0;
    let wyplata = $('span.salary')
        console.log(wyplata)


button.one('click', function(){
for(i=0; i<wyplata.length; i++){
    let kwota = $('span.salary').eq(i).text();
    let mathKwota = Number(kwota)
    console.log(kwota)
suma+= mathKwota;
}
return $('#sum').text(suma);
    });

});


 
