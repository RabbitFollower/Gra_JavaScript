//var n = 123
//
//String("00000" + n).slice(-5); // returns 00123
//("00000" + n).slice(-5); // returns 00123
//("     " + n).slice(-5); // returns "  123" (with two spaces)
//
//
//
//String.prototype.paddingLeft = function (paddingValue) {
//    return String(paddingValue + this).slice(-paddingValue.length);
// };
//
//function wyrownanieStatow(avatarStats) {
//    
//}

//let mobsClasses = ["Szczur", "Szary Wilk", "Bandyta", "Potwór Rebesia", "Łukaszątko"];
//let highest = mobsClasses.length - 1;
//let lowest = 0;


//function getRandomStats(min, max) {    
//    return Math.round(Math.random() * (max - min) + min);
//}

//function randomMob(mobsClasses) {

//   return mobsClasses[getRandomStats()];
    
//}
//
//
//console.log(mobsClasses.length);


//let avatarStats;
//let dwarf = ["Krasnolud", 50, 20, 80, 50, 10, 800];

//function getRandom(min, max) {    
    //return Math.round(Math.random() * (max - min) + min);
//}
//function xyz() {

//}
//let avatarStats = dwarf;
    //for(i = 1; i <= avatarStats.length; i++) {
        //avatarStats[i] + getRandom(5, 20);
    //}

//console.log(avatarStats);
let rat = ["Szczur", [5, 85, 10, 5, 100, 100]];
let elf = ["Elf", [30, 60, 40, 100, 50, 400]];
let compareArr = [];
let fightArr = [];
let currentHP;
//function compare(a, b) {
    
     
    
//    let compareArr = compareArr.sort(function(a, b) {
//        if (a < b) {
//            return -1;
//        } else if(a > b) {
//            return 1;
//        } else {
//            return 0;
//        }
//    })    
//};

//console.log(compareArr);


//while(true) {
//    if (avatarStats[1][1] >= oponent[1][1]) {
//        showInformation(`Zaczynasz pierwszy`);
//    } else if (avatarStats[1][1] < oponent[1][1]) {
//        showInformation(`Zaczyna przeciwnik`);
//    }
//}
//let curentHP;
//
//
//function(currentHP) {           
//    
//    return fightArr[currentOponent][1][IDX_HP].slice(IDX_HP, 1);
//}




//-------------------------OBECNA FUNKCJA WALKI------------------------------------------///

function fight(oponent) {
    showInformation(`Uwaga, za chwilę rozpocznie się walka! Twój przeciwnik to: ${oponent[0]}!`);
    
    let currentPlayer = 0;
    let currentOponent = 1;

    

    if (oponent[1][IDX_SZ] > avatarStats[1][IDX_SZ]) {
        currentPlayer = 1;
        currentOponent = 0;
    }
    
    let fightArr = [avatarStats, oponent];
//    let currentHP = fightArr[currentOponent][1][IDX_HP].slice(IDX_HP, 1); 
    let temp = 0;
    // petla walki na zmiane <3
    while (avatarStats[1][IDX_HP] > 0 && oponent[1][IDX_HP] > 0) {
        showInformation(`Teraz jest tura ${fightArr[currentPlayer][0]}`);
    // walka start
        
        let punch = getRandom(0, 100);
        showInformation(`${punch}`);
        for(let i = 0; i <= 1; i++) {
            currentHP = fightArr[currentOponent][1][IDX_HP];
        }
        if (punch > (fightArr[currentPlayer][1][IDX_ZR] / 10) && punch <= fightArr[currentPlayer][1][IDX_WW]) {
            currentHP - fightArr[currentPlayer][1][IDX_SI];
            showInformation(`Atak udany, ${fightArr[currentOponent][0]} traci punkty zdrowia: ${currentHP} HP`);
        } else if (punch > fightArr[currentPlayer][1][IDX_WW]) { 
            currentHP;
            showInformation(`Atak nieudany, ${fightArr[currentOponent][0]} nie traci punktów zdrowia ${currentHP} HP`);
        } else if (punch <= (fightArr[currentPlayer][1][IDX_ZR] / 10)) {
            currentHP - (fightArr[currentPlayer][1][IDX_SI] * 2);
            showInformation(`Atak krytyczny, ${fightArr[currentOponent][0]} traci podwójną ilość punktów zdrowia: ${currentHP} HP `);
        }  else {
            showInformation(`Coś się popsiuło ^^'`);
        }    
 //         if (punch > fightArr[currentPlayer][1][IDX_WW] ) {
 //               curentHP = fightArr[currentOponent][1][IDX_HP];
 //               showInformation(`atak ${fightArr[currentPlayer][0]} nieudany. Pozostało: ${curentHP} HP `);
 //         } else {
 //               curentHP = fightArr[currentOponent][1][IDX_HP] - fightArr[currentPlayer][1][IDX_SI];
 //               showInformation(`atak ${fightArr[currentPlayer][0]} udany. Pozostało ${curentHP} HP`);
 //         }
        // function(currentHP) {
//            return fightArr[currentOponent][1][IDX_HP].slice(IDX_HP, 1);
 //       }
        // walka stop

        currentPlayer = (currentPlayer + 1) % fightArr.length;
        currentOponent = (currentOponent + 1) % fightArr.length;
        temp += 1;
        if (temp > 10) {
            break;
        }
    }
}





