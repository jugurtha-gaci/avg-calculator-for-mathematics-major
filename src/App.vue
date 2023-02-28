<script setup>

  import { useRoute } from 'vue-router';
  import { computed } from '@vue/reactivity';

  import Sidebar from './components/Sidebar.vue';


  const routeName = computed(() => {
    // const { name } = useRoute()
    return useRoute().name
  })

</script>

<template>
    <div id="app">
      <div class="row m-0">
        <div class="col-md-3 px-0">
          <Sidebar 
            :active="routeName" 
          />
        </div>
        <div class="col-md-9 py-5">
          <router-view 
            :route-name="routeName" 
          />
        </div>
      </div>
    </div>

</template>

<style scoped>

</style>
