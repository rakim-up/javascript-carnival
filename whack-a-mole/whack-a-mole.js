// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

document.addEventListener('DOMContentLoaded', start)

function start() {
  bindEventListeners(document.getElementsByClassName('table')[0].children)
  addMole(randomIntFromInterval(0, 24).toString())
}

function bindEventListeners(table) {
  for (var i = 0; i < table.length; i++) {
    table[i].addEventListener('click', updateMoleMap)
  }
}
function addMole(tableId) {
  var img = document.createElement('img')
  img.src = './mole.PNG'
  img.id = 'moleImg'
  document.getElementById(tableId).appendChild(img)
}
