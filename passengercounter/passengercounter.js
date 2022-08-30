//...............DRAW CARD GAME........
// player = {
//     name: "Dagwan Pan'an Danlad",
//     chips: 150
// }

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = []
// let sum = 0 
// let hasblackjact = false
// let isAlive = false
// let message = ""
// let messageEle = document.getElementById("message-ele")
// let sumEle = document.getElementById("sum-ele")
// let cardsEle = document.getElementById("cards-ele")
// let playerEle = document.getElementById("player-ele")

// playerEle.textContent = player.name + ": $" + player.chips

// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random() * 13) + 1
//     if (randomNumber > 10) {
//         return 10
//     }else if (randomNumber === 1) {
//         return 11
//     }else {
//         return randomNumber
//     }    
// }

// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard 
//     random = Math.floor(Math.random() * 1) + 1
//     renderGame()  
// }

// function renderGame() {
//     cardsEle.textContent = "Cards: "  
//     for (let i = 0; i < cards.length; i++) {
//         cardsEle.textContent += cards[i] + " "
//     }
//     sumEle.textContent = "Sum: " + sum 
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"        
//     }else if (sum === 21) {
//         message = "Wohoo! You've got the Blackjack!"
//         hasblackjact = true        
//     }else {
//         message = "You're out of the game!"
//         isAlive = false    
//     }    
//  messageEle.textContent = message
// }

// function newCard() {
//    if (isAlive === true && hasblackjact === false) {
//        let card = getRandomCard()
//        sum += card
//        cards.push(card)
//        renderGame()
//    }    
// }



//document.getElementById("count-el").innerHTML = 5

// let count = 4;
// console.log(count)

// let myAge = 26
// console.log(myAge)

