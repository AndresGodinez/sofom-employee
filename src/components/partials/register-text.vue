<template>
  <v-row justify="center" class="pt-2">
    <v-col cols="12">
      <h2 class="title-register" >Registro</h2>
      <div class="simple-text container">
        <p class="caption">
          Accede a tu cuenta verificando tus datos.
        </p>
        <p class="caption">
          Todos los datos son obligatorios.
        </p>
      </div>
      <a href="#" class="simple-link caption">¿Dónde consigo estos datos? </a>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'RegisterText'
}
</script>
<style scoped>
.title-register{
  text-align: center;
  color: #0072F7;
  font-weight: bold;
  font-size: 1.25rem;
}
.simple-text p{
  padding: 0;
  margin: 0 0 0 0;
}
.simple-link{
  margin-left: 1em;
}
</style>
