<script lang="ts" src="./MapView" />

<template>
    <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3> Espere por favor </h3>
            <span> Localizando... </span>
        </div>
    </div>
    <div
        v-show="isUserLocationReady"
        class="map-container"
        ref="mapElement"
    />
</template>

<style scoped>

.map-container {
    height: 100vh;
    position: fixed;
    width: 100vw;
}
.loading-map {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 111;
}
</style>