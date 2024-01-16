# Ticket counter with React Hook 'useState'

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Intro

This is the fourteenth project of my 30-day coding challenge. The project includes following tech stuff: React, Hook "useState".

## Idea

As Stockholm is spoiling its citizens with -15°C grades, I dared to dream about leaving everything and heding to Cran Canaria. Well, as I still lack some daring to get so spontaneous, I decided to create a booking system where a user can get tickets to this Spanish island. By clicking "-" we decrease the amount of tickets and by "+" we increase it. We cannot go below 1. 

## Breaking down the code

I followed the React traditional folder structure. I created a folder called "components". I created separate CSS files for each components. The most interesting code we can see in the `Counter` component as that's where we see `useState`.

### State Variables
`count`: Keeps track of the number of tickets selected, initialized to 1.
`theme`: Represents the theme based on the count, initially set to "ticket" or "tickets."
`click`: A boolean state to determine if the "Get" button has been clicked.

### Functions

`decrementCount`: Decrements the count state by 1, but ensures it doesn't go below 1. It also updates the theme based on the new count.
`incrementCount`: Increments the count state by 1 and updates the theme accordingly.
`updateTheme`: Updates the theme based on the value of the newCount parameter.
`handleClick`: Sets the click state to true when the "Get" button is clicked.

### useState
The `useState` hook in React is used to add state variables to functional components. It returns an array with two elements: the current state value and a function to update that value. 

`The Counter` component uses the `useState` hook to manage three states: count for tracking the number of tickets, theme for dynamically updating the display based on the count, and click to control conditional rendering. Buttons for incrementing and decrementing the count trigger corresponding functions, and clicking the "Get" button sets the click state to display a message with the current count and theme.

## Demo

Click <a href="https://sparkling-strudel-cea7aa.netlify.app/"> here </a>.