// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')
//VARIABLES (store these as an object?) how would that look like? unicorns={

// assigned each given HTML tag to a variable, each variable ='s a unicorn  below
let uni0 = document.getElementById('uni0')
let uni1 = document.getElementById('uni1')
let uni2 = document.getElementById('uni2')

let inflation = [0, 0, 0]

//when Unicorn is clicked the click function is run, idk if its called too tho
uni0.onclick = clicked
uni1.onclick = clicked
uni2.onclick = clicked
//this function is the what happens when a unicorn isclicked
function clicked(e) {
  // making a variable where the unicorn we click on is the even target
  var unicorn = event.target
  //this is for the concatenation where the fourth spot in the array eg [0,0,0,X,0] is targeted and susceptible to change
  let id = unicorn.id[3]
  //inflates or changes to the next pic once on click
  inflation[id]++
  //sets and maintains the bounds
  if (inflation[id] == 4) {
    inflation[id] = 0
    alert(unicorn.id + ' says thanks!')
  }
  //the path concatenaterd to allow multiple changes in one line
  unicorn.src = './images/unicorn-' + inflation[id] + '.png'
}
