const container = document.querySelector(".container")

//Knapp 1: Ändra färg
const changeColorBtn = document.createElement("button")
changeColorBtn.textContent = "Ändra färg"
container.appendChild(changeColorBtn)

changeColorBtn.addEventListener("click", () => {
    paragraph.style.backgroundColor = "#FEEAFA"
})

//Knapp 2: Lägg till text
const addTextBtn = document.createElement("button")
addTextBtn.textContent = "Lägg till text"
container.appendChild(addTextBtn)

addTextBtn.addEventListener("click", () => {
    paragraph.textContent += " Fugit accusamus molestiae voluptates voluptatibus, deleniti laboriosam, distinctio nesciunt at dolores iure totam, vitae unde."
})

//Knapp 3: Rensa text
const clearTextBtn = document.createElement("button")
clearTextBtn.textContent = "Rensa text"
container.appendChild(clearTextBtn)

clearTextBtn.addEventListener("click", () => {
    paragraph.remove()
})

//Skapa ett stycke
const paragraph = document.createElement("p")
paragraph.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et voluptatem dolor officia excepturi officiis itaque veritatis delectus voluptate nobis ipsam, eaque rerum optio ex magnam impedit explicabo consectetur. Ad, cupiditate?"
document.body.appendChild(paragraph)

//Knapp 4: Alert
const alertBtn = document.createElement("button")
alertBtn.textContent = "Varning"
container.appendChild(alertBtn)

alertBtn.addEventListener("click", () => {
    alert("Detta är en varning!")
})