let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

colorBtn.addEventListener('click', color)
placeBtn.addEventListener('click', place)
ritualBtn.addEventListener('click', ritual)

function color() {
    alert("Black")
}

function place() {
    alert("Gym")
}

function ritual() {
    alert("I don't know yet")
}