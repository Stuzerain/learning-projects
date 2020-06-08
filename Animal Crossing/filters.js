//table options

let sortDirection = false;

window.onload = () => {
    loadTableData(villagers)
}

function loadTableData(villagers) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for (let villager of villagers) {
        dataHtml += `<tr><td>${villager.name}</td><td>${villager.species}</td>
        <td>${villager.personality}</td><td>${villager.amiibo}</td></tr>`;
    }
    //console.log(dataHtml)

    tableBody.innerHTML = dataHtml;
}

function sortColumn(columnName) {
    const dataType = typeof villagers[0][columnName];
    sortDirection = !sortDirection;

    switch(dataType) {
        case 'string':
        sortTextColumn(sortDirection, columnName);
        break;
 }

    loadTableData(villagers);
}

function sortTextColumn(sort, columnName) {
    villagers = villagers.sort((p1, p2) => {
        return sort ? (p1[columnName] > p2[columnName]) - (p1[columnName] < p2[columnName]) :
        (p2[columnName] > p1[columnName]) - (p2[columnName] < p1[columnName])
    });
}



//console options

//search for villager by name (must be in quotes)
function villagerLookup(vilName) {
    for (let i = 0; i < villagers.length; i++) {
        if (villagers[i].name == vilName ) {
            return Object.values(villagers[i])
        }
    }
}

//initializing empty array for creating arbitrary set of villagers
let myVillage = []

//adds villagers to myVillage array
function updateVillage(vilName) {
    myVillage.push(villagerLookup(vilName));
}

//filtered arrays by species
let alligators = 
    villagers.filter(v => {
        return v.species == "Alligator"
    })
    
let anteaters = 
    villagers.filter(v => {
        return v.species == "Anteater"
    })

let bears = 
    villagers.filter(v => {
        return v.species == "Bear"
    })

let birds = 
    villagers.filter(v => {
        return v.species == "Bird"
    })

let bulls = 
    villagers.filter(v => {
        return v.species == "Bull"
    })

let cats = 
    villagers.filter(v => {
        return v.species == "Cat"
    })

let chickens = 
    villagers.filter(v => {
        return v.species == "Chicken"
    })

let cows = 
    villagers.filter(v => {
        return v.species == "Cow"
    })

let cubs = 
    villagers.filter(v => {
        return v.species == "Cub"
    })

let deer = 
    villagers.filter(v => {
        return v.species == "Deer"
    })

let dogs = 
    villagers.filter(v => {
        return v.species == "Dog"
    })

let ducks = 
    villagers.filter(v => {
        return v.species == "Duck"
    })

let eagles = 
    villagers.filter(v => {
        return v.species == "Eagle"
    })

let elephants = 
    villagers.filter(v => {
        return v.species == "Elephant"
    })

let frogs = 
    villagers.filter(v => {
        return v.species == "Frog"
    })

let goats = 
    villagers.filter(v => {
        return v.species == "Goat"
    })

let gorillas = 
    villagers.filter(v => {
        return v.species == "Gorilla"
    })

let hamsters = 
    villagers.filter(v => {
        return v.species == "Hamster"
    })

let hippos = 
    villagers.filter(v => {
        return v.species == "Hippo"
    })

let horses = 
    villagers.filter(v => {
        return v.species == "Horse"
    })
 
let kangaroos = 
    villagers.filter(v => {
        return v.species == "Kangaroo"
    })
 
let koalas = 
    villagers.filter(v => {
        return v.species == "Koala"
    })
 
let lions = 
    villagers.filter(v => {
        return v.species == "Lion"
    })
 
let mice = 
    villagers.filter(v => {
        return v.species == "Mouse"
    })
 
let monkeys = 
    villagers.filter(v => {
        return v.species == "Monkey"
    })
 
let octopi = 
    villagers.filter(v => {
        return v.species == "Octopus"
    })
 
let ostriches = 
    villagers.filter(v => {
        return v.species == "Ostrich"
    })
 
let penguins = 
    villagers.filter(v => {
        return v.species == "Penguin"
    })
 
let pigs = 
    villagers.filter(v => {
        return v.species == "Pig"
    })
 
let rabbits = 
    villagers.filter(v => {
        return v.species == "Rabbit"
    })
 
let rhinos = 
    villagers.filter(v => {
        return v.species == "Rhino"
    })
 
let sheep = 
    villagers.filter(v => {
        return v.species == "Sheep"
    })
 
let squirrels = 
    villagers.filter(v => {
        return v.species == "Squirrel"
    })
 
let tigers = 
    villagers.filter(v => {
        return v.species == "Tiger"
    })
 
let wolves = 
    villagers.filter(v => {
        return v.species == "Wolf"
    })

//filtered arrays by personality
let normal = 
    villagers.filter(v => {
        return v.personality == "Normal"
    })
     
let peppy = 
    villagers.filter(v => {
        return v.personality == "Peppy"
    })
     
let uchi = 
    villagers.filter(v => {
        return v.personality == "Sisterly"
    })
     
let snooty = 
    villagers.filter(v => {
        return v.personality == "Snooty"
    })
     
let jock = 
    villagers.filter(v => {
        return v.personality == "Jock"
    })
     
let smug = 
    villagers.filter(v => {
        return v.personality == "Smug"
    })
     
let cranky = 
    villagers.filter(v => {
        return v.personality == "Cranky"
    })
     
let lazy = 
    villagers.filter(v => {
        return v.personality == "Lazy"
    })

//filter based on whether amiibo exists
let printable = 
    villagers.filter(v => {
        return v.amiibo == true
    })

let unprintable = 
    villagers.filter(v => {
        return v.amiibo == false
    })
