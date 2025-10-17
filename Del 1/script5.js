//Övning 5 - Byt bakgrund och text

//Knapp 1: Ändra bakgrundsfärg
const changeBackgroundBtn = document.createElement("button")
changeBackgroundBtn.textContent = "Ändra bakgrundsfärg"
document.body.appendChild(changeBackgroundBtn)

changeBackgroundBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "#f1f5f9"
})

//Knapp 2: Ändra textfärg
const changeTextBtn = document.createElement("button")
changeTextBtn.textContent = "Ändra textfärg"
document.body.appendChild(changeTextBtn)

changeTextBtn.addEventListener("click", () => {
    document.body.style.color = "#0f172a"
})

//Knapp 3: Ändra innehåll
const changeContentBtn = document.createElement("button")
changeContentBtn.textContent = "Byt innehåll"
document.body.appendChild(changeContentBtn)

changeContentBtn.addEventListener("click", () => {
    const text = document.querySelector("p")
    text.textContent = "Något ni lärt er hittills"
})