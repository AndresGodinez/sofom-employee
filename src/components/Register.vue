<template>
  <div>
    <HeaderTop></HeaderTop>
    <v-container>
      <RegisterText></RegisterText>
      <v-row>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  md="4"
              >
                <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
              >
                <v-text-field
                    v-model="lastname"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    required
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
              >
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import HeaderTop from './partials/header-top.vue'
import RegisterText from './partials/register-text.vue'

export default {
  name: 'Register',
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  components: {
    HeaderTop,
    RegisterText
  }
}
</script>


