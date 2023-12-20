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
  navigator.clipboard
    .writeText(base64Output.value)
    .then(() => alert("¡Texto copiado al portapapeles!"))
    .catch((err) => console.error("Error al copiar al portapapeles:", err));
});

document
  .getElementById("download-button")
  .addEventListener("click", function () {
    const base64Input = document.getElementById("base64-input").value.trim();
    if (base64Input) {
      const link = document.createElement("a");
      link.href = "data:image/png;base64," + base64Input;
      link.download = "imagen_descargada.png";
      link.click();
    }
  });
