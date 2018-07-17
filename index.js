// * **index.js**: The file containing the logic for the course of the game, which
//  depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

const chalk = require('chalk');
var Word = require("./word.js");
var inquirer = require("inquirer");
var words = ['aardvark', 'dikdik', 'blobfish', 'axolotl', 'coelacanth'];

var randomWord = function(){
    
    var random = Math.floor(Math.random() * Math.floor(words.length));
    var wordSplice = words.splice(random, 1);
    // console.log("words left", words);
    return new Word(wordSplice[0]);
}

// console.log(randomWord());

var bar = "-----------------------------------------------------------------\n";

var theWord = randomWord();
//  console.log(theWord.word);
console.log(chalk.green("\n\r\n\r\n\rStart!"));
inquire(10);

function inquire(guessesLeft){


    if (theWord.wordString().indexOf("_") === -1) {
        
        if (words.length === 0) {
            console.log(chalk.green("You did it! You won!\n"));
            return;
        }

        console.log(chalk.green("Keep Going!\n"));
        theWord = randomWord();
        // console.log(theWord.word);

        // return;
    };

    var questions = [
        {
            type: "input",
            message: "Guess a letter!",
            name: "guessedLetter",
            default: '',
        }
    ];
    
    if (guessesLeft > 0){

        console.log(bar);

        console.log("You have", chalk.red(guessesLeft), "guesses left.\n");
        console.log(theWord.wordString() + "\n");
        console.log(bar);

        inquirer.prompt(questions)
        .then(function (answers) {
            // console.log(answers);

            theWord.letterCheck(answers.guessedLetter);

            if (theWord.wordString().indexOf(answers.guessedLetter) === -1) {
                // console.log(theWord.wordString().indexOf(answers.guessedLetter));
                guessesLeft--;
                console.log(chalk.red("\ntry again\n"));
                
            }   
            else { 
                console.log(chalk.blue("\nGot it!\n"));   
            }

            inquire(guessesLeft);

        });

    } else {console.log(chalk.red("You're out of guesses. Try again.")); return;};
    
};