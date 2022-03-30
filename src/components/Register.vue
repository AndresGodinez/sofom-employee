<template>
  <div>
    <HeaderTop></HeaderTop>
    <v-container>
      <v-row class="full" style="height: 100vh">
        <v-col sm="12" cols="12" align-self="center">
          <h1>Registro</h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import HeaderTop from './partials/header-top.vue'

export default {
  name: 'Register',
  components: {
    HeaderTop
  }
}
</script>

