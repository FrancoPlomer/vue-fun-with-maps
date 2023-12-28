import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        lenguaje: 'es',
        access_token: 'pk.eyJ1IjoiZnJhbmNvcGxvbWVyIiwiYSI6ImNscHNlZDJnbDAyaXQyaW9nMXllb2EzMHQifQ.wufPxVBTsYvuPqvEGgHIzQ'
    }
});

export default searchApi;