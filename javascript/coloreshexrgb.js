document.addEventListener("DOMContentLoaded", function () {
  const colorInput = document.getElementById("color-input");
  const hexCode = document.getElementById("hexCode");
  const rgbCode = document.getElementById("rgbCode");

  colorInput.addEventListener("input", function () {
    const selectedColor = colorInput.value;
    hexCode.textContent = "Hex: " + selectedColor;

    // Convertir el color HEX a RGB
    const rgbArray = hexToRgb(selectedColor);
    rgbCode.textContent = "RGB: rgb(" + rgbArray.join(", ") + ")";
  });

  // Función para convertir el color HEX a RGB
  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }
});
