function inicio() {
  window.location.href = "../index.html";
}

function limpiar() {
  const md5Output = document.getElementById("hashmd5-output");
  const md5Input = document.getElementById("hashmd5-input");
  const file = document.getElementById("file-input");
  md5Output.value = "";
  md5Input.value = "";
  file.value = "";
}

document
  .getElementById("file-input")
  .addEventListener("change", function (event) {
    const fileInput = document.getElementById("file-input");

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        // Obtiene el contenido del archivo como un ArrayBuffer
        const arrayBuffer = e.target.result;

        // Convierte el ArrayBuffer a un Blob
        const blob = new Blob([arrayBuffer]);

        // Lee el contenido del Blob como una cadena
        const blobReader = new FileReader();
        blobReader.onload = function (blobEvent) {
          // Calcula el MD5 usando crypto-js
          const md5Value = CryptoJS.MD5(blobEvent.target.result).toString();

          // Muestra el resultado en el textarea
          const md5Output = document.getElementById("hashmd5-output");
          md5Output.value = md5Value;
        };

        blobReader.readAsBinaryString(blob);
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert("Selecciona un archivo primero.");
    }
  });

document.getElementById("copy-button").addEventListener("click", function () {
  const md5Output = document.getElementById("hashmd5-output");
  navigator.clipboard
    .writeText(md5Output.value)
    .then(() => alert("¡Texto copiado al portapapeles!"))
    .catch((err) => console.error("Error al copiar al portapapeles:", err));
});

document
  .getElementById("compare-button")
  .addEventListener("click", function () {
    const md5Output = document.getElementById("hashmd5-output");
    const md5Input = document.getElementById("hashmd5-input");
    if (!md5Input.value || !md5Output.value) {
      if (!md5Input.value && !md5Output.value) {
        alert("No has completado ninguno de los campos");
      } else if (!md5Input.value) {
        alert("No has rellenado el valor hash MD5 a comparar");
      } else {
        alert("No has seleccionado el fichero para extraer su hash MD5");
      }
    } else {
      if (md5Input.value == md5Output.value) {
        alert("El hash MD5 coincide");
      } else {
        alert("El hash MD5 no coincide");
      }
    }
  });
