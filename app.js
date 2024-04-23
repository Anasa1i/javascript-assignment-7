//         CHAPTER 21 TO 25

//           QUESTION NO 1

// var firstName = prompt("enter your first name")
// var lastName = prompt("enter your last name")
// var fullName = firstName + " " + lastName
// document.write(`Hello ${fullName}`)

//           QUESTION NO 2

// var phone = prompt("Enter Phone Your Favourite Phone Name")
// document.write(`My Favourite Phone is: ${phone} <br> Lenght of string: ${phone.length}`)

//           QUESTION NO 3

// var userInp = "Pakistani";
// document.write(`String: ${userInp} <br>Index of 'n': ${userInp.indexOf("n")}`)

//           QUESTION NO 4

// var words = "Hello World";
// document.write(`String: ${words} <br>Last Index of 'l': ${words.lastIndexOf("l")}`)

//           QUESTION NO 5

// var words = "Pakistani";
// document.write(`String: ${words} <br>Character at index '3': ${words.charAt(3)} `)

//           QUESTION NO 6

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName.concat(" " + lastName); // .concat concreate krne ke kaam aayegaa
// document.write(fullName)

//           QUESTION NO 7
// Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var wordddd = "Hyderabad";
//                        //    iski jgah, isko add kr rha
// var foundNew = wordddd.replace("Hyder","Islam");
// document.write(`City: ${wordddd} <br>After Replacement:${foundNew}`)

//           QUESTION NO 8
// Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser. 

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var replace = message.replaceAll("and","&")  
// document.write(`${replace}`)

//           QUESTION NO 9

// Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser. 

// var num1 = "472";
// var converts = typeof num1;
// document.write(`Value : ${num1} <br>Type: ${converts}`)
// var num2 = 472;

// var num2 = 472;
// var converts2 = typeof num2;
// document.write(`<br>Value : ${num2} <br>Type: ${converts2}`)


//           QUESTION NO 10

// Write a program that takes user input. Convert and 
// show the input in capital letters.

// var userInp1 = prompt("write a peanut");
// var final1 = userInp1.toUpperCase();
// document.write(final1)

//           QUESTION NO 11
// Write a program that takes user input. Convert and 
// show the input in title case.

// var string = prompt("Enter a input:");
// console.log(string); // MY PROMPT - asad - output will be the same "asad"

// var first = string.charAt(0); // they word as a Select its full mean is CHARASTER AT 01234 etc etc
// console.log(first); // output will be the same "a"
// console.log(first.toUpperCase()) // output will be the same "A"

// var rem = string.slice(1)  // they word as a Minus its full mean is slice krna mtlb ek 1 slice hai pizza ka ek kism se piece karna he hai define bhi krna lazmi for example 1 
// console.log(rem); // output will be the same "sad"

// var conc = first.toUpperCase() + rem; // A + sad = istrhn apas mei + hojyngy..
// console.log(`Final: ${conc}`)  // Final output will be show Final: Asad


//           QUESTION NO 12
// Write a program that converts the variable num to 
// string. 
// Remove the dot to display “3536” display in your browser. 

// var num = 35.36; // NUMBER
// var str = num.toString(); // TURN THIS INTO STRING VALUE "35.36"
// var final = str.replace(".","") // replace "." to empty " "
// console.log(final) // output 3536

//           QUESTION NO 13

