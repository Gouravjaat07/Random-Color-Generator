let button = document.querySelector("button");
let h2 = document.querySelector("h2");
button.addEventListener("click",displayColor);

function displayColor() {
    let div = document.querySelector(".color");
    div.style.backgroundColor = randomColor();
    h2.innerText = randomColor();
}

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let GenerateColor = `rgb(${red}, ${green}, ${blue})`;
    return GenerateColor;
}
function copyColor() {
    let colorText = document.querySelector("h2").textContent;
    console.log(colorText);
    navigator.clipboard.writeText(colorText)
    .then(() => {
        alert("Color Code Copied : " + colorText);
    })
    .catch((e) => {
        console.error("Failed to copy: ",e);
    });
}