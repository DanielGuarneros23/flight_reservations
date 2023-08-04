function updateSelectedOption() {
    const selectElement = document.getElementById('currencySelect') as HTMLSelectElement;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    selectedOption.text = selectedOption.value; // Mostrar solo el código de la divisa
  }
  
  export { updateSelectedOption };
  