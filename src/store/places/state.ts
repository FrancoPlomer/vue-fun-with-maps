import { Feature } from "@/interfaces/places";

export interface PlacesState {
    isLoading: boolean;
    isLoadingPlaces: boolean;
    places: Feature[];
    userLocation?: [number, number];
}

function state(): PlacesState {
    return {
        isLoading: true,
        places: [],
        isLoadingPlaces: false,
    }
}

export default state;