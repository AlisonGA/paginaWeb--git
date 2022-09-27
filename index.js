function darkMode() {
    
    var body = document.body;
    body.classList.toggle("dark-mode");

    var textButton = document.getElementById("dark");

    if (textButton.innerHTML === "Cambiar a Tema Noche") {
        textButton.innerHTML = "Cambiar a Tema Dia";
    } else {
        textButton.innerHTML = "Cambiar a Tema Noche";
    }
}