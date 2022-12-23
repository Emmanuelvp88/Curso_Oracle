
const obtenerText = () => {
    alert(input.value);
    input.value = "";
};

let input = document.querySelector("input");
input.focus();
let button = document.querySelector("button");
button.onclick = obtenerText;
