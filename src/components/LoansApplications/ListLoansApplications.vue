<template>
  <v-container class="bg-secondary">
    <div v-for="loanApplication in loansApplications" :key="loanApplication.id">
      <SingleLoanApplication :loanApplication="loanApplication"></SingleLoanApplication>
    </div>
  </v-container>
</template>
<script>
import {CONFIG} from "@/Settings/config";
import NotificationUtils from "@/Utils/NotificationUtils";
import SingleLoanApplication from "@/components/LoansApplications/SingleLoanApplication";

export default {
  name: 'ListLoansApplications',
  props: {
    status: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loansApplications: [],
    }
  },
  mounted() {
    this.getLoansApplications();
  },
  methods: {
    async getLoansApplications() {

      const url = `${CONFIG.URL_API}/api/employees-loan-applications/list`;
      console.log({'prop': this.status});

      try {
        let responseLoansApplications = await this.axios.get(url, {
          params: {
            'filter[status]': this.status,
            'filter[employee_id]': 42,
          }
        });

        console.log({responseLoansApplications});
        this.loansApplications = responseLoansApplications.data.data;

      } catch (e) {
        await NotificationUtils.error("Ooops!", "Ocurrio un error al obtener los datos");
      }
    },
  },
  components: {
    SingleLoanApplication
  }
}
</script>
<style scoped>
.bg-secondary {
  background-color: #F2F2F2 !important;
}
</style>
