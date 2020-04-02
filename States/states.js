var Alabama = {
    place: "Alabama", capital: "Montgomery", abbreviation: "AL"
}
var Alaska = {
    place: "Alaska", capital: "Juneau", abbreviation: "AK"
}
var americanSamoa = {
    place: "American Samoa", capital: "Pago Pago", abbreviation: "AS"
}
var Arizona = {
    place: "Arizona", capital: "Phoenix", abbreviation: "AZ"
}
var Arkansas = {
    place: "Arkansas", capital: "Little Rock", abbreviation: "AK"
}
var California = {
    place: "California", capital: "Sacramento", abbreviation: "CA"
}
var Colorado = {
    place: "Colorado", capital: "Denver", abbreviation: "CO"
}
var Connecticut = {
    place: "Connecticut", capital: "Hartford", abbreviation: "CT"
}
var Delaware = {
    place: "Delaware", capital: "Dover", abbreviation: "DE"
}
var districtOfColumbia = {
    place: "Washington, D.C.", capital: "Washington, D.C. is the capital of the US", abbreviation: "DC"
}
var Florida = {
    place: "Florida", capital: "Tallahassee", abbreviation: "FL"
}
var Georgia = {
    place: "Georgia", capital: "Atlanta", abbreviation: "GA"
}
var Guam = {
    place: "Guam", capital: "Hagåtña", abbreviation: "GU"
}
var Hawaii = {
    place: "Hawaii", capital: "Honolulu", abbreviation: "HI"
}
var Idaho = {
    place: "Idaho", capital: "Boise", abbreviation: "ID"
}
var Illinois = {
    place: "Illinois", capital: "Springfield", abbreviation: "IL"
}
var Indiana = {
    place: "Indiana", capital: "Indianapolis", abbreviation: "IN"
}
var Iowa = {
    place: "Iowa", capital: "Des Moines", abbreviation: "IA"
}
var Kansas = {
    place: "Kansas", capital: "Topeka", abbreviation: "KS"
}
var Kentucky = {
    place: "Kentucky", capital: "Frankfort", abbreviation: "KY"
}
var Louisiana = {
    place: "Louisiana", capital: "Baton Rouge", abbreviation: "LA"
}
var Maine = {
    place: "Maine", capital: "Augusta", abbreviation: "ME"
}
var Maryland = {
    place: "Maryland", capital: "Annapolis", abbreviation: "MD"
}
var marshallIslands = {
    place: "Marshall Islands", capital: "Delap-Uliga-Djarrit", abbreviation: "MH"
}
var Massachusetts = {
    place: "Massachusetts", capital: "Boston", abbreviation: "MA"
}
var Michigan = {
    place: "Michigan", capital: "Lansing", abbreviation: "MI"
}
var Minnesota = {
    place: "Minnesota", capital: "St. Paul", abbreviation: "MN"
}
var Mississippi = {
    place: "Mississippi", capital: "Jackson", abbreviation: "MS"
}
var Missouri = {
    place: "Missouri", capital: "Jefferson City", abbreviation: "MO"
}
var Montana = {
    place: "Montana", capital: "Helena", abbreviation: "MT"
}
var Nebraska = {
    place: "Nebraska", capital: "Lincoln", abbreviation: "NE"
}
var Nevada = {
    place: "Nevada", capital: "Carson City", abbreviation: "NV"
}
var newHampshire = {
    place: "New Hampshire", capital: "Concord", abbreviation: "NH"
}
var newJersey = {
    place: "New Jersey", capital: "Trenton", abbreviation: "NJ"
}
var newMexico = {
    place: "New Mexico", capital: "Santa Fe", abbreviation: "NM"
}
var newYork = {
    place: "New York", capital: "Albany", abbreviation: "NY"
}
var northCarolina = {
    place: "North Carolina", capital: "Raleigh", abbreviation: "NC"
}
var northDakota = {
    place: "North Dakota", capital: "Bismarck", abbreviation: "ND"
}
var northernMarianaIslands = {
    place: "Northern Mariana Islands", capital: "Saipan", abbreviation: "MP"
}
var Ohio = {
    place: "Ohio", capital: "Columbus", abbreviation: "OH"
}
var Oklahoma = {
    place: "Oklahoma", capital: "Oklahoma City", abbreviation: "OK"
}
var Oregon = {
    place: "Oregon", capital: "Salem", abbreviation: "OR"
}
var Pennsylvania = {
    place: "Pennsylvania", capital: "Harrisburg", abbreviation: "PA"
}
var puertoRico = {
    place: "Puerto Rico", capital: "San Juan", abbreviation: "PR"
}
var rhodeIsland = {
    place: "Rhode Island", capital: "Providence", abbreviation: "RI"
}
var southCarolina = {
    place: "South Carolina", capital: "Columbia", abbreviation: "SC"
}
var southDakota = {
    place: "South Dakota", capital: "Pierre", abbreviation: "SD"
}
var Tennessee = {
    place: "Tennessee", capital: "Nashville", abbreviation: "TN"
}
var Texas = {
    place: "Texas", capital: "Austin", abbreviation: "TX"
}
var virginIslands = {
    place: "U.S. Virgin Islands", capital: "Charlotte Amalie", abbreviation: "VI"
}
var Utah = {
    place: "Utah", capital: "Salt Lake City", abbreviation: "UT"
}
var Vermont = {
    place: "Vermont", capital: "Montpelier", abbreviation: "VT"
}
var Virginia = {
    place: "Virginia", capital: "Richmond", abbreviation: "VA"
}
var Washington = {
    place: "Washington", capital: "Olympia", abbreviation: "WA"
}
var westVirginia = {
    place: "West Virginia", capital: "Charleston", abbreviation: "WV"
}
var Wisconsin = {
    place: "Wisconsin", capital: "Madison", abbreviation: "WI"
}
var Wyoming = {
    place: "Wyoming", capital: "Cheyenne", abbreviation: "WY"
}

var name;
var running = true;

//work in progress--returns undefined on alert
function stateInfo() {
    while (running = true) {
        name = prompt("Please enter the name of a state or territory in camel case: (ex: westVirginia)");
        alert("The capital of " + (name).place + " is " + (name).capital 
        + " and its abbreviation is " + (name).abbreviation);
    }
}

stateInfo();
