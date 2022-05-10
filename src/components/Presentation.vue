<template>
  <v-container>
    <v-row class="full" style="height: 100vh">
      <v-col sm="12" cols="12" align-self="center">
        <v-img
            max-height="300"
            max-width="300"
            height="300"
            width="300"
            class="mx-auto"
            :src="require('../assets/billete.png')"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="12" align-self="end">
        <p class="white--text loan">
          Tu préstamo
        </p>
        <p class="white--text loan">
          rápido, fácil y seguro.
        </p>
      </v-col>
      <v-col cols="12" sm="12" align-self="end">
        <v-btn block color="primary" :to="{name:'register'}">Registrarme</v-btn>
        <v-btn block color="secondary" :to="{name:'login'}" class="mt-3">Ya tengo cuenta</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Presentation',
}
</script>

<style lang="scss" scoped>
.full {
  background-color: black;
}

.loan {
  color: white;
  font-size: 1.5rem;
  align-content: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
}

.v-card__title h2 {
  font-weight: bold;
  color: #fff;
}

.fare {
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 3rem;
}

</style>
