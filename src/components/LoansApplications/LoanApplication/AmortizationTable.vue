<template>
  <b-container>
    <b-row>
      <b-card>
        <b-card-title>
          Tabla de amortización
        </b-card-title>
        <b-card-body>

          <b-table
              :items="loanApplicationPayments"
              :fields="fields"
              class="table table-striped table-hover table-responsive"
          >
            <template #cell(capital_amount)="row">
              {{ row.item.capital_amount | currency }}
            </template>
            <template #cell(interest_amount)="row">
              {{ row.item.interest_amount | currency }}
            </template>
            <template #cell(total_amount)="row">
              {{ row.item.total_amount | currency }}
            </template>

          </b-table>


        </b-card-body>
      </b-card>
    </b-row>
    <b-row>
      <b-col cols="12">
        <v-btn class="block btn-back" @click="goBack">
          Regresar
        </v-btn>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AmortizationTable',
  props: {
    loanApplicationPayments: {
      type: Array,
      required: true
    },
    capital: {
      type: Number,
      required: true
    },
  },
  mounted() {
    console.log({loanApplicationPayments: this.loanApplicationPayments, capital: this.capital});
    this.mappingDataTable();

  },
  data: () => {
    return {
      fields: [
        {key: 'payment_date', sortable: true, label: 'Fecha'},
        {key: 'payment_number', sortable: true, label: 'Pago'},
        {key: 'concept', sortable: true, label: 'Concepto'},
        {key: 'capital_amount', sortable: true, label: 'Amortización del capital'},
        {key: 'interest_amount', sortable: true, label: 'Intereses del periodo'},
        {key: 'total_amount', sortable: true, label: 'Total Amortización'},
        {key: 'remaining_balance', sortable: true, label: 'Saldo del capital'},


      ],
    }
  },
  methods: {
    mappingDataTable() {
      this.loanApplicationPayments.map(payment => {
        console.log('inside mapping')
        payment.remaining_balance = this.capital - payment.remaining_balance;
        payment.remaining_balance = payment.remaining_balance.toFixed(2);
        return payment;
      })
    },
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
<style>
.btn-back {
  color: #E5F1FE !important;
  background-color: #1E1E1E !important;
}
</style>
