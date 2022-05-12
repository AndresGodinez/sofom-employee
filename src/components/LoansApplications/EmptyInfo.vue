<template>
  <v-container>
    <v-row align-content="center" justify="center">
      <v-col>
        <v-card>
          <v-card-text class="headline" style="overflow-wrap: break-word">
            {{ message }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  name: 'SingleLoanApplication',
  props: {
    message: {
      type: String,
      required: false,
      default: 'No se encontró información'
    }
  },

}
</script>


