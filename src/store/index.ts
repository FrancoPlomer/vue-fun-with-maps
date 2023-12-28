import { createStore } from 'vuex'

//My custom modules
// import exampleModule from './module-template';
// import { ExampleStateInterface } from './module-template/state';

import placesModule from './places';
import { PlacesState } from './places/state';
import { MapState } from './map/state';
import mapModule from './map';


export interface StateInterface {
  // example: unknown
  places: PlacesState,
  maps: MapState
}


export default createStore<StateInterface>({

  modules: {
    // example: {},
    maps: mapModule,
    places: placesModule,
  }
});