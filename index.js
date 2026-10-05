var prompt = require('prompt-sync')();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function showMenu(){
    console.log('Welcome, choose task number (1-3)\n1. Formula calculation\n2. Price + tax evaluation\n3. Converter\n0. Exit')
}

showMenu()
const choice = parseInt(prompt('> '))
if (isNaN(choice) || choice < 0 || choice > 3) {
    console.error('Error: No such choice. Enter a valid number.')
}

switch (choice) {
    case 1:
        console.log("Formula: \"a*b^2\"\nEnter a: ")
        const numberA = parseInt(prompt('> '))
        if(isNaN(numberA))
            console.error('Error: Please, enter a number')
        
        console.log("Enter b: ")
        const numberB = parseInt(prompt('> '))
        if(isNaN(numberB))
            console.error('Error: Please, enter a number')
        
        console.log("Result = " + (numberA * numberB ** 2))
        break
        
    case 2:
        console.log('Enter the price of the product: ')
        const price = parseInt(prompt('> '))
        if(isNaN(price))
            console.error('Error: Please, enter a number')
        
        const tax = getRandomInt(1, 5)
        console.log("Tax = " + tax + "%")
        console.log("Total price = " + (price + price * (tax / 100)))
        break
        
    case 3:
        console.log('Enter value to convert (km, kg, l): ')
        let conversionValue = parseInt(prompt('> '))
        if(isNaN(conversionValue))
            console.error('Error: Please, enter a number')
        
        console.log('...convert it to?\n1. To miles\n2. To pounds\n3. To gallons')
        const conversionChoice = parseInt(prompt('> '))
        if(isNaN(conversionChoice))
            console.error('Error: Please, enter a number')
        
        // Numbers instead of units' shorthands are used for case number and enum value match
        const units = {
            1: 'miles',
            2: 'pounds',
            3: 'gallons'
        }
        switch (conversionChoice) {
            case 1:
                conversionValue *= 0.62137;
                break
            
            case 2:
                conversionValue *= 2.20462;
                break
            
            case 3:
                conversionValue *= 0.26417;
                break
        }
        
        console.log('Result = ' + conversionValue.toFixed(2) + ' ' + units[conversionChoice])
        break
}