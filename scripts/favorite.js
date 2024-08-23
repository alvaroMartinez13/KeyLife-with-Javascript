import {
  guardarDatos_LocalStorage,
  cargarDatos_LocalStorage,
  cargarDatos,
} from "./data.js";

const favorites = [];
const properties = [];
const properties_Favorite = [];

document.addEventListener("DOMContentLoaded", () => {
  const f = cargarDatos_LocalStorage("Favorites");

  cargarDatos("../data/properties.json").then((data) => {
    for (let i of data.propierties) {
      properties.push(i);
    }

    if (f !== null) {
      for (let element of f) {
        favorites.push(element);
      }

      for (let property of favorites) {
        busquedaPropiedad(property);
      }

      crearCartas();
    }
  });
});

function busquedaPropiedad(id) {
  const found = properties.find((data) => data.id_property === id);
  if (found) {
    properties_Favorite.push(found);
  }
}

function corazonCambio(event) {
  const imgElement = event.currentTarget.querySelector("img");

  if (imgElement.src.includes("hearts.png")) {
    const propertyId = event.currentTarget.querySelector("h1").innerText.trim();

    const index = favorites.indexOf(propertyId);
    if (index > -1) {
      // Eliminar del array de favoritos y propiedades favoritas
      favorites.splice(index, 1);
      properties_Favorite.splice(index, 1);

      guardarDatos_LocalStorage(favorites, "Favorites");

      const cardElement = event.currentTarget.closest(".card");
      cardElement.remove();

      const baraja = document.getElementById("baraja");

      if (baraja.children.length === 0) {

        baraja.innerHTML = `<p style="padding:10px">No existen Favoritos</p>`;
      }
    }
  }
}

function crearCartas() {
  const baraja = document.getElementById("baraja");

  let cartas = "";

  if (favorites.length !== 0) {
    for (let i = 0; i < favorites.length; i++) {
      cartas += `<a class="card apartamento1 apartamento" style="background-image: url(${properties[i].image_property})">
          <div class="corazon">
            <h1 style="display:none;">${properties[i].id_property}</h1>
            <img src="../images/hearts.png" width="18px" alt="">
          </div>
          <div class="tipo-interes arriendo">
              <p>${properties[i].type_service}</p>
          </div>
          <div class="info-inmueble">
              <h3>$ ${properties[i].price_property}</h3>
              <h4>${properties[i].name_property}</h4>
          </div>
      </a>`;
    }
  } else {
    cartas = `<p style="padding:10px">No existen Favoritos</p>`;
  }
  baraja.innerHTML = cartas;

  const corazones = document.querySelectorAll(".corazon");
  corazones.forEach((corazon) => {
    corazon.addEventListener("click", corazonCambio);
  });
}
