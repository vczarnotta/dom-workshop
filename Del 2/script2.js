//Övning 2 - Mouseover-events

const container = document.querySelector(".container")

//Box 1
const boxOne = document.createElement("div")
boxOne.textContent = "Box 1"
boxOne.style.backgroundColor = "#CBC0D3"
container.appendChild(boxOne)

// boxOne.addEventListener("mouseover", () => {
//     boxOne.style.backgroundColor = "#8E9AAF"
// })

// boxOne.addEventListener("mouseout", () => {
//     boxOne.style.backgroundColor = "#CBC0D3"
// })

//Box 2
const boxTwo = document.createElement("div")
boxTwo.textContent = "Box 2"
boxTwo.style.backgroundColor = "#FEEAFA"
container.appendChild(boxTwo)

// boxTwo.addEventListener("mouseover", () => {
//     boxTwo.style.backgroundColor = "#8E9AAF"
// })

// boxTwo.addEventListener("mouseout", () => {
//     boxTwo.style.backgroundColor = "#FEEAFA"
// })

//Box 3
const boxThree = document.createElement("div")
boxThree.textContent = "Box 3"
boxThree.style.backgroundColor = "#DEE2FF"
container.appendChild(boxThree)

// boxThree.addEventListener("mouseover", () => {
//     boxThree.style.backgroundColor = "#8E9AAF"
// })

// boxThree.addEventListener("mouseout", () => {
//     boxThree.style.backgroundColor = "#DEE2FF"
// })

//Använd samma callback-funktion för alla tre divar
const originalColors = ["#CBC0D3", "#FEEAFA", "#DEE2FF"]
const hoverColors = ["#baadc4ff", "#c9b3c5ff", "#a7abc8ff"]

Array.from(container.children).forEach((box, color) => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = hoverColors[color]
    })

    box.addEventListener("mouseout", () => {
        box.style.backgroundColor = originalColors[color]
    })
});