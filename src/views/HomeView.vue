<template>
  
  <MapView />
  <SearchBar />
  <TripDetails />
  <MylocationBtn />
</template>

<script lang="ts">
import MapView              from '@/components/mapview/MapView.vue';
import MylocationBtn        from '@/components/my-location-btn/MyLocationBtn.vue';
import SearchBar            from '@/components/searchbar/SearchBar.vue';
import TripDetails          from '@/components/trip-details/trip-details.vue';
import { usePlacesStore   } from '@/composables';
import { defineComponent  } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: { MapView, MylocationBtn, SearchBar, TripDetails },
  setup() {
    usePlacesStore();
  }
});
</script>
