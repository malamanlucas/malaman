<template lang="html">
  <div class="ExameClinicas">
    <template v-if="!isEmpty">
      <div class="ExameClinicas__item" v-for="clinica in clinicas" :key="clinica.id">
        {{ clinica.nome }}
      </div>
    </template>
    <div v-else>
      Não possui clinicas vinculadas
    </div>
  </div>
</template>

<script>
  import { isEmpty } from 'lodash'

  export default {
    props: ['clinicas'],
    computed: {
      isEmpty() {
        return isEmpty(this.clinicas)
      }
    }
  }
</script>

<style lang="scss" scoped src="./exame-clinicas.scss"></style>
