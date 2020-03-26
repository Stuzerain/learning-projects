const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-btns")


let shuffledQuestions, currentQuestionIndex

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

const questions = [
    {
        question: "What is the capital of the United Arab Emirates?",
        answers:[
            { text: "Abu Dhabi", correct: true },
            { text: "Amman", correct: false },
            { text: "Baghdad", correct: false },
            { text: "Doha", correct: false }
        ]
    }, 
    {
        question: "What is the capital of Ireland?",
        answers:[
            { text: "Dublin", correct: true },
            { text: "Belfast", correct: false },
            { text: "Douglas", correct: false },
            { text: "London", correct: false }
        ]
    }, 
    {
        question: "What is the capital of South Korea?",
        answers:[
            { text: "Seoul", correct: true },
            { text: "Pyongyang", correct: false },
            { text: "Phnom Penh", correct: false },
            { text: "Taipei", correct: false }
        ]
    }, 
]

const continents = [
    asia = [
        "Kabul", "Yerevan", "Baku", "Manama", "Dhaka", "Thimphu", "Bandar Seri Begawan", 
        "Phnom Penh", "Beijing", "Nicosia", "Tbilisi", "New Delhi", "Jakarta", "Tehran", 
        "Baghdad", "Tokyo", "Amman", "Nur-Sultan", "Kuwait City", "Bishkek", "Vientiane",
        "Beirut", "Kuala Lumpur", "Malé", "Ulaanbaatar", "Naypyidaw", "Kathmandu", "Pyongyang",
        "Muscat", "Islamabad", "Manila", "Doha", "Moscow", "Riyadh", "Singapore", "Seoul", 
        "Sri Jayawardenepura Kotte", "Damascus", "Taipei", "Dushanbe", "Bangkok", "Dili",
        "Ankara", "Ashgabat", "Abu Dhabi", "Tashkent", "Hanoi", "Sana'a"
    ],

    europe = [
        "Tirana", "Andorra la Vella", "Yerevan", "Vienna", "Baku", "Minsk", "Brussels", 
        "Sarajevo", "Sofia", "Zagreb", "Nicosia", "Prague", "Copenhagen", "Tallinn", 
        "Helsinki", "Paris", "Tbilisi", "Berlin", "Athens", "Budapest", "Reykjavik", 
        "Dublin", "Rome", "Nur-Sultan", "Pristina", "Riga", "Vaduz", "Vilnius", 
        "Luxembourg", "Valetta", "Chisinau", "Monaco", "Podgorica", "Amsterdam", "Skopje", 
        "Oslo", "Warsaw", "Lisbon", "Bucharest", "Moscow", "San Marino", "Belgrade",
        "Bratislava", "Ljubljana", "Madrid", "Stockholm", "Bern", "Ankara", "Kiev",
        "London", "Vatican City"
    ],

    africa = [
        "Algiers", "Luanda", "Porto-Novo", "Gaborone", "Ouagadougou", "Gitega", "Praia",
        "Yaounde", "Bangui", "N'Djamena", "Moroni", "Kinshasa", "Brazzaville", "Yamooussoukro",
        "Djibouti", "Cairo", "Malabo", "Asmara", "Mbabane (administrative) and Lobamba (legistlative/royal)",
        "Addis Ababa", "Libreville", "Banjul", "Accra", "Conakry", "Bissau", "Nairobi", "Maseru", 
        "Monrovia", "Tripoli", "Antananarivo", "Lilongwe", "Bamako", "Nouakchott", "Port Louis",
        "Rabat", "Maputo", "Windhoek", "Niamey", "Abuja", "Kigali", "São Tomé", "Dakar",
        "Victoria", "Freetown", "Mogadishu", "Juba", "Khartoum", "Dodoma", "Lomé", "Tunis",
        "Pretoria (administrative), Cape Town(legistlative), Bloemfontein (Judicial)",
        "Kampala", "Lusaka", "Harare"
    ],

    americas = [
        "Saint John's", "Nassau", "Bridgetown", "Belmopan", "Ottawa", "San Jose", "Havana",
        "Roseau", "Santo Domingo", "San Salvador", "Saint George's", "Guatemala City", 
        "Port-au-Prince", "Tegucigalpa", "Kingston", "Mexico City", "Managua", "Panama City",
        "Basseterre", "Castries", "Kingstown", "Port of Spain", "Washington, D.C.", 
        "Buenos Aires", "Sucre (de jure), La Paz (seat of government", "Brasilia", "Santiago",
        "Bogotá", "Quito", "Georgetown", "Asunción", "Lima", "Paramaribo", "Montevideo", "Caracas"
    ]
]
