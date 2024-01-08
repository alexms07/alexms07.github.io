function inicio() {
  window.location.href = "../index.html";
}

document
  .getElementById("file-input")
  .addEventListener("change", function (event) {
    const fileInput = document.getElementById("file-input");

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        const arrayBuffer = e.target.result;
        const binaryString = String.fromCharCode.apply(
          null,
          new Uint8Array(arrayBuffer)
        );
        // Calcula el MD5 usando crypto-js
        const md5Value = CryptoJS.MD5(binaryString).toString();
        // Muestra el resultado en la página
        const md5Output = document.getElementById("hashmd5-output");
        md5Output.value = md5Value;
      };

      // Lee el contenido del archivo como ArrayBuffer
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
