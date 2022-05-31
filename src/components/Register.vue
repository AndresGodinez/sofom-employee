<template>
  <div>
    <HeaderTop></HeaderTop>
    <v-container>
      <RegisterText></RegisterText>
      <v-row>
        <v-col cols="12" sm="12">
          <v-form
              v-model="valid"
              ref="form"
              lazy-validation
              @submit.prevent=""
          >
            <v-col
                cols="12"
                sm="12"
            >
              <v-text-field
                  v-model="key_company"
                  :rules="key_companyRules"
                  required
                  placeholder="ID empresa"
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                sm="12"
            >
              <v-text-field
                  v-model="pay_roll_number"
                  :rules="payrollNumberRules"
                  required
                  placeholder="Número de nómina"
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="4"
            >
              <v-text-field
                  v-model="rfc"
                  :rules="rfcRules"
                  :counter="13"
                  required
                  placeholder="RFC"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn
                  class="mr-4"
                  type="submit"
                  color="primary"
                  block
                  @click="validateForm"
              >
                Verificar
              </v-btn>
            </v-col>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import HeaderTop from './partials/header-top.vue'
import RegisterText from './partials/register-text.vue'
import {CONFIG} from "@/Settings/config";
import NotificationUtils from "@/Utils/NotificationUtils";

export default {
  name: 'Register',
  data: () => ({
    valid: false,
    key_company: '',
    pay_roll_number: '',
    rfc: '',
    //Rules
    key_companyRules: [
      v => !!v || 'ID Empresa es requerido',
      v => v.length >= 2 || 'ID Empresa debe tener mas de 2 caracteres',
      v => /^[0-9]+$/.test(v) || 'ID Empresa solo puede contener numeros'
    ],
    payrollNumberRules: [
      v => !!v || 'El número de nómina es requerido',
      v => v.length > 2 || 'El número de nómina debe tener mas de 2 caracteres',
      v => v.length <= 20 || 'El número de nómina debe tener menos de 20 caracteres',
      v => /^[0-9]+$/.test(v) || 'El número de nómina solo puede contener numeros'
    ],
    rfcRules: [
      v => !!v || 'RFC es requerido',
      v => v.length === 13 || 'RFC debe tener 13 caracteres',
      v => /^[A-Za-z0-9]+$/.test(v) || 'RFC solo puede contener letras y numeros'
    ],

  }),
  methods: {
    async verifyIfExistEmployee() {
      const url = `${CONFIG.URL_API}/no-auth/exists-employee`;

      try {
        let response = await this.axios.post(url, {
          key_company: this.key_company,
          pay_roll_number: this.pay_roll_number,
          rfc: this.rfc
        })
        if (response.status === 200) {
          await this.$store.dispatch('setEmployee', response.data.employee);
          await this.$router.push({name: 'areYou'})
        } else {
          await NotificationUtils.error(response.data.message)
        }
      } catch (e) {
        await NotificationUtils.error("Los datos no coinciden con ningún empleado");
      }
    },
    validateForm() {
      if (!this.$refs.form.validate())
        return false;
      else
        this.verifyIfExistEmployee()
    },
    reset() {
      this.$refs.form.reset()
    },
  },

  components: {
    HeaderTop,
    RegisterText
  }
}
</script>


