<template>
  <div>
    <button @click="navigateToPlantilla1Gratis">Plantilla1</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToPlantilla1Gratis() {
      this.$router.push('/plantilla1_gratis');
    }
  }
}
</script>