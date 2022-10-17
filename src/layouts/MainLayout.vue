<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: #230d9efa;">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          icon="menu"
          aria-label="Menu"
        />

        <q-avatar>
          <img src="nuestro-logo.png">
        </q-avatar>

        <q-toolbar-title>
          Serviclub Administración
        </q-toolbar-title>
        <q-space/>
        <div class="q-gutter-sm row items-center no-wrap">
          <!-- <q-btn round dense flat color="white" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              5
            </q-badge>
            <q-menu
            >
              <q-list style="min-width: 100px">
                <messages></messages>
                <q-card class="text-center no-shadow no-border">
                  <q-btn label="View All" style="max-width: 120px !important;" flat dense
                         class="text-indigo-8"></q-btn>
                </q-card>
              </q-list>
            </q-menu>
          </q-btn> -->
          <q-btn
            icon="person"
            round
            flat
          >
            <AuthAccountMenu />
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <MenuDrawer />

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// import EssentialLink from 'components/EssentialLink.vue'
// import Messages from 'src/layouts/MessagesP.vue'
import { ref } from 'vue'
import AuthAccountMenu from 'src/auth/components/AccountMenu/AccountMenu.vue'
import MenuDrawer from 'src/components/MenuDrawer.vue'

/* const essentialLinks = [
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
] */

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
