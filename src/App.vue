<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template v-slot="{ Component }">
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" :key="$route.path" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" :key="$route.path" v-if="!$route.meta.keepAlive" />
    </router-view>
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.ellipsis1{
  width: 100%;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;  
}
.ellipsis2{
  display:-webkit-box;
  overflow:hidden;
  text-overflow:ellipsis;
  -webkit-box-orient:vertical;
}

</style>
