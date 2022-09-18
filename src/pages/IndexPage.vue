<template>
  <q-page class="flex flex-center">
    Inicio {{ listServicios }}
    <q-btn @click="listarServicios()" />
  </q-page>
</template>

<script setup>
import { useServiciosStore } from 'stores/servicios-store'
import { storeToRefs } from 'pinia'

const store = useServiciosStore()
const { listServicios } = storeToRefs(store)
const { listarServicios } = store
</script>
