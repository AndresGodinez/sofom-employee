<template>
  <div class="full">
    <HeaderTop></HeaderTop>
    <v-row>
      <v-container>
        <v-col class="mt-10">
          <h1 class="white--text d-flex justify-center">Iniciar Sesión</h1>
          <p class="white--text d-flex justify-center">¡Te damos la bienvenida!</p>
        </v-col>
      </v-container>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="11" sm="5" md="6" lg="4" xl="3">
          <v-form
              v-model="valid"
              ref="form"
              lazy-validation

              @submit.prevent=""
          >

            <v-text-field
                v-model="username"
                :rules="[v => !!v || 'Nombre se usuario requerido']"
                required
                placeholder="Correo"
                class="back-white form-control-lg"
                prepend-inner-icon="account_circle"
            ></v-text-field>

            <v-text-field
                v-model="password"
                :rules="[v => !!v || 'Contaseña requerida']"
                required
                prepend-inner-icon="lock_outline"
                placeholder="Contraseña"
                class="back-white form-control-lg mt-3"
            ></v-text-field>

            <v-checkbox
                v-model="remember_user"
                label="Recordar mi usuario"
                hide-details
                dark
            >

            </v-checkbox>

            <v-btn
                class="mr-4 mt-10"
                type="submit"
                color="primary"
                block
                @click="validateLogin"
            >
              Iniciar Sesión
            </v-btn>
          </v-form>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import HeaderTop from './partials/header-top.vue'
import {CONFIG} from "@/Settings/config";
import NotificationUtils from "@/Utils/NotificationUtils";
import LocalStorageUtils from "@/Utils/LocalStorageUtils";

export default {
  name: 'Login',

  data: () => ({
    valid: false,
    username: 'xuhejen@mailinator.com',
    password: 'secret',
    remember_user: false,
    //Rules
    passwordRules: [
      v => !!v || 'Contraseña requerida',

    ],
    confirmPasswordRules: [v => !!v || "Password is required"],

  }),

  methods: {
    async loginUser() {
      await NotificationUtils.loading('Iniciando sesión...');

      if (this.remember_user) {
        LocalStorageUtils.setItem('username', this.username);
        LocalStorageUtils.setItem('password', this.password);
        LocalStorageUtils.setItem('remember_user', this.remember_user);
      } else {
        LocalStorageUtils.removeItem('username');
        LocalStorageUtils.removeItem('password');
      }

      const url = `${CONFIG.URL_API}/no-auth/employee/login`;
      try {
        let response = await this.axios.post(url, {
          username: this.username,
          password: this.password,
        })

        if (response.status === 200 && response.data.success) {
          NotificationUtils.close()
          await this.$store.dispatch('setToken', response.data.token);
          await this.$store.dispatch('setUser', response.data.user);
          await this.$store.dispatch('setEmployee', response.data.employee);
          await this.$router.push({name: 'requestLoanApplication'})
        } else {
          NotificationUtils.close()
          await NotificationUtils.error(response.data.message)
        }
      } catch (e) {
        NotificationUtils.close()
        await NotificationUtils.error(e.response.data.message)
      }
    },

    validateLogin() {
      if (!this.$refs.form.validate())
        return false;
      else
        this.loginUser()
    },

    reset() {
      this.$refs.form.reset()
    },
  },

  mounted() {
    if (LocalStorageUtils.getItem('username') && LocalStorageUtils.getItem('password')) {
      this.username = LocalStorageUtils.getItem('username');
      this.password = LocalStorageUtils.getItem('password');
      this.remember_user = LocalStorageUtils.getItem('remember_user');
    }
  },
  created() {
    let username = LocalStorageUtils.getItem('username');
    let password = LocalStorageUtils.getItem('password');
    console.log({username, password})
  },


  components: {
    HeaderTop,
  },
}
</script>
<style scoped>
.full {
  background-color: #1D1D1D;
  /*background-color: white;*/
  height: 100vh;
}

.back-white {
  background-color: white;
  border-radius: 20px;
  height: 3rem;
}
</style>

