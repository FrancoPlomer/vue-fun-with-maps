import { MutationTree } from 'vuex';
import { PlacesState } from './state';
import { Feature } from "@/interfaces/places";


const mutation: MutationTree<PlacesState> = {
    setLngLat(state: PlacesState, { lng, lat }: { lng: number, lat: number }) {

        state.userLocation = [lng, lat];
        state.isLoading = false;
    },
    setPlaces(state: PlacesState, places: Feature[]) {
        
        state.places = places;
        state.isLoadingPlaces = false;
    },
    setIsLoadingPlaces(state: PlacesState ) {
        
        state.isLoadingPlaces = true;
    }
}

export default mutation;