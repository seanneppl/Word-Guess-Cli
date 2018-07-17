//* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to
//  guess. That means the constructor should define:

//* An array of `new` Letter objects representing the letters of the underlying word

// * A function that returns a string representing the word. This should call the 
// function on each letter object (the first function defined in `Letter.js`) that displays 
// the character or an underscore and concatenate those together.

// * A function that takes a character as an argument and calls the guess function on 
// each letter object (the second function defined in `Letter.js`)

var Letter = require("./letter.js");

var Word = function(word){
    this.word = word;
    var letters = [];

    word.split("").forEach(each => letters.push(new Letter(each)));

    this.wordString = () => {
        let fullWord = [];
        letters.forEach(each => fullWord.push(each.guessed()));
        return fullWord.join(" ");
    }

    this.letterCheck = (letterGuess) => {
        var letterTest = [];
        letters.forEach(each =>  letterTest.push(each.guess(letterGuess)));
        // console.log(letterTest.join(" ") + "\n");
    };
}

module.exports = Word;
