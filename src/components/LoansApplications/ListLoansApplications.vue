<template>
  <v-container class="bg-secondary" v-if="loansApplications.length > 0">
    <div v-for="loanApplication in loansApplications" :key="loanApplication.id">
      <SingleLoanApplication :loanApplication="loanApplication"></SingleLoanApplication>
    </div>
  </v-container>
  <v-container class="bg-secondary" v-else>
    <EmptyInfo :message="emptyMessage"></EmptyInfo>
  </v-container>
</template>
<script>
import {CONFIG} from "@/Settings/config";
import NotificationUtils from "@/Utils/NotificationUtils";
import SingleLoanApplication from "@/components/LoansApplications/SingleLoanApplication";
import EmptyInfo from "@/components/LoansApplications/EmptyInfo";

export default {
  name: 'ListLoansApplications',
  props: {
    status: {
      type: String,
      required: true
    },
    emptyMessage: {
      type: String,
      required: false,
      default: 'No hay solicitudes de préstamos'
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
      NotificationUtils.loading('Obteniendo información...');

      const url = `${CONFIG.URL_API}/api/employees-loan-applications/list`;
      console.log({'prop': this.status});

// TODO: fix hardcode employee id

      try {
        let responseLoansApplications = await this.axios.get(url, {
          params: {
            'filter[status]': this.status,
            'filter[employee_id]': 42,
          }
        });

        console.log({responseLoansApplications});
        NotificationUtils.close();

        this.loansApplications = responseLoansApplications.data.data;

      } catch (e) {
        NotificationUtils.close();
        await NotificationUtils.error("Ooops!", "Ocurrio un error al obtener los datos");
      }
    },
  },
  components: {
    SingleLoanApplication,
    EmptyInfo
  }
}
</script>
<style scoped>
.bg-secondary {
  background-color: #F2F2F2 !important;
}
</style>
