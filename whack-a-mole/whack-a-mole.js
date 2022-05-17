// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//the ability to store and get references from the HTML table.. like the tictactoe game I guess?
//A function to randomly select which hole should get the mole
//A way to show the mole in a chosen cell

//references to the cells
const holes = document.getElementsByTagName('TD') //get table array

for (let i = 0; i < holes.length; i++) {
  //loop thru
  holes[i].onclick = WhackedMole
  //we dont want cell to be clicked on we want the cell with mole image inside to be it
  //bind on click to cells, maybe need it to just be on cell that mole pops up in
}

//show the mole
function showMoleRND(holes) {
  //random cell selector
  let randomIndex = Math.floor(Math.random() * 24)
  let randomCell = holes[randomIndex]

  let img = document.createElement('img') //creates image of mole from JS n adds to HTML
  //now gotta append the img of the mole to the random cell selected
  img.src = './mole.PNG'
  img.id = 'moleImg'

  randomCell.appendChild(img) //appended
  //problems..
  //big ass mole appearing on the bottom of page not in hole
  //why? maybe didnt append properly
}
function WhackedMole(e) {
  let mole = e.target
  showMole()
}
