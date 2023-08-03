/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // function generarCarta() {
  let palos = [
    { s: "♦", color: "red" },
    { s: "♥", color: "red" },
    { s: "♠", color: "black" },
    { s: "♣", color: "black" }
  ];
  let valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let paloElegido = palos[Math.floor(Math.random() * palos.length)];
  let valorElegido = valores[Math.floor(Math.random() * valores.length)];

  document.querySelector(".valor").innerHTML = valorElegido;
  document.querySelectorAll(".palo").forEach((element, index) => {
    element.innerHTML = paloElegido.s;
    element.style.color = paloElegido.color;
  });
  let width = document.getElementById("widthInput").value;
  let height = document.getElementById("heightInput").value;

  // Aplicar el ancho y alto a la carta
  document.getElementById("carta").style.width = width + "px";
  document.getElementById("carta").style.height = height + "px";
};
setInterval(window.onload, 10000);
