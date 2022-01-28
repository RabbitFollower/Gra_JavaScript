

// avatarStats[getIndex(SI)]
//--------------------------------------ZMIENNE--------------------------------------------------//
const IDX_WW = 0;
const IDX_SZ = 1;
const IDX_VI = 2;
const IDX_SI = 3;
const IDX_ZR = 4;
const IDX_HP = 5;

//dla avatara:
let avatarName = "";

let avatarStats;
let dwarf = ["Krasnolud", [55, 40, 80, 50, 60, 800]];
let elf = ["Elf", [65, 65, 40, 95, 80, 400]];
let human = ["Człowiek", [85, 80, 50, 80, 90, 600]];
let avatarClasses = ["Krasnolud", "Elf", "Człowiek"];
let avatarClass;
let avatarLvl;
let currentHP;
//function getIndex() {
//}

let exp;
let gold;
let armor;
let weapon;


//dla mobków:
let rat = ["Szczur", [40, 85, 10, 5, 100, 100]];
let grayWolf = ["Szary Wilk", [50, 60, 30, 70, 70, 300]];
let bandit = ["Bandyta", [70, 70, 40, 35, 50, 400]];
let mobsClasses = [
    rat, 
    grayWolf, 
    bandit,
    ];
let oponent;
let compareArr = [];
let mobLvl;


//do sklepu:
let weaponArr = [];
let armorArr = [];



//dla gry:
let gameIsRun = 1;
let classHaveChoosen;
let selectWhatToDo;






//------------------------------------FUNKCJE ALERTÓW------------------------------------------//

function askQuestion(question) {
    return prompt(question);
}

function askQuestion2(questionArr) {
    let question = "";
    questionArr.forEach(element => {
        question += element + "\r\n";
    });
    return prompt(question);
}

function warning(message) {
    alert(message + '!!!!');
}

function showInformation(message) {
    alert(message + '');
}




//-------------------------------------IMIĘ GRACZA----------------------------------------//

function setAvatarName() {
    while(gameIsRun) {
        avatarName = askQuestion(`Podaj Imię Graczu
        Imię nie może zaczynać się od liczby`);
        if(avatarName === "exit") {
            gameIsRun = 0;
        } else if(avatarName === "") {
            warning(`Nie podano imienia`)
        // @ts-ignore
        } else if(!isNaN(avatarName)) {
            warning(`Twoje imię nie może być liczbą`)
        // @ts-ignore
        } else if(!isNaN(avatarName.charAt(0))) {
            warning(`Imię nie może zaczynać się liczbą`);
        } else {
            avatarName = avatarName.charAt(0).toUpperCase() + avatarName.slice(1);
            warning(`Witaj  ${avatarName}! `);
            break;
        }
    } 
}




//-------------------------------FUNKCJA DO RANDOMOWYCH STATYSTYK--------------------------------//

function getRandom(min, max) {    
    return Math.round(Math.random() * (max - min) + min);
}



//---------------------------FUNKCJA LOSUJĄCA MOBY------------------------------------------------//

function randomMob(mobsClasses) {
    let idxMob = Math.round(Math.random() * ((mobsClasses.length - 1)- 0) + 0);
    return [mobsClasses[idxMob][0], [...mobsClasses[idxMob][1]]];
}
//Spread kopiuje tylko pierwszy poziom tablicy. Przy tablicach wielopoziomowych z niższego poziomu kopiuje tylko miejsce w pamięci a nie jej zawartość.
//Wtedy zmiana w drugim poziomie kopii zmieni wartości w oryginalnej tablicy. 

//-----------------------------FUNKCJA LOSUJĄCA STATY MOBÓW---------------------------------------//

//function randomMobStats()

//---------------------------WYBRANIE KLASY I LOSOWANIE STATYSTYK---------------------------------//

function chooseClass() {
    let classHaveChoosen = 0;
    while (!classHaveChoosen) {

        let questionArr = [
            "Wybierz klasę postaci podając odpowiednią cyfrę:",
            "1. Krasnolud", 
            "2. Elf", 
            "3. Człowiek", 
            "4. Wyjście"
        ];

        let number = askQuestion2(questionArr);

//        let number = askQuestion(`Wybierz klasę postaci podając odpowiednią cyfrę:
// 1.Krasnolud
// 2.Elf
// 3.Człowiek
// 4.Wyjście`);
        
        if (number === "4") {
            classHaveChoosen = 1;

        } else if (number === "1") {
            // dwarf = dwarf.map(function(value) {
            // return value + 20;
            // @ts-ignore
            avatarStats = [dwarf[0], dwarf[1].map(x => x + getRandom(5, 20))];
            warning(`Gratulacje, wybrałeś ${avatarStats[0]}`)
            classHaveChoosen = 1;

        } else if (number === "2") {
            // @ts-ignore
            avatarStats = [elf[0], elf[1].map(x => x + getRandom(5, 20))];
            warning(`Gratulacje, wybrałeś ${avatarStats[0]}`)
            classHaveChoosen = 1;

        } else if (number === "3") {
            // @ts-ignore
            avatarStats = [human[0], human[1].map(x => x + getRandom(5, 20))];
            warning(`Gratulacje, wybrałeś ${avatarStats[0]}`);
            classHaveChoosen = 1;

        } else {
            warning(`Musisz wybrać liczbę 1, 2, 3 lub 4`);
        }
        
    }
        
}



