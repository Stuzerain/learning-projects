//table options

let sortDirection = false;
// let outputText = "";

window.onload = () => {
    loadTableData(villagers);
}

function loadTableData(villagers) {
    const tableBody = document.getElementById('tableData');
    const tableHead = document.getElementById('tableHead');
    let dataHtml = '';
    let btn = document.createElement('button')
    btn.innerHTML = "ADD"

    // var img = document.createElement('img');
    // img.src = villagers.poster

    for (let villager of villagers) {
        dataHtml += `<tr>
            <td>${villager.name}</td>
            <td>${villager.species}</td>
            <td>${villager.personality}</td>
            <td>${villager.amiibo}</td>
            <td><img src ="${villager.poster}" /></td>
            <td><button class="addButton" onClick="">ADD</button></td>
            <td id='btnCol'>${tableBody.appendChild(btn)}</td>
        </tr>`; //btnCol should be correct way to add buttons via DOM, but just returns [object HTMLButtonElement]
    }
    tableHead.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    tableBody.innerHTML = dataHtml;
}

/**
 * sorts HTML table
 * 
 * @param {HTMLTableElement} table - the table to sort 
 * @param {number} column - index of the column to sort
 * @param {boolean} asc - determines ascending vs descending
 * 
 */
function sortTableByColumn(table, column, asc = true) {
    const dirMod = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    //sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirMod) : (-1 * dirMod);
    })

    //remove existing TRs from table
    while (tBody.firstChile) {
        tBody.removeChile(tBody.firstChild);
    }

    //add back newly sorted TR
    tBody.append(...sortedRows);

    //remember how column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1 })`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1 })`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");
   
        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    })
})

// /**used by seach bar form to search for Villagers--not currently functional
//  * 
//  * @param {*} vilName 
//  */
// function searchVillagers() {
//     let q = document.forms["search_form"]["search_query"].value;
//     outputText = "";
//     for (let villager of villagers)
//         if (villagers[i].name.search(q) != -1) {
//             villagers += villagers[i]
//             break;
//         }
//         console.log(outputText);
// }

//console options

/**search for villager by name in the console and return villager object
 * 
 * @param {string} vilName - the name of the villager, in single or double quotes
 * 
 */
function villagerLookup(vilName) {
    for (let i = 0; i < villagers.length; i++) {
        if (villagers[i].name == vilName ) {
            return Object.values(villagers[i])
        }
    }
}

//initializing empty array for creating arbitrary set of villagers
let myVillage = []

/**adds villagers to a myVillage array
 * 
 * @param {string} vilName - the name of the villager, in single or double quotes
 * 
 */
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
