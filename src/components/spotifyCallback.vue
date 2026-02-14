<template>
  <div>Logging you in…</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import qs from 'qs'

const route = useRoute()
const router = useRouter()
const store = useStore()

onMounted(async () => {
  store.dispatch('auth/authorize')
})
</script>
