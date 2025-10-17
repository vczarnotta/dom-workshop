//Övning 4 - Skapa en lista

const listContainer = document.createElement("ul")
document.body.appendChild(listContainer)

const finishedChores = ["druckit kaffe", "kodat", "haft lektion", "läst kod", "testat övningar"]
const colors = [" #1e3a8a", "#059669", "#f97316", "#2563eb", "#475569"]

for(let i = 0; i < finishedChores.length; i++) {
    const listItem = document.createElement("li")
    const chore = finishedChores[i]
    listItem.textContent = chore
    listContainer.appendChild(listItem)
    listItem.style.color = colors[i] //Ändrar färg för varje punkt
}

listContainer.children[2].textContent = "Det här ändrades i JavaScript" //Ändra tredje punkten i listan
listContainer.lastChild.remove() //Ta bort sista punkten i listan