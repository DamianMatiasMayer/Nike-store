function obtenerZapatillaPreferida() {
  let zapatilla = "";
  while (zapatilla.toLowerCase() !== "nike" && zapatilla.toLowerCase() !== "adidas" && zapatilla.toLowerCase() !== "puma") {
    zapatilla = prompt("¿Cuál es tu marca de zapatilla preferida? (Nike, Adidas o Puma)");
  }
  return zapatilla;
}

function obtenerTalle() {
  let talla = "";
  while (isNaN(talla) || talla < 6 || talla > 13) {
    talla = prompt("¿Cuál es tu talle de zapatilla? (6-13)");
  }
  return talla;
}

function mostrarTalle(zapatilla, talla) {
  switch (zapatilla.toLowerCase()) {
    case "nike":
      console.log("Tu talle de Nike es " + talla + ".");
      break;
    case "adidas":
      console.log("Tu talle de Adidas es " + talla + ".");
      break;
    case "puma":
      console.log("Tu talle de Puma es " + talla + ".");
      break;
  }
}

let zapatilla = obtenerZapatillaPreferida();
let talla = obtenerTalle();
mostrarTalle(zapatilla, talla);
