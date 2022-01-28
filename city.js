

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
            whatToDo();
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