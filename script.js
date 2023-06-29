// race animation container

let animation = document.querySelector('.top-main5')

// popup elements
let popUpWindow = document.querySelector('.overlay')
let closeWindow = document.querySelector('.close')
let closeWindow2 = document.querySelector('.close2')
let popupH1 = document.getElementById('popupheader')
let popupH3 = document.getElementById('popupcontent')
//bets

let betPlayerOne = 0;
let betPlayerTwo = 0;
let playerSpeed01 = 1;
let playerSpeed02 = 1;
let readyStatus01 = false;
let readyStatus02 = false;
let winner = true;

// money and xp displays

let moneyPlayer01 = document.getElementById('money01')
let moneyPlayer02 = document.getElementById('money02')

//levels display 

let enginelvl01 = 1;
let translvl01 = 1;
let brakeslvl01 = 1;
let tireslvl01 = 1;
let enginelvl02 = 1;
let translvl02 = 1;
let brakeslvl02 = 1;
let tireslvl02 = 1;

// track conditions displays
let weatherDisplay = document.getElementById('weatherId')
let roadConditionDisplay = document.getElementById('conditionId') 
let difficultyDisplay = document.getElementById('difficultyId')

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

// UPGRADES !!!!!!
// status bars player 01
let engineDisplay01 = document.getElementById('status01')
let transmissionDisplay01 = document.getElementById('status02')
let brakesDisplay01 = document.getElementById('status03')
let tiresDisplay01 = document.getElementById('status04')
// status bars player 02
let engineDisplay02 = document.getElementById('status0102')
let transmissionDisplay02 = document.getElementById('status0202')
let brakesDisplay02 = document.getElementById('status0302')
let tiresDisplay02 = document.getElementById('status0402')
// buttons player 01 
let engineUpdateButton01 = document.getElementById('engine01')
let transUpdateButton01 = document.getElementById('trans01')
let brakesUpdateButton01 = document.getElementById('brakes01')
let tiresUpdateButton01 = document.getElementById('tires01')

// buttons player 02
let engineUpdateButton02 = document.getElementById('engine02')
let transUpdateButton02 = document.getElementById('trans02')
let brakesUpdateButton02 = document.getElementById('brakes02')
let tiresUpdateButton02 = document.getElementById('tires02')

// lvl diplay Player 01
let lvlEngine01 = document.getElementById('lvle01')
let lvlTransmission01 = document.getElementById('lvlt01')
let lvlBrakesine01 = document.getElementById('lvlb01')
let lvlTires01 = document.getElementById('lvltr01')
// lvl diplay Player 02
let lvlEngine02 = document.getElementById('lvle02')
let lvlTransmission02 = document.getElementById('lvlt02')
let lvlBrakesine02 = document.getElementById('lvlb02')
let lvlTires02 = document.getElementById('lvltr02')

// update events + level upgrade

transUpdateButton01.addEventListener('click', function(evt){
    player01.money -= 100;
    player01.transmission += 10
    moneyPlayer01.innerText = `${player01.money}$  |`
    transUpdateButton01.innerText = 'Upgraded'
    transUpdateButton01.style.backgroundColor = '#F2BE22';
    transUpdateButton01.disabled = true;
    let style = window.getComputedStyle(transmissionDisplay01);
    let widthValue = parseInt(style.width, 10);
    if(widthValue % 150 === 0) {
        translvl01 += 1;
        transmissionDisplay01.style.width = `10px`;
        lvlTransmission01.innerText = `Transmission (lvl 0${translvl01})`
    }
    else {
        transmissionDisplay01.style.width = `${player01.transmission}px`;
    }
    
})

engineUpdateButton01.addEventListener('click', function(evt){
    player01.money -= 100;
    player01.engine += 10 
    moneyPlayer01.innerText = `${player01.money}$  |`
    engineUpdateButton01.innerText = 'Upgraded'
    engineUpdateButton01.style.backgroundColor = '#F2BE22';
    engineUpdateButton01.disabled = true;
    let style = window.getComputedStyle(engineDisplay01);
    let widthValue = parseInt(style.width, 10);
    if(widthValue % 150 === 0) {
        enginelvl01 += 1;
        engineDisplay01.style.width = `10px`;
        lvlEngine01.innerText = `Engine (lvl 0${enginelvl01})`
    }
    else {
        engineDisplay01.style.width = `${player01.engine}px`;
    }


})

