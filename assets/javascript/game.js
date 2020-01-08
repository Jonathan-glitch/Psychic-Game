// variables list

var winTotal = "";
var lossTotal = "";
var guessCount = "";
var guessedLetters = [];


// set up an array

var alphabet =[
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"
];

//random letter generator
var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];

console.log(computerChoice);