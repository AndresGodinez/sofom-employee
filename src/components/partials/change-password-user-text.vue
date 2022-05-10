<template>
  <v-row justify="center" class="pt-2">
    <v-col cols="12">
      <h2 class="title-register">Contraseña</h2>
      <div class="simple-text container">
        <p class="caption">
          Asigna una contraseña para iniciar sesión en futuras ocasiones.
        </p>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'ChangePasswordUserText',
}
</script>
<style scoped>
.title-register {
  text-align: center;
  color: #0072F7;
  font-weight: bold;
  font-size: 1.25rem;
}

.simple-text p {
  padding: 0;
  margin: 0 0 0 0;
}

.simple-link {
  margin-left: 1em;
}
</style>
