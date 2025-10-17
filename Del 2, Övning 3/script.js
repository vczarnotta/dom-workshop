//Övning 3 - Double click-events
const listContainer = document.querySelector("ul")
let listCounter = listContainer.children.length

//Knapp: Lägg till nytt list-objekt
const addBtn = document.createElement("button")
addBtn.textContent = "Lägg till"
document.body.appendChild(addBtn)

addBtn.addEventListener("dblclick", () => {
    const newListItem = document.createElement("li")
    newListItem.textContent = "Item " + (listCounter += 1)
    listContainer.appendChild(newListItem)
})

//Ta bort elementet som dubbelklickas
listContainer.addEventListener("dblclick", () => {
    const clickedItem = event.target
    if (clickedItem.tagName === "LI") {
        clickedItem.remove()
    }
})