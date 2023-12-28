import Mapboxgl from 'mapbox-gl';
import { computed } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "@/store";
import { Feature } from '@/interfaces/places';
import { LngLat } from '@/store/map/actions';

export const useMapStore = () => {

    const store = useStore<StateInterface>();

    return {
        map: computed(() => store.state.maps.map),
        distance: computed(() => store.state.maps.distance),
        duration: computed(() => store.state.maps.duration),


        setMap: (map: Mapboxgl.Map) => store.commit('maps/setMap', map),
        setPlaceMarkers: ( places: Feature[] ) => store.commit( 'maps/setPlaceMarkers', places ),

        getRouteBetweenPoints: ( start: LngLat, end: LngLat ) => store.dispatch('maps/getRouteBetweenPoints', { start, end })
    }
}