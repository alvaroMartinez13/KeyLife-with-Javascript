import { cargarDatos, cargarDatos_LocalStorage } from "./data.js";

const properties = [];

document.addEventListener("DOMContentLoaded", () => {

    const id_properties = cargarDatos_LocalStorage("Property");

  cargarDatos("../data/properties.json").then((data) => {
    for (let i of data.propierties) {
      if (Object.keys(i).length !== 0 ) {
        if(i.id_property === id_properties){
            properties.push(i);
        }
      }
    }
  });
  
  rellenarTabla();

});

function rellenarTabla(){
    const tabla = document.querySelector("main");

    console.log(tabla);

    console.log(properties);

    let elemento = ``;

    for(let property of properties){
        elemento += `
          <section class="novedades">

            <div class="contentItems">

                <div class="itemCarrusel" id="item1">
                    <div class="tarjetaCarrusel" id="tarjeta1"></div>
                    <div class="flechasCarrusel">
                        <a><</a>
                        <a href="#item2">></a>
                    </div>
                </div>

                <div class="itemCarrusel" id="item2">
                    <div class="tarjetaCarrusel" id="tarjeta2"></div>
                    <div class="flechasCarrusel">
                        <a href="#item1"><</a>
                        <a>></a>
                    </div>
                </div>

            </div>

        </section>

        <section class="info-inmueble">

            <div class="titulo">
                <h3>${property.name_property}</h3>
                <h4>${properties.price_property}</h4>
                <a href="mensaje.html">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F3F3F3"><path d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
                    <p>Contactar</p>
                </a>
            </div>

            <div class="contenido">
                <table>
                    <tr>
                        <th>
                            PROPIEDAD
                        </th>
                        <td>
                            <div class="propiedad">
                                <picture>
                                    <img src="../images/propiedad.png" alt="">
                                </picture>
                                <span>
                                    Apartamento
                                </span>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            PROPIETARIO
                        </th>
                        <td>
                            <div class="propietario">
                                <picture>
                                    <img src="../images/propietario.png" alt="">
                                </picture>
                                <span>
                                    ${property.name_property}
                                </span>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            TIPO
                        </th>
                        <td>
                            <div class="tipo">
                                <picture>
                                    <img src="../images/tipo.png" alt="">
                                </picture>
                                <span>
                                    ${property.type_service}
                                </span>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            HABITACIÓN
                        </th>
                        <td>
                            <div class="habitacion">
                                <picture>
                                    <img src="../images/tipo.png" alt="">
                                </picture>
                                <span>
                                    ${property.rooms_property}
                                </span>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            PERSONA(S)
                        </th>
                        
                        <td>
                            <div class="persona">
                                <picture>
                                    <img src="../images/persona.png" alt="">
                                </picture>
                                <span>
                                    3
                                </span>
                            </div>
                        </td>

                    </tr>

                    <tr>
                        <th>
                            SERVICIO(S)
                        </th>
                        <td>
                            <div class="servicios">
                                <div id="icons-services">
                                    <img src="../images/luz.png" alt="">
                                    <img src="../images/agua.png" alt="">
                                    <img src="../images/internet.png" alt="">
                                    <img src="../images/baño.png" alt="">
                                </div>

                            </div>
                        </td>
                    </tr>

                </table>
            </d>

        </section>
        `;

    }
}