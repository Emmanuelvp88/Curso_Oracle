let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d")

pincel.fillStyle = "green";
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = "red";
pincel.fillRect(400,0, 200, 400);

pincel.fillStyle= "grey"
pincel.beginPath();
pincel.arc(300,200, 95,0, 2*3.1416);
pincel.fill();