//Övning 3 - Ändra text och stil med knappar

//Knapp 1: Byt rubrik
const changeTitleBtn = document.createElement("button")
changeTitleBtn.textContent = "Byt rubrik"
document.body.appendChild(changeTitleBtn)

const title = document.querySelector("h1")

changeTitleBtn.addEventListener("click", () => {
    title.textContent = "Ny rubrik - nu händer det saker"
})

//Knapp 2: Ändra paragraf
const changeTextBtn = document.createElement("button")
changeTextBtn.textContent = "Ändra paragraf"
document.body.appendChild(changeTextBtn)

const text = document.querySelector("p")

changeTextBtn.addEventListener("click", () => {
    text.textContent = "Jag gillar att koda frontend, det som syns."
})

//Knapp 3: Byt färg på rubrik
const changeColorBtn = document.createElement("button")
changeColorBtn.textContent = "Byt färg på rubrik"
document.body.appendChild(changeColorBtn)

changeColorBtn.addEventListener("click", () => {
    title.style.color = "#dc2626"
})