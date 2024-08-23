import {
  guardarDatos_LocalStorage,
  cargarDatos_LocalStorage,
  cargarDatos
} from "./data.js";

export const users = [];

cargarDatos('../data/users.json').then(data => {
  for (let i of data.users) {
    users.push(i);
  }
});

function cargarUsuario(id) {
  const user = cargarDatos_LocalStorage("usuario");

  if (user !== null) {
    let usuario;

    for (let dato of user) {
      if (dato.id_user == id) {
        usuario = dato;
      }
    }

    return usuario;
  }

  return "No existe"
}

function generadorID() {
  let id = 2;

  if (users.length === 0) {
    return id;
  } else {
    return id + users.length;
  }
}

function guardarUsuario(usuario) {
  const usuario_Creado = {
    id_user: generadorID(),
    ...usuario
  };

  users.push(usuario_Creado);

  const { id_user } = usuario_Creado;

  guardarDatos_LocalStorage(id_user, "usuario");

  return "Usuario registrado exitosamente";
}

document.getElementById('envia').addEventListener('click', () => {
  try {

    let pasa = false;
    let id = 0;

    const o = document.getElementById('form');

    const email = document.getElementById('email').value;
    const passw = document.getElementById('pass').value;


    users.forEach((data) => {
      if (data.email_user === email && data.password === passw) {
        alert("Bienvenido");
        id = data.id_user;
        pasa = true;
      }
    });

    if (pasa) {
      guardarDatos_LocalStorage(id, 'usuario');
      o.setAttribute('action', 'home.html');
      document.form.submit();
    } else {
      alert("Usuario o Password incorrecto");
    }


  } catch (error) {
    console.error(error);
  }
});