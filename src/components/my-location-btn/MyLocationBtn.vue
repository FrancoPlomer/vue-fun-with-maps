<template>
    <button 
    v-if="isBtnReady"
    class="btn btn-primary"
    @click="onMylocationClicked"
    >
        Ir a mi ubicación
    </button>
</template>
<script lang="ts">
    import { useMapStore, usePlacesStore } from '@/composables';
import { computed, defineComponent } from 'vue';
    export default defineComponent({
        name: 'myLocationBtn',
        setup() {

            const { userLocation, isUserLocationReady   } = usePlacesStore();
            const { map                                 } = useMapStore();

            return {

                isBtnReady: computed<boolean>( () => Boolean( isUserLocationReady.value && map ) ),

                onMylocationClicked: () => {
                    map.value?.flyTo({
                        center: userLocation.value,
                        zoom: 14
                    })
                }

            }
        }
    });
</script>

<style scoped>

button {
    position: fixed;
    top: 30px;
    right: 30px;
}

</style>