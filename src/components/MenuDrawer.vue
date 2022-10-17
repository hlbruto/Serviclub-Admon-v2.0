<template>
  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    class="bg-primary text-white"
  >
    <q-list>
      <q-item to="/servicios" active-class="q-item-no-link-highlighting">
        <q-item-section avatar>
          <q-icon name="dashboard"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>Servicios</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/" active-class="q-item-no-link-highlighting">
        <q-item-section avatar>
          <q-icon name="streetview"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>Instalaciones</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/pedidos" active-class="q-item-no-link-highlighting">
        <q-item-section avatar>
          <q-icon name="pages"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>Pedidos</q-item-label>
        </q-item-section>
      </q-item>
      <q-expansion-item
        icon="settings"
        label="Administrar"
      >
        <q-list class="q-pl-lg">
          <q-item to="/LoginP" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="dashboard"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Servicios</q-item-label>
            </q-item-section>
          </q-item>
          <!-- <q-item-label header class="text-weight-bolder text-white">Generic</q-item-label>
          <q-item to="/Profile" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="person"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>User Profile</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/Maintenance" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon name="settings"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Maintenance</q-item-label>
            </q-item-section>
          </q-item> -->
        </q-list>
      </q-expansion-item>
    </q-list>
  </q-drawer>
</template>
