//alert("test");
// ### Problem 1:
// Put the start of your program in a main function. Ask the user to enter a number to print. Create a switch case that prints 1 if you enter 1, 2 if you enter 2, 3 if you enter 3, 4 if you enter 4, and 5 if you enter 5.
// ### Problem 1:
// Put the start of your program in a main function. Ask the user to enter a number to print. Create a switch case that prints 1 if you enter 1, 2 if you enter 2, 3 if you enter 3, 4 if you enter 4, and 5 if you enter 5.


let userInput = prompt("Enter a number to print");

switch (userInput) {
    case "1":
        console.log(1);
        break;
    case "2":
        console.log(2);
        break;
    case "3":
        console.log(3);
        break;
    case "4":
        console.log(4);
        break;
    case "5":
        console.log(5);
        break;
    default:
        alert("enter a number between 1 - 5");


}
// ## Problem 2:
// Put the start of your program in a main function. Ask the user to enter a 3 digit binary number. Create a switch case that prints 1 if you enter 1, 2 if you enter 10, 3 if you enter 11, 4 if you enter 100, and 5 if you enter 101.

// let userInput = prompt("Enter up to a 3 digit binary number");
//
// switch (userInput) {
//     case "1":
//         console.log(1);
//         break;
//     case "10":
//         console.log(2);
//         break;
//     case "11":
//         console.log(3);
//         break;
//     case "100":
//         console.log(4);
//         break;
//     case "101":
//         console.log(5);
//         break;
//     default:
//         alert("not a binary number");
//
// }