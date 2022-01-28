
function getRandomStats(min, max) {
    
    return Math.round(Math.random() * (max - min) + min);
}

console.log(`Punkty zdrowia: ${getRandomStats(1000, 3000)}`);


const dwarf = [50, 20, 80, 50, 10, 800];
const elf = [20, 60, 40, 100, 50, 400];
const human = [90, 80, 50, 80, 100, 500];

function chooseClass(dwarf, elf, human) {
    let chooseDwarf = 1;
    let chooseElf = 2;
    let chooseHuman = 3;

    if (chooseDwarf) {
        //let dwarf = for(let i = 0; i <= dwarf.lenght; i++) {
            
          //  return dwarf.forEach(+getRandomStats(5, 20));
        
          console.log(dwarf);
       // }
        dwarf = dwarf.map(function(value) {
            return value + 20;
        });

        console.log(dwarf);
    }    
}

chooseClass();