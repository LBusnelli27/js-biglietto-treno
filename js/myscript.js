
let firstName = prompt("Inserisci il nome");
console.log("The name is: " + firstName);
document.getElementById('my-first-name').innerHTML = `Nome: ${firstName}`;

let lastName = prompt("Inserisci il cognome");
console.log("The last name is: " + lastName);
document.getElementById('my-last-name').innerHTML = `Cognome: ${lastName}`;

let userAge = parseInt( prompt("Inserisci la tua eta'") );
console.log("The age is: " + userAge);
document.getElementById('my-user-age').innerHTML = `Hai ${userAge} anni`;

let journeyKm = parseFloat( prompt("Inserisci i km della tratta in treno") );
console.log("The km is: " + journeyKm);
document.getElementById('my-km').innerHTML = `La tua tratta dura ${journeyKm} KM`;


let priceTicket = (journeyKm * 0.21).toFixed(2);
console.log("The price is: " + priceTicket)

if ((userAge < 18) && (userAge > 0)) {
    priceTicket = (priceTicket - ((priceTicket / 100) * 20)).toFixed(2);
    console.log("Discont price: " + priceTicket)
    document.getElementById('my-perc-discount').innerHTML = `Visto sei minorenne ti abbiamo fatto uno sconto del 20% sul prezzo del biglietto`;
}

if ((userAge >= 65) && (userAge <= 115)) {
    priceTicket = (priceTicket - ((priceTicket / 100) * 40)).toFixed(2);
    console.log("Discont price: " + priceTicket)
    document.getElementById('my-perc-discount').innerHTML = `Visto sei over 65 ti abbiamo fatto uno sconto del 40% sul prezzo del biglietto`;
}

console.log("The final price is: " + priceTicket)
document.getElementById('my-ticket-price').innerHTML = priceTicket;
