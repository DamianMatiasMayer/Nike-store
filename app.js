function obtenerZapatillaPreferida() {
  let zapatilla = "";
  while (zapatilla.toLowerCase() !== "nike" && zapatilla.toLowerCase() !== "adidas" && zapatilla.toLowerCase() !== "puma") {
    zapatilla = prompt("¿Cuál es tu marca de zapatilla preferida? (Nike, Adidas o Puma)");
  }
  return zapatilla;
}

function obtenerTalle() {
  let talle = "";
  while (isNaN(talle) || talle < 6 || talle > 13) {
    talle = prompt("¿Cuál es tu talle de zapatilla? (6-13)");
  }
  return talle;
}

function mostrarTalle(zapatilla, talle) {
  switch (zapatilla.toLowerCase()) {
    case "nike":
      console.log("Tu talle de Nike es " + talle + ".");
      break;
    case "adidas":
      console.log("Tu talle de Adidas es " + talle + ".");
      break;
    case "puma":
      console.log("Tu talle de Puma es " + talle + ".");
      break;
  }
}

let zapatilla = obtenerZapatillaPreferida();
let talle = obtenerTalle();
mostrarTalle(zapatilla, talle);
