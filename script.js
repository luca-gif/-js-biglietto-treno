/* 

Esercizio di oggi: calcolo del prezzo del biglietto del treno

1_ chiedere quanti km si vuole percorrere e l'età del passeggero;
2_ calcolare prezzo viaggio:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
buon lavoro
*/

const kmTotali = prompt("Quanti km percorrerai?");

const etàPasseggero = prompt("Inserisci la tua età");

const prezzoKm = 0.21;

let prezzoBiglietto = kmTotali * prezzoKm;

if (etàPasseggero < 18) {
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto / 100) * 20;
} else if (etàPasseggero > 65) {
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto / 100) * 40;
} else {
    prezzoBiglietto;
}

/* Aggiungo condizioni */

if (isNaN(etàPasseggero) && isNaN(kmTotali)) {
    alert("Non hai inserito un numero");
} else if (etàPasseggero.length > 3) {
    alert("Non hai inserito un valore corretto");
}

/* / Aggiungo condizioni */

output = prezzoBiglietto.toPrecision(2);

document.getElementById("prezzoFinale").innerHTML =
    "Il prezzo da pagare è: " + output + " €";