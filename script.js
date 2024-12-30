const checkbox = document.getElementById("myCheckbox");

const statusLabel = document.getElementById("statusLabel");



checkbox.addEventListener("change", function() {

  if (checkbox.checked) {

    statusLabel.textContent = "Enable"; 

  } else {

    statusLabel.textContent = "Disable";

  }

});