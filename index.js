// Function to calculate a value based on the name
function calculateNameValue(name) {
    const vowels = 'AEIOUaeiou';
    let value = name.replace(/\s+/g, '').length;

    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            value += i + 1;
        }
    }
    return value;
}

// Replace the following arrays with your own dates and names
const dates = ["01/01/2000", "12/25/1995", "07/04/1980", "10/31/1999"]; // Example dates
const names = [
    "John Doe", 
    "Jane Smith", 
    "Alice Johnson", 
    "Bob Brown"
]; // Example names

// Map dates to numerical values
const dateValues = dates.map(date => {
    return date.split('').reduce((acc, char) => {
        return acc + (isNaN(parseInt(char)) ? 0 : parseInt(char));
    }, 0);
});

// Map names to numerical values
const nameValues = names.map(name => calculateNameValue(name));

// Combine the values as a seed
const seed = dateValues.reduce((a, b) => a + b, 0) + nameValues.reduce((a, b) => a + b, 0);

// Random number generator based on a seed
function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// Function to generate lottery numbers
function generateMegaNumbers(seed, quantity) {
    const numbers = new Set();
    while (numbers.size < quantity) {
        const number = Math.floor(seededRandom(seed) * 60) + 1;
        numbers.add(number);
        seed++;
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

// Change the number below to generate a different quantity of numbers
const megaNumbers = generateMegaNumbers(seed, 9);

console.log("Mega Lottery Numbers:", megaNumbers);
