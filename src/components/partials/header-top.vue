<template>
  <v-container fluid class="header-top">
    <v-row>
      <v-col cols="1" sm="1" align-self="center">
        <v-icon color="white" @click="goBack">arrow_back</v-icon>
      </v-col>
      <v-col cols="11" sm="11" class="py-3">

        <p>RED</p>
        <p>FORTALECIMIENTO</p>
        <p>EMPRESARIAL</p>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import router from "@/router";

export default {
  data: () => {
    return {}
  },
  mounted() {
  },
  methods: {
    goBack() {
      router.go(-1);
    }
  },
  computed() {
  },
  components: {}
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