brakesUpdateButton01.addEventListener('click', function(evt){
    player01.money -= 100;
    player01.brakes += 10 
    moneyPlayer01.innerText = `${player01.money}$  |`
    brakesUpdateButton01.innerText = 'Upgraded'
    brakesUpdateButton01.style.backgroundColor = '#F2BE22';
    brakesUpdateButton01.disabled = true;
    let style = window.getComputedStyle(brakesDisplay01);
    let widthValue = parseInt(style.width, 10);
    if(widthValue % 150 === 0) {
        brakeslvl01 += 1;
        brakesDisplay01.style.width = `10px`;
        lvlBrakesine01.innerText = `Brakes (lvl 0${brakeslvl01})`
    }
    else {
        brakesDisplay01.style.width = `${player01.brakes}px`;
    }
})

tiresUpdateButton01.addEventListener('click', function(evt){
    player01.money -= 100;
    player01.tires += 10 
    moneyPlayer01.innerText = `${player01.money}$  |`
    tiresUpdateButton01.innerText = 'Upgraded'
    tiresUpdateButton01.style.backgroundColor = '#F2BE22';
    tiresUpdateButton01.disabled = true;
    let style = window.getComputedStyle(tiresDisplay01);
    let widthValue = parseInt(style.width, 10);
    if(widthValue % 150 === 0) {
        tireslvl01 += 1;
        tiresDisplay01.style.width = `10px`;
        lvlTires01.innerText = `Tires (lvl 0${tireslvl01})`
    }
    else {
        tiresDisplay01.style.width = `${player01.tires}px`;
    }
})

transUpdateButton02.addEventListener('click', function(evt){
    player02.money -= 100;
    player02.transmission += 10 
    moneyPlayer02.innerText = `${player02.money}$  |`
    transUpdateButton02.innerText = 'Upgraded'
    transUpdateButton02.style.backgroundColor = '#F2BE22';
    transUpdateButton02.disabled = true;
    let style = window.getComputedStyle(transmissionDisplay01);
    let widthValue = parseInt(style.width, 10);
    if(widthValue % 150 === 0) {
        translvl02 += 1;
        transmissionDisplay02.style.width = `10px`;
        lvlTransmission02.innerText = `Transmission (lvl 0${translvl02})`
    }
    else {
        transmissionDisplay02.style.width = `${player02.transmission}px`;
    }
})

engineUpdateButton02.addEventListener('click', function(evt){
    player02.money -= 100;
    player02.engine += 10 
    moneyPlayer02.innerText = `${player02.money}$  |`
    engineUpdateButton02.innerText = 'Upgraded'
    engineUpdateButton02.style.backgroundColor = '#F2BE22';
    engineUpdateButton02.disabled = true;
    let style = window.getComputedStyle(engineDisplay02);
    let widthValue = parseInt(style.width, 10);
    if(widthValue % 150 === 0) {
        enginelvl02 += 1;
        engineDisplay02.style.width = `10px`;
        lvlEngine02.innerText = `Engine (lvl 0${enginelvl02})`
    }
    else {
        engineDisplay02.style.width = `${player02.engine}px`;
    }
})

brakesUpdateButton02.addEventListener('click', function(evt){
    player02.money -= 100;
    player02.brakes += 10 
    moneyPlayer02.innerText = `${player02.money}$  |`
    brakesUpdateButton02.innerText = 'Upgraded'
    brakesUpdateButton02.style.backgroundColor = '#F2BE22';
    brakesUpdateButton02.disabled = true;
    let style = window.getComputedStyle(brakesDisplay02);
    let widthValue = parseInt(style.width, 10);
    if(widthValue % 150 === 0) {
        brakeslvl02 += 1;
        brakesDisplay02.style.width = `10px`;
        lvlBrakesine02.innerText = `Brakes (lvl 0${brakeslvl02})`
    }
    else {
        brakesDisplay02.style.width = `${player02.brakes}px`;
    }
})

