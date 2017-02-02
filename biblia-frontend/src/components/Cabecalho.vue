<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">Principal</router-link>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><a>Livro</a></li>
          <li><a>Capítulo</a></li>
          <li><a>Versículo</a></li>
        </ul>
        <form class="navbar-form navbar-right">
          <div class="form-group">
            <select class="form-control" v-model="actionVersiculos">
              <option value="VIEW">Visualização</option>
              <option value="EDIT">Edição</option>
            </select>
            <strong>{{showOp}}</strong>
          </div>
        </form>
      </div><!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'cabecalho',
  data: () => ({
    actionVersiculos: null
  }),
  computed: {
    showOp: function () {
      this.$store.commit('setActionVersiculos', this.actionVersiculos)
      return this.actionVersiculos
    }
  },
  methods: {
    test: (value) => {
      window.alert('test')
    }
  },
  mounted: function () {
    this.actionVersiculos = this.$store.state.actionVersiculos
  }
}
</script>
