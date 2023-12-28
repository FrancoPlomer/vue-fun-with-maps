import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbmNvcGxvbWVyIiwiYSI6ImNscHNlZDJnbDAyaXQyaW9nMXllb2EzMHQifQ.wufPxVBTsYvuPqvEGgHIzQ';



if (!navigator.geolocation) throw new Error('Geolocation is required, your browser may not support this tool')

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
