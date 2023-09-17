let countEl = document.getElementById("count")
let count = 0
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")



function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = " " + count + " -"
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}

function reset() {
    count = 0
    countEl.textContent = 0
    countStr = 0
    saveEl.textContent = "Previous Enemies: "
}

