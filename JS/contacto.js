const businessSelect = document.getElementById("businessType");
const otroContainer = document.getElementById("otroNegocioContainer");

businessSelect.addEventListener("change", function () {

  if (this.value === "Otro") {
    otroContainer.style.display = "block";
  } else {
    otroContainer.style.display = "none";
  }

});