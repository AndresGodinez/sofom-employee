<template>
  <v-row class="bg-black">
    <v-card>
      <v-list-item class="bg-black">
        <v-list-item-content class="bg-black">

          <v-list-item-title class="bb" @click="goTo('requestLoanApplication')">
            <v-icon color="white">request_page</v-icon>
            Solicitar Préstamo

          </v-list-item-title>
          <v-list-item-title class="bb" @click="goTo('historyLoans')">
            <v-icon color="white">history</v-icon>
            Historial de préstamos
          </v-list-item-title>

          <v-list-item-title class="bb" @click="goTo('listPendingLoanApplications')">
            <v-icon color="white">lock_clock</v-icon>
            Solicitudes pendientes
          </v-list-item-title>

          <v-list-item-title class="bb" @click="goTo('myLoans')">
            <v-icon color="white">contact_page</v-icon>
            Préstamos activos
          </v-list-item-title>

          <v-list-item-title class="bb" @click="logout">
            <v-icon color="white">logout</v-icon>
            Cerrar sesión
          </v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "menu-list",
  methods: {
    goTo(routeName) {
      this.$router.push({name: routeName});
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({name: 'login'});

    }
  }
}
</script>

<style scoped>
.bg-black {
  background-color: #000000;
  color: #E5F1FE;
}

.bb {
  border-bottom: 1px solid #E5F1FE;
  background-color: #000000;
  color: #E5F1FE;
}
</style>
