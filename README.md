# Word-Guess-Cli

The Word-Guess-Cli is a command line interface word guess game.

The game generates a word object from an array of possible words,  
turns each letter from the word into an individual letter object,  
and generates a placeholder display.

npm inquirer is used to prompt the user to guess a letter.

If the letter is in the word the placeholder display updates and fills in the letter.  
If the letter is not in the word your guesses left count decreases by 1.

The game continues to prompt the user until they run out of  
guesses or they make it through all possible words and win.

* _you must run 'npm install' for the program to work_
