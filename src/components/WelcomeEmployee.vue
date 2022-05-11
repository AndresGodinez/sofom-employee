<template>
  <div>
    <HeaderTop></HeaderTop>
    <v-container>
      <v-row class="full" style="height: 80vh">
        <v-col sm="12" cols="12" align-self="center">
          <h1 class="white--text fare">
            <v-icon color="primary" size="130">account_balance</v-icon>
          </h1>
          <p class="done-text mb-0 pb-0">
            ¡Te damos la bienvenida!
          </p>
          <p class="normal-text mb-0 pb-0">
            Aún no has solicitado un préstamo. Cuando lo hagas, aquí aparecerá su información.
          </p>
          <v-col cols="12" sm="12" class="d-flex justify-center">
            <v-btn color="primary" :to="{name:'login'}">
              <v-icon color="primary" size="13">insert_drive_file</v-icon>
              Solicitar préstamo
            </v-btn>
          </v-col>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
import HeaderTop from './partials/header-top.vue'

export default {
  name: 'WelcomeEmployee',
  components: {
    HeaderTop
  }
}
</script>

<style lang="scss" scoped>
.full {
  background-color: #F7F7F8;
}

.done-text {
  color: #0072F7;
  font-size: 1.8rem;
  align-content: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
}

.normal-text {
  color: #2A2A2A;
  font-size: .8rem;
  align-content: center;
  justify-content: center;
  text-align: center;
}

.v-card__title h2 {
  font-weight: bold;
  color: #fff;
}

.personal-icon {
  font-size: 14rem;
}

.fare {
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 3rem;
}

</style>
