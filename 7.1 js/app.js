function checkBudget() {
    var budget = 100;
    var product = 60;
    var resultElement = document.getElementById("result");

    if (budget >= product) {
        resultElement.innerHTML = "U heeft genoeg geld!";
        resultElement.style.color = "green";
    } else {
        resultElement.innerHTML = "Helaas, te weinig geld";
        resultElement.style.color = "red";
    }
}