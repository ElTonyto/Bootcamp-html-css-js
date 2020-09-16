function waitingTable(callback) {
    setTimeout(() => {
        console.log('Vous avez commandé')
        callback(waitingBurger)
    }, 1000)
}

function order(callback) {
    setTimeout(() => {
        console.log('Vous attendez votre burger')
        callback(eat)
    }, 0)
}
function waitingBurger(callback) {
    setTimeout(() => {
        console.log('Bon appétit')
        callback(waitingPay)
    }, 2000)
}
function eat(callback) {
    setTimeout(() => {
        console.log('Vous attendez à la caisse')
        callback()
    }, 0)
}
function waitingPay() {
    setTimeout(() => {
        console.log('Vous avez payé')
    }, 5000)
}

function start(callback) {
    console.log('Vous attendez une table')
    callback(order)
}

start(waitingTable)