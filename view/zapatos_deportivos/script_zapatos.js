// Cambiar la descripción
document.getElementById("boton-cambiar").addEventListener("click", () => {
  document.getElementById("descripcion").textContent =
    "¡Nuevas ofertas disponibles por tiempo limitado en zapatos deportivos!";
});

// Cambiar fondo de página
document.getElementById("boton-color").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "white" ? "#f2f2f2" : "white";
});

// Agregar un nuevo producto
document.getElementById("boton-agregar").addEventListener("click", () => {
  const nombre = prompt("Nombre del nuevo zapato:");
  const precio = prompt("Precio:");
  const contenedor = document.getElementById("lista-zapatos");

  if (nombre && precio) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="https://via.placeholder.com/200x180?text=${encodeURIComponent(nombre)}" alt="${nombre}">
      <h3>${nombre}</h3>
      <p>$${parseFloat(precio).toFixed(2)}</p>
    `;
    contenedor.appendChild(card);
  }
});
