
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "green"
pincel.fillRect(50, 50, 350, 300);//cabeza

pincel.fillStyle = "black"
pincel.fillRect(100, 100, 80,80);//hojo izquierdo
pincel.fillRect (280, 100, 80, 80);//hojo derecho
pincel.fillRect(180, 180, 100,140);//nariz
pincel.fillRect(120, 220, 60, 130);//bigote izquierdo
pincel.fillRect(280, 220, 60, 130);//bigote derecho