// create a function that log out  the sum of all the lap times
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTimes() {
//     let totalTapTime = lap1 + lap2 + lap3
//     console.log(totalTapTime)
// }

// logLapTimes()

// create a function that increament the lapComplted variable with one 
//Run it three times
// let lapsCompleted = 0

// function increaments() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
    
// }

// increaments()
// increaments()
// increaments()

// let saveEle = document.getElementById("save-el")

// let countEle = document.getElementById("count-el")

// let count = 0

// function increment() {
// count += 1
// countEle.textContent = count

// }

// function save(){
//     let countStr = count + " - "
//     saveEle.textContent += countStr
//     countEle.textContent = 0
//     count = 0
    
// }
// console.log("Congratulations for making it this far!")

//grab the count-el element, store it in a countEl variable 

// let countEle = document.getElementById("count-el")

// let count = 0

// function increment() {
//     count = count + 1
//     // set countEl's innertext to the count
//     countEle.innerHTML = count
// }

// increment()

// function save() {
//     console.log(count)
// }

// save()

// // create a variable, message that stores the string "You have tre new notifications"
// let name = "Dagwan Pan'an Danladi"
// let greetings = "Hi, my name is"

// let myGreeting = greetings + " " + name + "!"
// console.log(myGreeting)

// let welecomeEle = document.getElementById("welcome-el")

// name = "Dagwan Pan'an Danladi"
// greeting = "Welcome back "

// welecomeEle.innerText = greeting + name

// let firstName = "Dagwan "
// let lastName = "Pan'an Danlad"

// let fullName = firstName + lastName
// console.log(fullName)

// let name = "Dagwan"
// let greeting = "Hi there "

// function createGreeting() {
//     console.log(greeting + ", " + name +"!")
    
// }

// createGreeting()

// let myPoints = 3

// function add3Points() {
//     myPoints += 3

// }

// function remove1Points() {
//     myPoints -= 1

// }

// add3Points()
// add3Points()
// add3Points()

// remove1Points()
// remove1Points()

// console.log(myPoints)

// let errorMessage = document.getElementById("error")

// function purchase() {
//     errorMessage.textContent = "Something went wrong, please try again letter"
// }

// ........................SIMPLE CALCULATOR ..........................
// let num1 = 8
// let num2 = 2

// document.getElementById("num1-ele").textContent = num1
// document.getElementById("num2-ele").textContent = num2

// let sumElement = document.getElementById("sum-ele")

// // ........................addition..........................
// function addition() {
//     let result = num1 + num2
//     sumElement.textContent = "Sum: " + result

// }

// // ........................subtraction..........................
// function subtraction() {
//     let result = num1 - num2
//     sumElement.textContent = "Sum: " + result

// }

// // ........................division ..........................
// function division() {
//     let result = num1 / num2
//     sumElement.textContent = "Sum: " + result

// }

// // ........................multiplication.........................
// function multiplication() {
//     let result = num1 * num2
//     sumElement.textContent = "Sum: " + result

// }

// console.log(sum)

// if (sum < 21) {
//     console.log("Do you want to draw a new game?")
// }else if (sum === 21) {
//     console.log("Wohoo! You've got Blcakjact!")
// }else {
//     console.log("You're out of the game!")
// }

//.............NIGHTCLUB CHECK POINT......................

// let clientAge = 22

// if (clientAge < 21) {
//     console.log("You're too young to start clubing")
// }else if (clientAge > 22) {
//     console.log("This club is for young people")
// }else {
//     console.log("Welcome")
// }

//.............NIGHTCLUB CHECK POINT......................

// let age = 50

// if (age < 100) {
//     console.log("Not eligible")
// }else if (age === 100) {
//     console.log("Here is your birthday card from the king")
// }else {
//     console.log("Not eligible, you've already gotten one")
// }

//...............INTRODUCTION TO ARRAY AND FOR LOOP..................
// let myArrays = [
//     "Education: Brighman Young University",
// "Experience: Python Developer",
// "Hobbies: Programming, Web Development and Graphics Designing",
// "Career: A persuasive Start up FullStack Development that currently experiencing new ideas",
// "Name: Dagwan Pan'an Danladi",

// 45, 46, 76, true
// ]

// let cardS = [7, 3, 9]

// for (let i = 0; i < cardS.length; i++) {
//     console.log(cardS[i])
// }

// sentence = ["Hello", "my", "name", "is", "Dagwan Pan'an Danladi"]

// let greetingEle = document.getElementById("greeting-ele")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEle.textContent += sentence[i] + " "
  
// }

// for (let i = 0; i < myArrays.l; i++) {
//     console.log(myArrays[i])
// }

// console.log(myArrays[0])
// console.log(myArrays[1])
// console.log(myArrays[2])
// console.log(myArrays[3])
// console.log(myArrays[4])
// console.log(myArrays.length)

// let me = [
//     "Dagwan Pan'an Danladi", 26, true
// ]

// let message = [
//     "Hey", "how's it goin?",
//     "Iam great, thank you! How about you?",
//     "All good. Beening working on my portfolio lately"
// ]

// let newMessage = "Same here!"

// message.push(newMessage)
// message.pop(newMessage)
// console.log(message)


//................IF STATEMENTS..............

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     }else if (player2Time > player1Time) {
//         return player2Time
//     }else {
//         return player1Time
//     }
// }

// // let getFastestRace = getFastestRaceTime()
// // console.log(getFastestRace)


// function getTotalRaceTime() {
//     return player1Time + player2Time
// }
// let totalTime = getTotalRaceTime()
// console.log(totalTime)

// .................MATH RANDOM NUMBER..............


// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber

// }
// console.log(rollDice())

//................LOGICAL OPERATOR.............

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
//     // if (givesCertificate === true) {
//     //     generateCertificate()
//     // }
// } 

// function generateCertificate() {
//     console.log("Generating Certificate...")
// }

// let hasSolvedChallenge = false
// let hasHintleft = false

// if (hasSolvedChallenge === false && hasHintleft === false){
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution...")
// }

// let likesDocumentries = true
// let likesStartups = false

// if (likesDocumentries === true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film, we think you will like!")
// }


// JSON OBJECTS - STORE DATA IN DEPTH - COMPOSITE/COMPLEX DATA TYPE
// KEY VALUE PAIRS === JSON DATA --------JSON LESSON

// let course = {
//     title: "Learn CSS Grid for free",
//     lesson: 16,
//     creator: "Dagwan Pan'an Danladi",
//     length: 63,
//     level: 3,
//     isFree: true,
//     tags: ["Html", "CSS", "JavaScript"]
// }
// console.log(course)

// let airbnbHotel = {
//     name: "airbnb london",
//     title: "Wilde Aparthotels by Staycity Covent Garden",
//     price: 190,
//     location: "Westminster Borough, London",
//     description: "Wilde Aparthotels by Staycity Covent Garden is located on the Strand in the heart of the West End theatre district and just a few minutes stroll from Leicester Square and Trafalgar Square.",
//     image: "images/airbnb.webp",
//     isSecurityFree: true,
//     aminities: ["free wifi", "breakfast", "Swimming Pool", "Gym Ground"]     
// }

// console.log(airbnbHotel)

// person = {
//     name: "Dagwan Pan'an Danladi",
//     age: 26,
//     country: "Nigeria",
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }
// logData()

