/*  PART 1 - STEP 1
1.	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.
*/

//var inputName = window.prompt("What is your name?");
//window.alert(inputName.length);

/*  STEP 2
2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
*/

//var inputName = window.prompt("What is your name?");
//var positionName = window.prompt("Enter numeric value to find the letter in your name to find");
//window.alert(inputName.charAt(positionName - 1));

/*  STEP 3
3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
*/

//var firstName = window.prompt("What is your first name?");
//var lastName = window.prompt("What is your last name?");
//var fullName = (firstName.concat(lastName));
//window.alert("Your name is: " + fullName + ".");

/*  STEP 4
4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
*/

//var newText = "The quick brown fox jumps over the lazy dog.";
//window.alert(newText.indexOf("fox"));

/* STEP 5
5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
*/

//var newText = "The quick brown fox jumps over the lazy fox.";
//window.alert(newText.lastIndexOf("fox"));

/*  STEP 6
6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
*/

//var newText = "The quick brown fox jumps over the lazy dog.";
//var fullName = window.prompt("What is your full name?");
//window.alert(newText.replace("the lazy dog", fullName));

/*  STEP 7
7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
*/

//var newText = "The quick brown fox jumps over the lazy dog.";
//var newWord = window.prompt("Please enter a word to find in the sentence \"The quick brown fox jumps over the lazy dog\".");
//window.console.log(newText.search(newWord));

/*  STEP 8
8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
*/

//var old_string = "The quick brown fox jumps over the lazy dog";
//var new_string = old_string.slice(0, 3) + " " + old_string.substr(35, 4) + " " + old_string.substring(40, 43);
//window.console.log(new_string.toUpperCase());

/* STEP 9
9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
*/

//var new_string = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
//new_string = new_string.trim();
//window.alert(new_string.toLowerCase());

/*  STEP 10
10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
*/

//var old_string = "the quick brown fox jumps over the lazy dog";
//var new_string = old_string.charAt(0).toUpperCase() + old_string.substring(1);
//window.alert(new_string);

/* ASSIGNMENT 2 PART 2 - PART 1 - Math and Math Functions (5 points)

1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
*/

//var inputNumber = window.prompt("Please enter a number.");
//window.console.log(Math.abs(inputNumber));

/*  
2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
*/

//var inputNumber = window.prompt("Please enter a decimal number.");
//window.console.log(Math.round(inputNumber));

/*  
3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
*/

//var inputNumber = window.prompt("Please enter a decimal number.");
//window.console.log(Math.floor(inputNumber));

/*  
4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
*/

//var inputNumbers = window.prompt("Please enter 5 numbers, each seperated by a comma.");
//window.console.log(inputNumbers.match(/\d/g));

/* 
5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
*/

//var inputNumber = window.prompt("Please enter a number.");
//window.console.log(Math.sqrt(inputNumber));

/*  PART 2 - Date and Date Functions (6 points)

6.	Create an application that gets the current date. Display that result within the console window.
*/

//var currentDate = new Date();
//window.console.log(currentDate.toDateString());

/*  
7.	Create an application that gets the number of days in a month. Display that result within the console window.
*/

//var enterMonth = window.prompt("Please enter a month.");
//var numberOfDays;
//var newMonth;
//var month = (enterMonth.toLowerCase());
//if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
//    numberOfDays = 31;
//} else if (month === "april" || month === "june" || month === "september" || month === "november") {
//    numberOfDays = 30;
//} else if (month === "february") {
//    numberOfDays = 28;
//}
//newMonth = month.charAt(0).toUpperCase() + month.substring(1);
//window.console.log(newMonth + " has " + numberOfDays + " days in it.");

/*
8.	Create an application that gets the month name from a particular date.
Display that result within the console window.
*/

//var month;
//var thisMonth;
//var d = new Date();
//month = (d.getMonth());
//window.console.log(month);
//if (month === 0) {
//    thisMonth = "January";
//} else if (month === 1) {
//    thisMonth = "February";
//} else if (month === 2) {
//    thisMonth = "March";
//} else if (month === 3) {
//    thisMonth = "April";
//} else if (month === 4) {
//    thisMonth = "May";
//} else if (month === 5) {
//    thisMonth = "June";
//} else if (month === 6) {
//    thisMonth = "July";
//} else if (month === 7) {
//    thisMonth = "August";
//} else if (month === 8) {
//    thisMonth = "September";
//} else if (month === 9) {
//    thisMonth = "October";
//} else if (month === 10) {
//    thisMonth = "November";
//} else if (month === 11) {
//    thisMonth = "December";
//}
//window.console.log("This month is " + thisMonth + ".");
    
