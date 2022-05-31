<template>
  <div>
    <v-row @click="showDetails = !showDetails">
      <v-col cols="12" sm="12">
        <v-card class="mx-auto custom-card" max-width="100%">
          <v-card-title>
            <v-icon>monetization_on</v-icon>
            <span class="custom-money-title">{{ loanApplication.total_loan_amount | currency }} MXN</span>
          </v-card-title>
          <v-card-text v-if="loanApplication.status === 'Pendiente'" class="py-0 my-0">
            A espera de aprobación
          </v-card-text>
          <v-card-text v-if="loanApplication.status === 'Aprovada'" class="py-0 my-0">
            Solicitud aprovada el {{ loanApplication.approved_date  }}
          </v-card-text>
          <v-card-text class="py-0 my-0">
            Fecha de solicitud: {{ loanApplication.created_at }}
          </v-card-text>
          <v-card-text class="py-0 my-0">
            solicitud: {{ loanApplication.id }}
          </v-card-text>
          <v-card-text class="py-0 my-0">
            Plazo: {{ loanApplication.term_text }}
          </v-card-text>
          <v-card-text class="py-0 my-0">
            {{ loanApplication.quantity_loan }} pagos {{ loanApplication.frequency_payments }} de
            {{ loanApplication.total_loan_amount / loanApplication.quantity_loan | currency }} MXN
          </v-card-text>
          <v-card-text class="py-0 my-0">
            Tasa de interes anual fija: {{ loanApplication.interest_rate }}%
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div v-if="showDetails">
      <v-container>
        <CardText :text="loanApplication.pending_payments_text"></CardText>
        <CardText :text="loanApplication.pay_per_period_text"></CardText>
        <CardText :text="loanApplication.final_payment_date_text"></CardText>
        <CardButtonAmortization :loanApplication="loanApplication"></CardButtonAmortization>
      </v-container>
    </div>
  </div>
</template>
<script>
import CardText from '@/components/partials/card-text.vue';
import CardButtonAmortization from '@/components/partials/card-text-button-amortization.vue';

export default {
  name: 'SingleLoanApplication',
  props: {
    loanApplication: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log({'on mounted': this.loanApplication});

  },
  data() {
    return {
      showDetails: false,
    }
  },
  components: {
    CardText,
    CardButtonAmortization,
  },
}
</script>


