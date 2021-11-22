// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


//richidere una parola finchè non viene inserita una palindroma
let userWord;

do {
    userWord = paliWord( prompt( 'Inserisci una parola per verificare se è palindroma' ) );
} while (userWord === false);

//una volta che viene inserita parola palindroma stampo output
alert('Complimenti hai trovato una parola palindroma');


//FUNCTIONS

//funzione che indica se una parola è specchiati o meno
//inserire stringa da valutare
//return da come risultato true se è specchiata, false se non lo è

function paliWord(userWordToCheck) {
    let wordIsPali = false;
    let singleLetterNormal;
    let singleLetterReverse;

    //percorro parola in avanti 
    for ( let i = 0; i < userWordToCheck.length; i++) {
        singleLetterNormal = userWordToCheck[i].toLowerCase();
        console.log(singleLetterNormal);
    }

    //percorro parola all'indietro
    for ( let i = userWordToCheck.length - 1; i >=0; i--) {
        singleLetterReverse = userWordToCheck[i].toLowerCase();
        console.log(singleLetterReverse);
    }
    
    //confronto le due stringhe e se sono identiche il valore della funzione sarà True, negli altri casi false(valore di base di wordIsPali)
    if ( singleLetterNormal === singleLetterReverse ) {
        wordIsPali = true;
    }

    return wordIsPali;
}














// let userWord = paliWord( prompt( 'Inserisci una parola per verificare se è palindroma' ) );
// let userWordisPali;
// console.log(userWord)

// while ( userWord = false ) {
//     userWord = paliWord( prompt( 'Inserisci una parola per verificare se è palindroma' ) );
// }


// if (userWord === true) {
//     alert('La parola che hai inserito è: Palindroma');
//     // userWordisPali = `
//     // La parola che hai inserito è: Palindroma
//     // `;
   
// } else {
//     alert('La parola che hai inserito non è palindroma');

//    
//     // userWordisPali =`
//     // La parola che hai inserito non è palindroma, digita una nuova per verificarla;
//     // `;
    
// }
// let userWordIsPali = 
// console.log(userWord);

// for ( let i = 0; i < userWord.length; i++) {
//     let singleLetter = userWord[i].toLowerCase();
//     console.log(singleLetter);
// }