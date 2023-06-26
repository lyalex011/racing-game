//bets

let betPlayerOne = 0;
let betPlayerTwo = 0;
let playerSpeed01 = 1;
let playerSpeed02 = 1;

// class for players
class Player {
    constructor(engine, transmission, brakes, tires) {
        this.engine = engine;
        this.transmission = transmission;
        this.brakes = brakes;
        this.tires = tires;
        this.money = 1000;
        this.xpPoints = 0;
    }
    makeBet(num) {
        betPlayerOne += num;
    }

    upgradeEngine(num) {
        this.engine += num;
    }

    upgradeTrans(num) {
        this.transmission += num;
    }

    upgradeBrakes(num) {
        this.brakes += num;
    }

    upgradeTires(num) {
        this.tires += num;
    }

    getWinMoney() {
        this.money += betPlayerOne
        betPlayerOne = 0;
        this.xpPoints += 300+Math.random().toFixed(2)*this.money
        Math.floor(this.xpPoints)
    }

}

// player 01

let player01 = new Player(10, 10, 10, 10)

// player 02

let player02 = new Player(10, 10, 10, 10)

// road condition

function Weather() {
    let weather = Math.floor(Math.random() * 4) + 1;
    return weather
}

function RoadCondition() {
    let condition = Math.floor(Math.random() * 4) + 1;
    return condition
}

function trackLevel() {
    let track = Math.floor(Math.random() * 4) + 1;
    return track
}


// race 

// condition displays
let display01 = document.getElementById('')
let display02 = document.getElementById('')
let display03 = document.getElementById('')

// race function

function Race() {
    let var01 = Weather()
    let var02 = RoadCondition()
    let var03 = trackLevel()
    let winner = true;

// condition for weather display
        if(var01 === 1) {

        }else if(var01 === 2) {

        }else if(var01 === 3) {

        }else {

        }

        if(var02 === 1) {

        }else if(var02 === 2) {

        }else if(var02 === 3) {

        }else {

        }

        if(var03 === 1) {

        }else if(var03 === 2) {

        }else if(var03 === 3) {

        }else {

        }

// result calculating
    let newSpeed01 = playerSpeed01 + player01.engine / var01 + player01.transmission / var03 + player01.brakes / var02 + player01.brakes /var01 + player01.tires/var03 + player01.tires/var02 + Math.random().toFixed(2)
    let newSpeed02 = playerSpeed02 + player01.engine / var01 + player02.transmission / var03 + player02.brakes / var02 + player02.brakes /var01 + player02.tires/var03 + player02.tires/var02 + Math.random().toFixed(2)
        if(newSpeed02 > newSpeed01) {
            winner = false;
        }

    return winner;
}




