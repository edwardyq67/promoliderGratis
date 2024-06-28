<template>
  <div>
    <ul>
      <li><button @click="navigateToPlantilla0Gratis">Plantilla0</button></li>
      <li><button @click="navigateToPlantilla1Gratis">Plantilla1</button></li>
      <li><button @click="navigateToPlantilla2Gratis">Plantilla2</button></li>
      <li><button @click="navigateToPlantilla3Gratis">Plantilla3</button></li>
      <!-- <li><button @click="navigateToPlantilla4Gratis">Plantilla4</button></li> -->
    </ul>
    
    
    
  </div>
</template>
      <!-- navigateToPlantilla00Gratis antes era => navigateToPlantilla1Gratis -->
<script>
export default {
  methods: {
    
    navigateToPlantilla0Gratis() {
      this.$router.push('/plantilla0_gratis');
    },
    navigateToPlantilla1Gratis() {
      this.$router.push('/plantilla1_gratis');
    },
    navigateToPlantilla2Gratis() {
      this.$router.push('/plantilla2_gratis');
    },
    navigateToPlantilla3Gratis(){
      this.$router.push('/plantilla3_gratis');
    },
    navigateToPlantilla4Gratis(){
      this.$router.push('/plantilla4_gratis');
    }
  }
}
</script>