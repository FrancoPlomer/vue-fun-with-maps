import Mapboxgl from 'mapbox-gl';


export interface MapState {
    markers: Mapboxgl.Marker[];
    map?: Mapboxgl.Map;
    distance?: number;
    duration?: number;
}

function state(): MapState {
    return {
        map: undefined,
        markers: [],
        distance: undefined,
        duration: undefined
    }
}

export default state;