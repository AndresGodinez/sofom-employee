<template>
  <v-container fluid class="header-top">
    <v-row class="bb" @click="showMenu = !showMenu">
      <v-col cols="1" sm="1" align-self="center">
        <v-icon color="white">account_circle</v-icon>
      </v-col>
      <v-col cols="9" sm="9" class="py-3">
        <p style="color: white">{{ userName }}</p>
      </v-col>
      <v-col cols="1" sm="1"><span style="font-weight: bold; color: white">RFE</span></v-col>
    </v-row>
    <div v-if="showMenu">
      <MenuList></MenuList>
    </div>
  </v-container>
</template>

<script>
import MenuList from "@/components/partials/menu-list.vue";

export default {
  data: () => {
    return {
      showMenu: false,
    }
  },
  computed: {
    userName() {
      return this.$store.getters.getUser.name != null ? this.$store.getters.getUser.name : "Nombre usuario";
    }
  },
  components: {
    MenuList
  }


}
</script>

<style scoped>
.header-top {
  background-color: #000;
  padding: 1rem;
  margin: 0;
  border-bottom: 1px solid #0072F7;
  color: #fff;
}

.header-top p {
  padding: 0;
  margin: 0;
}
</style>
