export function autocomplete(input: HTMLInputElement, suggestionsContainer: HTMLElement) {
    // Función para realizar el autocompletado en el campo de entrada
function autocomplete(input: HTMLInputElement, suggestionsContainer: HTMLElement) {
    input.addEventListener("input", function () {
      const userInput = input.value.toLowerCase();
  
      // Realizar la solicitud AJAX para obtener las ciudades disponibles desde el archivo JSON
      fetch("./")
        .then(response => response.json())
        .then((cities: { name: string }[]) => {
          // Filtrar las ciudades que coinciden con la entrada del usuario
          const filteredCities = cities.filter(city => city.name.toLowerCase().includes(userInput));
  
          // Mostrar las sugerencias en el contenedor de sugerencias
          suggestionsContainer.innerHTML = "";
          filteredCities.forEach(city => {
            const suggestionElement = document.createElement("div");
            suggestionElement.textContent = city.name;
            suggestionElement.classList.add("suggestion");
            suggestionsContainer.appendChild(suggestionElement);
          });
        })
        .catch(error => console.error("Error fetching cities:", error));
    });
  }
}
  
  document.addEventListener("DOMContentLoaded", function () {
    const departureInput = document.getElementById("departure")!;
    const departureSuggestionsContainer = document.getElementById("departure-suggestions")!;
  
    const destinationInput = document.getElementById("destination")!;
    const destinationSuggestionsContainer = document.getElementById("destination-suggestions")!;
  
    autocomplete(departureInput as HTMLInputElement, departureSuggestionsContainer);
    autocomplete(destinationInput as HTMLInputElement, destinationSuggestionsContainer);
  });
  