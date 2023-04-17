//your JS code here. If required.
function removeColor() {
  // Get the select element by its ID
  const select = document.getElementById("colorSelect");

  // Get the selected option
  const selectedOption = select.options[select.selectedIndex];

  // Remove the selected option
  select.removeChild(selectedOption);
}

// Add an event listener to the button
const button = document.querySelector('input[type="button"]');
button.addEventListener("click", removeColor);
