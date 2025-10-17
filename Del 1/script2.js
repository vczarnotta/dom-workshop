//Övning 2 - Knappar som styr sidan

//Knapp 1: Byt Bakgrundsfärg
const colorButton = document.createElement("button");
colorButton.textContent = "Byt Bakgrundsfärg";
document.body.appendChild(colorButton);

colorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#e0f2fe"
});


//Knapp 2: Lägg till Stycke
const textButton = document.createElement("button");
textButton.textContent = "Lägg till stycke";
document.body.appendChild(textButton);

textButton.addEventListener("click", () => {
    const newText = document.createElement("p")
    newText.textContent = "Jag har sovit 8 timmar."
    document.body.appendChild(newText)
});

//Knapp 3: Ta bort senaste stycke
const removeButton = document.createElement("button");
removeButton.textContent = "Ta bort senaste stycke";
document.body.appendChild(removeButton)

removeButton.addEventListener("click", () => {
    const lastParagraph = document.querySelector("p:last-of-type")
    lastParagraph.remove()
})

//Knapp 4: Ändra rubrikens text
const title = document.querySelector("h1")

const titleButton = document.createElement("button")
titleButton.textContent = "Ändra rubrik"
document.body.appendChild(titleButton)

titleButton.addEventListener("click", () => {
    title.textContent = "Veronica"
})