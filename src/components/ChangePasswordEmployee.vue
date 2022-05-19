<template>
  <div>
    <HeaderTop></HeaderTop>
    <v-container>
      <ChangePasswordUserText></ChangePasswordUserText>
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
                  v-model="password"
                  :rules="passwordRules"
                  required
                  placeholder="Contraseña"
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                sm="12"
            >
              <v-text-field
                  v-model="password_confirmation"
                  :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
                  required
                  placeholder="Confirmar"
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
                Continuar
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
import ChangePasswordUserText from './partials/change-password-user-text.vue'
import {CONFIG} from "@/Settings/config";
import NotificationUtils from "@/Utils/NotificationUtils";
import ObjectUtils from "@/Utils/ObjectUtils";

export default {
  name: 'ChangePasswordUser',

  mounted() {
    let employee = this.$store.getters.getEmployee;

    if (ObjectUtils.isEmpty(employee)) {
      this.$router.push({name: 'register'});
    }
  },

  data: () => ({
    valid: false,
    password: 'CorrectPassword',
    password_confirmation: 'CorrectPassword',
    //Rules
    passwordRules: [
      v => !!v || 'Contraseña requerida',
      v => v.length >= 6 || 'La contraseña debe de tener minimo 6 caracteres',
    ],
    confirmPasswordRules: [v => !!v || "Password is required"],

  }),

  methods: {
    async changePasswordUser() {

      const url = `${CONFIG.URL_API}/no-auth/employee/change-password-user`;
      const user = this.$store.getters.getUser;

      try {
        let response = await this.axios.post(url, {
          user_id: user.id,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })

        if (response.status === 200 && response.data.success) {
          await this.$store.dispatch('setToken', response.data.token);
          await this.$router.push({name: 'userCreatedSuccessfully'})
        } else {
          await NotificationUtils.error(response.data.message)
        }
      } catch (e) {
        console.log({e});

      }
    },

    validateForm() {
      if (!this.$refs.form.validate())
        return false;
      else
        this.changePasswordUser()
    },

    reset() {
      this.$refs.form.reset()
    },
  },


  components: {
    HeaderTop,
    ChangePasswordUserText
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
          this.password === this.password_confirmation || "Las contraseñas deben de coincidir"
    },
  }
}
</script>


