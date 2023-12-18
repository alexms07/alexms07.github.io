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
