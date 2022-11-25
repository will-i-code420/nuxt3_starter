<template>
  <v-container class="fill-height">
    <v-responsive>
      <v-row>
        <v-col>
          <v-app-bar flat>
            <v-app-bar-title>
              Nuxt 3 Starter
            </v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn
              v-for="(item, i) in drawerItems"
              :key="i"
              :to="item.to"
              class="mx-3 hidden-sm-and-down"
            >
              {{ item.title }}
            </v-btn>
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              class="hidden-md-and-up"
            ></v-app-bar-nav-icon>
          </v-app-bar>
          <v-navigation-drawer v-model="drawer" location="right" temporary floating>
            <v-list nav :items="drawerItems" item-title="title" to="to">
            </v-list>
          </v-navigation-drawer>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
const drawer = ref(false)
const drawerItems = reactive([
  { icon: '', title: 'Data', to: '/data' },
  { icon: '', title: 'About', to: '/about' },
  { icon: '', title: 'Contact', to: '/contact' }
])
</script>

<style lang="css" scoped>
</style>
