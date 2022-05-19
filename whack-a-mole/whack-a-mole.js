// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//the ability to store and get references from the HTML table.. like the tictactoe game I guess?
//A function to randomly select which hole should get the mole
//A way to show the mole in a chosen cell

//references to the cells. "table data"
let cells = document.getElementsByTagName('TD') //get table array
//random index to randomize the cells that pop up
//make sure to put cells.length instead of hard coding 25 in, to future proof
let randomIndex = Math.floor(Math.random() * cells.length)
//this variable is the same as cell [random number]
let randomCell = cells[randomIndex]
//creating html tag w JS
let mole = document.createElement('img')
//the path of the pic
mole.src = './mole.PNG'
//putting an ID on it for CS, made same as "TD" to fix weird sizing thing
mole.id = 'mole'
//putting(appending) mole pic inside a random cell
randomCell.appendChild(mole)
//function to click n make the mole dissapear and then randomly reappear
//adding the onclick method(when the mole gets clicked, run the function below)
mole.onclick = WhackedMole
function WhackedMole() {
  //reassigning the same random index to get another random cell
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  //appending the same pic to the new random cell when clicked
  randomCell.appendChild(mole)
  //this plays the audio file
  var audio = new Audio('./whack-audio.wav')
  audio.play()
}
