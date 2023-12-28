<template>
    <div v-if="distance" class="trip-container column">
        <div class="col"> Distancia: <strong>{{ distance }}km</strong> </div>
        <div class="col"> Duracion:  <strong>{{ duration }}min</strong> </div>
    </div>
</template>

<script lang="ts">

import { useMapStore } from '@/composables'
import { defineComponent } from 'vue'


export default defineComponent({

    name: 'TripDetails',
    setup(){

        const { distance, duration } = useMapStore();

        return {
            distance, 
            duration 
        }
    }
})
</script>

<style scoped>

.trip-container {
    width: 350px;
    position: fixed;
    padding: 10px;
    left: 20px;
    font-size: 25px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .2);
    bottom: 50px;
    border-radius: 10px;
    background: #fff;
}

strong {
    color: #42b983;
}

</style>