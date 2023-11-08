<template>
  <div class="trash-can">
    <div class="trash-can-opening"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFalling: false,
    };
  },
  methods: {
    startFalling() {
      // Inicia a animação de queda quando um item é gerado
      this.isFalling = true;

      // Após um tempo (você pode ajustar o atraso conforme necessário),
      // pare a animação e reinicie o estado
      // setTimeout(() => {
      //   this.isFalling = false;
      // }, 1000); // 1000ms (1 segundo) é apenas um exemplo de duração da animação
    },
  },
};
</script>

<style scoped>
.trash-can {
  width: 100px;
  height: 150px;
  background-color: #333;
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
}

.trash-can-opening {
  width: 80px;
  height: 10px;
  background-color: #666;
  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translateX(-50%);
  border-radius: 5px;
}
</style>
