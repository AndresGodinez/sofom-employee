<template>
  <v-row class="bg-white">
    <v-col cols="12" sm="12">
      <v-card class="mx-auto bg-low" max-width="100%">
            <span class="custom-message-card-text d-flex justify-center">
              {{ text }}
            </span>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'CardText',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.bg-white {
  background-color: #FFFFFF !important;
}

.bg-low {
  background-color: #E5F1FE !important;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.custom-message-card-text {
  font-size: 1.2rem;
  font-weight: bold;
  color: #0072F7 !important;
}

</style>
