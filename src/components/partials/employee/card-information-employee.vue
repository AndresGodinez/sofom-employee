<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-card>
          <v-col sm="12">
            <v-card-title>
              Alberto Ramos Sanchez

            </v-card-title>
          </v-col>
          <v-col cols="12" sm="12">
            <v-row>
              <v-col sm="6" class="description-text">Empresa</v-col>
              <v-col sm="6" class="description-values">{{ companyName }}</v-col>
            </v-row>
            <v-row>
              <v-col sm="6" class="description-text">Fecha Ingreso</v-col>
              <v-col sm="6" class="description-values">{{ dateOfAdmission }}</v-col>
            </v-row>
            <v-row>
              <v-col sm="6" class="description-text">Celular</v-col>
              <v-col sm="6" class="description-values">{{ phone }}</v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify-sm="end" class="mt-12 pt-12">
      <v-col cols="12" sm="12" class="py-2">
        <v-btn color="primary" block @click="checkIfUserCanCheckPassword">Si, continuar</v-btn>
      </v-col>
      <v-col cols="12" sm="12" class="py-2">
        <v-btn color="disabled" block>No soy yo</v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
import {CONFIG} from "@/Settings/config";
import NotificationUtils from "@/Utils/NotificationUtils";

export default {
  name: 'card-information-employee',
  props: {
    companyName: {
      type: String,
      required: true
    },
    dateOfAdmission: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
  },
  methods: {
    async checkIfUserCanCheckPassword() {
      let user = this.$store.getters.getUser;
      const url = `${CONFIG.URL_API}/no-auth/employee/check-can-change-password`;

      try {
        let response = await this.axios.post(url, {
          user
        });

        if (response.status === 204) {
          await this.$router.push({
            name: 'changePasswordEmployee',

          });
        }

      } catch (error) {
        const errorResponse = error.response;
        if (errorResponse.status === 422) {
          const message = errorResponse.data.message;
          await NotificationUtils.error(message);
        }
      }
    },


  }
}
</script>
<style scoped>
.description-text {
  font-size: .8rem;
  color: #9e9e9e;
}

.description-values {
  font-size: .9rem;
  font-weight: bold;
  color: #1D1D1D;
}


</style>