// let age = 3

// if (age < 6) {
//     console.log("free")
// }else if (age < 18) {
//     console.log("child discount")
// }else if (age < 27) {
//     console.log("student discount")
// }else if (age < 67) {
//     console.log("full price")
// }else {
//     console.log("senior citizen discount")
// }

//.....................ARRAY AND FOR LOOP........................

// let largeCountries = [
//     "Tuvalu", 
//     "India", 
//     "USA", 
//     "Indonesia", 
//     "Monaco"]

//     largeCountries.pop()
//     largeCountries.push("Pakistan")

//     largeCountries.shift()
//     largeCountries.unshift("China")

// console.log("The five largest countries in the world!")
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

//...................LOCAL OPERATOR..............................
// let dayOfMonth = 13
// let weekDay = "Friday"

// if (dayOfMonth === 13 && weekDay === "Friday") {
//     console.log("Spooky face")
// }


// let hands = ["rock", "paper", "scissor"]

// function getHand() {
//     let randomIndex = Math.floor(Math.random() *3)
//     return hands[randomIndex]
// }
// console.log(getHand())

//..............SORTING..................

// let fruits = ["🍅", "🍅", "🍋", "🍅", "🍋"]

// let appleShelf = document.getElementById("apple-shelf")
// let orangeSehlf = document.getElementById("orange-shelf")

// function sortFruits() {
//     for (i = 0; i < fruits.length; i++) {
//         if (fruits[i] === "🍅") {
//             appleShelf.textContent += "🍅"
//         }else if (fruits[i] === "🍋") {
//             orangeSehlf.textContent += "🍋"
//         }
//     }
// }

// sortFruits()

//..........................................................................................
//..................CHROME EXTENSION................
//log out "button clicked" when the user clicks the "SAVE INPUT" button
// let myLeads = []
// let oldLeads = []
// const inputEle = document.getElementById("input-ele")
// const inputBtn = document.getElementById("input-btn")
// const ulEle = document.getElementById("ul-ele")
// const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// const tabBtn = document.getElementById("tab-btn")

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
// }

// tabBtn.addEventListener("click", function() {
//     chrome.tabs.querry({active: true, currentWindow: true}, function(tabs) {
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))
//         render(myLeads)

//     })
// })


// function render(leads) {
//     let listItems = ""
//     for (let i = 0; i < leads.length; i++) {
//         listItems += `
//         <li>        
//         <a href='${leads[i]}' target='blank'>  ${leads[i]}  </a>
//         </li>`
//     }
//     ulEle.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", function () {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEle.value)
//     inputEle.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))    
//     //console.log(localStorage.getItem("myLeads"))
//     render(myLeads)
    
