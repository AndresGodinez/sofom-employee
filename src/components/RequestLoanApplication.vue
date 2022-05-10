<template>
  <div>
    <b-card>
      {{ selectedAvailableDeadline }}
    </b-card>
    <b-card>
      <b-card-header>
        <b-container>
          <b-card-title>
            Solicitud de Préstamo
          </b-card-title>
          <b-card-sub-title>
            Llena toda la información correspondiente.
          </b-card-sub-title>
        </b-container>
      </b-card-header>
      <b-card-body>
        <b-row v-if="maxValue">
          <b-container class="pt-2">
            <b-card-sub-title class="text-center">
              <h6>Monto del préstamo</h6>
            </b-card-sub-title>
            <b-card-sub-title class="text-center">
              $ {{ requestedAmount }}
            </b-card-sub-title>
            <b-card-text>
              <b-form-input id="range" name="range" v-model="requestedAmount" type="range" min="0"
                            :max="maxValue"></b-form-input>
            </b-card-text>
            <b-card-sub-title class="text-center">
              Monto Máximo {{ maxValue | currency }}
            </b-card-sub-title>
          </b-container>
        </b-row>
      </b-card-body>
      <b-card-body class="col-md-12">
        <b-container class="col-md-12">
          <b-card-sub-title class="font-weight-bold py-3">
            Seleccione el plazo del préstamo
          </b-card-sub-title>
          <b-form-row class="col-md-12">
            <b-form-group label="Plazos disponibles" v-slot="{ row }" class="col-md-12">
              <b-form-radio-group
                  v-model="selectedAvailableDeadline"
                  stacked
                  class="col-md-12"
              >
                <template v-for="option in options" class="col-md-12">
                  <b-form-radio :value="option.value" :key="option.text" class="">
                    <b-card class="col-md-12 pt-1">
                      <b-card-body class="col-md-12">
                        <b-row class="col-md-12">
                          <b-card-sub-title class="d-flex justify-content-between col-md-12">
                            <div class="col-md-8">
                              {{ option.text }}

                            </div>
                            <div class="col-md-4">
                              ${{ option.value.amount_to_pay }}
                            </div>
                          </b-card-sub-title>
                        </b-row>
                      </b-card-body>
                    </b-card>
                  </b-form-radio>
                </template>
              </b-form-radio-group>
            </b-form-group>
          </b-form-row>
        </b-container>
      </b-card-body>

    </b-card>

    <NoteLoan></NoteLoan>
    <b-row class="col-md-12">
      <b-container class="col-md-12">
        <b-form-checkbox
            id="checkbox-1"
            v-model="accept"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
        >
          He leído y acepto todos los términos y condiciones.
        </b-form-checkbox>
      </b-container>
    </b-row>
    <b-row v-if="accept==='accepted' && !!selectedAvailableDeadline">
      <b-card class="col-md-12">
        <b-container>
          <b-row>
            <b-col class="col-md-12">
              <b-button type="submit" variant="primary" size="lg" block class="col-md-12"
                        @click="goToResumeLoanApplication">
                <span class="text-w">Solicitar</span>
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </b-row>
  </div>
</template>
<script>
import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCurrencyFilter from 'vue-currency-filter'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueCurrencyFilter,
    {
      symbol: '$',
      thousandsSeparator: ',',
      fractionCount: 2,
      fractionSeparator: '.',
      symbolPosition: 'front',
      symbolSpacing: true
    });

import NoteLoan from './partials/note-loan.vue';
import {CONFIG} from "@/Settings/config";
import ResumeLoanApplicationRequest from "./LoansApplications/Modals/resume-loan-application-request.vue";

export default {
  data() {
    return {
      requestedAmount: 0,
      maxValue: 0,
      selectedAvailableDeadline: '',
      options: [],
      accept: 'not_accepted'
    }
  },
  mounted() {
    this.getMaxValue();
  },
  async created() {
    let token = this.$store.getters.getToken;
    if (token === '') {
      await this.$router.push({
        name: 'login',

      });
    }

    this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  },
  methods: {
    async getMaxValue() {
      let responseMaxValue = await this.axios.get(`${CONFIG.URL_API}/api/employees/max-value`);
      console.log({responseMaxValue});

      this.maxValue = responseMaxValue.data.max_amount;
      this.requestedAmount = Math.floor(this.maxValue / 2);
    },
    async getLoansAmount() {
      let url = `${CONFIG.URL_API}/api/employees/calculate-loan-amounts`;
      const response = await this.axios.post(url, {
        amount: this.requestedAmount,
      });
      this.options = response.data.map(item => {
        return {
          text: item.text,
          value: item,
        }
      });
    },
    async goToResumeLoanApplication() {
      let user = this.$store.getters.getUser;
      let employee = this.$store.getters.getEmployee;

      this.$modal.show(ResumeLoanApplicationRequest, {
        employee,
        user,
        selectedTerm: this.selectedAvailableDeadline,
      }, {
        name: 'ResumeLoanApplicationRequest',
        resizable: true,
        draggable: true,
        width: '90%',
        height: '60%',
      });

    }
  },
  watch: {
    'requestedAmount': function () {
      this.getLoansAmount();
    }
  },
  components: {
    NoteLoan
  }
}
</script>
<style>
.text-w {
  font-weight: bold;
  color: #E5F1FE;
}
</style>
