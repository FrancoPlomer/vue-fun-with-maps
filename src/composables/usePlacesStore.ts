import { useStore } from "vuex";
import { StateInterface } from "@/store";
import { computed, onMounted } from "vue";

export const usePlacesStore = () => {

    const store = useStore<StateInterface>();

    onMounted(() => {

        if (!store.getters['places/isUserLocationReady'])
            store.dispatch('places/getInitialLocation');
    })

    return {
        userLocation: computed(() => store.state.places?.userLocation),
        places: computed(() => store.state.places?.places),
        isUserLocationReady: computed(() => store.getters['places/isUserLocationReady']),
        isLoadingPlaces: computed(() => store.state.places?.isLoadingPlaces),
        isLoading: computed(() => store.state.places.isLoading),

        
        searchPlacesByTerm: ( query: string ) => store.dispatch( 'places/searchPlacesByTerm', query )
    }
}