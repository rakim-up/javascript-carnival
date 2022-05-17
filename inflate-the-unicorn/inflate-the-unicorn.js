// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')
console.log('Inflate The Unicorn!')
//VARIABLES (store these as an object?) how would that look like? unicorns={
//unicorn1 = Nikola
//unicorn2 = Kristaps
//unicorn3 = Poku}

//need to store different states within each unicorn and show the changes.
//maybe store each level in an inflation array thingy

//use on.click to call
let unicorns = document.getElementsByClassName('inflate-an-image')

let unicornClicked = (u) => {
  let newUnicorn = u.target
  if (newUnicorn.src.match('./images/unicorn-0.png')) {
    newUnicorn.src = './images/unicorn-1.png'
  } else if (newUnicorn.src.match('./images/unicorn-1.png')) {
    newUnicorn.src = './images/unicorn-2.png'
  } else if (newUnicorn.src.match('./images/unicorn-2.png')) {
    newUnicorn.src = './images/unicorn-3.png'
  } else if (newUnicorn.src.match('./images/unicorn-3.png')) {
    alert('Unicorn' + +'Says TY')
  }
}
//write a function that gets called on every click of the unicorn
for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClicked
}

//test clicker is clicking on dev tools and make sure its registering

//now, when an image is clicked a function should change the image to the next image up.

//look up how to change an HTML image on JS

//make an array to keep track of which unicorn is on which picture

//make unicorn variables, uni1-uni2-uni3

//once a unicorn has cycled thru all states have an alet that says which unicorn says thanks
