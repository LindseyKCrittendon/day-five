// Fried Pickles are the Best
// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.

var favoriteFood = "sushi";
// Write a conditional that checks to see if the favoriteFood variable is equal to "fried pickles" OR "pepperoni rolls". If so, log "Congratulations! You have excellent taste!" to the console. Otherwise, log "Clearly you have not tried fried pickles or pepperoni rolls." to the console.
if (favoriteFood == "fried pickles" || favoriteFood == "sushi") {
    console.log("you have great taste")
} else {
    console.log("Have you tried fried pickles or sushi?")
}
// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
// Is the sum of 1 and 1 greater than 5?
// Is the product of 4 and 5 less than our equal to 20?
// Is the difference between 6 and 2 greater than or equal to 0?

if (1 + 1 > 5) {
    console.log("true fact");
} else {
    console.log("Lies!")
}

if (4 * 5 <= 20) {
    console.log("True fact!");
} else {
    console.log("Lies!")
}

if (6 - 2 >= 0) {
    console.log("True fact!");
} else {
    console.log("lies")
}

// In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
// If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console.

var likesDogs = true
if (likesDogs === true) {
    console.log("You're a dog person!");
} else {
    console.log("You're a cat person!")
}

// Declare a variable called birthYear and set it equal to your birth year.
// Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
// Try changing the value of birthYear and see what happens.

var birthYear = 1980
if (birthYear >= 1982) {
    console.log("You are a millenial");
} else {
    console.log("You might be a boomer!")
}

// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.

// Write a conditional that checks for the following:

// If the person's preferred language is English, print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

var franksInfo = {
    firstName: "Frank",
    language: "French"
}

if (franksInfo.language === "French") {
    console.log(`Bonjour, ${franksInfo.firstName}!`);
} else {
    console.log(`Hello, ${franksInfo.firstName}!`)
}

// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
// A variable called isHungry that stores a boolean representing whether or not you're hungry
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
// If it's 12:00 PM and you're hungry, log "Time for luch!" to the console
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
// If you're hungry, log "Time for a snack!" to the console.
// If none of the above are true, log "Have a cookie anyway!" to the console.
// Try changing the values of your variables. You should get different results every time you change them.




//loops

//WHILE LOOP - will continue to run as long as the variable meets the criteria.

var i = 0;

while (i < 20) {
    console.log(i, "it's less than 20")
    i = i + 1
}
//convention says you use 'i' for counters, and you use 'i++' to represent i + 1


// In your JavaScript file, write a while loop that outputs the phrase “TWEET TWEET” 100 times to the console.

var tweetCounter = 1;

while (tweetCounter <= 100) {
    console.log(tweetCounter, "TWEET TWEET")
    tweetCounter = tweetCounter + 1;
}

//FOR LOOP
//most common and syntax similar in C#

// for(var i = 0; i < 20; i++){
//this stuff will run a bunch of times.  declare what i =, condition, what number to count by
// console.log("It's less than 20!", i)}

// for(var i = 0; i < 100; i++){
//     console.log("TWEET TWEET!", i)
//  }

//   var favoriteFoods = ["tacos", "perpperoni rolls", "sushi", "pizza", "canned soup", "frozen stuff", "bread", "toilet paper"]
// console.log(favoriteFoods.length)

// 1. Student Names:Use a for loop to print each student's name to the console. 
var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

for (var i = 0; i < cohortOneStudents.length; i++) {
    console.log(cohortOneStudents[i]);
}

// 2. Interests
// In your JavaScript file, create an array of 5 of your interests.
// Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.
// Output:
// One of my interests is: hiking.
// One of my interests is: coding.
// One of my interests is: math.
// One of my interests is: 30 Rock.
// One of my interests is: pizza.

var lindseyInterests = ["beekeeping", "reading", "weightlifting", "coding", "cooking"]

for (var i = 0; i < lindseyInterests.length; i++) {
    console.log(`One of my interests is ${lindseyInterests[i]}`, i)
}

// 3. Favorite Interest
// Refactor your loop from the previous exercise. Pick one of your interests as your absolute favorite interest. Add a conditional to your loop to check if each interest in the array is your favorite. When the loop gets to your favorite interest, it should print "My absolute favorite interest is:" followed by the name of your interest. Any other interests can be printed the same way that they were in the previous exercise.
// Output:
// One of my interests is: hiking.
// My absolute favorite interest is: coding.
// One of my interests is: math.
// One of my interests is: 30 Rock.
// One of my interests is: pizza.

for (var i = 0; i < lindseyInterests.length; i++) {
    if (lindseyInterests[i] === "beekeeping") {
        console.log(`My absolute favorite interest is:  ${lindseyInterests[i]}`)
    } else {
        console.log(`One of my interests is ${lindseyInterests[i]}`)
    }
}

