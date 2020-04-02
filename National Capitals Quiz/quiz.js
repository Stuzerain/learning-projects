const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-btns")


let shuffledQuestions, currentQuestionIndex
 

const continents = {
    number: 4,

    asia: {
    countries: [
        "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei",
        "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran",
        "Iraq", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos",
        "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea",
        "Oman", "Pakistan", "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore", "South Korea",
        "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste",
        "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"   
        ],
    
    capitals: [
        "Kabul", "Yerevan", "Baku", "Manama", "Dhaka", "Thimphu", "Bandar Seri Begawan", 
        "Phnom Penh", "Beijing", "Nicosia", "Tbilisi", "New Delhi", "Jakarta", "Tehran", 
        "Baghdad", "Tokyo", "Amman", "Nur-Sultan", "Kuwait City", "Bishkek", "Vientiane",
        "Beirut", "Kuala Lumpur", "Malé", "Ulaanbaatar", "Naypyidaw", "Kathmandu", "Pyongyang",
        "Muscat", "Islamabad", "Manila", "Doha", "Moscow", "Riyadh", "Singapore", "Seoul", 
        "Sri Jayawardenepura Kotte", "Damascus", "Taipei", "Dushanbe", "Bangkok", "Dili",
        "Ankara", "Ashgabat", "Abu Dhabi", "Tashkent", "Hanoi", "Sana'a"
        ]
},

    europe: {
    countries: [
        "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium",
        "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czechia", "Denmark", "Estonia",
        "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland",
        "Ireland", "Italy", "Kazakhstan", "Kosovo", "Latvia", "Liechtenstein", "Lithuania",
        "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia",
        "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia",
        "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "turkey", "Ukraine",
        "United Kingdom", "Vatican City"
    ],

    capitals: [
        "Tirana", "Andorra la Vella", "Yerevan", "Vienna", "Baku", "Minsk", "Brussels", 
        "Sarajevo", "Sofia", "Zagreb", "Nicosia", "Prague", "Copenhagen", "Tallinn", 
        "Helsinki", "Paris", "Tbilisi", "Berlin", "Athens", "Budapest", "Reykjavik", 
        "Dublin", "Rome", "Nur-Sultan", "Pristina", "Riga", "Vaduz", "Vilnius", 
        "Luxembourg", "Valetta", "Chisinau", "Monaco", "Podgorica", "Amsterdam", "Skopje", 
        "Oslo", "Warsaw", "Lisbon", "Bucharest", "Moscow", "San Marino", "Belgrade",
        "Bratislava", "Ljubljana", "Madrid", "Stockholm", "Bern", "Ankara", "Kiev",
        "London", "Vatican City"
    ]
    },

    africa: {
    countries: [
        "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cape Verde",
        "Cameroon", "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Ivory Coast",
        "Djibouti", "Egypt", "Eauatorial Guinea", "ERitrea", "Eswatini (formerly Swaziland)",
        "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho",
        "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", 
        "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal",
        "Seychelles", "Sierra Leone", "Somalia",
        "South Africa",
        "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
    ],

    capitals: [
        "Algiers", "Luanda", "Porto-Novo", "Gaborone", "Ouagadougou", "Gitega", "Praia",
        "Yaounde", "Bangui", "N'Djamena", "Moroni", "Kinshasa", "Brazzaville", "Yamooussoukro",
        "Djibouti", "Cairo", "Malabo", "Asmara", "Mbabane (administrative) and Lobamba (legislative/royal)",
        "Addis Ababa", "Libreville", "Banjul", "Accra", "Conakry", "Bissau", "Nairobi", "Maseru", 
        "Monrovia", "Tripoli", "Antananarivo", "Lilongwe", "Bamako", "Nouakchott", "Port Louis",
        "Rabat", "Maputo", "Windhoek", "Niamey", "Abuja", "Kigali", "São Tomé", "Dakar",
        "Victoria", "Freetown", "Mogadishu", 
        "Pretoria (administrative), Cape Town(legistlative), Bloemfontein (Judicial)",
        "Juba", "Khartoum", "Dodoma", "Lomé", "Tunis", "Kampala", "Lusaka", "Harare"
    ]
    }, 

    americas: {
    countries: [
        "Anitgua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba",
        "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", 
        "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama",
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "U.S.A.",
        "Argentina", "Bolivia", "Brazil", "Chile", 
        "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uraguay", "Venezuala"
    ],

    capitals: [
        "Saint John's", "Nassau", "Bridgetown", "Belmopan", "Ottawa", "San Jose", "Havana",
        "Roseau", "Santo Domingo", "San Salvador", "Saint George's", "Guatemala City", 
        "Port-au-Prince", "Tegucigalpa", "Kingston", "Mexico City", "Managua", "Panama City",
        "Basseterre", "Castries", "Kingstown", "Port of Spain", "Washington, D.C.", 
        "Buenos Aires", "Sucre (de jure), La Paz (seat of government", "Brasilia", "Santiago",
        "Bogotá", "Quito", "Georgetown", "Asunción", "Lima", "Paramaribo", "Montevideo", "Caracas"
    ]
    }
}

const questions = {
    numAnswers: 4,

    multChoice: {
        question: "What is the capital of the United Arab Emirates?",
        answers:[
            { text: "Abu Dhabi", correct: true },
            { text: "", correct: false },
            { text: "", correct: false },
            { text: "", correct: false }
        ]
    }
}

questions.fillWrong()

// Attempt 1:
//let wrongAnswerAsia = function() {
//    let wrong = continents.asia.capitals[Math.floor(Math.random() * continents.asia.capitals.length)]
//    for (var i = 1; i < questions.answers[i]; i = i+1) {
//        if (wrong == questions.answers[0].text) {
//            wrongAnswerAsia
//        } else {
//            return wrong
//        }
//        questions.answers[i] = wrong
//        }
//    }

// Attempt 2:
//let generateWrong = function() {
//    const randomAsia = continents.asia.capitals[Math.floor(Math.random() * continents.asia.capitals.length)]
//    for (var i = 0; i < questions.answers[i]; i = i+1) {
//        if (questions.answers[i].correct == false) {
//            questions.answers[i].text = randomAsia
//        } else {
//            questions.answers[i].text = questions.answers[i].text
//        }
//    }
//}

// Attempt 3 (method of const 'questions'?):
//fillWrong: function() {
//    var answer;
//    for (var i = 0; i < this.numAnswers; i = i+1) {
//        do {
//            answer = this.generateWrongAsia()
//        } while (this.checkRedundant(answers))
//        this.multChoice.answers[i].text = answer
//    }
//},
//
//generatewrongAsia: function() {
//    let new = continents.asia.capitals[Math.floor(Math.random() * continents.asia.capitals.length)]
//    let newAnswers = []
//
//    newAnswers.push(new)
//},
//
//checkRedundant: function(answers){
//let correct = questions.multChoice.answers[0].text
//let new = (continents.asia.capitals[Math.floor(Math.random() * continents.asia.capitals.length)])
//
//for (var i = 0; i < this.numAnswers; i = i+1) {
//    let check = this.multChoice.answers[i].text
//    for (var j = 0; j < this.multChoice.answers.length; j = j+1)
//        if (check == correct) {
//            return false
//   
//        }
//    } return true
//}

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    (currentQuestionIndex = currentQuestionIndex + 1)
    setNextQuestion()
})


function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

