<template>
  <b-container>
    <b-card>
      <b-card-header>
        <b-card-title>
          {{ title }}
        </b-card-title>
      </b-card-header>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'c-title',
  props: {
    title: {
      type: String,
      required: true
    },
  },
}
</script>
