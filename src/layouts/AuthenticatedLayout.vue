<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-primary"
      elevated
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Serviclub Administración</q-toolbar-title>

        <q-btn
          icon="person"
          round
          flat
        >
          <AuthAccountMenu />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      behavior="desktop"
      :width="200"
    >
      <q-list>
        <q-item-label header>
          Menu
        </q-item-label>
      </q-list>

      <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
    </q-drawer>

    <q-page-container>
      <div><small class="row justify-end">{{ formattedString }}</small></div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import AuthAccountMenu from 'src/auth/components/AccountMenu/AccountMenu.vue'
import { date } from 'quasar'
import EssentialLink from 'components/EssentialLink.vue'

const essentialLinks = [
  {
    title: 'Pedidos',
    caption: 'quasar.dev',
    icon: 'money',
    link: ''
  },
  {
    title: 'Servicios',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'servicios'
  },
  {
    title: 'Instalaciones',
    caption: 'chat.quasar.dev',
    icon: 'home',
    link: ''
  },
  {
    title: 'Usuarios',
    caption: 'chat.quasar.dev',
    icon: 'person',
    link: ''
  }
]
const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD | HH:mm')

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
