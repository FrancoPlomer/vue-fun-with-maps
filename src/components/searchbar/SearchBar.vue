<script lang="ts" src="./SearchBar.ts"/>

<template>
    <div :class="( ( places.length ? 'searchbar-container-scroll' : 'searchbar-container' ) + ' p-3' )">
        <!-- configurar un debounce propio en searchTerm en el archivo SearchBar.ts -->
        <div class="containerInput p-3">
            <input 
                class="form-control"
                type="text"
                placeholder="Buscar lugares..."
                v-model="searchTerm"
            >
        </div>
        <div
            v-if="isLoadingPlaces"
            class="alert alert-primary text-center"
        >
            <h5>Cargando</h5>
            <span>Espere por favor...</span>
        </div>
        <ul 
            v-else-if="places.length" 
            class="list-group mt-3 p-1"
        >
            <li
                v-for="place in places"
                :key="place.id"
                class="list-group-item list-group-item-action"
                :class="{ 'active': place.id === activePlace }"
                @click="onPlaceClicked( place )"
            >
                <h5> {{ place.text }} </h5>
                <p>
                    {{ place.place_name }}
                </p>
                <div>
                    <button 
                        class="btn btn-outline-primary"
                        :class="( ( place.id === activePlace ) ? 'btn-outline-light' : 'btn-outline-primary' )"
                        @click.self="getRouteDirections( place )"
                    >
                        Direcciones
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

.containerInput {
    background: #ffff;
    position: sticky;
    top: 2px;
    z-index: 1000;
}
.searchbar-container {
    z-index: 999;
    width: 350px;
    top: 30px;
    left: 30px;
    height: 70%;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: white;
}

.searchbar-container-scroll {
    @extend .searchbar-container;
    overflow-y: scroll;
    position: fixed;
}

li{
    cursor: pointer;
}
</style>