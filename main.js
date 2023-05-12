const menosBtn = document.querySelector("#menosBtn");
const cleanBtn = document.querySelector("#cleanBtn");
const masBtn = document.querySelector("#masBtn");
const counter = document.querySelector("#counter");
let counterNumber = 0;

const writeCounter = () => {
    counter.textContent = `${counterNumber}`
}

const aumentarCounter = () => {
    counterNumber += 1;
    writeCounter();
}
masBtn.addEventListener("click", aumentarCounter);

const disminuirCounter = () => {
    counterNumber -= 1;
    writeCounter();
}
menosBtn.addEventListener("click", disminuirCounter);

const limpiarCounter = () => {
    counterNumber = 0;
    writeCounter();
}
cleanBtn.addEventListener("click", limpiarCounter);