tiresUpdateButton02.addEventListener('click', function(evt){
    player02.money -= 100;
    player02.tires += 10 
    moneyPlayer02.innerText = `${player02.money}$  |`
    tiresUpdateButton02.innerText = 'Upgraded'
    tiresUpdateButton02.style.backgroundColor = '#F2BE22';
    tiresUpdateButton02.disabled = true;
    let style = window.getComputedStyle(tiresDisplay02);
    let widthValue = parseInt(style.width, 10);
    if(widthValue % 150 === 0) {
        tireslvl02 += 1;
        tiresDisplay02.style.width = `10px`;
        lvlTires02.innerText = `Tires (lvl 0${tireslvl02})`
    }
    else {
        tiresDisplay02.style.width = `${player02.tires}px`;
    }
})





// race 

// condition displays
let display01 = document.getElementById('')
let display02 = document.getElementById('')
let display03 = document.getElementById('')

// race function !!!!!!!!!

function Race() {
    let var01 = Weather()
    let var02 = RoadCondition()
    let var03 = trackLevel()
    let winner = true;

// condition for weather display
        if(var01 === 1) {
            weatherDisplay.innerText = 'Weather: SUNNY'
        }else if(var01 === 2) {
            weatherDisplay.innerText = 'Weather: WINDY'
        }else if(var01 === 3) {
            weatherDisplay.innerText = 'Weather: RAIN'
        }else {
            weatherDisplay.innerText = 'Weather: SNOW'
        }

        if(var02 === 1) {
            roadConditionDisplay.innerText = 'Road quality: PERFECT'
        }else if(var02 === 2) {
            roadConditionDisplay.innerText = 'Road quality: GOOD'
        }else if(var02 === 3) {
            roadConditionDisplay.innerText = 'Road quality: LOW'
        }else {
            roadConditionDisplay.innerText = 'Road quality: AWFUL'
        }

        if(var03 === 1) {
            difficultyDisplay.innerText = 'Difficulty: EASY'
        }else if(var03 === 2) {
            difficultyDisplay.innerText = 'Difficulty: MODERATE'
        }else if(var03 === 3) {
            difficultyDisplay.innerText = 'Difficulty: HARD'
        }else {
            difficultyDisplay.innerText = 'Difficulty: EXTREME'
        }

// result calculating
    let newSpeed01 = playerSpeed01 + player01.engine / var01 + player01.transmission / var03 + player01.brakes / var02 + player01.brakes /var01 + player01.tires/var03 + player01.tires/var02 + Math.random().toFixed(2)
    let newSpeed02 = playerSpeed02 + player01.engine / var01 + player02.transmission / var03 + player02.brakes / var02 + player02.brakes /var01 + player02.tires/var03 + player02.tires/var02 + Math.random().toFixed(2)
        if(newSpeed02 > newSpeed01) {
            winner = false;
        }

    return winner;
}


// bets and ready status

let betButton01 = document.getElementById('betbutton')
let betButton02 = document.getElementById('betbutton02')
let readyButton01 = document.getElementById('readybutton')
let readyButton02 = document.getElementById('readybutton02')

betButton01.addEventListener('click', function(evt){
    player01.money -= 100;
    betPlayerOne = 100
    moneyPlayer01.innerText = `${player01.money}$  |`
    betButton01.innerText = 'Bet accepted'
    betButton01.style.backgroundColor = '#F2BE22';
    betButton01.disabled = true;
    readyButton01.innerText = 'READY!'
})

betButton02.addEventListener('click', function(evt){
    player02.money -= 100;
    betPlayerTwo = 100;
    moneyPlayer02.innerText = `${player02.money}$  |`
    betButton02.innerText = 'Bet accepted'
    betButton02.style.backgroundColor = '#F2BE22';
    betButton02.disabled = true;
    readyButton02.innerText = 'READY!'
})


readyButton01.addEventListener('click', function(evt){
    if(betPlayerOne === 100) {
        readyButton01.style.backgroundColor = 'rgb(5, 248, 14)';
        readyButton01.disabled = true;
        readyStatus01 = true;
    }
    else {
        readyButton01.innerText = 'Bet first'
    }
})

readyButton02.addEventListener('click', function(evt){
    if(betPlayerTwo === 100) {
        readyButton02.style.backgroundColor = 'rgb(5, 248, 14)';
        readyButton02.disabled = true;
        readyStatus02 = true;
    }
    else {
        readyButton02.innerText = 'Bet first'
    }

})






