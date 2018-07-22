<template lang="html">
  <div class="ExameList">

    <div class="ExameList__title">
      Tela de exibição de exames
    </div>

    <div v-if="!isEmpty" class="ExameList__grid">
      <div class="ExameList__grid__header">
        <div class="ExameList__grid__header__id">Id</div>
        <div class="ExameList__grid__header__nome">Nome</div>
        <div class="ExameList__grid__header__preparo">Preparo</div>
        <div class="ExameList__grid__header__clinic">Clinicas</div>
        <div class="ExameList__grid__header__acao">Ação</div>
      </div>
      <div class="ExameList__grid__body">
        <div v-for="exame in exames" class="ExameList__grid__body__row">
          <div class="ExameList__grid__body__row__id">{{ exame.id }}</div>
          <div class="ExameList__grid__body__row__nome">
            <truncated-text :title="exame.nome">
              {{ exame.nome }}
            </truncated-text>
          </div>
          <div class="ExameList__grid__body__row__preparo">
            <truncated-text :title="exame.preparo">
              {{ exame.preparo }}
            </truncated-text>
          </div>
          <div class="ExameList__grid__body__row__clinic"><exame-clinicas :clinicas="exame.clinicas" /></div>
          <div class="ExameList__grid__body__row__acao">
            <div class="ExameList__actions">
              <custom-button @click.native="selectExame(exame.id)">DETALHES</custom-button>
              <custom-button @click.native="deleteExame(exame)">DELETE</custom-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="ExameList__empty">
      Nâo há exames cadastrados
    </div>

  </div>
</template>

<script>
  import { isEmpty } from 'lodash'
  import ExameClinicas from './ExameClinicas'

  export default {
    props: ['exames'],
    components: {
      ExameClinicas
    },
    computed: {
      isEmpty() {
        return isEmpty(this.exames)
      }
    },
    methods: {
      selectExame(exameId) {
        this.$emit('on-select', exameId)
      },
      deleteExame(exameId) {
        this.$emit('on-delete', exameId)
      }
    }
  }
</script>

<style lang="scss" scoped src="./exame-list.scss"></style>
