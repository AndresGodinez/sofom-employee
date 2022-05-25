<template>
  <b-container fluid="sm mt-3">
    <b-row>
      <b-col sm="6">
        <b-card>
          <b-card-header>
            <b-card-title>
              Tu préstamo será solicitado
            </b-card-title>
          </b-card-header>
          <b-card-body>
            <b-card-text>
              A NOMBRE DE: {{ employee.name }}
            </b-card-text>
            <b-card-text>
              BANCO: {{ employee.bank.label }}
            </b-card-text>
            <b-card-text>
              CLABE INTERBANCARIA: {{ employee.account_number }}
            </b-card-text>
          </b-card-body>
          <b-card-body>
            <b-card-text>
              Por el monto de: {{ selectedTerm.total_loan_amount | currency }}
            </b-card-text>
          </b-card-body>
          <b-card-body>
            <b-card-text>
              Cubierto en {{ selectedTerm.text }} de {{ selectedTerm.amount_frequency | currency }}
              con una tasa fija del {{ employee.company.annual_interest_rate }} %
            </b-card-text>
          </b-card-body>
          <b-card-footer class="d-flex justify-content-end bg-w">
            <b-button class="btn-cancel" @click="$emit('close')" @touchend="$emit('close')">
              Cancelar
            </b-button>

            <b-button variant="primary" class="txt-w" @click="requestLoanApplication"
                      @touchend="requestLoanApplication">
              Aceptar
            </b-button>

          </b-card-footer>
        </b-card>

      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import NotificationUtils from "@/Utils/NotificationUtils";
import {CONFIG} from "@/Settings/config";

export default {
  name: 'resume-loan-application-request',
  props: {
    employee: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    selectedTerm: {
      type: Object,
      required: true
    },
  },
  methods: {
    async requestLoanApplication() {


      try {
        console.log('inside try');
        await NotificationUtils.loading();

        let url = `${CONFIG.URL_API}/api/loans-applications`;

        console.log({url});
        let data = {
          amount: this.selectedTerm.amount_to_pay,
          selectedAvailableDeadline: this.selectedTerm,
        };
        console.log({data});


        let responseRequestLoanApplication = await this.axios.post(url, data);

        console.log({responseRequestLoanApplication});


        if (responseRequestLoanApplication.status === 201) {
          await NotificationUtils.close();
          await NotificationUtils.showSuccessAlert('Se ha creado tu solicitud de préstamo');
          this.$emit('close');
          await this.$router.push({name: 'listPendingLoanApplications'})

        }
      } catch (e) {
        await NotificationUtils.error(e.response.data.message);
      }


    }
  }

}
</script>

<style>
.txt-w {
  font-weight: bold !important;
  color: #E5F1FE !important;
  margin-left: 10px !important;
}

.btn-cancel {
  border: solid 1px #00000029 !important;
  color: #1D1D1D !important;
  background-color: #FFF !important;
}

.bg-w {
  background-color: #FFFFFF !important;
}
</style>
