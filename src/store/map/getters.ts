import { MapState } from './state';
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';

const getters: GetterTree<MapState, StateInterface> = {
    isMapReady(state) {
        return !!state.map;
    }
}

export default getters;