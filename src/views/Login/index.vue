<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
// import { useStore } from '@/stores/counter'
  const $q = useQuasar()

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

const name = ref(null)
  const age = ref(null)
  const accept = ref(false)
const onSubmit = () => {
    if (accept.value !== true) {
      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'You need to accept the license and terms first'
      })
    }
    else {
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    }
}

const onReset = () => {
    name.value = null
    age.value = null
    accept.value = false
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
    <div class="q-pa-md" style="max-width: 400px">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

      </div>

      <q-btn color="primary" label="Trigger" @click="trigger" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
