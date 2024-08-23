function cargarDatos(url) {
  return new Promise(async (resolve, reject) => {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      reject(new Error("No se ha encontrado la información"));
    }
    const datos = await respuesta.json();
    resolve(datos);
  });
}

function guardarDatos(data, claveLocalStorage = null) {
  try {
    if (claveLocalStorage !== null) {
      guardarDatos_LocalStorage(data, claveLocalStorage);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

function guardarDatos_LocalStorage(data, claveLocalStorage) {
  try {
    localStorage.setItem(claveLocalStorage, JSON.stringify(data));
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

function cargarDatos_LocalStorage(claveLocalStorage) {
  try {
    const datosGuardados = JSON.parse(localStorage.getItem(claveLocalStorage));

    return datosGuardados;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export {
  cargarDatos,
  guardarDatos,
  guardarDatos_LocalStorage,
  cargarDatos_LocalStorage
};
