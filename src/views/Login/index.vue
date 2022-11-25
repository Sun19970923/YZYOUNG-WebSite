<script setup lang="ts">
import { ref } from 'vue'
// import { useStore } from '@/stores/counter'
  

defineProps({
  msg: String
})
const bar = ref(null)

// we manually trigger it (this is not needed if we
// don't skip Ajax calls hijacking)
function trigger () {
  const barRef: any = bar.value
  barRef.start()

  setTimeout(() => {
    const barRef: any = bar.value
    if (barRef) {
      barRef?.stop()
    }
  }, Math.random() * 3000 + 1000)
}

// const store = useStore()


</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="q-pa-md">
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />

    <q-btn color="primary" label="Trigger" @click="trigger" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
