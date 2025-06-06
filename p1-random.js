/* 
CIT 281 Project 1
Name: Ulys Chauncey Drumrongthai
*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomString() {
    
    // Boundaries:
    const minLength = 5;
    const maxLength = 25;

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // <- All available letters.
    const randomLength = getRandomInteger(minLength, maxLength + 1); // <- Choose a number between 5 and 25.
    let result = ''; // <- Initialize empty string.
    
    // Loop through the chosen length:
    for (let i = 0; i < randomLength; i++) { // <- Increment by 1.
        const randomIndex = getRandomInteger(0, alphabet.length); // <- Choose index for which letter to use.
        result += alphabet[randomIndex]; // <- Add letter to the result string.
    }

    console.log(`${randomLength} lowercase letters: ${result}`); // <- Output the result.
}

randomString();