/*
9.	Create an application that tests whether a date is a weekend. Display that result within the console window.
*/

//var d = new Date();
//var dayOfWeek;
//dayOfWeek = (d.getDay());
//if (dayOfWeek === 0 || dayOfWeek === 7) {
//    window.console.log("Today is a weekend.");
//} else if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6) {
//    window.console.log("Today is a weekday.");
//}

/*
10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
*/

//var yesterdayDayOfWeek;
//var yesterday;
//var d = new Date();
//yesterday = (d.getDay());
//yesterday = yesterday -= 1;
//if (yesterday === 0) {
//    yesterdayDayOfWeek = "Sunday";
//} else if (yesterday === 1) {
//    yesterdayDayOfWeek = "Monday";
//} else if (yesterday === 2) {
//    yesterdayDayOfWeek = "Tuesday";
//} else if (yesterday === 3) {
//    yesterdayDayOfWeek = "Wednesday";
//} else if (yesterday === 4) {
//    yesterdayDayOfWeek = "Thursday";
//} else if (yesterday === 5) {
//    yesterdayDayOfWeek = "Friday";
//} else if (yesterday === 6) {
//    yesterdayDayOfWeek = "Saturday";
//}
//window.console.log("Yesterday was " + yesterdayDayOfWeek);

/*
11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
*/

//var dayOfWeek;
//var today;
//var d = new Date();
//dayOfWeek = (d.getDay());
//if (dayOfWeek === 0) {
//    today = "Sunday";
//} else if (dayOfWeek === 1) {
//    today = "Monday";
//} else if (dayOfWeek === 2) {
//    today = "Tuesday";
//} else if (dayOfWeek === 3) {
//    today = "Wednesday";
//} else if (dayOfWeek === 4) {
//    today = "Thursday";
//} else if (dayOfWeek === 5) {
//    today = "Friday";
//} else if (dayOfWeek === 6) {
//    today = "Saturday";
//}
//window.console.log(today.charAt(0));

/*  PART 3 - Conditional Logic and Looping Operations (4 points)

12.	Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
*/

//var integerOne = window.prompt("Please enter an integer.");
//var integerTwo = window.prompt("please enter a second integer.");
//window.console.log(Math.max(integerOne, integerTwo));

/*  PART 3
13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 

Student Name	Marks
Ursula	80
Paul	77
Henry	88
Tabitha	95
Lucy	68

The grades are computed as follows:

Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A
*/

//var students = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
//var grades = [80, 77, 88, 95, 68];
//var assignGrade = [];
//var i;
//for (i = 0; i < students.length; i += 1) {
//    if (grades[i] < 60) {
//        assignGrade[i] = "F";
//    } else if (grades[i] < 70) {
//        assignGrade[i] = "D";
//    } else if (grades[i] < 80) {
//        assignGrade[i] = "C";
//    } else if (grades[i] < 90) {
//        assignGrade[i] = "B";
//    } else {
//        assignGrade[i] = "A";
//    }
//    window.console.log(students[i] + " " + assignGrade[i]);
//}

/*
14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
*/

//var i;
//for (i = 1; i <= 15; i += 1) {
//    if (i % 2 === 0) {
//        window.console.log(i + " is even.");
//    } else {
//        window.console.log(i + " is odd.");
//    }
//}

/*
15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
*/

//var i;
//for (i = 1; i <= 100; i += 1) {
//    if (i % 3 === 0 && i % 5 === 0) {
//        window.console.log("FizzBuzz");
//    } else if (i % 3 === 0) {
//        window.console.log("Fizz");
//    } else if (i % 5 === 0) {
//        window.console.log("Buzz");
//    }
//}

/*
Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game (5 points)

In this game you will explore what you’ve learned so far about variables, prompts, alerts, strings, conditionals, and more to create a game similar to the Hitchhiker’s Guide to the Galaxy. To complete the game follow the steps outlined below:

1.	Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.
*/

//var questionOne = window.prompt("Are you ready to play my game? y/n");
//if (questionOne === "y") {
//    window.alert("Awesome, our hero is waiting!");
//} else {
//    var answer = window.confirm("Too bad, we’re going to play anyway because our hero desperately needs your help!");
//}
//window.console.log(answer);

/*
2.	Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”
*/

//window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

/*
3.	Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”
*/

//var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right).");

/*
4.	Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”
*/

//var direction;
//switch (direction) {
//case "forward":
//    window.alert("You walk about 100 yards and safely make your way out of the cave.");
//    break;
//case "left":
//    window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//    break;
//case "right":
//    window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//    break;
//default:
//    window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//}

/*
5.	Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”
*/

