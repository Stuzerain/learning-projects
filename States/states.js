var states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California",
              "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", 
              "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", 
              "Kentucky", "Louisiana", "Maine", "Maryland", "Marshall Islands", "Massachusetts", 
              "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
              "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", 
              "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", 
              "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", 
              "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", 
              "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

var abbreviations = ["AL", "AK", "AS", "AZ", "AK", "CA", "CO", "CT", "DE", "DC", "FL", "GA", 
                     "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MH", 
                     "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY",  
                     "NC", "ND", "MP", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN",  
                     "TX", "VI", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

var capitals = ["Montgomery", "Juneau", "Pago Pago", "Phoenix", "Little Rock", "Sacramento",
                "Denver", "Hartford", "Dover", "Washington DC is the national capital",
                "Tallahassee", "Atlanta", "Hagåtña", "Honolulu", "Boise", "springfield",
                "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta",
                "Annapolis", "Delap-Uliga-Djarrit", "Boston", "Lansing", "St. Paul", "Jackson", "Jefferson City",
                "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany",
                "Raleigh", "Bismarck", "Saipan", "Columbus", "Oklahoma City", "Salem", "Harrisburg",
                "San Juan", "Providence", "Columbia", "Pierre", "Nashville", "Austin",
                "Charlotte Amalie", "Salt Lake City", "Montpelier", "Richmond", "Olympia", 
                "Charleston", "Madison", "Cheyenne"];

var info;
var running = true;

function numberCheck() {
console.log(states.length);
console.log(abbreviations.length);
console.log(capitals.length);
}

function askAboutState() {
    var answer; 
    while (running = true) {
        info = prompt("Please enter the name of a state or territory:");
        if (states.indexOf(info) >= 0) {
            answer = (states.indexOf(info));
            alert("The capital of " + states[answer] + " is " + capitals[answer] + " and its abbreviation is " + abbreviations[answer]);
        }
        else {
            alert("Input not recognized. Please enter a valid state or territory:");
        }
    }
}
askAboutState();
