
/* Ciao ragazzi,
esercizio di oggi: Biglietto del treno
cartella/repo: js-biglietto-treno
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Buon lavoro!*/

//1) Inizializzo due costanti che sono inerenti all'età ed ai KM del percorso
//2) Inizializzo un primo ciclo di if partendo da un controllo sull'età e sui KM percorsi i valori devono essere numeri e non lettere maggiori di 0 sotto lo 0
//3) Dopo i controlli faccio si che il prezzo del biglietto venga calcolato moltiplicando la distanza per il prezzo base
//4) Dopo di che inserisco un else dove a sua volta verrà inserito un if all'interno per creare la condizione che soddisfa lo sconto uder 18 e over 65
//5) Dopo di che i numeri che saranno il risultato devono essere scritti secondo la regola "umana" quindi ben definiti tramite i due decimali dopo la virgola
//6) Mostro il risultato

// Punto 1
const distance = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Definisci la tua età 👵🏻👩🏻"));
// Punto 2
if (isNaN(distance) || isNaN(age) || distance <= 0 || age <= 0) {
    alert("Errore: la tua età o il numero di KM percorsi non possono corrispondere a zero 🤯 "); 
} else {
// Punto 3
    const priceKm = 0.21;
    let totalPrice = distance * priceKm; 
// Punto 4
    if (age < 18) {
        totalPrice *= 0.8;
    } else if (age >= 65) {
        totalPrice *= 0.6; 
    }
 // Punto 5
    const finalPrice = totalPrice.toFixed(2);

 // Punto 6
    alert(`Il tuo prezzo è: €${finalPrice}`);
    console.log(`Il tuo prezzo è €${finalPrice}`);
}



