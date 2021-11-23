// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//Chiedere ad utente di inserire un numero compreso tra 1 e 5, se non lo è lo richiedo
let userNumber;
do {
    userNumber = parseInt( prompt( 'Inerisci un nemro compreso tra 1 e 5' ));
} while ( userNumber <= 0 || userNumber > 5 || isNaN(userNumber));


let evenOrOddUserChoice;
let userChoiceInput = prompt( 'scegli pari o dispari' );
let userChoice = userChoiceInput.toLowerCase();
let even = 'pari';
let odd = 'dispari';
let evenOrOddResult;

if (userChoice === even) {
    userChoice = true;
    evenOrOddResult = 'pari'
} else  if (userChoice === odd) {
    userChoice = true;
    evenOrOddResult = 'dispari'
} else {
    userChoice = false;
}

while ( userChoice === false ) {
    userChoiceInput = prompt('puoi digitare solo "pari" o "dispari"');
    userChoice = userChoiceInput.toLowerCase();
    let even = 'pari';
    let odd = 'dispari';

    if (userChoice === even) {
        userChoice = true;
        evenOrOddResult = 'pari'
    } else  if (userChoice === odd) {
        userChoice = true;
        evenOrOddResult = 'dispari'
    } else {
        userChoice = false;
    }
}


console.log(evenOrOddResult)

// if (userChoice !== even && userChoice !== odd) {
//     prompt('puoi digitare solo "pari" o "dispari"');
// }


// do {
//     let even = 'pari'
//     userChoice = prompt( 'scegli pari o dispari' );
    
//     console.log(userChoice)
//     // if ( userChoice === 'pari') {
//     //     evenOrOddUserChoice = 'pari';
//     // } else {
//     //     evenOrOddUserChoice = 'dispari';
//     // }
// } while ( userChoice === 'pari' || userChoice === 'dispari' );

console.log(userChoice);
// console.log(evenOrOddUserChoice);


//genero numero casuale del computer
let computerNumber = getRndInteger(1, 5);

let finalSum = numberSum( userNumber, computerNumber );
console.log(finalSum)

let finalSumIsEvenOrOdd = numberIsEvenOrOdd( finalSum );
console.log(finalSumIsEvenOrOdd);

let userMessage = `
Il numero che hai inserito è ${userNumber}.
Quello del computer è ${computerNumber}.
Dato che la somma è ${finalSum}, il vincitore è 
`;

alert(userMessage);




//FUNCTIONS

//funzione che genera un numero casuale in un range definito, estremi compresi
//min è il numero di partenza
//max è il numero finale
//return genererà un numero casuale tra i parametri inseriti
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//funzioe che somma due numeri
//num1 primo numero 
//num2 secondo numero
//return darà la somma dei parametri inseriti

function numberSum( num1, num2 ) {
    let sum = (num1 + num2);
    return sum
}


//funzione che valuta se un numero è pari o dispari
//inserire come valore il numero da valutare
//return darà come risulto 'pari' o 'dispari'

function numberIsEvenOrOdd( num ) {
    let numToCheck;
    
    if ( num % 2 === 0 ) {
        numToCheck = 'pari';
    } else {
        numToCheck = 'dispari';
    }

    return numToCheck;
}