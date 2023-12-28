/* eslint-disable */
import Mapboxgl from 'mapbox-gl';
import { useMapStore, usePlacesStore } from '@/composables';
import { defineComponent, onMounted, ref, watch } from 'vue';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore();
        const initMap = () => {

            if (!userLocation.value) return;

            const map = new Mapboxgl.Map({
                container: mapElement.value!, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value!, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });

            const myLocationPopup = new Mapboxgl.Popup({ offset: [0, -25] })
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h4> Aqui estoy </h4>
                    <p> ${userLocation.value} </p>
                `);

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map);

            setMap(map);
        }

        onMounted(() => {
            if (isUserLocationReady.value)
                return initMap();
        });

        watch(isUserLocationReady, _ => {
            if (isUserLocationReady.value)
                initMap();

        })

        return { userLocation, isUserLocationReady, mapElement }
    }
});