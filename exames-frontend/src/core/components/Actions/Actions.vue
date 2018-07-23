<template lang="html">
  <div class="Actions">
    <custom-button v-if="isModeView" class="Actions__button edit" @click.native="$emit('on-edit')">
      EDITAR
    </custom-button>

    <template v-else-if="isModeEdit">
      <custom-button class="Actions__button save" @click.native="$emit('on-save')">
        SALVAR
      </custom-button>
      <custom-button class="Actions__button cancel" @click.native="$emit('on-cancel')">
        CANCELAR
      </custom-button>
    </template>
  </div>
</template>

<script>
  import { MODE_EDIT, MODE_VIEW } from './index'

  export default {
    name: 'actions',
    props: {
      mode: {
        type: String,
        default: MODE_VIEW
      }
    },
    computed: {
      isModeView() {
        return this.mode === MODE_VIEW
      },
      isModeEdit() {
        return this.mode === MODE_EDIT
      }
    }
  }
</script>

<style lang="scss" scope src="./actions.scss"></style>
