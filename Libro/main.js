// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

// Obtener todas las páginas y convertirlas en un array
const papers = document.getElementsByClassName("paper");
const papersArray = Array.from(papers); // Convertir HTMLCollection a Array
console.log(papersArray);

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = papersArray.length; // Número dinámico de páginas
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        const currentPaper = papersArray[currentLocation - 1]; // Página actual
        if (currentPaper) {
            currentPaper.classList.add("flipped");
            currentPaper.style.zIndex = currentLocation; // Ajustar z-index
        }

        if (currentLocation === 1) {
            openBook(); // Abrir el libro en la primera página
        } else if (currentLocation === numOfPapers) {
            closeBook(false); // Cerrar el libro en la última página
        }

        currentLocation++; // Avanzar a la siguiente página
    }
}
function goPrevPage() {
    if (currentLocation > 1) {
        const currentPaper = papersArray[currentLocation - 2]; // Página anterior
        if (currentPaper) {
            currentPaper.classList.remove("flipped"); // Desvoltear la página
            currentPaper.style.zIndex = maxLocation - currentLocation; // Ajustar z-index dinámicamente
        }

        if (currentLocation === 2) {
            closeBook(true); // Cerrar el libro al volver a la primera página
        } else if (currentLocation === maxLocation) {
            openBook(); // Abrir el libro si estaba cerrado
        }

        currentLocation--; // Retroceder a la página anterior
    }
}