//var rating = window.prompt("Please rate this game on a scale of 1 to 10.");
//if (rating >= 6 && rating <= 10) {
//    window.alert("Thank you, we will continue to make improvements to the game!");
//} else if (rating >= 1 && rating <= 5) {
//    window.alert("Whatever, you weren’t very good at this game anyway!");
//}

/*
6.	Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.
*/
    
//var rating = window.prompt("Please rate this game on a scale of 1 to 10.");
//if (rating < 1 || rating > 10) {
//    rating = 10;
//}
//if (rating >= 6 && rating <= 10) {
//    window.alert("Thank you, we will continue to make improvements to the game!");
//} else if (rating >= 1 && rating <= 5) {
//    window.alert("Whatever, you weren’t very good at this game anyway!");
//}

/*
Part 5 - The “Coin Flip” Game (5 points)

In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:

1.	Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
*/

//var coinFlip = Math.random();

/*
2.	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
*/

//var choice = window.prompt("Please select Heads or Tails");

/*
3.	Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
*/

//var result;
//if (coinFlip > 0.5) {
//    result = "Heads";
//} else {
//    result = "Tails";
//}

/*
4.	If the result is heads and the user selects heads, display the following message within an alert: 

The flip was heads and you chose heads...you win!
*/

//if (result === "Heads" && choice === "Heads") {
//    window.alert("The flip was heads and you chose heads...you win!");
//}

/*
5.	If the result is heads and the user selects tails, display the following message within an alert: 

The flip was heads but you chose tails...you lose!
*/

//if (result === "Heads" && choice === "Tails") {
//    window.alert("The flip was heads but you chose tails...you lose!");
//}

/*
6.	If the result is tails and the user selects heads, display the following message within an alert: 

The flip was tails but you chose heads...you lose!
*/

//if (result === "Tails" && choice === "Heads") {
//    window.alert("The flip was tails but you chose heads...you lose!");
//}

/*
7.	If the result is tails and the user selects tails, display the following message within an alert: 

The flip was tails and you chose tails...you win!
*/

//if (result === "Tails" && choice === "Tails") {
//    window.alert("The flip was tails and you chose tails...you win!");
//}

/*
8.	Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.
*/

//var result;
//var coinFlip = Math.random();
//var choice = window.prompt("Please select Heads or Tails");
//coinFlip = Math.round(coinFlip);
//
//if (coinFlip === 1) {
//    result = true;
//} else {
//    result = false;
//}
//if (result === true && choice === "Heads") {
//    window.alert("The flip was heads and you chose heads...you win!");
//}
//if (result === true && choice === "Tails") {
//    window.alert("The flip was heads but you chose tails...you lose!");
//}
//if (result === false && choice === "Heads") {
//    window.alert("The flip was tails but you chose heads...you lose!");
//}
//if (result === false && choice === "Tails") {
//    window.alert("The flip was tails and you chose tails...you win!");
//}
//window.console.log(result, choice);

/*
Part 6 - The “Coin Flip” Game Redux (5 points)

In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:

1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.

2.	Create a for loop that loops 10 times.

3.	Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.

4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
*/

//var coinFlip;
//for (var i = 1; i <= 10; i += 1;) {
//    coinFlip = Math.random(coinFlip);
//    coinFlip = Math.round(coinFlip);
//    if (coinFlip === 0) {
//        window.console.log("Heads");
//    } else if (coinFlip === 1) {
//        window.console.log("Tails");
//    }
//}

/*
Part 7 - The “Coin Flip Streak” Game (5 points)

In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:

1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.

2.	Create a do while loop.

3.	Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.

4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 

5.	Set the condition of the do while loop to end once the coinFlip becomes “Tails”.
*/

//var coinFlip;
//do {
//    coinFlip = Math.random(coinFlip);
//    coinFlip = Math.round(coinFlip);
//    if (coinFlip === 0) {
//        window.console.log("Heads");
//    } else if (coinFlip === 1) {
//        window.console.log("Tails");
//    }
//} while (coinFlip !== 1);

/*
Part 8 – Looping a Triangle (5 points)
Write a loop that displays the following triangle within a console window:

#
##
###
####
#####
######
#######
*/

//var i;
//var output = "#######";
//for (i = 1; i <= 7; i += 1) {
//    window.console.log(output.substr(0, i));
//}

/*
Part 9 – Odd or Even? (5 points)

Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 

Sample Output:
"0 is even" 
"1 is odd" 
"2 is even"
*/

//var i;
//for (i = 1; i <= 15; i += 1) {
//    if (i % 2 === 0) {
//        window.console.log(i + " is even.");
//    } else {
//        window.console.log(i + " is odd.");
//    }
//}
