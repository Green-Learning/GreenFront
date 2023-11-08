<template>
  <div
    class="item-lixo"
    :class="tipoLixo"
    :style="{ left: posicao.x + 'px', top: posicao.y + 'px' }"
    @mousedown="começarArrastar"
    @mousemove="arrastar"
    @mouseup="pararArrastar"
  >
    <!-- {{ tipoLixo }} Adiciona a exibição do nome do item -->
    <img :src="tipoLixo" alt="Item de Lixo" width="50" height="50" />
  </div>
</template>

<script>
export default {
  props: {
    tipoLixo: String,
    tiposLixeira: Array,
  },
  data() {
    return {
      arrastando: false,
      posicao: { x: 0, y: 0 },
      deslocamento: { x: 0, y: 0 },
    };
  },
  methods: {
    começarArrastar(event) {
      this.arrastando = true;
      this.deslocamento.x = event.clientX - this.posicao.x;
      this.deslocamento.y = event.clientY - this.posicao.y;
    },
    arrastar(event) {
      if (this.arrastando) {
        this.posicao.x = event.clientX - this.deslocamento.x;
        this.posicao.y = event.clientY - this.deslocamento.y;
      }
    },
    pararArrastar() {
      this.arrastando = false;

      const itemRect = this.$el.getBoundingClientRect();
      for (const tipoLixeira of this.tiposLixeira) {
        const lixeira = document.querySelector(`.lixeira.${tipoLixeira}`);
        const lixeiraRect = lixeira.getBoundingClientRect();

        if (
          itemRect.left >= lixeiraRect.left &&
          itemRect.right <= lixeiraRect.right &&
          itemRect.top >= lixeiraRect.top &&
          itemRect.bottom <= lixeiraRect.bottom
        ) {
          this.$emit('itemDescartado', tipoLixeira);
          return;
        }
      }
    },
  },
};
</script>

<style scoped>
.item-lixo {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: grab;
}

/* Estilos para diferentes tipos de itens */
.garrafa {
  background-color: #4caf50;
}

.plástico {
  background-color: #4caf50;
}

.copo {
  background-color: #4caf50;
}

.pizza {
  background-color: #ff9800;
}

.biscoito {
  background-color: #ff9800;
}

.hambúrguer {
  background-color: #ff9800;
}
</style>