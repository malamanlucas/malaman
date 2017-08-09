<template lang="html">
  <div class="sentenca">

    <button type="button" id="copy-button" class="disappear">CopyButton</button>

    <div class="row">
      <div class="col-xs-26">
        <div class="input-group">

          <input type="text" @keyup.enter="buscar" v-validate="'required|min:3'" name="termo"
            class="form-control" :class="{'hasError': validation.has('termo')}"  placeholder="Exemplo: sodoma" v-model="termo" />

          <span class="input-group-btn">
            <button type="button" class="btn btn-default" @click="buscar">Buscar</button>
          </span>

        </div>
      </div>
    </div>

    <loading ref="loading"></loading>

    <div class="row list" v-if="sentencas">
      <div class="col-xs-26 list__title text-info h4 text-center">
        {{ sentencas.total }} ocorrência(s)
      </div>
      <div class="col-xs-26">
        <ul class="list-group">
          <li class="list-group-item list__item" v-for="(item, index) in sentencas.textos" @click.self="selectItem(item, index)">
            <div class="list__item__content" @click.stop.prevent="forceClickParent">
              <div class="list__item__content__checkbox">
                <input type="checkbox" :id="`checkbox${index}`" >
              </div>
              <div>{{ item }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import Clipboard from 'clipboard'
  import $ from 'jquery'

  export default {
    data: () => ({
      sentencas: null,
      termo: '',
      textsToCopy: [''],
      valuesSelected: '',
      copyButton: null
    }),
    methods: {
      forceClickParent (event) {
        $(event.srcElement).parents('li').click()
        event.stopPropagation()
      },
      selectItem (item, index) {
        this.textsToCopy[index] = this.textsToCopy[index] === 0 ? item : 0

        if (this.textsToCopy[index] !== 0) {
          $(event.srcElement).addClass('list__item--checked')
        } else {
          $(event.srcElement).removeClass('list__item--checked')
        }

        this.copyValues(this.textsToCopy.filter(i => i !== 0))
      },
      copyValues (values) {
        if (values.length) {
          this.valuesSelected = values.join('\n')
        } else {
          this.valuesSelected = ''
        }
        $('#copy-button').click()
      },
      buscar () {
        this.sentencas = null
        this.$validator.validateAll()
          .then(isValid => {
            if (isValid) {
              this.$refs.loading.show()
              this.$http.get('/api/sentencas/format', {
                params: {
                  'termo': this.termo
                }
              }).then(response => {
                this.sentencas = response.data
                this.textsToCopy = Array(this.sentencas.textos.length).fill(0)
                this.$refs.loading.hide()
              })
            }
          })
      }
    },
    mounted () {
      if (this.copyButton) {
        this.copyButton.destroy()
      }
      this.copyButton = new Clipboard('#copy-button', {
        text: () => this.valuesSelected
      })
    },
    destroyed () {
      this.copyButton.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  @import './sentenca';
</style>
