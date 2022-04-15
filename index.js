const buttonOne = document.getElementById("btn-one")
const buttonTwo = document.getElementById("btn-two")
const buttonThree = document.getElementById("btn-three")
const buttonFour = document.getElementById("btn-four")
const buttonFive = document.getElementById("btn-five")
let rateResult = ''
const buttonsArr = [buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive]

function paintBtn(button) {
    buttonsArr.map(btn => btn.classList.remove("btn-clicked"))
    button.classList.add("btn-clicked")
    for (item of buttonsArr) {
        if (item.classList.contains("btn-clicked")) {
            rateResult = item.value   
           
        }
       
    } 
    const yourRate = document.getElementById("your-rate-msg")
    yourRate.innerText = rateResult
}






