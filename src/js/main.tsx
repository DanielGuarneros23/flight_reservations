import axios, { AxiosRequestConfig } from 'axios';



interface Flight {
  arrivalAirport: {
    city: string;
    code: string;
  };
  flight_code: string;
  // Add more properties here if needed
}

interface ApiResponse {
  results: Flight[];
  // Add more properties here if needed
}

const options: AxiosRequestConfig = {
  method: 'GET',
  url: './vuelos.JSON',
  params: {
    from: 'MEX',
    to: 'ACA',
    date: '2023-08-12',
    adult: '1',
    type: 'economy',
    currency: 'MXN',
  },
  headers: {
    'X-RapidAPI-Key': '30fb224be1msh4aafd35621b82aap141208jsn051d5840698f',
    'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com',
  },
};

function getFlights() {
  axios
    .request<ApiResponse>(options)
    .then((response) => {
      const data = response.data.results;
      //console.log(response.data);
      data.map((element) => {
        const lugar = element.arrivalAirport.city;
        const code = element.arrivalAirport.code;
        const codef = element.flight_code;

        // console.log(lugar);
        // console.log(code);
        console.log(codef);
      });
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

getFlights();

document.addEventListener('DOMContentLoaded', () => {
  
});

export {}