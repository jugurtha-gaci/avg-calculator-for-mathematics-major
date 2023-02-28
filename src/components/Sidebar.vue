<script setup>

    import { ref } from 'vue';

    const props = defineProps(['active'])

    const sidebarShow = ref(false)
    const isPC = ref(window.innerWidth >= 770)
    const toggleSidebar = () => {
        sidebarShow.value = !sidebarShow.value
    }

    window.addEventListener("resize", () => isPC.value = window.innerWidth >= 770)
</script>

<template>
    <div class="sidebar py-5 bg-dark px-4">
        <div class="toggler d-sm-none d-block d-flex">
            <div class="heading text-white">Mathematics</div>
            <font-awesome-icon v-if="!sidebarShow" @click="toggleSidebar" class="i text-white ms-auto" icon="fa-solid fa-bars" />
            <font-awesome-icon v-if="sidebarShow" @click="toggleSidebar" class="i text-white ms-auto" icon="fa-solid fa-times" />

        </div>
        <div class="levels" v-if="sidebarShow || isPC">
            <div class="level">
                <h6 class="text-center text-white py-4 px-2">
                    Licence :
                </h6>
                <router-link :to="{name: 'licence/1'}">
                    <div 
                        class="border shadow-sm p-3 small mb-2"
                        :class="active == 'licence/1' ? 'bg-light' : 'text-white'">

                        <strong>1 ére Année Licence</strong>
                    </div>
                </router-link>
                <router-link :to="{name: 'licence/2'}">
                    <div 
                        class="border shadow-sm p-3 small mb-2" 
                        :class="active == 'licence/2' ? 'bg-light' : 'text-white'">

                        <strong>2 éme Année Licence</strong>
                    </div>
                </router-link>
                <router-link :to="{name: 'licence/3'}">
                    <div 
                        class="border shadow-sm p-3 small mb-2"
                        :class="active == 'licence/3' ? 'bg-light' : 'text-white'">

                        <strong>3 éme Année Licence</strong>
                    </div>
                </router-link>
            </div>
            <div class="level pt-5">
                <h6 class="text-center text-white py-4 px-2">
                    Master : <small>Recherche Opérationnelle</small>
                </h6>
            
                <router-link :to="{name: 'master/ro/1'}">
                    <div 
                        class="border shadow-sm p-3 small mb-2"
                        :class="active == 'master/ro/1' ? 'bg-light' : 'text-white'">

                        <strong>Master 1 RO</strong>
                    </div>
                </router-link>
            
                <router-link :to="{name: 'master/ro/2'}">
                    <div 
                        class="border shadow-sm p-3 small mb-2"
                        :class="active == 'master/ro/2' ? 'bg-light' : 'text-white'">

                        <strong>Master 2 RO</strong>
                    </div>
                </router-link>
                
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .sidebar .levels {
        min-height: 100vh;
        height: 100%;
        /* display: none; */
        width: 100%;
    }
    @media(min-width: 1170px) {
        .sidebar {
            position: fixed;
            width: initial !important
        }
    }
    .toggler .i{
        font-size: 25px;
    }
    a {
        color: inherit !important;
        text-decoration: none;
    }
    .heading {
        font-family: "Lobster Two";
        font-size: 25px;
    }
</style>