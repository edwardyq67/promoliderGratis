<template>
  <div>
    <ul>
      <li><button @click="navigateToPlantilla1Gratis">Plantilla0</button></li>
      <li><button @click="navigateToPlantilla3Gratis">Plantilla3</button></li>
      <!-- <li><button @click="navigateToPlantilla4Gratis">Plantilla4</button></li> -->
    </ul>
    
    
    
  </div>
</template>

<script>
export default {
  methods: {
    navigateToPlantilla1Gratis() {
      this.$router.push('/plantilla0_gratis');
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