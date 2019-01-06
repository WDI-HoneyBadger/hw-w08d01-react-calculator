# React Calculator!

![](https://i.giphy.com/iPw3q8epQcMgw.gif)

### Setup
* run `npm install` in this directory to get all of the dependencies. 

### Assignment
In this directory is a basic React calculator. The UI is built out, but the calculator isn't functional...yet.

Your completed calculator should:
- Show numbers in the `display` component when clicked
- When clicking a series of numbers, the display will show all of them. For example, clicking `1 - 5 - 7` will show `157`
- Keep track of the most recent operator pressed (+, -, /, x)
- When `=` is pressed, preform the operator between the running total and the displayed number.

### Tips for Getting Started
* Consider how and where state should be managed for this app.
* What props will need to be passed around the app? 
* Each tile will need to behave in a unique way. Think about the functions you will need for each. What needs to happen when a number is pushed? What happens when you push `+`? What happens when you push `=`?
* Your calculator should be able to hold on to a few pieces of state: 
    * the current value being displayed
    * the running total
    * the most recent operator

## BONUS
1. Write a function to handle when the decimal key is pressed
1. Write a function to handle clicking the '+/-' button 
2. Write a funciton to handle the '%' button. Ex: 10 % -> 0.10, 22 % -> 0.22
2. Write a function that will show the calculators recent history when you double click on the display component
## Submission

Homework is due by **12:00 Tonight!**
