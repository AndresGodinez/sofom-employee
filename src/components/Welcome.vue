<template>
  <v-container>
    <v-row class="full" style="height: 100vh">
      <v-col sm="12" cols="12" align-self="center">
        <v-card-title>
          <h2>RED</h2>
        </v-card-title>
        <v-card-title>
          <h2>FORTALECIMIETO</h2>
        </v-card-title>
        <v-card-title>
          <h2>EMPRESARIAL</h2>
        </v-card-title>
      </v-col>
      <v-col cols="12" sm="12" align-self="end" align="center">
        <v-btn color="primary" block :to="{name:'presentation'}">Continuar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<style lang="scss" scoped>
.full {
  background-color: black;
}

.v-card__title h2 {
  font-weight: bold;
  color: #fff;
}

</style>
