<template>
  <b-container>
    <b-card class="col-md-12 mb-2">
      <b-card-header>
        <b-card-title>
          <h4>Tasa fija del {{ interestRate }} %</h4>
        </b-card-title>
      </b-card-header>
      <b-card-body>
        <div class="row">
          <div class="col-md-12">
            <b-card-text>
              Términos y condiciones, clausulas,
              Consideraciiones; cualquier información que sea para el usuario a aclarar las condiciones del
              préstamo.
            </b-card-text>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'NoteLoan',
  data () {
    return {
      interestRate:0
    }
  },
  mounted() {
    this.interestRate = this.$store.getters.getEmployee.company.annual_interest_rate
  },

}
</script>
