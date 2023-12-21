function abrirPagina(nombrePagina) {
  if (nombrePagina) {
    var urlPagina = "../html/" + nombrePagina + ".html";
    try {
      window.location.href = urlPagina;
    } catch (error) {
      console.error("Error al intentar redirigir a la página:", error);
    }
  } else {
    console.error("El nombre de la página no es válido");
  }
}
