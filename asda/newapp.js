let pharagraphElement = document.querySelector("p");

function changePharagraphText() {
    pharagraphElement.textContent = "clicked!";
}

pharagraphElement.addEventListener("click", changePharagraphText);


let inputElement = document.querySelector('input');

function retreiveUserInput() {
    let enteredText = inputElement.value;
    console.log(enteredText);
}

inputElement.addEventListener('input',retreiveUserInput);