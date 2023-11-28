const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];

var Aantal = winkelmandje.length;
document.getElementById('opdracht1').innerHTML = "Aantal producten in de winkelmandje" + Aantal;

document.getElementById('opdracht2').innerHTML = winkelmandje.join('<br>');

document.getElementById('opdracht3').innerHTML = 'Het 4e product is: ' + winkelmandje[3];

winkelmandje[1] = 'Bier';
document.getElementById('opdracht4').innerHTML = 'Whiskey is vervangen door bier: ' + winkelmandje.join(', ');

function addProduct() {
    const nieuwProduct = prompt("Voer het nieuwe product in:");
    winkelmandje.push(nieuwProduct);
    document.getElementById("opdracht5").innerHTML = winkelmandje;
}

if (winkelmandje.length > 1) {
    document.getElementById("opdracht6").innerHTML = "<p>U heeft genoeg producten om te tonen: </p>" + winkelmandj.join('<br>');
} else {
    document.getElementById("opdracht6").innerHTML = "<p>U heeft niet genoeg producten om te tonen.</p>";
}

if (winkelmandje[4] == "Drop")  {
    document.getElementById("opdracht7").innerHTML = "<p>U heeft drop.</p>";
} else {
    document.getElementById("opdracht7").innerHTML = "<p>U heeft geen drop.</p>";
}

document.getElementById("opdracht8").innerHTML = "<p>Producten met spaties:</p>" + winkelmandje.join(' ');

document.getElementById('opdracht9').innerHTML = "Oude winkelmand: "; + winkelmandje.join(', ');

winkelmandje.splice(0, 2);
document.getElementById('nieuwewinkelmand').innerHTML = "Nieuwe winkelmand: "; + winkelmandje.join(', ');

const winkelmand = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
winkelmand.sort();
document.getElementById('opdracht10').innerHTML = 'Gesorteerde array: '; + winkelmandje.join(', ');
