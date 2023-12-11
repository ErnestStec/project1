
var supermarktProducten = [
    { naam: 'Melk', prijs: 1.5 },
    { naam: 'Brood', prijs: 2.0 },
    { naam: 'Eieren', prijs: 1.75 },
    { naam: 'Appels', prijs: 0.75 },
    { naam: 'Pasta', prijs: 1.2 },
];

var productenContainer = document.getElementById('productenContainer');

for (var i = 0; i < supermarktProducten.length; i++) {
    var product = supermarktProducten[i];
    var productInfo = 'Productnaam: ' + product.naam + ', Prijs: €' + product.prijs.toFixed(2);
    productenContainer.innerHTML += productInfo + '<br>';
    }