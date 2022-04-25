let rateResult = ''
const buttonsArray = Array.from(document.querySelectorAll('.choose'))

function paintBtn(button) {
    buttonsArray.map(btn => btn.classList.remove("btn-clicked"))
    button.classList.add("btn-clicked")
    for (item of buttonsArray) {
        if (item.classList.contains("btn-clicked")) {
            rateResult = item.value
            console.log(rateResult)
            sessionStorage.setItem("rate",rateResult)
        }
    }

}

document.getElementById("your-rate-msg").innerText = `You rate us  ${sessionStorage.getItem("rate")} of 5`




