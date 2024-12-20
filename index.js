
let saveEl = document.getElementById("save-El")
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0                       

function Increment(){
count = count + 3 
countEl.innerText = count
}

let counter = document.getElementById("secondCount")

console.log(counter)

let number = 0

function timer(){
    number = number + 5
   counter.innerText = number
}

let add = " - "

function save(){
   countStr = count + " - "
    saveEl.innerText += countStr
    countEl.innerText = 0
    count = 0
}
