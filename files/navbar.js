var navbar = document.createElement("div");
navbar.innerHTML = `
    <a href="./intro.html">Introduction</a>
    <a href="./climate.html">Climate</a>
    <a href="./dance.html">Dance</a>
    <a href="./food.html">Food</a>
    <a href="./tourism.html">Tourism</a>
`;
navbar.id = "navbar";
document.body.appendChild(navbar);

function page(index) {
    element = document.getElementsByTagName("a")[index];
    element.style.backgroundColor = "#89ffff";
    element.style.color = "black";
}
