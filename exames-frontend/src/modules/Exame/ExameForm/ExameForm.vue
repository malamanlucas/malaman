<template lang="html">
  <div class="ExameForm">

    <div class="ExameForm__title">
      Tela de manutenção de exame
    </div>

    <actions class="ExameForm__actions" :mode="mode" @on-edit="startEdit"
      @on-save="callSaveExame" @on-cancel="$emit('on-cancel')" />

    <div class="ExameForm__fields">
      <div class="ExameForm__fields__field">
        <div class="ExameForm__fields__field__label">Nome</div>
        <input v-if="isEditing" class="ExameForm__fields__field__value" type="text" v-model="exame.nome">
        <div v-else class="ExameForm__fields__field__value">
          <truncated-text :title="exame.nome">
            {{ exame.nome }}
          </truncated-text>
        </div>
      </div>

      <div class="ExameForm__fields__field">
        <div class="ExameForm__fields__field__label">Preparo</div>
        <textarea v-if="isEditing" rows="6" class="ExameForm__fields__field__value" v-model="exame.preparo" />
        <div v-else class="ExameForm__fields__field__value">
          <truncated-text :title="exame.preparo">
            {{ exame.preparo }}
          </truncated-text>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { isNil } from 'lodash'
  import { mapActions } from 'vuex'
  import { MODE_EDIT, MODE_VIEW } from '@/core/components/Actions'

  export default {
    props: {
      exameId: {
        type: Number,
        default: undefined
      }
    },
    data: () => ({
      exame: null,
      mode: null
    }),
    computed: {
      isEditing() {
        return this.mode === MODE_EDIT
      }
    },
    methods: {
      ...mapActions('exame', ['getExame', 'saveExame']),
      startEdit() {
        this.mode = MODE_EDIT
      },
      async tryToLoadExame() {
        this.newExame()
        if (isNil(this.exameId)) {
          this.startEdit()
        } else {
          try {
            this.$emit('start-loading')
            this.mode = MODE_VIEW
            this.exame = await this.getExame({ exameId: this.exameId })
          } catch (e) {
            //
          } finally {
            this.$emit('end-loading')
          }
        }
      },
      newExame() {
        this.exame = {
          nome: '',
          preparo: ''
        }
      },
      showNotification() {

      },
      async callSaveExame() {
        this.$emit('start-loading')
        try {
          await this.saveExame(this.exame)
          this.newExame()
          this.showNotification()
          this.$emit('on-saved')
        } catch (e) {
          //
        } finally {
          this.$emit('end-loading')
        }
      }
    },
    async beforeMount() {
      await this.tryToLoadExame()
    }
  }
</script>

<style lang="scss" scoped src="./exame-form.scss"></style>
