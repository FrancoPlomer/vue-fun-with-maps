import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { Feature, PlacesResponse } from '@/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({ commit }) {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
            err => {
                console.log(err);
                throw new Error('No geolocation')
            }
        )
    },
    async searchPlacesByTerm({ commit, state }, query: string ) {

        let resp: Feature[] = new Array( query.length ).filter( Boolean );

        if( query.length ){
            
            commit( 'setIsLoadingPlaces' );
            
            const _resp = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
                params: {
                    proximity: state.userLocation?.join(',')
                }
            })
            resp = _resp.data.features;
        }

        commit('setPlaces', resp );
        
        return resp;
    }
}

export default actions;