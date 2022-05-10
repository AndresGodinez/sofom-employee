<template>
  <v-row class="bg-white">
    <v-col cols="12" sm="12">
      <v-btn class="block mx-auto bg-low-button" width="100%" @click="goToAmortizationTable">
            <span class="custom-message-card-text d-flex justify-center">
              Ver tabla de amortización
            </span>
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'CardTextButtonAmortization',
  props: {
    loanApplication: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToAmortizationTable() {
      this.$store.dispatch('setLoanApplication', this.loanApplication);
      this.$router.push({
        name: 'amortizationTable',
      });
    }
  }
}
</script>

<style scoped>
.bg-white {
  background-color: #FFFFFF !important;
}

.bg-low-button {
  background-color: #E1E1E1 !important;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.custom-message-card-text {
  font-weight: bold;
  color: #292929 !important;
}

</style>