// start of the race
let intervalId = null;
let popStatement = true;


function checkAndTriggerEvent() {
    console.log('interval')
    if (readyStatus01 && readyStatus02) {
      console.log("Both variables are true. Event triggered!");
      popUpWindow.style.visibility = 'visible'
      popStatement = false;
      clearInterval(intervalId);
    }
  }

  intervalId = setInterval(checkAndTriggerEvent, 100);

  function animationTimer(property) {
    animation.style.backgroundImage = property;
  };

  closeWindow.addEventListener('click', function(evt){
    popUpWindow.style.visibility = 'hidden'
    betButton01.innerText = 'Bet 100$ for a win!'
    betButton01.style.backgroundColor = '#fa6400';
    betButton02.innerText = 'Bet 100$ for a win!'
    betButton02.style.backgroundColor = '#fa6400';

    engineUpdateButton01.style.backgroundColor = '#fa6400';
    transUpdateButton01.style.backgroundColor = '#fa6400'; 
    brakesUpdateButton01.style.backgroundColor = '#fa6400';
    tiresUpdateButton01.style.backgroundColor = '#fa6400';
    engineUpdateButton02.style.backgroundColor = '#fa6400';
    transUpdateButton02.style.backgroundColor = '#fa6400';
    brakesUpdateButton02.style.backgroundColor = '#fa6400';
    tiresUpdateButton02.style.backgroundColor = '#fa6400';
    readyButton01.style.backgroundColor = '#fa6400';
    readyButton02.style.backgroundColor = '#fa6400';

    popStatement = true;
    let winCar = Race()
    console.log('game starts', winCar)
    if(winCar) {
        animation.style.backgroundImage = 'url(img/redwins.gif)'
        setTimeout(function() {
            animation.style.backgroundImage = 'url(img/static.gif)'
            player01.money += 200;
            moneyPlayer01.innerText = `${player01.money}$  |`
            popUpWindow.style.visibility = 'visible'
            closeWindow.style.visibility = 'hidden'
            closeWindow2.style.visibility = 'visible'
            if(player02.money !== 0) {
                popupH1.innerText = 'Congratulations Player 01!!!'
                popupH3.innerText = 'Player 01 wins 200$! Close this window to continue to the next round.'
            }
            else if(player02.money === 0) {
                popupH1.innerText = 'Congratulations Player 01!!!'
                popupH3.innerText = 'Player 01 wins 200$! Player 02 defeated because his balance is 0$! Close this window to start new game.'
            }
        }, 9750)
        
    }
    else {
        animation.style.backgroundImage = 'url(img/greenwins.gif)'
        setTimeout(function() {
            animation.style.backgroundImage = 'url(img/static.gif)'
            player02.money += 200;
            moneyPlayer02.innerText = `${player02.money}$  |`
            popUpWindow.style.visibility = 'visible'
            closeWindow.style.visibility = 'hidden'
            closeWindow2.style.visibility = 'visible'
            if(player02.money !== 0) {
                popupH1.innerText = 'Congratulations Player 02!!!'
                popupH3.innerText = 'Player 02 wins 200$! Close this window to continue to the next round.'
            }
            else if(player02.money === 0) {
                popupH1.innerText = 'Congratulations Player 02!!!'
                popupH3.innerText = 'Player 02 wins 200$! Player 01 defeated because his balance is 0$! Close this window to start new game.'
            }
        }, 9750)

    }
  })



  closeWindow2.addEventListener('click', function(evt){
    popUpWindow.style.visibility = 'hidden' 
    betButton01.disabled = false;
    readyButton01.disabled = false;
    betButton02.disabled = false;
    readyButton02.disabled = false;
    engineUpdateButton01.disabled = false;
    transUpdateButton01.disabled = false;
    brakesUpdateButton01.disabled = false;
    tiresUpdateButton01.disabled = false;
    engineUpdateButton02.disabled = false;
    transUpdateButton02.disabled = false;
    brakesUpdateButton02.disabled = false;
    tiresUpdateButton02.disabled = false;
    readyStatus01 = false;
    readyStatus02 = false;
    intervalId = setInterval(checkAndTriggerEvent, 100);
    console.log('start interval')
    popStatement = false;
    
})