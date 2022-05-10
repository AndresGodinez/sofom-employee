<template>
  <AmortizationTable :loanApplicationPayments="loanApplicationPayments"
                     :capital="capital"
  >
  </AmortizationTable>
</template>

<script>
import AmortizationTable from '@/components/LoansApplications/LoanApplication/AmortizationTable.vue'

export default {
  name: 'AmortizationTableView',
  data() {
    return {
      loanApplicationPayments: [],
      capital: 0,
    }
  },
  components: {
    AmortizationTable
  },
  created() {
    const token = this.$store.getters.getToken;
    if (token === '') {
      this.$router.push('/login');
    }
  },
  mounted() {
    const loan = this.$store.getters.getLoanApplication;
    console.log({'on my loan': loan});

    this.loanApplicationPayments = loan.loan_application_payments;
    this.capital = loan.total_loan_amount;

  }
}
</script>
