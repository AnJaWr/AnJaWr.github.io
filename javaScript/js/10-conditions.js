let wzrostMateusza = 190;
let wzrostOlgi = 190;

if (wzrostOlgi < wzrostMateusza) {
    console.log("Olga jest niższa :)");
} else if (wzrostOlgi > wzrostMateusza) {
    console.log("Olga jest wyższa :O");
} else {
    console.log("Są równi");
}


let kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny kolor')

}