<template lang="html">
  <div class="Exame">

    <modal :show="showModal" @close="closeModal">
      {{ textModal }}
    </modal>

    <loading :loading="loading" />

    <exame-header class="Exame__header" @on-reset="callResetBD" @on-drop-all="callDropAllBD"/>

    <div class="Exame__body">
      <exame-form v-if="isModeForm" :exameId="exameId" @on-saved="callLoadExames"
        @start-loading="loading = true" @end-loading="loading = false"
        @on-cancel="openList" />

      <template v-else-if="isModeList">
        <custom-button class="Exame__body__newExame"
          @click.native="openForm()">CADASTRAR NOVO EXAME</custom-button>
        <exame-list :exames="getExames" @on-delete="callDeleteExame"
          @on-select="openForm(arguments[0])" />
      </template>
    </div>

    <div class="Exame__footer">
      footer da listagem de exame
    </div>

  </div>
</template>

<script>
  import ExameList from './ExameList'
  import ExameForm from './ExameForm'
  import ExameHeader from './ExameHeader'
  import { mapGetters, mapActions } from 'vuex'
  import mixinModal from '@/core/components/Modal/modal-mixin'

  export const FORM = 'form'
  export const LIST = 'list'

  export default {
    name: 'exames',
    mixins: [mixinModal],
    components: {
      ExameList,
      ExameHeader,
      ExameForm
    },
    data: () => ({
      exameId: undefined,
      loading: false,
      mode: null
    }),
    computed: {
      ...mapGetters('exame', ['getExames']),
      isModeForm() {
        return this.mode === FORM
      },
      isModeList() {
        return this.mode === LIST
      }
    },
    methods: {
      ...mapActions('exame', ['loadExames', 'deleteExame', 'resetBD', 'dropAllBD']),
      async callDeleteExame(exame) {
        try {
          this.loading = true
          await this.deleteExame({ exameId: exame.id })
          await this.loadExames()
          this.openModal(`Parabéns você deletou o exame: ${exame.nome}`)
        } finally {
          this.loading = false
        }
      },
      async callResetBD() {
        try {
          this.loading = true
          await this.resetBD()
        } finally {
          this.loading = false
        }
      },
      async callDropAllBD() {
        try {
          this.loading = true
          await this.dropAllBD()
          this.openModal('Parabéns você deletou o banco de produção :)')
        } finally {
          this.loading = false
        }
      },
      async callLoadExames() {
        this.loading = true
        try {
          this.openList()
          await this.loadExames()
        } catch (e) {
          //
        } finally {
          this.loading = false
        }
      },
      openForm(exameId = null) {
        this.exameId = exameId
        this.mode = FORM
      },
      openList() {
        this.mode = LIST
      }
    },
    async mounted() {
      await this.callLoadExames()
    }
  }
</script>

<style lang="scss" scoped src="./exame.scss"></style>