//---------------------------------MOJA FUNKCJA WALKI----------------------------------------//



let baseHP; 
let currentHP;



function fight(oponent) {
    showInformation(`Uwaga, za chwilę rozpocznie się walka! Twój przeciwnik to: ${oponent[0]}!`);
    
    let currentPlayer = 0;
    let currentOponent = 1;
    //let currentPlayerHP = avatarStats[1].slice(IDX_HP,1); //= fightArr[currentOponent][1][IDX_HP].slice(IDX_HP, 1);
    let currentOponentHP = oponent[1].slice(IDX_HP, 1);

    if (oponent[1][IDX_SZ] > avatarStats[1][IDX_SZ]) {
        currentPlayer = 1;
        currentOponent = 0;
        //currentPlayerHP = oponent[1].slice(IDX_HP, 1); 
        currentOponentHP = avatarStats[1].slice(IDX_HP,1);
    }
    
    let fightArr = [avatarStats, oponent];


    
    let temp = 0;
    // petla walki na zmiane <3
    while (currentOponentHP > 0 && currentPlayerHP > 0) {
        showInformation(`Teraz jest tura ${fightArr[currentPlayer][0]}`);
    // walka start
        
        let punch = getRandom(0, 100);
        showInformation(`${punch}`);
        
        if (punch > (fightArr[currentPlayer][1][IDX_ZR] / 10) && punch <= fightArr[currentPlayer][1][IDX_WW]) {
            return currentHP = currentOponentHP - fightArr[currentPlayer][1][IDX_SI];
            showInformation(`Atak udany, ${fightArr[currentOponent][0]} traci punkty zdrowia: ${currentHP} HP`);
        
        } else if (punch > fightArr[currentPlayer][1][IDX_WW]) { 
            return currentHP = currentOponentHP;
            showInformation(`Atak nieudany, ${fightArr[currentOponent][0]} nie traci punktów zdrowia ${currentHP} HP`);
        
        } else if (punch <= (fightArr[currentPlayer][1][IDX_ZR] / 10)) {
            return currentHP = currentOponentHP - (fightArr[currentPlayer][1][IDX_SI] * 2);
            showInformation(`Atak krytyczny, ${fightArr[currentOponent][0]} traci podwójną ilość punktów zdrowia: ${currentHP} HP `);
        
        }  else {
            showInformation(`Coś się popsiuło ^^'`);
        } 
        currentPlayer = (currentPlayer + 1) % fightArr.length;
        currentOponent = (currentOponent + 1) % fightArr.length;
        temp += 1;
        if (temp > 10) {
            break;
        }
    }
}