import { useMapStore, usePlacesStore } from '@/composables';
import { Feature } from '@/interfaces/places';
import { computed, defineComponent, ref, watch } from 'vue';
export default defineComponent({
    name: 'SearchBar',
    setup() {

        const { map, setPlaceMarkers, getRouteBetweenPoints                 } = useMapStore();
        const { searchPlacesByTerm, places, isLoadingPlaces, userLocation   } = usePlacesStore();

        const debounceTimeOut   = ref();
        const debouncedValue    = ref('');
        const activePlace       = ref('');

        watch( places, ( newPlaces ) => {

            activePlace.value = '';
            
            setPlaceMarkers(newPlaces);
        })

        return {

            debouncedValue,
            places, 
            activePlace,
            isLoadingPlaces,

            searchTerm: computed({ 
                get() { 

                    return debouncedValue.value;
                },
                set( val: string ) {

                    if( debounceTimeOut.value ) clearTimeout( debounceTimeOut.value );

                    debounceTimeOut.value = setTimeout(() => {

                        debouncedValue.value = val;
                        searchPlacesByTerm(val)

                    }, 2000 );
                }
            }),
            onPlaceClicked: ( place: Feature ) => {
                
                const [ lng, lat ] = place.center;

                map.value?.flyTo({
                    zoom: 14,
                    center: [ lng, lat ]
                })
            },

            getRouteDirections( place: Feature ){
                
                if( !userLocation.value ) return;

                activePlace.value = place.id;
                
                const [ lng, lat ] = place.center;
                const [ startLng, startLat ] = userLocation.value;
                
                const start:[ number, number ] = [ startLng, startLat ];
                const end:[ number, number ]   = [ lng, lat ];

                getRouteBetweenPoints( start, end );
            }
        }
    }
});