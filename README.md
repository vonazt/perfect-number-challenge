# Perfect Number Challenge #

My main focus for this challenge was to keep things as simple as possible. That is why I have stuck to a basic html/app.js setup, as using any more complicated framework of library felt like overkill.

The first step in attempting this challenge was breaking down the problem into various stages, with the initial step being to find the divisors for any given integer. I achieved this by creating a for loop which iterated through all the numbers from 0 till the given integer and used the modulo operator to check if the current number, `i`, in the loop was a factor of the given integer. If it was, it was pushed into a `divisorArray`. After creating an array of all the divisors, I then used the `.reduce()` method to sum all the numbers and then compared this aliquot sum to the given integer to check whether the given integer was perfect, abundant or deficient.

Once I had tested this function, I refactored the code that summed and reduced the numbers into its own function, and changed the for loop into an array that returned the numbers from 0 to the given integer-1 by returning the index positions using `.keys()`. I then used `.filter()` to return an array with only the divisors in it, and finally used `.reduce()` to return the sum of that array.

Once this was done, I created an input field on an html document, linked it to the app and checked whether it worked using DOM manipulation and Chrome dev tools. Again, with performance in mind, it seemed unnecessary to use a library such as jQuery to perform the relatively basic task DOM manipulation required.

The biggest challenge was then returning to the `getClassification()` function and checking for errors. The main ones I tried to cover were users not entering a valid number, entering a negative number, or entering a floating point. At first, I checked for errors within the `getClassification()` function, but as the number of errors grew, I created a separate `errorChecker()` function to keep the areas separate and improve readability.

There were also a couple of edge cases to account for, such as users entering 1, which then couldn't be reduced, or users separating numbers with commas, e.g., 1,000,000. I accounted for the latter by creating the `formatInteger()` function, which uses a regex to remove any commas, and also converts the number from a String to a Number. (I used Number to make the conversion so that a floating point would still throw an error.)

In terms of performance, if a user enters an 9-digit number or more, it takes a few seconds to calculate the number type, and with a 10+ digit number, the browser window crashes. This would seem to be a processing problem and I'm not sure it can be fixed by refactoring the `getClassification()` function.