//--------------------------WYŚWIETLANIE GOTOWYCH STATYSTYK STARTOWYCH-----------------------//

function startingStats() {

    let mainMenu = [
        `Imię: ${avatarName}    Klasa: ${avatarStats[0]}    HP: ${avatarStats[1][5]}/${avatarStats[1][5]}`,
        ``,
        "Statystyki Twojego Bohatera:", 
        `WW[${avatarStats[1][0]}] SZ[${avatarStats[1][1]}] VI[${avatarStats[1][2]}] SI[${avatarStats[1][3]}] ZR[${avatarStats[1][4]}] HP[${avatarStats[1][5]}]`
    ];
    askQuestion2(mainMenu);
}



// -----------------------------------------MENU GŁÓWNE------------------------------------------//


function whatToDo() {
    let selectWhatToDo = 0;
    while (!selectWhatToDo) {
        let gameMenu = [
            `Imię: ${avatarName}    Klasa: ${avatarClass}    HP: ${avatarStats[1][5]}/${avatarStats[1][5]}`,
            ``,
            `Co chcesz zrobić?`,
            `1. Walka`,
            `2. Miasto`,
            `3. BOSS`,
            `8. Save`,
            `9. Load`,
            `0. Exit`
        ];
        let number = askQuestion2(gameMenu);
        

        if (number === "0") {
            selectWhatToDo = 1;
        } else if (number === "1") {
            fight(randomMob(mobsClasses));
        } else if (number === "2") {
            cityMenu();
        } else if (number === "3") {
            warning(`Uwaga, wkraczasz na teren Bossa`);
        } else if (number === "8") {
            showInformation(`Trwa zapisywanie gry...`);
        } else if (number === "9") {
            showInformation(`Trwa wczytywanie gry...`);
        } else {
            showInformation(`Musisz wybrać jedną z następujących liczb: 1, 2, 3, 8, 9 lub 0`);
        }
    }
}

function fight(oponent) {
    showInformation(`Uwaga, za chwilę rozpocznie się walka! Twój przeciwnik to: ${oponent[0]}!`);
    
    let currentPlayer = 0;
    let currentOponent = 1;

    if (oponent[1][IDX_SZ] > avatarStats[1][IDX_SZ]) {
        currentPlayer = 1;
        currentOponent = 0;
    }
    
    let fightArr = [avatarStats, oponent];    
    // petla walki na zmiane <3
    while (avatarStats[1][IDX_HP] > 0 && oponent[1][IDX_HP] > 0) {
        showInformation(`Teraz jest tura ${fightArr[currentPlayer][0]}`);
    // walka start
        
        let punch = getRandom(0, 100);
        showInformation(`${punch}`);
        
        if (punch <= (fightArr[currentPlayer][1][IDX_ZR] / 10)) {
            fightArr[currentOponent][1][IDX_HP] -= (fightArr[currentPlayer][1][IDX_SI] * 2);
            showInformation(`Atak krytyczny, ${fightArr[currentOponent][0]} traci podwójną ilość punktów zdrowia: ${fightArr[currentOponent][1][IDX_HP]} HP `);
        } else if (punch <= fightArr[currentPlayer][1][IDX_WW]) {
            fightArr[currentOponent][1][IDX_HP] -= fightArr[currentPlayer][1][IDX_SI]; 
            showInformation(`Atak udany, ${fightArr[currentOponent][0]} traci punkty zdrowia: ${fightArr[currentOponent][1][IDX_HP]} HP`);
        } else {
            fightArr[currentOponent][1][IDX_HP] = fightArr[currentOponent][1][IDX_HP];
            showInformation(`Atak nieudany, ${fightArr[currentOponent][0]} nie traci punktów zdrowia ${fightArr[currentOponent][1][IDX_HP]} HP`);
        }    
        currentPlayer = (currentPlayer + 1) % fightArr.length;
        currentOponent = (currentOponent + 1) % fightArr.length;
        
    }
}


// -------------------------------------MENU MIEJSKIE------------------------------------------//

function cityMenu() {
    let cityMenu = [
        `Imię: ${avatarName}    Klasa: ${avatarClass}    HP: ${avatarStats[5]}/${avatarStats[5]}`,
        ``,
        `Witamy w Mieście!`,
        `Czego Ci potrzeba?`,
        `1. Brońmistrz`,
        `2. Zbrojmistrz`,
        `3. Lecznica`,
        `4. Powrót`
    ]; 
    let cityWhatToDo = 0;

    while (!cityWhatToDo) {
        let number = askQuestion2(cityMenu);
        if (number == "4") {
            cityWhatToDo = 1;
        } else if (number == "1") {
            showInformation(`Idziesz po nową broń -|===`);
        } else if (number == "2") {
            showInformation(`Idziesz po armorka ◘`);
        } else if (number == "3") {
            showInformation(`Idziesz zregenerować swoje punkty zdrowia ♥`);
        } else {
            warning(`Musisz podać liczbę od 1 do 4`);
        }
        
    }


}




// -------------------------------PĘTLA GŁÓWNA GRY----------------------------------------//

while(gameIsRun) {
     if (avatarName == "") {
         setAvatarName();
     }
    
    chooseClass();
    startingStats();
    whatToDo();

    gameIsRun = 0; 
    // if (statystykiNieNadane) {
    //     losujStaty();
    // }
}




