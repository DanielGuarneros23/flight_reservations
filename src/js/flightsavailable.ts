import axios, { AxiosResponse } from 'axios';

const imagesList: string[] = [
  'url_imagen_1.jpg',
  'url_imagen_2.jpg',
  'url_imagen_3.jpg',
  // Imágenes aleatorias
];

interface FlightOption {
  flight_name: string;
  duration: {
    text: string;
    value: number;
  };
  // Propiedades
}

const cargarOpcionesDeVuelo = async () => {
  try {
    const response: AxiosResponse = await axios.get('./vuelos.json'); // Cargar JSON
    const vuelosData: { results: FlightOption[] } = response.data;

    const flightCardsContainer = document.getElementById('flight-cards');

    if (flightCardsContainer) {
      vuelosData.results.forEach((opcion: FlightOption) => {
        const randomImageIndex = Math.floor(Math.random() * imagesList.length);
        const randomImage = imagesList[randomImageIndex];

        const flightCard = document.createElement('div');
        flightCard.className = 'col-md-12 mb-3';

        const cardContent = `
          <div class="card">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${randomImage}" class="img-fluid rounded-start" alt="Destino turístico">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${opcion.flight_name}</h5>
                  <p class="card-text">${opcion.duration.text}</p>
                </div>
              </div>
            </div>
          </div>
        `;
        // Detalles de vuelo

        flightCard.innerHTML = cardContent;
        flightCardsContainer.appendChild(flightCard);
      });
    }
  } catch (error) {
    console.error('Error al cargar las opciones de vuelo:', error);
  }
};

cargarOpcionesDeVuelo();
