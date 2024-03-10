const subscribe = document.getElementById("myCheckbox")
const masterCard = document.getElementById("masterCardBtn")
const paypal = document.getElementById("paypalBtn")
const submit = document.getElementById("submitBtn")
const subPara = document.getElementById("subPara")
const paymentPara = document.getElementById("paymentPara")

submit.onclick = function() {
    // ternary operator
    subPara.textContent = subscribe.checked ? "you are subscribed" : "you are not subscribed yet"
    if (masterCard.checked) {
        paymentPara.textContent = "you are using mastercard"
    }
    else if (paypal.checked) {
        paymentPara.textContent = "you are using paypal"
    }
}


