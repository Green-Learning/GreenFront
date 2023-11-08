<template>
  <div class="lixeira" :class="tipoLixo">
    {{ tipoLixo }} Lixeira
  </div>
</template>

<script>
export default {
props: {
  tipoLixo: String, // Pode ser 'reciclável' ou 'orgânico'
},
};
</script>

<style scoped>
.lixeira {
width: 150px;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid #333;
font-size: 18px;
cursor: pointer;
}

.reciclável {
background-color: #4caf50;
color: white;
}

.orgânico {
background-color: #ff9800;
color: white;
}
</style>