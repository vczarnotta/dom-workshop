//Övning 1 - Skapa och ändra element

const headerTwo = document.createElement("h2");
headerTwo.textContent = "Min rubrik för dagen";
headerTwo.style.color = "#1e3a8a";
document.body.appendChild(headerTwo);

const text = document.createElement("p");
text.textContent = "Idag är det soligt och klar himmel.";
text.style.color = "#fef3c7"
headerTwo.appendChild(text)

const div = document.createElement("div")
div.textContent = "Det här är en färgad ruta"
div.style.color = "#10b981"
text.appendChild(div)

const changeText = document.querySelector("p")
changeText.textContent += " 2025-10-16"