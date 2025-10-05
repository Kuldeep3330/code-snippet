function checkInventory() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Checking the inventory...');
            resolve()
        }, 2000)
    })
}
function createOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Creating the order...');
            resolve()
        }, 1000)
    })

}
function chargePayment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Charging the payment...');
            resolve()
        }, 2000)
    })
}
function sendInvoice() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Sending the invoice...');
            resolve()
        }, 1000)
    })

}

function Main() {
    checkInventory().then(() => createOrder()).then(() => chargePayment()).then(() => sendInvoice()).then(() => {
        console.log('order placed');
    })
}
Main()