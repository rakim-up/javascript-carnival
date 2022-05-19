// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// got this from stackOverflow its the buttons and the functiont that makes it clickable and puts an event on it
document.onkeydown = checkKey
function checkKey(e) {
  //this binds an event and function on the up button
  if (e.keyCode == '38') {
    changeVertical(-1)
    //this binds an event and function on the down button
  } else if (e.keyCode == '40') {
    changeVertical(1)
    //this binds an event and function on the left
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)
    //this binds an event and function on the right btn
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
  }
}
//brings whatever is connected to the html IDs of below into JS to be made into a variable an then manipulated. references to images
let head = document.getElementById('head')
let body = document.getElementById('body')
let feet = document.getElementById('shoes')
//main index array takes care of all the vertical shifts(up N down) [head, body, feet]
let mainIndex = 0
//indexes array is the store fow where we are at horizontally. wheres the head up to [0], where the body is up to [1] where the feet are upto [2]
let indexes = [0, 0, 0]
//this array contains all the head body and feet variables
let imgs = [head, body, shoes]
//these strings are what is called n stored when needing part of body we are on when using the path for the img src
let strings = ['head', 'body', 'shoes']
//the function that takes care of all horizontal movements left2right
function changeHorizontal(shift) {
  //this line generalises and makes index and stores where ever we are (left right) up to for each slot in the indexes array.
  //passing in the main index shows where we are vertically
  let index = indexes[mainIndex]
  //figures which images to use, either head, body or feet depending on where they are vertically in the main index
  let image = imgs[mainIndex]
  //picks out which string of head body feet depending on where we are in the[main index]
  let str = strings[mainIndex]

  index += shift
  //these if statements ensures the bounds are not breached
  //left to right
  if (index < 0) index = 5

  if (index > 5) index = 0
  //reassigns the head body or feet to be the new copy of the index to set the src
  indexes[mainIndex] = index
  //used concatenation and the above variables to find and store the new pics and src
  image.src = './images/' + str + index + '.png'
}

function changeVertical(shift) {
  //using index and increasing/decreasing it
  mainIndex += shift
  //limiting scope of the index, cant go above 2. if ot goes to three, it gets turned to zero and the same in reverse
  if (mainIndex < 0) mainIndex = 2

  if (mainIndex > 2) mainIndex = 0
}
