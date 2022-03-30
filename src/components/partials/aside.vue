<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => {
    return {}
  },
  mounted() {
  },
  methods: {},
  computed() {
  },
  components: {}
}
</script>

<style scoped>

</style>
