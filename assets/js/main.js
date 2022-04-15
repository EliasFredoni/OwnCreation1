

document.getElementById("mybutton").onclick = function () {
    document.getElementById("top").innerHTML = " Hallo " + name;
}

let name = "Elias";

document.getElementById("button2").onclick = function () {
    anzahl = anzahl + 1;
    document.getElementById("top").innerHTML = " Anzahl an Klicks " + anzahl;
}

let anzahl = 0;

document.getElementById("reset").onclick = function () {
    anzahl = 0;
    document.getElementById("top").innerHTML = " Anzahl an Klicks " + anzahl;
}
