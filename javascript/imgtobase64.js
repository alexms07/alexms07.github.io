function inicio() {
  window.location.href = "../index.html";
}

function limpiar() {
  const base64Output = document.getElementById("base64-output");
  const base64Input = document.getElementById("base64-input");
  const file = document.getElementById("image-input");
  base64Output.value = "";
  base64Input.value = "";
  file.value = "";
}

document
  .getElementById("image-input")
  .addEventListener("change", function (event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const base64Output = document.getElementById("base64-output");
        base64Output.value = e.target.result.split(",")[1];
      };

      reader.readAsDataURL(file);
    }
  });

document.getElementById("copy-button").addEventListener("click", function () {
  const base64Output = document.getElementById("base64-output");
  if (base64Output.value) {
    navigator.clipboard
      .writeText(base64Output.value)
      .then(() => alert("¡Texto copiado al portapapeles!"))
      .catch((err) => console.error("Error al copiar al portapapeles:", err));
  } else {
    alert("No has seleccionado ninguna imágen");
  }
});

document
  .getElementById("download-button")
  .addEventListener("click", function () {
    const base64Input = document.getElementById("base64-input").value.trim();
    if (base64Input) {
      const link = document.createElement("a");
      link.href = "data:image/png;base64," + base64Input;
      link.download = "Basse64IMG.png";
      link.click();
    } else {
      alert("No has rellenado el valor en Base64");
    }
  });
