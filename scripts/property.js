import {
  cargarDatos,
  guardarDatos_LocalStorage
} from "./data.js";

const properties = [];
const favorites = [];

document.addEventListener("DOMContentLoaded", () => {
  cargarDatos("../data/properties.json").then((data) => {
    for (let i of data.propierties) {
      properties.push(i);
    }
    crearCartas();
  });
});

function corazonCambio(event) {
  const corazonInteraccion = event.currentTarget;
  const corazon = corazonInteraccion.classList.contains("activo");
  const h1Element = corazonInteraccion.querySelector("h1");
  const propertyId = h1Element.textContent;

  if (!corazon) {
    favorites.push(propertyId);
  } else {
    const index = favorites.indexOf(propertyId);
    if (index > -1) {
      favorites.splice(index, 1);
    }
  }

  if (favorites.length === 0) {
    localStorage.removeItem("Favorites");
  } else {
    guardarDatos_LocalStorage(favorites, "Favorites");
  }

  corazonInteraccion.innerHTML = corazon
    ? `<h1 style="display:none;">${propertyId}</h1><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>`
    : `<h1 style="display:none;">${propertyId}</h1><img src="../images/hearts.png" width="18px" alt="">`;

  corazonInteraccion.classList.toggle("activo");
}

function crearCartas() {
  const baraja = document.getElementById("baraja");

  let cartas = "";

  for (let i = 0; i < properties.length; i++) {
    cartas += `
    <a class="card apartamento1 apartamento" style="background-image: url(${properties[i].image_property})">
        <div class="corazon">
            <h1 style="display:none;">${properties[i].id_property}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
        </div>
        <div class="tipo-interes arriendo">
            <p>${properties[i].type_service}</p>
        </div>
        <div class="info-inmueble">
            <h3>$ ${properties[i].price_property}</h3>
            <h4>${properties[i].name_property}</h4>
        </div>
    </a>
    `;
  }

  baraja.innerHTML = cartas;

  const corazones = document.querySelectorAll(".corazon");
  corazones.forEach((corazon) => {
    corazon.addEventListener("click", corazonCambio);
  });
}
