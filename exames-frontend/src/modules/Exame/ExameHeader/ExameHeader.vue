<template lang="html">
  <div class="ExameHeader">
    <div class="ExameHeader__text">
      Tela de Listagem de exames
    </div>

    <custom-button @click.native="$emit('on-reset')">
      RESET
    </custom-button>

    <custom-button @click.native="$emit('on-drop-all')">
      DELETAR BANCO DE PRODUÇÃO
    </custom-button>
  </div>
</template>

<script>
  export default {
    name: 'exame-header'
  }
</script>

<style lang="scss" scoped src="./exame-header.scss"></style>
