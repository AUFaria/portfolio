// Basic variables
var money = 0
var increment = 0.01
var tickspeed = 1000
var money_tag = document.getElementById('money')

// Loading from database
var saveGame = function () {
    localStorage.setItem('money', money)
    localStorage.setItem('increment', increment)
}

var loadGame = function () {
    var savedMoney = localStorage.getItem('money')
    var savedIncrement = localStorage.getItem('increment')

    if (savedMoney) {
        money = parseFloat(savedMoney)
    }

    if (savedIncrement) {
        increment = parseFloat(savedMoney)
    }        
}

// Upgrade 1

var upgrade1_tag = document.getElementById('upgrade1')
var upgrade1_cost = 25
var upgrade1_timesbought = 0

var upgrade1_availability = function () {
    upgrade1_tag.style.display = 'block'
    upgrade1_tag.innerHTML = `Buy Upgrade 1 <br> ${upgrade1_timesbought} <br> Cost: ${upgrade1_cost.toFixed()}`
}

var upgrade1 = function () {
    money -= upgrade1_cost
    upgrade1_cost *= 1.5
    upgrade1_timesbought += 1
    increment += 0.01
}

//Upgrade 2

var upgrade2_tag = document.getElementById('upgrade2')
var upgrade2_cost = 100
var upgrade2_timesbought = 0
var upgrade2_check = false

var upgrade2_availability = function () {
    upgrade2_tag.style.display = 'block'
    upgrade2_tag.innerHTML = `Buy Upgrade 2 <br> ${upgrade2_timesbought} <br> Cost: ${upgrade2_cost.toFixed()}`
    upgrade2_check = true
}

var upgrade2 = function () {
    money -= upgrade2_cost
    upgrade2_cost *= 2.25
    upgrade2_timesbought += 1
    increment += 0.02
}

//Upgrade 3

var upgrade3_tag = document.getElementById('upgrade3')
var upgrade3_cost = 1250
var upgrade3_timesbought = 0
var upgrade3_check = false

var upgrade3_availability = function () {
    upgrade3_tag.style.display = 'block'
    upgrade3_tag.innerHTML = `Buy Upgrade 3 <br> ${upgrade3_timesbought} <br> Cost: ${upgrade3_cost.toFixed()}`
    upgrade3_check = true
}

var upgrade3 = function () {
    money -= upgrade3_cost
    upgrade3_cost *= 3.375
    upgrade3_timesbought += 1
    increment += 0.03
}

//Upgrade 4

var upgrade4_tag = document.getElementById('upgrade4')
var upgrade4_cost = 26250
var upgrade4_timesbought = 0
var upgrade4_check = false

var upgrade4_availability = function () {
    upgrade4_tag.style.display = 'block'
    upgrade4_tag.innerHTML = `Buy Upgrade 4 <br> ${upgrade4_timesbought} <br> Cost: ${upgrade4_cost.toFixed()}`
    upgrade4_check = true
}

var upgrade4 = function () {
    money -= upgrade4_cost
    upgrade4_cost *= 5
    upgrade4_timesbought += 1
    increment += 0.05
}

//Upgrade 5

var upgrade5_tag = document.getElementById('upgrade5')
var upgrade5_cost = 774375
var upgrade5_timesbought = 0
var upgrade5_check = false

var upgrade5_availability = function () {
    upgrade5_tag.style.display = 'block'
    upgrade5_tag.innerHTML = `Buy Upgrade 5 <br> ${upgrade5_timesbought} <br> Cost: ${upgrade5_cost.toFixed()}`
    upgrade5_check = true
}

var upgrade5 = function () {
    money -= upgrade5_cost
    upgrade5_cost *= 7.6
    upgrade5_timesbought += 1
    increment += 0.08
}

//Upgrade 6

var upgrade6_tag = document.getElementById('upgrade6')
var upgrade6_cost = 21682500
var upgrade6_timesbought = 0
var upgrade6_check = false

var upgrade6_availability = function () {
    upgrade6_tag.style.display = 'block'
    upgrade6_tag.innerHTML = `Buy Upgrade 6 <br> ${upgrade6_timesbought} <br> Cost: ${upgrade6_cost.toFixed()}`
    upgrade6_check = true
}

var upgrade6 = function () {
    money -= upgrade6_cost
    upgrade6_cost *= 11.6
    upgrade6_timesbought += 1
    increment += 0.13
}

//Upgrades interaction

function interaction() {
    loadGame()

    upgrade1_tag.addEventListener('click', function () {
        if (money >= upgrade1_cost) {
            upgrade1()
        }
    })

    upgrade2_tag.addEventListener('click', function () {
        if (money >= upgrade2_cost) {
            upgrade2()
        }
    })

    upgrade3_tag.addEventListener('click', function () {
        if (money >= upgrade3_cost) {
            upgrade3()
        }
    })

    upgrade4_tag.addEventListener('click', function () {
        if (money >= upgrade4_cost) {
            upgrade4()
        }
    })

    upgrade5_tag.addEventListener('click', function () {
        if (money >= upgrade5_cost) {
            upgrade5()
        }
    })

    upgrade6_tag.addEventListener('click', function () {
        if (money >= upgrade6_cost) {
            upgrade6()
        }
    })

}

//Update

function refresh() {
    money > upgrade1_cost || upgrade1_timesbought >= 1 ? upgrade1_availability() : upgrade1_tag.style.display = 'none'
    money > upgrade2_cost || upgrade2_check == true ? upgrade2_availability() : upgrade2_tag.style.display = 'none'
    money > upgrade3_cost || upgrade3_check == true ? upgrade3_availability() : upgrade3_tag.style.display = 'none'
    money > upgrade4_cost || upgrade4_check == true ? upgrade4_availability() : upgrade4_tag.style.display = 'none'
    money > upgrade5_cost || upgrade5_check == true ? upgrade5_availability() : upgrade5_tag.style.display = 'none'
    money > upgrade6_cost || upgrade6_check == true ? upgrade6_availability() : upgrade6_tag.style.display = 'none'

    money_tag.innerHTML = `Currency: ${money.toFixed()}`
    money += increment

    saveGame()
}

interaction()
setInterval(refresh, (tickspeed / 100));