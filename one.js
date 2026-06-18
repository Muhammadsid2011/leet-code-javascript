// You are given a string s consisting of lowercase English letters and the special characters: *, #, and %.

// Build a new string result by processing s according to the following rules from left to right:

// If the letter is a lowercase English letter append it to result.
// A '*' removes the last character from result, if it exists.
// A '#' duplicates the current result and appends it to itself.
// A '%' reverses the current result.
// Return the final string result after processing all characters in s.
 

const procesFn = (s = "") => {
    result = "";
    for (const letter of s) {
        if(letter === "*"){
            result = result.slice(0, -1);
        }
        else if(letter === "#"){
            result = result + result;
        }
        else if(letter === "%"){
            result = result.split("").reverse().join("");
        }
        else if ((letter === letter.toLowerCase() && letter !== letter.toUpperCase())) {
            result += letter
        }
    }
    console.log(result)
}

procesFn("a#b%*")