// })
//..............................................................................................



// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEle.appendChild(li) 
//ulEle.innerHTML += "<li>" + myLeads[i] + "</li>"
//ulEle.innerHTML += "<li>" + myLeads[i] + "</li>"

// let boxEle = document.getElementById("box")

// boxEle.addEventListener("click", function() {
//     console.log("I want to open the 'Box' when it is clicked!")
// })


//..................REDERING INNER HTML............................
// const buyBtn = document.getElementById("container")
// buyBtn.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy() {
//     container.innerHTML += "<p>Thank you for patronizing us</p>"
// }

//....................TEMPLATE LITERAL.........................
// const recipient = "James"
// const sender = "Dagwan"

// const response = `Hey  ${recipient}! \n How is it going? \n Cheers ${sender}`
// console.log(response)

//................LOCAL STORAGE.........................
//localStorage.setItem("myName", "Dagwan Pan'an Danladi")
// let name = localStorage.getItem("myName")
// console.log(name)
//localStorage.clear()

// let myLeads = `["www.w3school.com"]`

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.dagwanpan.com")
// console.log(myLeads)

//...................FUNCTION WITH PARAMETER VERSUS ARGUREMENT.................
// const welcomeEle = document.getElementById("welecome-ele")

// function greatUser(greeting, name, emoji) {
//     welcomeEle.textContent = `${greeting}, you're highly welcome  ${name} ${emoji}!`
// }
// greatUser("Hi", "Dagwan", "🍅")


// function addNumber(num1, num2) {
//     return num1 + num2

// }
// console.log(addNumber(3, 4))
// console.log(addNumber(9, 109))

// let array = ["Me", "You", "all of us", "some of us"]

// function getFirst(arr) {
//     return arr
// }

// console.log(getFirst(array[0]))

// function getFrist(arr) {
//     return arr[0]
// }

// let getArray = getFrist([10, 2, 3, 4, 5])
// console.log(getArray)


//.....................................PRACTICE TIME..............................
// const player = "Dagwan"
// const opponent = "Danladi"
// const game = "AmazingFighter"

// let points = 0
// let hasWon = false


// points += 100
// hasWon = true

// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)
// }else {
//     console.log(1`The winner is ${opponent}! ${player}  lost the game!`)
// }

// let myCourses = ["Learn CSS Animations", "UI Design Foundamentals", "Into to clearn code"]

// // function logItems(arr) {
// //     for (let i = 0; i < arr.length; i++) {
// //         console.log(arr[i])
// //     }   
// // }
// // logItems(myCourses)
// localStorage.getItem("myCourse", myCourses)
// console.log(localStorage)
// let courses = localStorage.getItem("myCourses")
// console.log(courses)
// let data = [
//     {
//         player: "Jane",
//         score: 52
// },

// {
//     player: "Mark",
//     score: 41
// }
// ]
// const logBtn = document.getElementById("log-btn")

// logBtn.addEventListener("click", function() {
//     console.log(data[0].score)

// })

// function generateSentence(desc, arr) {
//     let bestString = `The ${arr.length} ${desc} are `
//     const lastIndex = arr.length - 1
//     for (let i = 0; i < arr.length; i++) {
//         if (1 === lastIndex) {
//             bestString += arr[i]
//         }else {
//             bestString += arr[i] + ", "
//         }
//     }
//     return bestString
// }
// const sentense = generateSentence("Largest Sentnece: " ["China", "USA", "India"])
// console.log(sentense)

// const img = [
//     "images/shoe.jpg",
//     "images/shoe.jpg",
//     "images/shoe.jpg",
//     "images/shoe.jpg"
// ]

// const container = document.getElementById("container")

// function logOutImages() {

//     let allImage = ""
//     for (let i = 0; i < img.length; i++) {
//         allImage += `<img alt ="shoe" class="team-img" src="${img[i]}">`
//     }
//     container.innerHTML = allImage
// }
// logOutImages()
