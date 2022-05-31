<template>
  <div>
    <b-container>
      <b-row>
        <b-card>
          <TextLoanApplication></TextLoanApplication>
          <b-card-body class="mt-3">
            <b-row v-if="maxValue">
              <b-container class="pt-2">
                <b-card-sub-title class="text-center">
                  <h6>Monto del préstamo</h6>
                </b-card-sub-title>
                <b-card-sub-title class="text-center">
                  {{ requestedAmount | currency }}
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
        </b-card>
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
                          <b-row cols="12">
                            <b-col cols="12">
                              <b-card-sub-title class="text-center">
                                {{ option.text }}
                              </b-card-sub-title>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col>
                              <b-card-text>
                                Monto total
                              </b-card-text>
                            </b-col>
                            <b-col>
                              <b-card-sub-title>
                                  <span style="font-weight: bold;">
                                    {{ option.value.amount_to_pay | currency }}</span>
                              </b-card-sub-title>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col>
                              <b-card-text>
                                Parcialidades
                              </b-card-text>
                            </b-col>
                            <b-col>
                              <b-card-sub-title>
                                <span style="font-weight: bold;">
                                  {{ option.value.amount_frequency | currency }}
                                </span>
                              </b-card-sub-title>
                            </b-col>
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
      </b-row>
    </b-container>

    <NoteLoan class="mb-4"></NoteLoan>

    <b-container>
      <b-row>
        <b-card>
          <b-card-body>
            <b-form-checkbox
                id="checkbox-1"
                v-model="accept"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
            >
              He leído y acepto todos los términos y condiciones.
            </b-form-checkbox>
          </b-card-body>
        </b-card>
      </b-row>
    </b-container>

    <b-container v-if="accept==='accepted' && !!selectedAvailableDeadline">
      <b-row>
        <b-card class="col-sm-12">
          <b-card-body>
            <b-button type="submit" block variant="primary" size="lg"
                      @click="goToResumeLoanApplication">
              <span class="text-w">Solicitar</span>
            </b-button>
          </b-card-body>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCurrencyFilter from 'vue-currency-filter'
import NoteLoan from './partials/note-loan.vue';
import {CONFIG} from "@/Settings/config";
import ResumeLoanApplicationRequest from "./LoansApplications/Modals/resume-loan-application-request.vue";
import TextLoanApplication from './partials/loanApplications/title-request-loan-application.vue'


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
        height: '70%',
      });

    },
  },
  watch: {
    'requestedAmount': function () {
      this.getLoansAmount();
    }
  },
  components: {
    NoteLoan,
    TextLoanApplication
  },
  created() {
    let token = this.$store.getters.getToken;
    if (token === '') {
      this.$router.push({
        name: 'login',
      });
    }
    this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  },
}
</script>
<style>
.text-w {
  font-weight: bold;
  color: #E5F1FE;
}
</style>
