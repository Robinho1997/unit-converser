const conversionSection = document.getElementById("conversion-section")
let inputNumber = document.getElementById("input-num")

function emptyInput() {
    conversionSection.innerHTML = `
        <div class=error-message> Please enter a number first! </div>
        <p class=error-message>Thank you</p>`
}

function conversion() {
    let inputValue = inputNumber.value
    if (inputValue.length == 0) {
        emptyInput()
    } else {
    let feet = inputValue * 3.281
    feet = feet.toFixed(3)
    let meters = inputValue / 3.281
    meters = meters.toFixed(3)
    let gallons = inputValue * 0.264
    gallons = gallons.toFixed(3)
    let liters = inputValue / 0.264
    liters = liters.toFixed(3) 
    let pounds = inputValue * 2.204
    pounds = pounds.toFixed(3)
    let kilos = inputValue / 2.204
    kilos = kilos.toFixed(3)
    conversionSection.innerHTML = `
    <div class=conversion-elements id=length>
        <h2>Length (Meter/Feet)</h2>
        <p> ${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters</p>
    </div>
    
    <div class=conversion-elements id=volume>
        <h2>Volume (Liters/Gallons)</h2>
        <p> ${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters</p>
    </div>
    
    <div class=conversion-elements id=mass>
        <h2>Mass (Kilogramm/Pounds)</h2>
        <p> ${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos</p>
    </div>
    `
   
}
}


    

