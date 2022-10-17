<template>
  <q-page class="q-pa-sm">
    <div><small class="q-mt-xs row justify-end">{{ formattedString }}</small></div>

    <q-select
      v-model="tipoPedidos"
      outlined
      dense
      options-dense
      map-options
      :options="opciones"
      :option-value="tipoPedidos"
      style="width: 200px"
      class="q-mb-lg"
    />

    <q-table
      class="my-sticky-header-table"
      :title="tipoPedidos"
      :rows="rows"
      :columns="columns"
      row-key="name"
      flat
      bordered
      dense
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
    >
      <template v-slot:top="props">
        <q-space />
        <div class="col-7 col-sm-8 col-xs-9 q-table__title">{{tipoPedidos}}</div>
        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
          <q-td auto-width>
            <q-btn class="q-mr-sm" size="sm" color="primary" round dense icon="mdi-eye" />
            <q-btn size="sm" color="primary" round dense icon="edit" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { date } from 'quasar'

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD | HH:mm')

const columns = [
  {
    name: 'fecha_pedido',
    required: true,
    label: 'Fecha solicitado',
    align: 'left',
    field: row => row.date,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'servicio', align: 'center', label: 'Servicio', field: 'servicio', sortable: true },
  { name: 'estado', align: 'center', label: 'Estado', field: 'estado', sortable: true }
]

const rows = [
  {
    date: 'fecha_pedido',
    servicio: true,
    estado: 'Fecha solicitado'
  },
  {
    date: 'fecha_pedido',
    servicio: true,
    estado: 'Fecha solicitado'
  },
  {
    date: 'fecha_pedido',
    servicio: true,
    estado: 'Fecha solicitado'
  },
  {
    date: 'fecha_pedido',
    servicio: true,
    estado: 'Fecha solicitado'
  },
  {
    date: 'fecha_pedido',
    servicio: true,
    estado: 'Fecha solicitado'
  },
  {
    date: 'fecha_pedido',
    servicio: true,
    estado: 'Fecha solicitado'
  }
]

const pagination = ref({ rowsPerPage: 10 })
const tipoPedidos = ref('Pedidos Pendientes')

const opciones = ['Pedidos Pendientes', 'Pedidos Asignados', 'Pedidos Ofrecidos', 'Pedidos Cancelados']
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  max-height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    /* background-color: #a1baf1 */

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
