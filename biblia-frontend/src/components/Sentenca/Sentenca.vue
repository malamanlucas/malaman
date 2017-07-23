<template lang="html">
  <div class="sentenca">

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
          <li class="list-group-item list__item" v-for="item in sentencas.textos">{{ item }}</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data: () => ({
      sentencas: null,
      termo: ''
    }),
    methods: {
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
                this.$refs.loading.hide()
              })
            }
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './sentenca';
</style>
