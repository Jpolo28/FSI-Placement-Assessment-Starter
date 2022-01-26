
// First, tell us your name
let yourName = "Jesus Polo" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')

const gbMinusBtn = document.querySelector('#minus-gb')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarMinusBtn = document.querySelector('#minus-sugar')



// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb =gb + 1;
    let Gingerbread = document.querySelector('#qty-gb')
    Gingerbread.textContent = gb
    const total= gb + cc + sugar
    let htmlTotal = document.querySelector('#qty-total')
    htmlTotal.textContent = total
})
ccPlusBtn.addEventListener('click', function() {
    cc =cc + 1;
    let ChocolateChip = document.querySelector('#qty-cc')
    ChocolateChip.textContent = cc
    const total= gb + cc + sugar
    let htmlTotal = document.querySelector('#qty-total')
    htmlTotal.textContent = total
})
sugarPlusBtn.addEventListener('click', function() {
    sugar =sugar + 1;
    let SugarSprinkle = document.querySelector('#qty-sugar')
    SugarSprinkle.textContent = sugar
    const total= gb + cc + sugar
    let htmlTotal = document.querySelector('#qty-total')
    htmlTotal.textContent = total
})

gbMinusBtn.addEventListener('click', function() {
    gb =gb - 1;
    let Gingerbread = document.querySelector('#qty-gb')
    Gingerbread.textContent = gb
    const total= gb + cc + sugar
    let htmlTotal = document.querySelector('#qty-total')
    htmlTotal.textContent = total
})
ccMinusBtn.addEventListener('click', function() {
    cc =cc - 1;
    let ChocolateChip = document.querySelector('#qty-cc')
    ChocolateChip.textContent = cc
    const total= gb + cc + sugar
    let htmlTotal = document.querySelector('#qty-total')
    htmlTotal.textContent = total
})
sugarMinusBtn.addEventListener('click', function() {
    sugar =sugar - 1;
    let SugarSprinkle = document.querySelector('#qty-sugar')
    SugarSprinkle.textContent = sugar
    const total= gb + cc + sugar
    let htmlTotal = document.querySelector('#qty-total')
    htmlTotal.textContent = total
})
